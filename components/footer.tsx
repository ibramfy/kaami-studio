import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative px-6 md:px-12 lg:px-24 py-12 bg-white dark:bg-black">
      <div className="absolute top-0 left-0 right-0 h-28 overflow-hidden rotate-180">
  <svg viewBox="0 0 1200 150" preserveAspectRatio="none" className="w-full h-full">
    {/* Web of chaotic connections */}
    {[...Array(12)].map((_, i) => {
      const x1 = Math.random() * 1000 + 100;
      const y1 = Math.random() * 100 + 20;
      const x2 = Math.random() * 1000 + 100;
      const y2 = Math.random() * 100 + 20;
      return (
        <line 
          key={i}
          x1={x1} y1={y1} 
          x2={x2} y2={y2}
          stroke="currentColor" 
          strokeWidth={Math.random() * 0.8 + 0.2}
          opacity={Math.random() * 0.6 + 0.4}
          className="text-border"
        />
      );
    })}
    
    {/* Chaotic polygons */}
    <polygon 
      points="150,40 180,90 120,110 90,60" 
      stroke="currentColor" 
      strokeWidth="0.7" 
      fill="none" 
      className="text-border opacity-80"
    />
    <polygon 
      points="400,20 450,70 420,120 350,80" 
      stroke="currentColor" 
      strokeWidth="0.7" 
      fill="none" 
      className="text-border opacity-60"
    />
    <polygon 
      points="700,50 750,10 820,60 780,110" 
      stroke="currentColor" 
      strokeWidth="0.7" 
      fill="none" 
      className="text-border opacity-70"
    />
    <polygon 
      points="1000,30 1050,80 980,130 920,70" 
      stroke="currentColor" 
      strokeWidth="0.7" 
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
            <span className="mr-2">KAAMI ARCHITECTURE</span>
            
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
