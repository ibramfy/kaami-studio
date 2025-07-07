"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import type { Team } from "@/types/team"

interface TeamGridProps {
  teams: Team[]
}

export default function TeamGrid({ teams }: TeamGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selectedPosition, setSelectedPosition] = useState<string | null>("All")

  // Extract unique positions from teams
  const allPositions = Array.from(new Set(teams.map((team) => team.position).filter(Boolean)))
  const positions = ["All", ...allPositions]

  // Filter teams based on selected position
  const filteredTeams =
    selectedPosition && selectedPosition !== "All" ? teams.filter((team) => team.position === selectedPosition) : teams

  return (
    <div>
      {/* Filter Positions */}
      <motion.div
        className="flex flex-wrap gap-2 mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {positions.map((position, index) => (
          <motion.button
            key={position}
            onClick={() => setSelectedPosition(position)}
            className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
              selectedPosition === position
                ? "bg-foreground text-background"
                : "bg-muted hover:bg-muted/80 text-foreground"
            }`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {position}
          </motion.button>
        ))}
      </motion.div>

      {/* Teams Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <AnimatePresence>
          {filteredTeams.map((team, index) => (
            <motion.div
              key={team.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="aspect-square relative overflow-hidden group"
              onMouseEnter={() => setHoveredId(team.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.div className="block w-full h-full" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Link href={`/about/team/${team.slug}`}>
                  {/* Team Image */}
                  <div className="absolute inset-0 bg-muted">
                    {team.avatarImage ? (
                      <Image
                        src={team.avatarImage.url || "/placeholder.svg"}
                        alt={team.name}
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
                    animate={{ opacity: hoveredId === team.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h3
                      className="text-base sm:text-lg font-bold text-white mb-1"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{
                        y: hoveredId === team.id ? 0 : 20,
                        opacity: hoveredId === team.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {team.name}
                    </motion.h3>
                    <motion.div
                      className="flex flex-wrap gap-1"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{
                        y: hoveredId === team.id ? 0 : 20,
                        opacity: hoveredId === team.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <span className="text-xs text-white/80">{team.position}</span>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
