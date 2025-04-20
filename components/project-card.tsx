"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  id: number
  title: string
  categories: string[]
  delay?: number
}

export default function ProjectCard({ id, title, categories, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      className="group"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <Link href={`/projects/${id}`} className="block group-hover:opacity-90 transition-opacity">
        <div className="aspect-video bg-zinc-800 rounded-lg overflow-hidden mb-6 relative">
          <div className="w-full h-full bg-gradient-to-br from-purple-900 to-violet-600 opacity-80"></div>
          <motion.div
            className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"
            whileHover={{ opacity: 0.2 }}
          />
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
            <p className="text-zinc-400">{categories.join(" • ")}</p>
          </div>
          <motion.div
            className="p-2 rounded-full bg-zinc-800"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ArrowUpRight className="w-6 h-6" />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}
