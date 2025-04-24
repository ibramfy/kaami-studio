"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h2 className="text-2xl font-bold mb-4">Terjadi kesalahan saat memuat proyek</h2>
      <p className="text-muted-foreground mb-6">Maaf, kami tidak dapat memuat data proyek saat ini.</p>
      <div className="flex gap-4">
        <button onClick={reset} className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md transition-colors">
          Coba Lagi
        </button>
        <Link href="/" className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  )
}
