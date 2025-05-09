import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Main Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 tracking-tight">About KAAMI ARSITEK</h1>

          {/* Image */}
          <div className="aspect-[16/9] w-full bg-muted rounded-lg overflow-hidden mb-12">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="KAAMI ARSITEK Studio"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div className="prose dark:prose-invert max-w-none text-left">
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              KAAMI ARSITEK STUDIO is a forward-thinking architectural design studio focused on creating innovative
              solutions that bridge the gap between functionality and aesthetics.
            </p>

            <p className="mb-6 leading-relaxed">
              Founded in 2010, our studio has grown from a small team of passionate designers to a diverse group of
              creative professionals working across multiple disciplines. We believe that great architecture has the
              power to transform spaces, communities, and lives.
            </p>

            <p className="mb-6 leading-relaxed">
              Our approach combines rigorous research, thoughtful design, and meticulous execution to deliver projects
              that exceed expectations and create lasting impact. We work closely with our clients to understand their
              needs, aspirations, and constraints, ensuring that each project is uniquely tailored to its context and
              purpose.
            </p>

            <p className="leading-relaxed">
              At KAAMI ARSITEK, we are committed to sustainable design practices that minimize environmental impact
              while maximizing comfort, functionality, and beauty. We believe that responsible architecture is not just
              about using eco-friendly materials, but about creating spaces that promote well-being, foster community,
              and stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Vision</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="leading-relaxed">
                  We envision a world where architecture serves as a catalyst for positive change, creating spaces that
                  inspire, connect, and elevate the human experience.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="leading-relaxed">
                  To create thoughtful, sustainable architectural solutions that respond to the unique needs of our
                  clients, communities, and the environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
