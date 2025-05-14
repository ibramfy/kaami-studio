import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-12 lg:px-24 py-12 transition-theme">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl portfolio-font flex items-center mb-4">
              <span className="mr-2">KAAMI</span>
              <span className="text-outline">ARSITEK STUDIO</span>
            </h3>
            <p className="text-muted-foreground">
              Creative Developer & Designer
              <br />
              Based in New York
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Links</h3>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Social</h3>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <Link href="#" className="inline-flex items-center hover:text-white transition-colors">
                  Twitter <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
              </li>
              <li>
                <Link href="#" className="inline-flex items-center hover:text-white transition-colors">
                  Instagram <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
              </li>
              <li>
                <Link href="#" className="inline-flex items-center hover:text-white transition-colors">
                  LinkedIn <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
              </li>
              <li>
                <Link href="#" className="inline-flex items-center hover:text-white transition-colors">
                  GitHub <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} KAAMI ARSITEK STUDIO. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors mr-6">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
