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
    <div className="min-h-screen bg-white dark:bg-black">
  <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
    {/* Header */}
    <div className="mb-24">
      <h1 className="font-urw-din text-4xl lg:text-6xl font-light tracking-tight text-foreground mb-10 leading-tight lg:leading-[1.2]">
        Bangun Ruang, Tanpa Sekat<br className="hidden lg:block" />— Termasuk di Dalam Tim Kaami
      </h1>
      <p className="font-urw-din text-base lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
        Di <span className="font-semibold">KAAMI STUDIO</span>, kami percaya bahwa arsitektur hebat lahir dari dialog yang jujur, terbuka, dan setara.
        Tidak ada atasan yang tak bisa dikritik, tidak ada ide yang tak bisa dipertanyakan.
        Kami tidak bekerja dalam sistem hierarki kaku. Kami bekerja sebagai <span className="italic">kolektif pemikir</span> — saling menantang, saling mendengarkan, dan tumbuh bersama di setiap proyek yang kami rancang.
      </p>
    </div>

    {/* Nilai-nilai kerja */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-16">
      <div>
        <h2 className="font-urw-din text-lg font-medium text-foreground mb-4 tracking-wide uppercase">Keterbukaan Tanpa Ego</h2>
        <p className="font-urw-din text-muted-foreground text-base leading-relaxed">
          Kami mendesain ruang seperti kami membangun tim: tanpa sekat yang menghalangi kolaborasi.
          Setiap suara berarti, setiap pendapat penting.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-medium text-foreground mb-4 tracking-wide uppercase">Ide Terbaik Menentukan Arah</h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          Bukan jabatan yang menentukan keputusan, tapi kualitas gagasan. Sketsa sederhana pun bisa memicu diskusi besar — dan kami rayakan itu.
        </p>
      </div>

      <div>
        <h2 className="font-urw-din text-lg font-medium text-foreground mb-4 tracking-wide uppercase">Proses = Tempat Belajar</h2>
        <p className="font-urw-din text-muted-foreground text-base leading-relaxed">
          Kami percaya pada proses iteratif: mencoba, mengkritik, memperbaiki, dan tumbuh bersama. Kamu tidak diharapkan sempurna — hanya jujur dan eksploratif.
        </p>
      </div>
    </div>

    {/* Call to Action */}
    <div className="mt-32 lg:mt-40 border-t border-border pt-16">
      <div className="lg:flex items-end justify-between">
        <div className="max-w-xl">
          <h3 className="font-urw-din text-2xl lg:text-3xl font-medium text-foreground mb-4">
            Apakah Kamu Orang yang Kami Cari?
          </h3>
          <p className="font-urw-din text-muted-foreground text-base lg:text-lg leading-relaxed">
            Jika kamu ingin bekerja dalam tim setara, terbuka, dan terus belajar lewat dialog desain yang jujur —
            mungkin tempatmu memang ada di sini.
          </p>
        </div>        
      </div>
    </div>

        {/* Jobs Grid */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                <span className="font-urw-din text-xs text-muted-foreground flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {new Date(job.createdAt).toLocaleDateString("id-ID")}
                </span>
              </div>

              {/* Job Title */}
              <h3 className="font-urw-din text-xl font-semibold text-foreground mb-3">{job.jobtitle}</h3>

              {/* Description */}
              <p className="font-urw-din text-muted-foreground mb-6 line-clamp-3">{job.description}</p>

              {/* Actions */}
              <div className="flex gap-3">
                <Link
                  href={`/jobs/${job.slug}`}
                  className="font-urw-din flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-md text-center hover:bg-primary/90 transition-colors"
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
