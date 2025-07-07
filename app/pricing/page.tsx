"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function PricingPage() {
  const [showPopup, setShowPopup] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState("")

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

  const handlePackageClick = (pkgName: string) => {
    if (pkgName === "Standar") {
      setSelectedPackage(pkgName)
      setShowPopup(true)
    }
  }

  return (
    <div className="bg-background">
      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 relative"
          >
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-bold mb-4">Pesan Paket {selectedPackage}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Pilih metode pembayaran atau konsultasi untuk Paket {selectedPackage}
            </p>
            
            <div className="space-y-4">
              <button
                className="w-full flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                onClick={() => window.open("https://metamask.io/", "_blank")}
              >
                <div className="flex items-center">
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.5 4L17.5 13.5L20 9L28.5 4Z" fill="#E2761B" stroke="#E2761B" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.5 4L14.25 13.625L12 9L3.5 4Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24.5 21.5L21.5 26L27.5 27.5L29 21.5L24.5 21.5Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 21.5L4.5 27.5L10.5 26L7.5 21.5L3 21.5Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.5 15.5L8.5 18.5L14.5 18.75L14.25 11.75L10.5 15.5Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21.5 15.5L17.625 11.5L17.5 18.75L23.5 18.5L21.5 15.5Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.5 26L14.5 24.5L11 21.5L10.5 26Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 24.5L21.5 26L21 21.5L17.5 24.5Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21.5 26L17.5 24.5L18 27L17.75 29.5L21.5 26Z" fill="#D7C1B3" stroke="#D7C1B3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.5 26L14.25 29.5L14 27L14.5 24.5L10.5 26Z" fill="#D7C1B3" stroke="#D7C1B3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.5 20L11 18.5L14 19.5L14.5 20Z" fill="#233447" stroke="#233447" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 20L18 19.5L21 18.5L17.5 20Z" fill="#233447" stroke="#233447" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.5 26L11 21.5L7.5 21.5L10.5 26Z" fill="#CD6116" stroke="#CD6116" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 21.5L21.5 26L24.5 21.5L21 21.5Z" fill="#CD6116" stroke="#CD6116" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23.5 18.5L17.5 20L18 19.5L21.5 15.5L23.5 18.5Z" fill="#CD6116" stroke="#CD6116" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 18.5L10.5 15.5L14 19.5L14.5 20L8.5 18.5Z" fill="#CD6116" stroke="#CD6116" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 18.5L14.5 18.75L14.5 20L8.5 18.5Z" fill="#E4751F" stroke="#E4751F" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23.5 18.5L17.5 20L17.5 18.75L23.5 18.5Z" fill="#E4751F" stroke="#E4751F" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 24.5L14.5 24.5L14 27L14.25 29.5L17.75 29.5L18 27L17.5 24.5Z" fill="#F6851B" stroke="#F6851B" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.5 24.5L11 21.5L14 21.5L14.5 24.5Z" fill="#C0AD9E" stroke="#C0AD9E" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 21.5L17.5 24.5L21 24.5L21 21.5Z" fill="#C0AD9E" stroke="#C0AD9E" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 27L17.75 29.5L20 29L18 27Z" fill="#161616" stroke="#161616" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.25 29.5L14 27L12 29L14.25 29.5Z" fill="#161616" stroke="#161616" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21.5 26L20 29L22 29.5L24 27L21.5 26Z" fill="#763D16" stroke="#763D16" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.5 26L8 27L10 29.5L12 29L10.5 26Z" fill="#763D16" stroke="#763D16" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21.5 15.5L22 9L19.5 4H12.5L10 9L10.5 15.5L8.5 18.5L11 21.5L14.5 24.5L17.5 24.5L21 21.5L23.5 18.5L21.5 15.5Z" fill="#763D16" stroke="#763D16" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="font-medium">Bayar dengan ETH</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Metamask atau Wallet lainnya</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                className="w-full flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
              >
                <div className="flex items-center">
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0C7.163 0 0 7.163 0 16C0 19.578 1.156 22.894 3.138 25.65L1.794 30.294L6.613 28.988C9.269 30.788 12.506 32 16 32C24.837 32 32 24.837 32 16C32 7.163 24.837 0 16 0Z" fill="#25D366"/>
                    <path d="M23.363 22.506C23.7 21.325 23.881 20.094 23.9 18.856C23.9 15.394 21.006 12.5 17.544 12.5C15.694 12.488 13.938 13.338 12.8 14.8C11.663 16.263 11.275 18.175 11.75 20H8.1L5.5 23.6L8.1 27.2H12.5C15.7 27.2 18.5 25.5 20.3 22.8L23.363 22.506Z" fill="white"/>
                    <path d="M17.5 24.5C15.3 24.5 13.4 23.2 12.5 21.3H10.9L9.3 23.9L10.9 26.5H14.1C15.2 27.9 16.8 28.8 18.6 28.8H22L24.6 25.2L22 21.6H17.5V24.5Z" fill="#25D366"/>
                    <path d="M20.3 18.9C20.1 17.7 19.4 16.7 18.4 16.1C17.4 15.5 16.2 15.4 15.1 15.8C14 16.2 13.2 17 12.8 18H10.2L8.6 20.6L10.2 23.2H14.6C15.7 24.6 17.3 25.5 19.1 25.5H22.5L25.1 21.9L22.5 18.3H20.3V18.9Z" fill="white"/>
                  </svg>
                  <div>
                    <p className="font-medium">Konsultasi via WhatsApp</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Diskusikan kebutuhan Anda</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}

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

                  <button
                    onClick={() => handlePackageClick(pkg.name)}
                    className={`w-full flex items-center justify-center py-3 px-4 rounded-md font-medium transition-colors ${
                      pkg.popular
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    }`}
                  >
                    {pkg.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
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