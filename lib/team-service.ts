import hygraphClient, { isHygraphConfigured } from "./hygraph"
import { GET_ALL_TEAM_MEMBERS, GET_TEAM_MEMBER_BY_SLUG } from "./team-queries"
import type { Team } from "@/types/team"

export async function getAllTeamMembers(): Promise<Team[]> {
  try {
    // Check if Hygraph is properly configured
    if (!isHygraphConfigured()) {
      console.log("Hygraph not configured, skipping API call")
      return []
    }

    // Log untuk debugging
    if (process.env.NODE_ENV === "development") {
      console.log("Fetching team members from Hygraph...")
    }

    const { teams } = await hygraphClient.request<{ teams: Team[] }>(GET_ALL_TEAM_MEMBERS)

    if (process.env.NODE_ENV === "development") {
      console.log(`Successfully fetched ${teams?.length || 0} team members from Hygraph`)
    }

    return teams || []
  } catch (error) {
    console.error("Error fetching team members:", error)

    // Jika dalam development mode, tampilkan error lebih detail
    if (process.env.NODE_ENV === "development") {
      console.error("GraphQL Error Details:", JSON.stringify(error, null, 2))
    }

    return []
  }
}

export async function getTeamMemberBySlug(slug: string): Promise<Team | null> {
  try {
    if (!isHygraphConfigured()) {
      console.log("Hygraph not configured, skipping API call")
      return null
    }

    const { team } = await hygraphClient.request<{ team: Team }>(GET_TEAM_MEMBER_BY_SLUG, { slug })
    return team || null
  } catch (error) {
    console.error(`Error fetching team member with slug ${slug}:`, error)
    return null
  }
}
