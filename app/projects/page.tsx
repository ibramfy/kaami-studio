"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>("All")

  // Extract unique categories from projects
  const allCategories = Array.from(new Set(projects.flatMap((project) => project.categories)))
  const categories = ["All", ...allCategories]

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory && selectedCategory !== "All"
      ? projects.filter((project) => project.categories.includes(selectedCategory))
      : projects

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      <div className="pt-28 pb-16 px-2 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Projects
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Explore our portfolio of architectural projects spanning various categories and locations.
          </motion.p>

          {/* Filter Categories */}
          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-foreground text-background"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="aspect-square relative overflow-hidden group"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <motion.a
                    href={`/projects/${project.id}`}
                    className="block w-full h-full"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Project Image */}
                    <div className="absolute inset-0 bg-muted">
                      <div className="w-full h-full bg-gradient-to-br from-purple-900 to-violet-600 opacity-80 transition-transform duration-500 group-hover:scale-105"></div>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-black/60 flex flex-col justify-end p-3 sm:p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.h3
                        className="text-base sm:text-lg font-bold text-white mb-1"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{
                          y: hoveredId === project.id ? 0 : 20,
                          opacity: hoveredId === project.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.div
                        className="flex flex-wrap gap-1"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{
                          y: hoveredId === project.id ? 0 : 20,
                          opacity: hoveredId === project.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        {project.categories.map((category) => (
                          <span key={category} className="text-xs text-white/80">
                            {category}
                          </span>
                        ))}
                      </motion.div>
                    </motion.div>
                  </motion.a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
