import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Check if environment variables are available
    if (!process.env.HYGRAPH_ENDPOINT) {
      console.log("HYGRAPH_ENDPOINT not available, using fallback data")

      // Return fallback data immediately
      const { teamMembers: fallbackTeamMembers } = await import("@/data/team")

      return NextResponse.json({
        success: true,
        teamMembers: fallbackTeamMembers,
        count: fallbackTeamMembers.length,
        fallback: true,
        message: "Using fallback data - Hygraph not configured",
      })
    }

    // Try to fetch from Hygraph
    const { getAllTeamMembers } = await import("@/lib/team-service")
    const teamMembers = await getAllTeamMembers()

    if (teamMembers && teamMembers.length > 0) {
      return NextResponse.json({
        success: true,
        teamMembers: teamMembers,
        count: teamMembers.length,
        source: "hygraph",
      })
    } else {
      // No data from Hygraph, use fallback
      const { teamMembers: fallbackTeamMembers } = await import("@/data/team")

      return NextResponse.json({
        success: true,
        teamMembers: fallbackTeamMembers,
        count: fallbackTeamMembers.length,
        fallback: true,
        message: "No data from Hygraph, using fallback",
      })
    }
  } catch (error) {
    console.error("API Error fetching team members:", error)

    // Return fallback data if Hygraph fails
    try {
      const { teamMembers: fallbackTeamMembers } = await import("@/data/team")

      return NextResponse.json({
        success: true,
        teamMembers: fallbackTeamMembers,
        count: fallbackTeamMembers.length,
        fallback: true,
        error: error instanceof Error ? error.message : "Unknown error",
      })
    } catch (fallbackError) {
      return NextResponse.json(
        {
          success: false,
          error: "Failed to fetch team members and fallback failed",
          teamMembers: [],
          count: 0,
        },
        { status: 500 },
      )
    }
  }
}
