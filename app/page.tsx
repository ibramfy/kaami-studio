"use client"

import { ChevronDown, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Home() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    // Simulasi data projects untuk demo
    const fallbackProjects = [
      {
        id: "1",
        title: "Urban Residential Complex",
        categories: ["Residential", "Urban"],
        year: 2023,
        location: "New York",
        client: "City Development Corp",
        description: "A modern residential complex in the heart of the city",
        coverImage: null,
        gallery: [],
      },
      {
        id: "2",
        title: "Cultural Center",
        categories: ["Cultural", "Public"],
        year: 2022,
        location: "Berlin",
        client: "Arts Foundation",
        description: "A vibrant cultural center that celebrates local heritage",
        coverImage: null,
        gallery: [],
      },
      {
        id: "3",
        title: "Sustainable Office Tower",
        categories: ["Commercial", "Sustainable"],
        year: 2023,
        location: "Singapore",
        client: "Green Developments Ltd",
        description: "An eco-friendly office tower with innovative energy solutions",
        coverImage: null,
        gallery: [],
      },
    ]
    setProjects(fallbackProjects)
  }, [])

  const featuredProjects = projects.slice(0, 3)

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center relative px-2 sm:px-6 md:px-12 lg:px-24 overflow-hidden"
      >
        {/* Background Image with Zoom Out Animation - Using gradient background as fallback */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(to right, #4a00e0, #8e2de2)",
            // Uncomment the line below and replace with your actual image path when available
            // backgroundImage: "url('/images/herosection.jpg')",
          }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Content with Animation */}
        <div className="relative z-10 max-w-5xl">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 text-white"
            initial={{ opacity: 0, scale: 1, x: 0, y: 0 }}
            animate={{
              opacity: 1,
              scale: 0.65,
              x: -150,
              y: 100,
            }}
            transition={{ duration: 2.5, delay: 2, ease: "easeInOut" }}
          >
            Creative Developer & Digital Designer
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl"
            initial={{ opacity: 0, scale: 1, x: 0, y: 0 }}
            animate={{
              opacity: 1,
              scale: 0.8,
              x: -65,
              y: 50,
            }}
            transition={{ duration: 3, delay: 2.5, ease: "easeInOut" }}
          >
            Building exceptional digital experiences with a focus on animation, interaction, and cutting-edge web
            technologies.
          </motion.p>
        </div>

        <motion.div
          className="absolute bottom-12 left-0 right-0 flex justify-center z-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 4 }}
        >
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-white/70" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center px-2 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg md:text-xl text-zinc-300 mb-6">
                I&apos;m a creative developer and designer specializing in building modern, interactive web experiences
                that push the boundaries of what&apos;s possible on the web.
              </p>
              <p className="text-lg md:text-xl text-zinc-300">
                With expertise in Next.js, React, and animation libraries like Framer Motion, I create digital products
                that are both visually stunning and technically excellent.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <ul className="grid grid-cols-2 gap-2 text-zinc-400">
                <li>Next.js</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Framer Motion</li>
                <li>Tailwind CSS</li>
                <li>UI/UX Design</li>
                <li>3D Animation</li>
                <li>Creative Coding</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center px-2 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 bg-muted/30"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Selected Projects
          </motion.h2>

          <div className="space-y-12 sm:space-y-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Link href={`/projects/${project.id}`} className="block group-hover:opacity-90 transition-opacity">
                  <div className="aspect-video bg-muted mb-3 sm:mb-4 transition-theme relative overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-purple-900 to-violet-600 opacity-80"></div>
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
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center px-2 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let&apos;s Work Together
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg md:text-xl text-zinc-300 mb-6">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your
                vision.
              </p>
              <Link
                href="mailto:hello@example.com"
                className="inline-flex items-center text-lg sm:text-xl font-medium border-b-2 border-purple-500 pb-1 hover:text-purple-400 transition-colors"
              >
                hello@example.com
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Connect</h3>
              <ul className="space-y-3 text-zinc-400">
                <li>
                  <Link href="#" className="inline-flex items-center hover:text-white transition-colors">
                    Twitter <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="inline-flex items-center hover:text-white transition-colors">
                    Instagram <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="inline-flex items-center hover:text-white transition-colors">
                    LinkedIn <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="inline-flex items-center hover:text-white transition-colors">
                    GitHub <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
