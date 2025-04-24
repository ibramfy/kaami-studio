import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
import { getProjectById, getAllProjects } from "@/lib/project-service"
import { projects as fallbackProjects } from "@/data/projects" // Gunakan data statis sebagai fallback

export const revalidate = 3600 // Revalidate every hour

export async function generateStaticParams() {
  try {
    const projects = await getAllProjects()

    if (projects.length === 0) {
      return fallbackProjects.map((project) => ({
        id: project.id,
      }))
    }

    return projects.map((project) => ({
      id: project.id,
    }))
  } catch (error) {
    console.error("Error generating static params:", error)
    return fallbackProjects.map((project) => ({
      id: project.id,
    }))
  }
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = params
  let project = null
  let allProjects = []

  try {
    project = await getProjectById(id)

    if (!project) {
      // Coba cari di data fallback
      project = fallbackProjects.find((p) => p.id === id)
      if (!project) {
        notFound()
      }
      // Konversi ke format yang diharapkan
      project = {
        ...project,
        coverImage: null,
        gallery: [],
      }
    }

    // Fetch all projects for related projects
    allProjects = await getAllProjects()
    if (allProjects.length === 0) {
      allProjects = fallbackProjects.map((p) => ({
        ...p,
        coverImage: null,
        gallery: [],
      }))
    }
  } catch (error) {
    console.error(`Error fetching project with ID ${id}:`, error)

    // Coba cari di data fallback
    project = fallbackProjects.find((p) => p.id === id)
    if (!project) {
      notFound()
    }
    // Konversi ke format yang diharapkan
    project = {
      ...project,
      coverImage: null,
      gallery: [],
    }

    allProjects = fallbackProjects.map((p) => ({
      ...p,
      coverImage: null,
      gallery: [],
    }))
  }

  // Fetch related projects (projects with similar categories)
  const relatedProjects = allProjects
    .filter((p) => p.id !== project.id && p.categories.some((c) => project.categories.includes(c)))
    .slice(0, 3)

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero Image */}
      <div className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] relative">
        {project.coverImage ? (
          <Image
            src={project.coverImage.url || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-violet-600 opacity-80"></div>
        )}
      </div>

      <div className="px-2 sm:px-6 md:px-12 lg:px-24 py-10 md:py-16">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 md:mb-10 transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 mb-10 md:mb-16">
            <div className="lg:col-span-2">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
              <p className="text-lg md:text-xl text-muted-foreground">{project.description}</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Year</h4>
                    <p className="text-muted-foreground">{project.year}</p>
                  </div>

                  {project.location && (
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-muted-foreground">{project.location}</p>
                    </div>
                  )}

                  {project.client && (
                    <div>
                      <h4 className="font-medium">Client</h4>
                      <p className="text-muted-foreground">{project.client}</p>
                    </div>
                  )}

                  <div>
                    <h4 className="font-medium">Categories</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.categories.map((category) => (
                        <span key={category} className="px-3 py-1 bg-muted rounded-full text-xs">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Gallery */}
          {project.gallery && project.gallery.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mb-10 md:mb-16">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className={`relative ${
                    index === project.gallery.length - 1 && project.gallery.length % 2 !== 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="aspect-square md:aspect-auto md:h-80 relative">
                    <Image
                      src={image.url || "/placeholder.svg"}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mb-10 md:mb-16">
              <div className="aspect-square bg-muted">
                <div className="w-full h-full bg-gradient-to-tr from-purple-900/30 to-violet-600/30"></div>
              </div>
              <div className="aspect-square bg-muted">
                <div className="w-full h-full bg-gradient-to-bl from-purple-900/30 to-violet-600/30"></div>
              </div>
              <div className="md:col-span-2 aspect-video bg-muted">
                <div className="w-full h-full bg-gradient-to-r from-purple-900/30 to-violet-600/30"></div>
              </div>
            </div>
          )}

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="mb-10 md:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Related Projects</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/projects/${relatedProject.id}`}
                    className="group block aspect-square relative overflow-hidden"
                  >
                    {relatedProject.coverImage ? (
                      <Image
                        src={relatedProject.coverImage.url || "/placeholder.svg"}
                        alt={relatedProject.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-violet-600 opacity-80 transition-transform duration-500 group-hover:scale-105"></div>
                    )}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                      <div>
                        <h3 className="text-white font-medium text-base">{relatedProject.title}</h3>
                        <p className="text-white/70 text-xs">{relatedProject.categories.join(", ")}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center">
            <Link
              href="/#contact"
              className="inline-flex items-center px-5 py-2.5 bg-purple-600 hover:bg-purple-700 rounded-full font-medium transition-colors"
            >
              Discuss Your Project
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
