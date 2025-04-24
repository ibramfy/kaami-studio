import { ChevronDown, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { getAllProjects } from "@/lib/project-service"
import HomeProjectCard from "@/components/home-project-card"
import { projects as fallbackProjects } from "@/data/projects" // Gunakan data statis sebagai fallback

export const revalidate = 3600 // Revalidate every hour

export default async function Home() {
  let projects = []

  try {
    // Coba ambil data dari Hygraph
    projects = await getAllProjects()

    // Jika tidak ada proyek yang ditemukan, gunakan data fallback
    if (!projects || projects.length === 0) {
      console.log("No projects found from Hygraph, using fallback data")

      // Konversi format data statis ke format yang diharapkan
      projects = fallbackProjects.map((project) => ({
        ...project,
        // Tambahkan properti yang mungkin diharapkan oleh komponen
        client: project.client || "", // Pastikan field client ada
        coverImage: null,
        gallery: [],
      }))
    }
  } catch (error) {
    console.error("Failed to fetch projects:", error)

    // Gunakan data fallback jika terjadi error
    projects = fallbackProjects.map((project) => ({
      ...project,
      client: project.client || "",
      coverImage: null,
      gallery: [],
    }))
  }

  const featuredProjects = projects.slice(0, 3)

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col justify-center relative px-2 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4">
            Creative Developer & Digital Designer
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl">
            Building exceptional digital experiences with a focus on animation, interaction, and cutting-edge web
            technologies.
          </p>
        </div>

        <div className="absolute bottom-12 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center px-2 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-10">About</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div>
              <p className="text-lg md:text-xl text-zinc-300 mb-6">
                I&apos;m a creative developer and designer specializing in building modern, interactive web experiences
                that push the boundaries of what&apos;s possible on the web.
              </p>
              <p className="text-lg md:text-xl text-zinc-300">
                With expertise in Next.js, React, and animation libraries like Framer Motion, I create digital products
                that are both visually stunning and technically excellent.
              </p>
            </div>

            <div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center px-2 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 bg-muted/30"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-10">Selected Projects</h2>

          <div className="space-y-12 sm:space-y-16">
            {featuredProjects.map((project, index) => (
              <HomeProjectCard key={project.id} project={project} index={index} />
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
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-10">Let&apos;s Work Together</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div>
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
            </div>

            <div>
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
