import Link from "next/link"

export default function TeamMemberNotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Team Member Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        We couldn't find the team member you're looking for. They may have moved to a different position or left the
        company.
      </p>
      <Link
        href="/about/team"
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
      >
        Return to Team Page
      </Link>
    </div>
  )
}
