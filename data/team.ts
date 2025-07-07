import type { Team } from "@/types/team"

export const teamMembers: Team[] = [
  {
    id: "1",
    name: "Alex Johnson",
    slug: "alex-johnson",
    position: "Principal Architect",
    bio: "Alex Johnson is the Principal Architect and founder of KAAMI ARSITEK STUDIO. With over 20 years of experience in architectural design, Alex has led numerous award-winning projects across residential, commercial, and cultural sectors.",
    expertise: ["Sustainable Design", "Urban Planning", "Residential Architecture", "Cultural Buildings"],
    education: [
      "Master of Architecture, Harvard University",
      "Bachelor of Arts in Environmental Design, University of California",
    ],
    avatarImage: {
      url: "/placeholder.svg?height=400&width=400",
    },
    heroImage: {
      url: "/placeholder.svg?height=800&width=1600",
    },
    project: [
      {
        id: "1",
        title: "Urban Residential Complex",
        slug: "urban-residential-complex",
      },
      {
        id: "2",
        title: "Cultural Center",
        slug: "cultural-center",
      },
    ],
  },
  {
    id: "2",
    name: "Sarah Chen",
    slug: "sarah-chen",
    position: "Design Director",
    bio: "Sarah Chen serves as the Design Director at KAAMI ARSITEK STUDIO, where she oversees the creative direction of all projects. With a background in both architecture and interior design, Sarah brings a holistic approach to spatial design.",
    expertise: ["Interior Design", "Exhibition Design", "Material Innovation", "Digital Fabrication"],
    education: [
      "Master of Architecture, Yale University",
      "Bachelor of Fine Arts in Interior Design, Rhode Island School of Design",
    ],
    avatarImage: {
      url: "/placeholder.svg?height=400&width=400",
    },
    heroImage: {
      url: "/placeholder.svg?height=800&width=1600",
    },
    project: [
      {
        id: "4",
        title: "Waterfront Pavilion",
        slug: "waterfront-pavilion",
      },
      {
        id: "5",
        title: "Mountain Retreat",
        slug: "mountain-retreat",
      },
    ],
  },
  {
    id: "3",
    name: "Michael Rodriguez",
    slug: "michael-rodriguez",
    position: "Technical Lead",
    bio: "Michael Rodriguez is the Technical Lead at KAAMI ARSITEK STUDIO, where he bridges the gap between design vision and technical execution. With extensive experience in building technology and construction management.",
    expertise: ["Building Technology", "Structural Design", "Construction Management", "Sustainable Systems"],
    education: ["Master of Science in Structural Engineering, MIT", "Bachelor of Architecture, University of Texas"],
    avatarImage: {
      url: "/placeholder.svg?height=400&width=400",
    },
    heroImage: {
      url: "/placeholder.svg?height=800&width=1600",
    },
    project: [
      {
        id: "3",
        title: "Sustainable Office Tower",
        slug: "sustainable-office-tower",
      },
      {
        id: "7",
        title: "Educational Campus",
        slug: "educational-campus",
      },
    ],
  },
  {
    id: "4",
    name: "Emma Wilson",
    slug: "emma-wilson",
    position: "Project Manager",
    bio: "Emma Wilson is a Project Manager at KAAMI ARSITEK STUDIO, where she orchestrates the complex process of bringing architectural projects to life. With her exceptional organizational skills and strategic thinking.",
    expertise: ["Project Planning", "Team Coordination", "Client Relations", "Budget Management"],
    education: [
      "Master of Architecture, Columbia University",
      "Master of Business Administration, INSEAD",
      "Bachelor of Science in Architectural Studies, University of Illinois",
    ],
    avatarImage: {
      url: "/placeholder.svg?height=400&width=400",
    },
    heroImage: {
      url: "/placeholder.svg?height=800&width=1600",
    },
    project: [
      {
        id: "2",
        title: "Cultural Center",
        slug: "cultural-center",
      },
      {
        id: "8",
        title: "Floating Apartments",
        slug: "floating-apartments",
      },
    ],
  },
  {
    id: "5",
    name: "David Kim",
    slug: "david-kim",
    position: "Sustainability Specialist",
    bio: "David Kim is the Sustainability Specialist at KAAMI ARSITEK STUDIO, where he leads the firm's efforts to create environmentally responsible architecture. With deep knowledge of sustainable design principles.",
    expertise: ["Green Building Certification", "Environmental Analysis", "Biophilic Design", "Energy Modeling"],
    education: [
      "Master of Environmental Design, University of British Columbia",
      "Bachelor of Science in Environmental Engineering, Stanford University",
    ],
    avatarImage: {
      url: "/placeholder.svg?height=400&width=400",
    },
    heroImage: {
      url: "/placeholder.svg?height=800&width=1600",
    },
    project: [
      {
        id: "3",
        title: "Sustainable Office Tower",
        slug: "sustainable-office-tower",
      },
      {
        id: "5",
        title: "Mountain Retreat",
        slug: "mountain-retreat",
      },
    ],
  },
  {
    id: "6",
    name: "Olivia Martinez",
    slug: "olivia-martinez",
    position: "Interior Designer",
    bio: "Olivia Martinez is an Interior Designer at KAAMI ARSITEK STUDIO, where she creates thoughtful and inspiring interior spaces that complement the architectural vision. With her refined aesthetic sensibility.",
    expertise: ["Residential Interiors", "Hospitality Design", "Furniture Design", "Material Curation"],
    education: [
      "Master of Interior Architecture, Royal College of Art",
      "Bachelor of Arts in Interior Design, Parsons School of Design",
    ],
    avatarImage: {
      url: "/placeholder.svg?height=400&width=400",
    },
    heroImage: {
      url: "/placeholder.svg?height=800&width=1600",
    },
    project: [
      {
        id: "5",
        title: "Mountain Retreat",
        slug: "mountain-retreat",
      },
      {
        id: "2",
        title: "Cultural Center",
        slug: "cultural-center",
      },
    ],
  },
]

export function getTeamMemberBySlug(slug: string): Team | undefined {
  return teamMembers.find((member) => member.slug === slug)
}

export function getAllTeamMemberSlugs(): string[] {
  return teamMembers.map((member) => member.slug)
}
