"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import type { Project } from "@/types/project"

interface ProjectGridProps {
  projects: Project[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Extract unique categories from projects
  const categories = ["All", ...Array.from(new Set(projects.flatMap((project) => project.categories)))]

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory && selectedCategory !== "All"
      ? projects.filter((project) => project.categories.includes(selectedCategory))
      : projects

  return (
    <div className="w-full">
      {/* Filter Categories */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
              selectedCategory === category
                ? "bg-foreground text-background"
                : "bg-muted hover:bg-muted/80 text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3" layout>
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="aspect-square relative overflow-hidden group"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Link href={`/projects/${project.id}`} className="block w-full h-full">
              {/* Project Image */}
              <div className="absolute inset-0 bg-muted">
                {project.image ? (
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-900 to-violet-600"></div>
                )}
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/60 flex flex-col justify-end p-3 sm:p-4 transition-opacity"
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
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
