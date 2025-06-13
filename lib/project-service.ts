import hygraphClient from "./hygraph"
import { GET_ALL_PROJECTS, GET_PROJECT_BY_ID } from "./queries"
import type { Project } from "@/types/project"
import { projects as fallbackProjects } from "@/data/projects"

export async function getAllProjects(): Promise<Project[]> {
  try {
    // Coba ambil data dari Hygraph
    const { projects } = await hygraphClient.request<{ projects: Project[] }>(GET_ALL_PROJECTS)

    // Jika berhasil dan ada data, kembalikan data tersebut
    if (projects && projects.length > 0) {
      return projects
    }

    // Jika tidak ada data, gunakan fallback
    console.log("No projects found from Hygraph, using fallback data")
    return fallbackProjects.map((project) => ({
      ...project,
      coverImage: null,
      gallery: [],
    }))
  } catch (error) {
    console.error("Error fetching projects:", error)

    // Gunakan data fallback jika terjadi error
    return fallbackProjects.map((project) => ({
      ...project,
      coverImage: null,
      gallery: [],
    }))
  }
}

export async function getProjectById(id: string): Promise<Project | null> {
  try {
    // Coba ambil data dari Hygraph
    const { project } = await hygraphClient.request<{ project: Project }>(GET_PROJECT_BY_ID, { id })

    // Jika berhasil dan ada data, kembalikan data tersebut
    if (project) {
      return project
    }

    // Jika tidak ada data, cari di fallback
    const fallbackProject = fallbackProjects.find((p) => p.id === id)
    if (fallbackProject) {
      return {
        ...fallbackProject,
        coverImage: null,
        gallery: [],
      }
    }

    return null
  } catch (error) {
    console.error(`Error fetching project with ID ${id}:`, error)

    // Coba cari di data fallback
    const fallbackProject = fallbackProjects.find((p) => p.id === id)
    if (fallbackProject) {
      return {
        ...fallbackProject,
        coverImage: null,
        gallery: [],
      }
    }

    return null
  }
}

// Fungsi ini diubah untuk menggunakan ID sebagai parameter
export async function getProjectBySlug(id: string): Promise<Project | null> {
  return getProjectById(id)
}
