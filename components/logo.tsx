import { cn } from "@/lib/utils"
import Link from "next/link"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  }

  return (
    <Link href="/">
      <div className={cn("portfolio-font flex items-center", sizeClasses[size], className)}>
        <span className="mr-2">KAAMI</span>
      </div>
    </Link>
  )
}
