import { NextResponse } from "next/server"
import { gql } from "graphql-request"

export async function GET() {
  try {
    // Check if environment variables are available
    if (!process.env.HYGRAPH_ENDPOINT) {
      return NextResponse.json({
        success: false,
        message: "HYGRAPH_ENDPOINT not configured",
      })
    }

    // Import hygraph client
    const hygraphClient = (await import("@/lib/hygraph")).default

    // Query untuk memeriksa schema Team
    const query = gql`
      query {
        __type(name: "Team") {
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
      message: "Successfully retrieved Team schema information",
      data,
    })
  } catch (error) {
    console.error("Error retrieving Team schema information:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve Team schema information",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
