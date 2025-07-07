"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface AboutNavItem {
  label: string
  href: string
}

const aboutNavItems: AboutNavItem[] = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/about/team" },
  { label: "Awards", href: "/about/awards" },
  { label: "Clients", href: "/about/clients" },
  { label: "Publications", href: "/about/publications" },
  { label: "Legal", href: "/about/legal" },
]

export default function AboutNav() {
  const pathname = usePathname()

  // Debug log
  console.log("Current pathname:", pathname)
  console.log("Should hide?", pathname.startsWith("/about/team/") && pathname !== "/about/team")

  // Hide navigation on team member detail pages
  if (pathname.startsWith("/about/team/") && pathname !== "/about/team") {
    console.log("Hiding AboutNav")
    return null
  }

  console.log("Showing AboutNav")
  return (
    <nav className="pt-20 overflow-x-auto py-2">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-around">
        {aboutNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "inline-block whitespace-nowrap text-sm font-medium transition-colors hover:text-foreground mx-4 py-3","text-[19.6875px]",
              pathname === item.href ? "text-foreground" : "text-muted-foreground",
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
