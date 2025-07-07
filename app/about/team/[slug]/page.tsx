"use client"

import { useState, useEffect } from "react"
import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Team } from "@/types/team"
import { motion } from "framer-motion"


export default function TeamMemberProfile() {
  const params = useParams()
  const slug = params.slug as string

  const [member, setMember] = useState<Team | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchTeamMember() {
      try {
        setLoading(true)
        setError(null)

        // Try to fetch from API route first
        const response = await fetch("/api/team")

        if (response.ok) {
          const data = await response.json()
          const foundMember = data.teamMembers?.find((m: Team) => m.slug === slug)

          if (foundMember) {
            setMember(foundMember)
          } else {
            // Try fallback data
            const { teamMembers: fallbackTeamMembers } = await import("@/data/team")
            const fallbackMember = fallbackTeamMembers.find((m) => m.slug === slug)

            if (fallbackMember) {
              setMember(fallbackMember)
            } else {
              notFound()
            }
          }
        } else {
          throw new Error("Failed to fetch from API")
        }
      } catch (error) {
        console.error("Failed to fetch team member:", error)

        // Use fallback data if API fails
        try {
          const { teamMembers: fallbackTeamMembers } = await import("@/data/team")
          const fallbackMember = fallbackTeamMembers.find((m) => m.slug === slug)

          if (fallbackMember) {
            setMember(fallbackMember)
          } else {
            setError("Team member not found")
          }
        } catch (fallbackError) {
          console.error("Failed to load fallback data:", fallbackError)
          setError("Failed to load team member")
        }
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchTeamMember()
    }
  }, [slug])

  if (loading) {
    return (
      <div className="bg-background">
        {/* Loading Hero */}
        <div className="w-full h-[100vh] md:h-[70vh] bg-muted animate-pulse"></div>

        {/* Loading Content */}
        <section className="py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-6 w-32 bg-muted animate-pulse mb-8"></div>
            <div className="space-y-4">
              <div className="h-8 w-3/4 bg-muted animate-pulse"></div>
              <div className="h-4 w-full bg-muted animate-pulse"></div>
              <div className="h-4 w-5/6 bg-muted animate-pulse"></div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (error || !member) {
    return (
      <div className="bg-background min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Team Member Not Found</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          {error || "We couldn't find the team member you're looking for."}
        </p>
        <Link
          href="/about/team"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Return to Team Page
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-background">
      {/* Hero Image with Overlay */}
      <div className="relative w-full h-screen">
        <Image
          src={member.heroImage?.url || member.avatarImage?.url || "/placeholder.svg?height=800&width=1600"}
          alt={`${member.name} - Hero Image`}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute bottom-0 left-0 p-6 md:p-12 bg-gradient-to-t from-black/80 via-black/50 to-transparent w-full h-1/2">
  {/* Container untuk teks - mobile: bottom-left, desktop: left-center */}
  <div className="absolute bottom-6 md:bottom-auto left-6 md:left-12 md:top-[0%] md:-translate-y-[55%]">
    <motion.h1 
      className="font-din-condensed uppercase text-shadow-blackGlow text-3xl md:text-[9em] font-bold text-white mb-2 racking-wide md:tracking-wider"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {member.name}
    </motion.h1>
    {member.position && (
      <motion.p 
        className="font-urw-din text-shadow-blackGlow text-xl md:text-2xl text-white/90 mt-2 md:mt-4 md:px-1 md:py-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {member.position}
      </motion.p>
    )}
  </div>
</div>
</div>

      {/* Content Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/about/team"
            className="font-urw-din inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Team
          </Link>

          {/* Bio */}
          {member.bio && (
            <div className="prose dark:prose-invert max-w-none mb-12">
              {member.bio.split("\n\n").map((paragraph, index) => (
                <p key={index} className="font-urw-din mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Areas of Expertise */}
            {member.expertise && member.expertise.length > 0 && (
              <div>
                <h2 className="font-urw-din text-xl font-bold mb-4">Expertise</h2>
                <ul className="space-y-2">
                  {member.expertise.map((item, index) => (
                    <li key={index} className="font-urw-din text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Education */}
            {member.education && member.education.length > 0 && (
              <div>
                <h2 className="font-urw-din text-xl font-bold mb-4">Education</h2>
                <ul className="space-y-2">
                  {member.education.map((item, index) => (
                    <li key={index} className="font-urw-din text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Projects */}
          {member.project && member.project.length > 0 && (
            <div className="mt-12">
              <h2 className="font-urw-din text-xl font-bold mb-4">Notable Projects</h2>
              <div className="flex flex-wrap gap-2">
                {member.project.map((project, index) => (
                  <Link
                    key={index}
                    href={`/projects/${project.slug}`}
                    className="font-urw-din px-3 py-1 bg-muted hover:bg-muted/80 text-foreground text-sm rounded-md transition-colors"
                  >
                    {project.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
