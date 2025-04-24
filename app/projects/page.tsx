import { Suspense } from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectsGrid from "@/components/projects-grid"
import { getAllProjects } from "@/lib/project-service"
import { projects as fallbackProjects } from "@/data/projects" // Gunakan data statis sebagai fallback

export const revalidate = 3600 // Revalidate every hour

export default async function ProjectsPage() {
  let projects = []

  try {
    // Coba ambil data dari Hygraph
    projects = await getAllProjects()

    // Jika tidak ada proyek yang ditemukan, gunakan data fallback
    if (projects.length === 0) {
      console.log("No projects found from Hygraph, using fallback data")
      projects = fallbackProjects.map((project) => ({
        ...project,
        coverImage: null,
        gallery: [],
      }))
    }
  } catch (error) {
    console.error("Failed to fetch projects:", error)
    // Gunakan data fallback jika terjadi error
    projects = fallbackProjects.map((project) => ({
      ...project,
      coverImage: null,
      gallery: [],
    }))
  }

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      <div className="pt-28 pb-16 px-2 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Explore our portfolio of architectural projects spanning various categories and locations.
          </p>

          <Suspense fallback={<div>Loading projects...</div>}>
            <ProjectsGrid projects={projects} />
          </Suspense>
        </div>
      </div>

      <Footer />
    </main>
  )
}
