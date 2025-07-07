"use client"

import { ChevronDown, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import type { Project } from "@/types/project"
import Image from "next/image"

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true)
        setError(null)

        // Try to fetch from API route first
        const response = await fetch("/api/projects")

        if (response.ok) {
          const data = await response.json()
          setProjects(data.projects || [])
        } else {
          throw new Error("Failed to fetch from API")
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error)

        // Use fallback data if API fails
        try {
          const { projects: fallbackProjects } = await import("@/data/projects")
          setProjects(
            fallbackProjects.map((project) => ({
              ...project,
              coverImage: null,
              gallery: [],
            })),
          )
        } catch (fallbackError) {
          console.error("Failed to load fallback data:", fallbackError)
          setError("Failed to load projects")
        }
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  // Ambil 6 project pertama untuk ditampilkan
  const featuredProjects = projects.slice(0, 6)


  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center relative px-2 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 overflow-hidden"
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
        <div className="relative z-10 max-w-5xl w-full h-full">
      <motion.h1
        className="font-din-condensed uppercase text-shadow-blackGlow text-white absolute left-[6%] bottom-[10%] origin-left"
        style={{
          fontSize: 'clamp(2rem, 6vw, 5rem)',
          lineHeight: '0.9', // Untuk tampilan yang lebih compact
          maxWidth: '90%' // Mencegah teks keluar layar
        }}
        initial={{
          opacity: 0,
          scale: 1.85,
          x: 0,
          y: 10
        }}
        animate={{
          opacity: 1,
          scale: 0.85,
        }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2 // Optional delay
        }}
        // Responsive adjustment
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          scale: 0.85,
        }}
      >
          Desain Rumah Impian dengan Teknologi 3D Terdepan
        </motion.h1>

  {/* Subtitle - Now mobile-optimized */}
  <motion.p
    className="font-urw-din text-shadow-blackGlow text-white absolute left-[6%] w-[90%] whitespace-nowrap overflow-x-hidden"
    style={{
      top: "calc(75% + 6rem)",
      fontSize: 'clamp(0.65rem, 2.5vw, 1.25rem)', // More aggressive mobile scaling
      lineHeight: '1.5',
      textOverflow: 'ellipsis'
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ 
      duration: 0.5,
      delay: 1.7,
      ease: "easeIn" 
    }}
  >
    <span className="inline-block min-w-full">
      Proses Transparan | Harga Jujur | Garansi Kepuasan
    </span>
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

<section
  id="features"
  className="min-h-screen flex flex-col justify-center px-2 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 bg-white dark:bg-black"
>
  <div className="max-w-5xl mx-auto flex flex-col gap-y-12 sm:gap-y-16">
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p className="font-urw-din text-purple-600 dark:text-purple-400 text-lg uppercase font-semibold tracking-wider mb-4">
        Kenapa Kami Berbeda
      </p>
      <h2 className="font-din-condensed text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
        Pendekatan Unik Kaami Studio
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
      {/* Feature 1 - 3D Rendering */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="h-32 w-32 mb-6 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{duration: 10, repeat: Infinity, ease: "linear"}}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5}
            stroke="currentColor" 
            className="w-full h-full text-purple-600 dark:text-purple-400"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" 
            />
          </svg>
        </motion.div>
        <h3 className="font-urw-din text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
          3D Rendering Real-time
        </h3>
        <p className="font-urw-din text-gray-600 dark:text-gray-300 text-center text-sm sm:text-base">
          Visualisasi proyek secara realistik sebelum pembangunan dimulai
        </p>
      </motion.div>

      {/* Feature 2 - International Methodology */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="h-32 w-32 mb-6 flex items-center justify-center"
          animate={{ rotateY: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-full h-full text-purple-600 dark:text-purple-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8 8 0 1112 2.055"
            />
          </svg>
        </motion.div>
        <h3 className="font-urw-din text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
          Metodologi Internasional
        </h3>
        <p className="font-urw-din text-gray-600 dark:text-gray-300 text-center text-sm sm:text-base">
          Standar desain global dengan sentuhan lokal untuk hasil terbaik
        </p>
      </motion.div>

      {/* Feature 3 - No Hidden Cost */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="h-32 w-32 mb-6 flex items-center justify-center"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-full h-full text-purple-600 dark:text-purple-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
            />
          </svg>
        </motion.div>
        <h3 className="font-urw-din text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
          Tanpa Hidden Cost
        </h3>
        <p className="font-urw-din text-gray-600 dark:text-gray-300 text-center text-sm sm:text-base">
          Transparansi biaya dari awal tanpa kejutan di akhir proyek
        </p>
      </motion.div>
    </div>
  </div>
</section>

<section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-white dark:bg-black">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
    {/* Visual Section (60%) */}
    <div className="lg:col-span-3 relative group">
      {/* CAD-style Window Frame */}
      <div className="border-2 border-purple-500 dark:border-purple-400 rounded-lg overflow-hidden shadow-xl">
        {/* Fake CAD Toolbar */}
        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 flex items-center space-x-3 border-b border-gray-300 dark:border-gray-700">
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 font-mono flex-1 text-center">
            TimeLapse.kaami
          </div>
          <div className="w-6"></div>
        </div>
        
        {/* Video Container with Sketch Effect */}
        <div className="relative aspect-video bg-gray-200 dark:bg-gray-900 overflow-hidden">
          {/* Video Embed */}
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/EXAMPLE_VIDEO_ID?autoplay=1&mute=1&loop=1&controls=0"
            title="Proses Desain Kaami Studio"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          
          {/* Sketch Highlight Overlay (Animated) */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 8, ease: "easeInOut" }}
          >
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path 
                d="M20,30 L40,25 L60,40 L80,35" 
                stroke="rgba(168, 85, 247, 0.8)" 
                strokeWidth="0.5" 
                fill="none"
                strokeDasharray="1"
              />
              <path 
                d="M25,50 L45,45 L65,60 L85,55" 
                stroke="rgba(168, 85, 247, 0.8)" 
                strokeWidth="0.5" 
                fill="none"
                strokeDasharray="1"
              />
            </svg>
          </motion.div>
        </div>
      </div>
      
      {/* Play Button Indicator */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-16 h-16 rounded-full bg-purple-600 dark:bg-purple-500 bg-opacity-80 flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.3 2.8L17 10 6.3 17.2V2.8z"/>
          </svg>
        </div>
      </div>
    </div>

    {/* Text Section (40%) */}
    <div className="lg:col-span-2 space-y-6">
      <motion.h2 
        className="font-din-condensed text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Lihat Proses Nyata Kami
      </motion.h2>
      
      <motion.p
        className="font-urw-din text-lg text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        60 detik — dari sketsa kertas ke 3D visual siap bangun
      </motion.p>
      
      <motion.div
        className="pt-4"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <button className="font-urw-din px-6 py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded-lg transition-colors duration-300">
          Lihat Proyek Lainnya
        </button>
      </motion.div>
    </div>
  </div>
</section>

      {/* Projects Section */}
<section
  id="projects"
  className="min-h-screen flex flex-col justify-center px-2 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 bg-white dark:bg-black"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
    {/* Text Section (40%) */}
    <div className="lg:col-span-2 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="font-urw-din text-purple-600 dark:text-purple-400 text-sm uppercase tracking-wider mb-4">
          Kreativitas Tanpa Batas
        </p>
        <h2 className="font-din-condensed text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Eksplorasi Desain Kami
        </h2>
        <p className="font-urw-din text-gray-600 dark:text-gray-300 mb-8">
          "Karya orisinil, bukan project klien. Semua demi eksperimen visual terbaik."
        </p>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <button className="font-urw-din inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded-lg transition-colors">
            Lihat Semua Proyek
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </div>

    {/* Visual Grid (60%) - 6 items with solid hover */}
    <div className="lg:col-span-3">
      <motion.p 
        className="font-urw-din text-gray-500 dark:text-gray-400 text-sm mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Unduh katalog
      </motion.p>
      
      {loading ? (
              // Loading state
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-gray-200 dark:bg-gray-800 animate-pulse"
                  ></div>
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
            ) : featuredProjects.length === 0 ? (
              // No projects state - show placeholder grid
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[...Array(6)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative aspect-square w-full group cursor-pointer">
                      {/* Placeholder Image */}
                      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800"></div>

                      {/* Solid hover overlay */}
                      <div className="absolute inset-0 bg-white dark:bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Centered text on hover */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                        <h3 className="text-[1.5em] text-black dark:text-white font-bold text-lg mb-1">
                          Project {index + 1}
                        </h3>
                        <p className="text-sm text-black/70 dark:text-white/70">Sample Project</p>
                        <p className="text-xs text-black/50 dark:text-white/50 mt-1">2024</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* 6 items (2x3) */}
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link href={`/projects/${project.slug}`}>
                      <div className="relative aspect-square w-full group cursor-pointer">
                        {/* Project Image */}
                        <div className="absolute inset-0">
                          {project.coverImage ? (
                            <Image
                              src={project.coverImage.url || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 dark:bg-gray-800"></div>
                          )}
                        </div>

                        {/* Solid hover overlay - not transparent */}
                        <div className="absolute inset-0 bg-white dark:bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Centered text on hover */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                          <h3 className="font-din-condensed text-[1.5em] text-black dark:text-white font-bold text-lg mb-1">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

<section
  id="team"
  className="min-h-screen flex flex-col justify-center px-2 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 bg-white dark:bg-black"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
    {/* Visual Grid (60%) - Left Side (No Emoji) */}
    <div className="lg:col-span-3 order-1 lg:order-none">
      <motion.p 
        className="font-urw-din text-gray-500 dark:text-gray-400 text-sm mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Kenali tim kami lebih dekat
      </motion.p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square w-full group">
              {/* Plain avatar placeholder */}
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800"></div>
              
              {/* Solid hover overlay */}
              <div className="absolute inset-0 bg-white dark:bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Centered text on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                <h3 className="font-din-condensed text-[1.5em] text-black dark:text-white font-bold text-lg mb-1">
                  Anggota {index + 1}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {index % 3 === 0 ? "Arsitek" : index % 3 === 1 ? "Desainer" : "3D Artist"}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Text Section (40%) - Right Side with Heroicons */}
    <div className="lg:col-span-2 order-2 lg:order-none flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="font-urw-din text-purple-600 dark:text-purple-400 text-sm uppercase tracking-wider mb-4">
          Tim Profesional
        </p>
        <h2 className="font-din-condensed text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Tim <span className=" font-din-condensed text-purple-600 dark:text-purple-400">Berkualitas</span> Kami
        </h2>
        <p className="font-urw-din text-gray-600 dark:text-gray-300 mb-8">
          "Dibackup oleh arsitek dan desainer bersertifikat dengan pengalaman lebih dari 10 tahun."
        </p>
        
        {/*mmndlv_*/}
        
        <div className="space-y-3">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-urw-din text-gray-700 dark:text-gray-300">Sertifikasi Internasional</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
              <path d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            <span className="font-urw-din text-gray-700 dark:text-gray-300">Lulusan Universitas Terbaik</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            <span className="font-urw-din text-gray-700 dark:text-gray-300">Pengalaman 10+ Tahun</span>
          </div>
        </div>

        <motion.div
          className="mt-8"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <button className="font-urw-din inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded-lg transition-colors">
            Kenali Tim Kami
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>

<section className="min-h-screen flex flex-col justify-center px-2 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 bg-white dark:bg-black">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
    {/* Text Section (40%) - Reduced gap */}
    <div className="lg:col-span-2">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="font-din-condensed text-xl font-bold text-purple-400 mb-6">
          Jaminan Kepuasan 
        </h2>
        <p className="font-urw-din text-gray-600 dark:text-gray-300 mb-8 text-lg">
          Komitmen kami untuk memberikan hasil terbaik tanpa kompromi.
        </p>        
        <div className="space-y-4">
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1 mr-4 text-purple-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <div>
              <h3 className="font-urw-din font-semibold text-gray-900 dark:text-white">Proses Transparan</h3>
              <p className="font-urw-din text-gray-500 dark:text-gray-400 text-sm">Setiap tahap bisa dimonitor real-time</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1 mr-4 text-purple-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <div>
              <h3 className="font-urw-din font-semibold text-gray-900 dark:text-white">Garansi Hukum</h3>
              <p className="font-urw-din text-gray-500 dark:text-gray-400 text-sm">Dokumen legal terjamin keabsahannya</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Carousel Section (60%) */}
    <div className="lg:col-span-3 w-full">
      {/* Mobile Carousel */}
      <div className="lg:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          className="w-full px-4" // Add some side padding
        >
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              ),
              title: "Revisi Unlimited",
              description: "Sesuaikan hingga Anda 100% puas"
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              ),
              title: "Gambar Kerja",
              description: "Dokumen teknis lengkap & detail"
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              ),
              title: "Konsultasi Gratis",
              description: "Selamanya tanpa biaya tambahan"
            }
          ].map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative inline-flex justify-center items-center mb-4">
                  <div className="absolute inset-0 bg-purple-400/10 rounded-full blur-md group-hover:opacity-100"></div>
                  <div className="relative bg-purple-100 dark:bg-purple-900/30 p-6 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-urw-din text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="font-urw-din text-gray-500 dark:text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid (hidden on mobile) */}
      <div className="hidden lg:grid grid-cols-3 gap-6">
        {[
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="font-urw-din h-10 w-10 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            ),
            title: "Revisi Unlimited",
            description: "Sesuaikan hingga Anda 100% puas"
          },
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            ),
            title: "Gambar Kerja",
            description: "Dokumen teknis lengkap & detail"
          },
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            ),
            title: "Konsultasi Gratis",
            description: "Selamanya tanpa biaya tambahan"
          }
        ].map((item, index) => (
          <motion.div 
            key={index}
            className="text-center"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, delay: index * 0.1 }}
          >
            <div className="relative inline-flex justify-center items-center mb-4">
              <div className="absolute inset-0 bg-purple-400/10 rounded-full blur-md group-hover:opacity-100"></div>
              <div className="relative bg-purple-100 dark:bg-purple-900/30 p-6 rounded-full">
                {item.icon}
              </div>
            </div>
            <h3 className="font-urw-din text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
            <p className="font-urw-din text-gray-500 dark:text-gray-400 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
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
