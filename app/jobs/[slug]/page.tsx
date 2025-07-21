import { getJobBySlug, getJobSlugs } from "@/lib/job-service"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, MapPin, Clock, ExternalLink, Calendar } from "lucide-react"

interface JobDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getJobSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { slug } = await params
  const job = await getJobBySlug(slug)

  if (!job) {
    notFound()
  }

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

  // Helper function to render requirements
  const renderRequirements = () => {
    if (!job.requirements || job.requirements.length === 0) {
      return <p className="text-muted-foreground">Tidak ada persyaratan yang tersedia.</p>
    }

    return job.requirements.map((requirement, index) => (
      <div
        key={index}
        className="prose prose-sm max-w-none dark:prose-invert text-muted-foreground mb-4"
        dangerouslySetInnerHTML={{ __html: requirement.html }}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-background pt-24 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/jobs"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Daftar Lowongan
        </Link>

        {/* Job Header */}
        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{job.jobtitle}</h1>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Diposting {new Date(job.createdAt).toLocaleDateString("id-ID")}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  Diperbarui {new Date(job.updatedAt).toLocaleDateString("id-ID")}
                </span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getWorkModelColor(job.workModel)}`}
              >
                <MapPin className="w-4 h-4 mr-1" />
                {job.workModel}
              </span>
            </div>
          </div>

          {/* Apply Button */}
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
          >
            Lamar Sekarang
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>

        {/* Job Content */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Deskripsi Pekerjaan</h2>
              <p className="text-muted-foreground leading-relaxed">{job.description}</p>
            </div>

            {/* Requirements */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Persyaratan</h2>
              <div className="space-y-4">{renderRequirements()}</div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Job Info */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Informasi Lowongan</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Model Kerja:</span>
                  <span className="font-medium text-foreground">{job.workModel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Diposting:</span>
                  <span className="font-medium text-foreground">
                    {new Date(job.createdAt).toLocaleDateString("id-ID")}
                  </span>
                </div>
              </div>
            </div>

            {/* Apply Card */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Tertarik dengan posisi ini?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Jangan lewatkan kesempatan untuk bergabung dengan tim kami!
              </p>
              <a
                href={job.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors font-medium"
              >
                Lamar Sekarang
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
