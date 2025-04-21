"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ThemeSwitcher } from "./theme-switcher"
import { Logo } from "./logo"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("/")
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  // Define sections and their corresponding IDs
  const navLinks = [
    { name: "Home", href: "/", id: "home" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Projects", href: "/projects", id: "projects" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ]

  useEffect(() => {
    // Function to check which section is currently in view
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      // Set scrolled state for header styling
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Check if we're on the homepage
      if (window.location.pathname === "/") {
        // Check each section to see if it's in view
        const sections = navLinks.map((link) => link.id)

        // Find the current section in view
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i])
          if (section) {
            const sectionTop = section.offsetTop
            const sectionHeight = section.offsetHeight

            if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
              setActiveSection(navLinks[i].href)
              break
            }
          }
        }

        // If we're at the very top of the page, set Home as active
        if (window.scrollY < 100) {
          setActiveSection("/")
        }
      } else {
        // If we're not on the homepage, set active based on pathname
        const path = window.location.pathname
        const matchingLink = navLinks.find(
          (link) => link.href === path || (path.startsWith("/projects") && link.href === "/projects"),
        )

        if (matchingLink) {
          setActiveSection(matchingLink.href)
        }
      }
    }

    // Initial check
    handleScroll()

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  // Function to scroll to section instead of using default link behavior
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    // If it's a hash link on the homepage
    if (href.startsWith("/#") && window.location.pathname === "/") {
      const id = href.replace("/#", "")
      const element = document.getElementById(id)

      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // For other pages, use normal navigation
      window.location.href = href
    }

    // Close mobile menu if open
    if (isOpen) {
      toggleMenu()
    }
  }

  return (
    <>
      {/* Main Header with Logo - No Background */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center">
          <Logo />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground focus:outline-none relative z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Desktop Right Sidebar Navigation - Always visible, text hidden until hover */}
      <div className="fixed top-0 right-0 bottom-0 z-30 hidden md:flex flex-col justify-center">
        <motion.nav className="p-6 rounded-l-xl" initial={{ x: 0 }} animate={{ x: 0 }}>
          <div className="flex flex-col space-y-8 items-end">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative flex items-center text-lg transition-all duration-300"
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {/* Text that appears on hover */}
                <motion.span
                  className={`mr-2 transition-all duration-300 ${
                    hoveredLink === link.href ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                >
                  {link.name}
                </motion.span>

                {/* Navigation Dot */}
                <span className={`nav-dot ${activeSection === link.href ? "nav-dot-active" : ""}`} />
              </a>
            ))}
            <div className="pt-4 border-t border-border w-full flex justify-end">
              <ThemeSwitcher />
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-background flex flex-col justify-center items-center md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-8 items-center">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className={`text-2xl font-medium ${
                      activeSection === link.href ? "text-foreground" : "text-muted-foreground"
                    }`}
                    onClick={(e) => scrollToSection(e, link.href)}
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <ThemeSwitcher />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
