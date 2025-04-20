"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
import { projects } from "@/data/projects"
import { useRouter } from "next/navigation"

export default function ProjectPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { id } = params

  const project = projects.find((p) => p.id === id)

  useEffect(() => {
    if (!project) {
      router.push("/projects")
    }

    // Scroll to top when page loads
    window.scrollTo(0, 0)
  }, [project, router])

  if (!project) {
    return null
  }

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero Image */}
      <motion.div
        className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-violet-600 opacity-80"></div>
      </motion.div>

      <motion.div
        className="px-2 sm:px-6 md:px-12 lg:px-24 py-10 md:py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
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
              <motion.h1
                className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {project.title}
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {project.description}
              </motion.p>
            </div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
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
            </motion.div>
          </div>

          {/* Project Gallery */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mb-10 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="aspect-square bg-muted">
              <div className="w-full h-full bg-gradient-to-tr from-purple-900/30 to-violet-600/30"></div>
            </div>
            <div className="aspect-square bg-muted">
              <div className="w-full h-full bg-gradient-to-bl from-purple-900/30 to-violet-600/30"></div>
            </div>
            <div className="md:col-span-2 aspect-video bg-muted">
              <div className="w-full h-full bg-gradient-to-r from-purple-900/30 to-violet-600/30"></div>
            </div>
          </motion.div>

          {/* Related Projects */}
          <motion.div
            className="mb-10 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Related Projects</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
              {projects
                .filter((p) => p.id !== project.id && p.categories.some((c) => project.categories.includes(c)))
                .slice(0, 3)
                .map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/projects/${relatedProject.id}`}
                    className="group block aspect-square relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-violet-600 opacity-80 transition-transform duration-500 group-hover:scale-105"></div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                      <div>
                        <h3 className="text-white font-medium text-base">{relatedProject.title}</h3>
                        <p className="text-white/70 text-xs">{relatedProject.categories.join(", ")}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href="/#contact"
              className="inline-flex items-center px-5 py-2.5 bg-purple-600 hover:bg-purple-700 rounded-full font-medium transition-colors"
            >
              Discuss Your Project
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </main>
  )
}
