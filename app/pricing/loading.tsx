import { Navbar } from "@/components/navbar"

export default function Loading() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      <div className="pt-28 pb-16 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="h-12 w-64 bg-muted/50 rounded-md mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 w-96 bg-muted/50 rounded-md mx-auto mb-16 animate-pulse"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[600px] bg-muted/50 rounded-lg animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
