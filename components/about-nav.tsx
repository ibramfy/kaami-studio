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

  return (
    <nav className="overflow-x-auto py-2">
      <div className="flex justify-center">
        {aboutNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "inline-block whitespace-nowrap text-sm font-medium transition-colors hover:text-foreground mx-4 py-3",
              pathname === item.href ? "text-foreground border-b-2 border-foreground" : "text-muted-foreground",
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
