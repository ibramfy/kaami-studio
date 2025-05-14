"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  const packages = [
    {
      name: "Basic",
      normalPrice: 50000,
      discountedPrice: 25000,
      features: [
        "Visualisasi 3D Eksterior (1 tampilan)",
        "Denah Perencanaan",
        "Tampak Bangunan (depan, samping kiri & kanan, belakang)",
        "Potongan (melintang & memanjang)",
      ],
      cta: "Pesan Paket Basic",
      popular: false,
    },
    {
      name: "Standar",
      normalPrice: 70000,
      discountedPrice: 35000,
      features: [
        "Visualisasi 3D Eksterior (2 tampilan)",
        "Denah Perencanaan",
        "Tampak Bangunan (depan, samping kiri & kanan, belakang)",
        "Potongan (melintang & memanjang)",
        "Rencana Atap",
        "Rencana Pola Lantai",
        "Rencana Plafond + Rangka Plafond",
        "Rencana Titik Lampu",
        "Rencana Plumbing",
        "Rencana Peletakan Kusen",
        "Detail-detail Arsitektur",
        "Rencana Pondasi",
        "Rencana Kolom & Pembalokan",
        "Gambar Detail Struktur",
        "RAB (Rencana Anggaran Biaya)",
      ],
      cta: "Pesan Paket Standar",
      popular: true,
    },
    {
      name: "Premium",
      normalPrice: 100000,
      discountedPrice: 50000,
      features: [
        "Visualisasi 3D Eksterior (4 tampilan)",
        "Denah Perencanaan",
        "Tampak Bangunan (depan, samping kiri & kanan, belakang)",
        "Potongan (melintang & memanjang)",
        "Rencana Atap",
        "Rencana Pola Lantai",
        "Rencana Plafond + Rangka Plafond",
        "Rencana Titik Lampu",
        "Rencana Plumbing",
        "Rencana Peletakan Kusen",
        "Detail-detail Arsitektur",
        "Rencana Pondasi",
        "Rencana Kolom & Pembalokan",
        "Gambar Detail Struktur",
        "RAB (Rencana Anggaran Biaya)",
      ],
      cta: "Pesan Paket Premium",
      popular: false,
    },
  ]

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 md:px-12 lg:px-24 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Paket Layanan Arsitektur
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Pilih paket yang sesuai dengan kebutuhan proyek Anda. Semua paket mencakup konsultasi awal dan revisi
            terbatas.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                custom={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative rounded-lg overflow-hidden border ${
                  pkg.popular ? "border-purple-500 shadow-lg shadow-purple-500/10" : "border-border shadow-md"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 text-sm font-medium">
                    Populer
                  </div>
                )}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-2">Paket {pkg.name}</h3>
                  <div className="mb-6">
                    <p className="text-3xl font-bold">
                      Rp {pkg.discountedPrice.toLocaleString("id-ID")} <span className="text-sm">/ m²</span>
                    </p>
                    <p className="text-muted-foreground line-through text-sm mt-1">
                      Harga normal: Rp {pkg.normalPrice.toLocaleString("id-ID")} / m²
                    </p>
                    <p className="text-purple-500 text-sm font-medium mt-1">Diskon hingga 50% dari harga normal</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/#contact"
                    className={`w-full flex items-center justify-center py-3 px-4 rounded-md font-medium transition-colors ${
                      pkg.popular
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    }`}
                  >
                    {pkg.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Butuh paket khusus? Hubungi kami untuk konsultasi dan penawaran yang disesuaikan dengan kebutuhan Anda.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-6 py-3 bg-muted hover:bg-muted/80 rounded-md font-medium transition-colors"
            >
              Konsultasi Gratis
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
