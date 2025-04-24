import { NextResponse } from "next/server"
import { gql } from "graphql-request"
import hygraphClient from "@/lib/hygraph"

export async function GET() {
  try {
    // Periksa apakah environment variable tersedia
    if (!process.env.HYGRAPH_ENDPOINT) {
      return NextResponse.json(
        {
          success: false,
          message: "HYGRAPH_ENDPOINT environment variable is not set",
        },
        { status: 500 },
      )
    }

    // Query untuk memeriksa schema
    const query = gql`
      query {
        __type(name: "Project") {
          name
          fields {
            name
            type {
              name
              kind
            }
          }
        }
      }
    `

    const data = await hygraphClient.request(query)

    return NextResponse.json({
      success: true,
      message: "Successfully retrieved schema information",
      data,
    })
  } catch (error) {
    console.error("Error retrieving schema information:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve schema information",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
