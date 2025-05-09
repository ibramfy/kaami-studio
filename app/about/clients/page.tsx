export default function ClientsPage() {
  return (
    <div className="bg-background">
      {/* Clients Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Clients</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="aspect-[3/2] bg-muted flex items-center justify-center p-6">
                <div className="text-xl font-medium text-muted-foreground">Client {i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
