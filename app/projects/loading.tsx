import { Navbar } from "@/components/navbar"

export default function Loading() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      <div className="pt-28 pb-16 px-2 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="h-10 w-48 bg-muted/50 rounded-md mb-4 animate-pulse"></div>
          <div className="h-6 w-96 bg-muted/50 rounded-md mb-10 animate-pulse"></div>

          <div className="flex flex-wrap gap-2 mb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 w-20 bg-muted/50 rounded-full animate-pulse"></div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-muted/50 rounded-md animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
