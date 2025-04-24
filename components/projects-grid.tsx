"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import type { Project } from "@/types/project"

interface ProjectsGridProps {
  projects: Project[]
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
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
    <div>
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
                  {project.coverImage ? (
                    <Image
                      src={project.coverImage.url || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-900 to-violet-600 opacity-80 transition-transform duration-500 group-hover:scale-105"></div>
                  )}
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
  )
}
