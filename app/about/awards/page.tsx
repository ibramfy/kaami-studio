export default function AwardsPage() {
  return (
    <div className="bg-background">
      {/* Awards Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Awards & Recognition</h2>

          <div className="space-y-12">
            {[2023, 2022, 2021, 2020].map((year) => (
              <div key={year}>
                <h3 className="text-2xl font-medium mb-6">{year}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="border-t border-gray-200 dark:border-gray-800 pt-4">
                      <h4 className="text-lg font-medium mb-2">Award Name {i}</h4>
                      <p className="text-muted-foreground mb-1">Category</p>
                      <p className="text-sm">Organization</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
