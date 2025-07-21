import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative px-6 md:px-12 lg:px-24 py-12 bg-white dark:bg-black">
      {/* Geometric Perspective Divider */}
      <div className="absolute top-0 left-0 right-0 h-20 -translate-y-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 80" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          {/* Base Layer */}
          <path 
            d="M0,0 L1200,0" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            className="text-border opacity-20"
          />
          
          {/* Main Perspective Lines */}
          <path 
            d="M0,80 L600,0 L1200,80" 
            stroke="currentColor" 
            strokeWidth="1.2" 
            fill="none"
            className="text-border"
          />
          
          {/* Secondary Lines */}
          <path 
            d="M150,80 L600,20 L1050,80" 
            stroke="currentColor" 
            strokeWidth="0.8" 
            fill="none"
            className="text-border opacity-70"
          />
          
          {/* Tertiary Lines */}
          <path 
            d="M300,80 L600,40 L900,80" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            fill="none"
            className="text-border opacity-50"
          />
        </svg>
      </div>

      {/* Konten Footer */}
      <div className="max-w-5xl mx-auto text-center">
        {/* Branding */}
        <div className="mb-8">
          <h3 className="text-2xl portfolio-font flex justify-center items-center mb-3">
            <span className="mr-2">KAAMI</span>
            <span className="text-outline">ARCHITECTURE</span>
          </h3>
          <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
            Crafting spaces with precision and visionary design.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border text-muted-foreground text-xs flex flex-col md:flex-row justify-center items-center gap-3">
          <span>© {new Date().getFullYear()} KAAMI ARCHITECTURE STUDIO</span>
          <span className="hidden md:inline">|</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
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