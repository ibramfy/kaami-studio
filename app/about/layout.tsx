import type React from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
import AboutNav from "@/components/about-nav"

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        {/* About Navigation */}
        <section className="border-b border-gray-200 dark:border-gray-800 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AboutNav />
          </div>
        </section>

        {children}
      </main>
      <Footer />
    </>
  )
}
