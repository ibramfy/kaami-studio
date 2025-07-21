export default function JobsLoading() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <div className="h-12 bg-muted rounded-lg w-96 mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-muted rounded-lg w-2/3 mx-auto animate-pulse"></div>
        </div>

        {/* Jobs Grid Skeleton */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="h-6 bg-muted rounded-full w-20 animate-pulse"></div>
                <div className="h-4 bg-muted rounded w-16 animate-pulse"></div>
              </div>
              <div className="h-6 bg-muted rounded w-3/4 mb-3 animate-pulse"></div>
              <div className="space-y-2 mb-6">
                <div className="h-4 bg-muted rounded animate-pulse"></div>
                <div className="h-4 bg-muted rounded w-5/6 animate-pulse"></div>
                <div className="h-4 bg-muted rounded w-4/6 animate-pulse"></div>
              </div>
              <div className="flex gap-3">
                <div className="flex-1 h-10 bg-muted rounded-md animate-pulse"></div>
                <div className="h-10 w-10 bg-muted rounded-md animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
