import { NextResponse } from "next/server"

export async function GET() {
  try {
    const hygraphEndpoint = process.env.HYGRAPH_ENDPOINT
    const hygraphToken = process.env.HYGRAPH_TOKEN

    if (!hygraphEndpoint) {
      return NextResponse.json({
        success: false,
        error: "HYGRAPH_ENDPOINT not configured",
      })
    }

    // Test very simple teams query
    const simpleQuery = `
      query {
        teams {
          id
          name
        }
      }
    `

    console.log("Testing simple teams query...")
    console.log("Query:", simpleQuery)

    const response = await fetch(hygraphEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(hygraphToken && { Authorization: `Bearer ${hygraphToken}` }),
      },
      body: JSON.stringify({
        query: simpleQuery,
      }),
    })

    const responseData = await response.json()

    console.log("Teams query response:", JSON.stringify(responseData, null, 2))

    if (responseData.errors) {
      return NextResponse.json({
        success: false,
        error: "GraphQL errors",
        errors: responseData.errors,
        query: simpleQuery,
      })
    }

    return NextResponse.json({
      success: true,
      data: responseData.data,
      count: responseData.data?.teams?.length || 0,
    })
  } catch (error) {
    console.error("Teams debug error:", error)

    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : String(error),
    })
  }
}
