"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/types/project"

interface HomeProjectCardProps {
  project: Project
  index: number
}

export default function HomeProjectCard({ project, index }: HomeProjectCardProps) {
  return (
    <motion.div
      className="group"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Link href={`/projects/${project.id}`} className="block group-hover:opacity-90 transition-opacity">
        <div className="aspect-video bg-muted mb-3 sm:mb-4 transition-theme relative overflow-hidden">
          {project.coverImage ? (
            <Image
              src={project.coverImage.url || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-900 to-violet-600 opacity-80"></div>
          )}
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">{project.title}</h3>
            <p className="text-zinc-400">{project.categories.join(" • ")}</p>
          </div>
          <motion.div
            className="p-1.5 sm:p-2 rounded-full bg-zinc-800"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}
