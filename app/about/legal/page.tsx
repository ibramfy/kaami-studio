import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function LegalPage() {
  return (
    <div className="bg-background">
      {/* Legal Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Legal Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div>
              <h3 className="text-xl font-medium mb-4">Company Information</h3>
              <p className="mb-6">
                KAAMI ARSITEK STUDIO Ltd.
                <br />
                Registration Number: 12345678
                <br />
                Registered Address: 123 Design Street, Creative City, CC1 2DE
              </p>

              <h3 className="text-xl font-medium mb-4 mt-8">Privacy Policy</h3>
              <p className="mb-6">
                We are committed to protecting your privacy. Our privacy policy outlines how we collect, use, and
                safeguard your personal information.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium hover:text-purple-500 transition-colors"
              >
                Read Full Privacy Policy <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Terms of Service</h3>
              <p className="mb-6">
                By using our services, you agree to our terms of service. These terms outline the rules, guidelines, and
                expectations for using our services.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium hover:text-purple-500 transition-colors"
              >
                Read Full Terms of Service <ArrowRight className="ml-1 w-4 h-4" />
              </Link>

              <h3 className="text-xl font-medium mb-4 mt-8">Code of Conduct</h3>
              <p className="mb-6">
                Our code of conduct establishes the principles and standards that guide our work and relationships with
                clients, partners, and the community.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium hover:text-purple-500 transition-colors"
              >
                Read Full Code of Conduct <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
