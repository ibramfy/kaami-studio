import Link from "next/link"

export default function JobNotFound() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Lowongan Tidak Ditemukan</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Maaf, lowongan yang Anda cari tidak ditemukan atau sudah tidak tersedia.
        </p>
        <Link
          href="/jobs"
          className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
        >
          Kembali ke Daftar Lowongan
        </Link>
      </div>
    </div>
  )
}
