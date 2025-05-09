import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getTeamMember, getAllTeamMemberIds } from "@/lib/team-data"

export async function generateStaticParams() {
  const ids = getAllTeamMemberIds()
  return ids.map((id) => ({ id }))
}

export default function TeamMemberProfile({ params }: { params: { id: string } }) {
  const member = getTeamMember(params.id)

  if (!member) {
    notFound()
  }

  return (
    <div className="bg-background">
      {/* Hero Image with Overlay */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" priority />

        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 p-6 md:p-12 bg-gradient-to-t from-black/80 via-black/50 to-transparent w-full md:w-2/3 h-1/2">
          <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{member.name}</h1>
            <p className="text-xl md:text-2xl text-white/90">{member.position}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/about/team"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Team
          </Link>

          {/* Bio */}
          <div className="prose dark:prose-invert max-w-none mb-12">
            {member.bio.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Expertise */}
            <div>
              <h2 className="text-xl font-bold mb-4">Areas of Expertise</h2>
              <ul className="space-y-2">
                {member.expertise.map((item, index) => (
                  <li key={index} className="text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xl font-bold mb-4">Education</h2>
              <ul className="space-y-2">
                {member.education.map((item, index) => (
                  <li key={index} className="text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Notable Projects</h2>
            <div className="flex flex-wrap gap-2">
              {member.projects.map((project, index) => (
                <span key={index} className="px-3 py-1 bg-muted text-foreground text-sm">
                  {project}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
