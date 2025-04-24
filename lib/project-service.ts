import hygraphClient from "./hygraph"
import { GET_ALL_PROJECTS, GET_PROJECT_BY_ID } from "./queries"
import type { Project } from "@/types/project"

export async function getAllProjects(): Promise<Project[]> {
  try {
    // Periksa apakah environment variable tersedia
    if (!process.env.HYGRAPH_ENDPOINT) {
      console.error("HYGRAPH_ENDPOINT environment variable is not set")
      return []
    }

    // Log untuk debugging
    if (process.env.NODE_ENV === "development") {
      console.log("Fetching projects from Hygraph...")
    }

    const { projects } = await hygraphClient.request<{ projects: Project[] }>(GET_ALL_PROJECTS)

    if (process.env.NODE_ENV === "development") {
      console.log(`Successfully fetched ${projects.length} projects from Hygraph`)
    }

    return projects
  } catch (error) {
    console.error("Error fetching projects:", error)

    // Jika dalam development mode, tampilkan error lebih detail
    if (process.env.NODE_ENV === "development") {
      console.error("GraphQL Error Details:", JSON.stringify(error, null, 2))

      // Coba log URL endpoint untuk debugging
      console.log("Check if HYGRAPH_ENDPOINT is correct:", process.env.HYGRAPH_ENDPOINT?.substring(0, 10) + "...")
    }

    return []
  }
}

export async function getProjectById(id: string): Promise<Project | null> {
  try {
    if (!process.env.HYGRAPH_ENDPOINT) {
      console.error("HYGRAPH_ENDPOINT environment variable is not set")
      return null
    }

    const { project } = await hygraphClient.request<{ project: Project }>(GET_PROJECT_BY_ID, { id })
    return project
  } catch (error) {
    console.error(`Error fetching project with ID ${id}:`, error)
    return null
  }
}

// Fungsi ini diubah untuk menggunakan ID sebagai parameter
export async function getProjectBySlug(id: string): Promise<Project | null> {
  return getProjectById(id)
}
