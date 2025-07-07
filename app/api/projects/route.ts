import { NextResponse } from "next/server"
import { getAllProjects } from "@/lib/project-service"

export async function GET() {
  try {
    const projects = await getAllProjects()

    return NextResponse.json({
      success: true,
      projects: projects || [],
      count: projects?.length || 0,
    })
  } catch (error) {
    console.error("API Error fetching projects:", error)

    // Return fallback data if Hygraph fails
    try {
      const { projects: fallbackProjects } = await import("@/data/projects")
      const formattedProjects = fallbackProjects.map((project) => ({
        ...project,
        coverImage: null,
        gallery: [],
      }))

      return NextResponse.json({
        success: true,
        projects: formattedProjects,
        count: formattedProjects.length,
        fallback: true,
      })
    } catch (fallbackError) {
      return NextResponse.json(
        {
          success: false,
          error: "Failed to fetch projects",
          projects: [],
          count: 0,
        },
        { status: 500 },
      )
    }
  }
}
