import type { JobPosting } from "@/types/job"

export const jobPostings: JobPosting[] = [
  {
    id: "1",
    jobtitle: "Senior Frontend Developer",
    slug: "senior-frontend-developer",
    workModel: "Remote",
    description:
      "Kami mencari Senior Frontend Developer yang berpengalaman untuk bergabung dengan tim kami. Anda akan bertanggung jawab untuk mengembangkan antarmuka pengguna yang menarik dan responsif menggunakan teknologi terdepan.",
    requirements: {
      html: "<ul><li>Minimal 5 tahun pengalaman dalam pengembangan frontend</li><li>Menguasai React, TypeScript, dan Next.js</li><li>Pengalaman dengan Tailwind CSS dan Framer Motion</li><li>Memahami prinsip-prinsip UI/UX design</li><li>Kemampuan komunikasi yang baik</li></ul>",
    },
    applyUrl: "https://forms.gle/example1",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "2",
    jobtitle: "UI/UX Designer",
    slug: "ui-ux-designer",
    workModel: "Hybrid",
    description:
      "Bergabunglah dengan tim kreatif kami sebagai UI/UX Designer. Anda akan merancang pengalaman pengguna yang intuitif dan menarik untuk berbagai platform digital.",
    requirements: {
      html: "<ul><li>Minimal 3 tahun pengalaman dalam UI/UX design</li><li>Menguasai Figma, Adobe Creative Suite</li><li>Memahami design thinking dan user research</li><li>Portfolio yang kuat dengan case studies</li><li>Kemampuan prototyping dan wireframing</li></ul>",
    },
    applyUrl: "https://forms.gle/example2",
    createdAt: "2024-01-10T09:00:00Z",
    updatedAt: "2024-01-10T09:00:00Z",
  },
  {
    id: "3",
    jobtitle: "Backend Developer",
    slug: "backend-developer",
    workModel: "On-site",
    description:
      "Kami membutuhkan Backend Developer yang handal untuk mengembangkan dan memelihara sistem backend yang scalable dan secure.",
    requirements: {
      html: "<ul><li>Minimal 4 tahun pengalaman backend development</li><li>Menguasai Node.js, Python, atau Go</li><li>Pengalaman dengan database (PostgreSQL, MongoDB)</li><li>Memahami microservices architecture</li><li>Pengalaman dengan cloud platforms (AWS, GCP)</li></ul>",
    },
    applyUrl: "https://forms.gle/example3",
    createdAt: "2024-01-05T08:00:00Z",
    updatedAt: "2024-01-05T08:00:00Z",
  },
]
