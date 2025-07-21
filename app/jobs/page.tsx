import { getAllJobs } from "@/lib/job-service"
import Link from "next/link"
import { MapPin, Clock, ExternalLink } from "lucide-react"

export default async function JobsPage() {
  const jobs = await getAllJobs()

  const getWorkModelColor = (workModel: string) => {
    switch (workModel) {
      case "Remote":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Hybrid":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "On-site":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-background pt-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Karir Bersama Kami</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bergabunglah dengan tim yang passionate dalam menciptakan solusi digital inovatif
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Work Model Badge */}
              <div className="flex justify-between items-start mb-4">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getWorkModelColor(job.workModel)}`}
                >
                  <MapPin className="w-3 h-3 mr-1" />
                  {job.workModel}
                </span>
                <span className="text-xs text-muted-foreground flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {new Date(job.createdAt).toLocaleDateString("id-ID")}
                </span>
              </div>

              {/* Job Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3">{job.jobtitle}</h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 line-clamp-3">{job.description}</p>

              {/* Actions */}
              <div className="flex gap-3">
                <Link
                  href={`/jobs/${job.slug}`}
                  className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-md text-center hover:bg-primary/90 transition-colors"
                >
                  Lihat Detail
                </Link>
                <a
                  href={job.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {jobs.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Belum Ada Lowongan Tersedia</h3>
            <p className="text-muted-foreground">Saat ini belum ada posisi yang tersedia. Silakan cek kembali nanti.</p>
          </div>
        )}
      </div>
    </div>
  )
}
