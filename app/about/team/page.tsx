"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import type { Team } from "@/types/team"

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState<Team[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  useEffect(() => {
    async function fetchTeamMembers() {
      try {
        setLoading(true)
        setError(null)

        // Try to fetch from API route first
        const response = await fetch("/api/team")

        if (response.ok) {
          const data = await response.json()
          setTeamMembers(data.teamMembers || [])
        } else {
          throw new Error("Failed to fetch from API")
        }
      } catch (error) {
        console.error("Failed to fetch team members:", error)

        // Use fallback data if API fails
        try {
          const { teamMembers: fallbackTeamMembers } = await import("@/data/team")
          setTeamMembers(fallbackTeamMembers)
        } catch (fallbackError) {
          console.error("Failed to load fallback data:", fallbackError)
          setError("Failed to load team members")
        }
      } finally {
        setLoading(false)
      }
    }

    fetchTeamMembers()
  }, [])

  return (
    <div className="bg-background">
      {/* Team Section */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-din-condensed
            uppercase 
            text-[32px] md:text-[50px] lg:text-[67px]
            tracking-tight 
            text-transparent
            leading-[0.9] 
            [-webkit-text-stroke:0.7875px_black] 
            dark:[-webkit-text-stroke:0.7875px_white] text-left">Kami suka meneliti dan mengeksplorasi ruang-ruang kota dan tempat umum dengan cara yang tidak biasa dan berpikir radikal.</h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-muted-foreground">
            Our diverse team brings together expertise from architecture, design, engineering, and technology to create
            innovative solutions for complex challenges.
          </p>

          {loading ? (
            // Loading state
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="aspect-square bg-muted animate-pulse rounded-lg"></div>
              ))}
            </div>
          ) : error ? (
            // Error state
            <div className="text-center py-12">
              <p className="text-red-500 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : teamMembers.length === 0 ? (
            // No team members state
            <div className="text-center py-12">
              <p className="text-muted-foreground">No team members found.</p>
            </div>
          ) : (
            // Team members grid
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {teamMembers.map((member, index) => (
                <Link href={`/about/team/${member.slug}`} key={member.id}>
                  <motion.div
                    className="relative aspect-square overflow-hidden cursor-pointer group"
                    onMouseEnter={() => setHoveredMember(index)}
                    onMouseLeave={() => setHoveredMember(null)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Image
                      src={member.avatarImage?.url || "/placeholder.svg?height=400&width=400"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />

                    {/* Overlay that appears on hover */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-black/60 dark:bg-white/60"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredMember === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center p-4">
                        <motion.h3
                          className="text-xl font-medium text-white dark:text-black mb-2"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{
                            y: hoveredMember === index ? 0 : 10,
                            opacity: hoveredMember === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {member.name}
                        </motion.h3>
                        <motion.p
                          className="text-white/90 dark:text-black/90 mb-2"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{
                            y: hoveredMember === index ? 0 : 10,
                            opacity: hoveredMember === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          {member.position}
                        </motion.p>
                        
                      </div>
                    </motion.div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
