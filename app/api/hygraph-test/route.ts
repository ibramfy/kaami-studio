import { NextResponse } from "next/server"
import { gql } from "graphql-request"

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

    // Buat GraphQL client langsung di sini untuk menghindari masalah dengan impor
    const { GraphQLClient } = await import("graphql-request")
    const client = new GraphQLClient(process.env.HYGRAPH_ENDPOINT, {
      headers: {
        ...(process.env.HYGRAPH_TOKEN && {
          Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
        }),
      },
    })

    // Query sederhana untuk menguji koneksi
    const query = gql`
      query {
        __schema {
          queryType {
            name
          }
        }
      }
    `

    const data = await client.request(query)

    return NextResponse.json({
      success: true,
      message: "Successfully connected to Hygraph",
      data,
    })
  } catch (error) {
    console.error("Error connecting to Hygraph:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to connect to Hygraph",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
