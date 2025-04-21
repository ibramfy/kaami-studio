"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight } from "lucide-react"
import { ThemeSwitcher } from "./theme-switcher"
import { Logo } from "./logo"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("/")

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Set active link based on current path or scroll position
    const setActiveLinkFromPath = () => {
      const path = window.location.pathname
      const hash = window.location.hash

      if (hash) {
        setActiveLink(hash)
      } else if (path === "/") {
        setActiveLink("/")
      } else {
        setActiveLink(path)
      }
    }

    setActiveLinkFromPath()
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("hashchange", setActiveLinkFromPath)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("hashchange", setActiveLinkFromPath)
    }
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <>
      {/* Main Header with Logo */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6 transition-colors ${
          scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
        }`}
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

      {/* Desktop Right Sidebar Navigation */}
      <div className="fixed top-0 right-0 bottom-0 z-30 hidden md:flex flex-col justify-center">
        <motion.nav
          className="bg-background/80 backdrop-blur-md p-6 rounded-l-xl shadow-lg"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col space-y-8 items-end">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`group flex items-center text-lg transition-all duration-300 ${
                  activeLink === link.href || (link.href === "/" && activeLink === "/")
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="relative">
                  {link.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                    initial={{ width: activeLink === link.href ? "100%" : "0%" }}
                    animate={{ width: activeLink === link.href ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
                <motion.div
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -5 }}
                  whileHover={{ x: 0 }}
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.div>
              </Link>
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
                  <Link
                    href={link.href}
                    className={`text-2xl font-medium ${
                      activeLink === link.href ? "text-foreground" : "text-muted-foreground"
                    }`}
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </Link>
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
