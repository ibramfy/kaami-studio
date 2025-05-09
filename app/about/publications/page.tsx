import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function PublicationsPage() {
  return (
    <div className="bg-background">
      {/* Publications Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Publications</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] bg-muted overflow-hidden mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-violet-600/20 transition-transform duration-500 group-hover:scale-105"></div>
                </div>
                <h3 className="text-xl font-medium mb-2">Publication Title {i + 1}</h3>
                <p className="text-muted-foreground mb-4">Publisher • 2023</p>
                <Link
                  href="#"
                  className="inline-flex items-center text-sm font-medium hover:text-purple-500 transition-colors"
                >
                  Read More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
