"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function TeamPage() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  const teamMembers = [
    {
      id: "alex-johnson",
      name: "Alex Johnson",
      position: "Principal Architect",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "sarah-chen",
      name: "Sarah Chen",
      position: "Design Director",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "michael-rodriguez",
      name: "Michael Rodriguez",
      position: "Technical Lead",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "emma-wilson",
      name: "Emma Wilson",
      position: "Project Manager",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "david-kim",
      name: "David Kim",
      position: "Sustainability Specialist",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "olivia-martinez",
      name: "Olivia Martinez",
      position: "Interior Designer",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <div className="bg-background">
      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 tracking-tight text-center">Our Team</h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-muted-foreground">
            Our diverse team brings together expertise from architecture, design, engineering, and technology to create
            innovative solutions for complex challenges.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <Link href={`/about/team/${member.id}`} key={index}>
                <motion.div
                  className="relative aspect-square overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHoveredMember(index)}
                  onMouseLeave={() => setHoveredMember(null)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
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
                        className="text-xl font-medium text-white dark:text-black"
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
                        className="text-white/90 dark:text-black/90"
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
        </div>
      </section>
    </div>
  )
}
