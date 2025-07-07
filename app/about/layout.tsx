'use client'

import { usePathname } from "next/navigation"
import type React from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
import AboutNav from "@/components/about-nav"

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const isTeamMemberPage = /^\/about\/team\/[^/]+$/.test(pathname)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        {/* Only show AboutNav if not on /about/team/[slug] */}
        {!isTeamMemberPage && (
          <section className="bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AboutNav />
            </div>
          </section>
        )}

        {children}
      </main>
      <Footer />
    </>
  )
}
