import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Check environment variables
    const hygraphEndpoint = process.env.HYGRAPH_ENDPOINT
    const hygraphToken = process.env.HYGRAPH_TOKEN

    console.log("=== HYGRAPH DEBUG ===")
    console.log("HYGRAPH_ENDPOINT exists:", !!hygraphEndpoint)
    console.log("HYGRAPH_TOKEN exists:", !!hygraphToken)

    if (hygraphEndpoint) {
      console.log("HYGRAPH_ENDPOINT preview:", hygraphEndpoint.substring(0, 50) + "...")
    }

    if (hygraphToken) {
      console.log("HYGRAPH_TOKEN preview:", hygraphToken.substring(0, 20) + "...")
    }

    if (!hygraphEndpoint) {
      return NextResponse.json({
        success: false,
        error: "HYGRAPH_ENDPOINT not found in environment variables",
        env: {
          NODE_ENV: process.env.NODE_ENV,
          hasEndpoint: !!hygraphEndpoint,
          hasToken: !!hygraphToken,
        },
      })
    }

    // Test basic fetch to Hygraph
    console.log("Testing basic fetch to Hygraph...")

    const testQuery = `
      query {
        __schema {
          queryType {
            name
          }
        }
      }
    `

    const response = await fetch(hygraphEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(hygraphToken && { Authorization: `Bearer ${hygraphToken}` }),
      },
      body: JSON.stringify({
        query: testQuery,
      }),
    })

    console.log("Fetch response status:", response.status)
    console.log("Fetch response ok:", response.ok)

    const responseText = await response.text()
    console.log("Raw response:", responseText)

    let responseData
    try {
      responseData = JSON.parse(responseText)
    } catch (parseError) {
      console.error("Failed to parse response as JSON:", parseError)
      return NextResponse.json({
        success: false,
        error: "Invalid JSON response from Hygraph",
        rawResponse: responseText,
        status: response.status,
      })
    }

    if (!response.ok) {
      return NextResponse.json({
        success: false,
        error: "HTTP error from Hygraph",
        status: response.status,
        response: responseData,
      })
    }

    if (responseData.errors) {
      return NextResponse.json({
        success: false,
        error: "GraphQL errors from Hygraph",
        errors: responseData.errors,
        data: responseData.data,
      })
    }

    return NextResponse.json({
      success: true,
      message: "Successfully connected to Hygraph",
      data: responseData.data,
      endpoint: hygraphEndpoint.substring(0, 50) + "...",
      hasToken: !!hygraphToken,
    })
  } catch (error) {
    console.error("Debug error:", error)

    return NextResponse.json({
      success: false,
      error: "Exception occurred",
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    })
  }
}
