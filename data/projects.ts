export interface Project {
  id: string
  slug: string
  title: string
  categories: string[]
  year: number
  location?: string
  client?: string
  description: string
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "urban-residential-complex",
    title: "Urban Residential Complex",
    categories: ["Residential", "Urban"],
    year: 2023,
    location: "New York",
    client: "City Development Corp",
    description: "A modern residential complex in the heart of the city",
  },
  {
    id: "2",
    slug: "cultural-center",
    title: "Cultural Center",
    categories: ["Cultural", "Public"],
    year: 2022,
    location: "Berlin",
    client: "Arts Foundation",
    description: "A vibrant cultural center that celebrates local heritage",
  },
  {
    id: "3",
    slug: "sustainable-office-tower",
    title: "Sustainable Office Tower",
    categories: ["Commercial", "Sustainable"],
    year: 2023,
    location: "Singapore",
    client: "Green Developments Ltd",
    description: "An eco-friendly office tower with innovative energy solutions",
  },
  {
    id: "4",
    slug: "waterfront-pavilion",
    title: "Waterfront Pavilion",
    categories: ["Public", "Landscape"],
    year: 2021,
    location: "Copenhagen",
    client: "City Council",
    description: "A public pavilion that connects the city with its waterfront",
  },
  {
    id: "5",
    slug: "mountain-retreat",
    title: "Mountain Retreat",
    categories: ["Residential", "Landscape"],
    year: 2022,
    location: "Swiss Alps",
    client: "Private Client",
    description: "A private retreat nestled in the mountains",
  },
  {
    id: "6",
    slug: "urban-renewal-project",
    title: "Urban Renewal Project",
    categories: ["Urban", "Mixed-Use"],
    year: 2021,
    location: "Rotterdam",
    client: "City Redevelopment Agency",
    description: "Transformation of an industrial area into a vibrant neighborhood",
  },
  {
    id: "7",
    slug: "educational-campus",
    title: "Educational Campus",
    categories: ["Educational", "Public"],
    year: 2023,
    location: "Toronto",
    client: "Education Board",
    description: "A modern campus designed for collaborative learning",
  },
  {
    id: "8",
    slug: "floating-apartments",
    title: "Floating Apartments",
    categories: ["Residential", "Experimental"],
    year: 2022,
    location: "Amsterdam",
    client: "Future Living Initiative",
    description: "Innovative floating residential units for urban waterways",
  },
  {
    id: "9",
    slug: "desert-museum",
    title: "Desert Museum",
    categories: ["Cultural", "Landscape"],
    year: 2021,
    location: "Dubai",
    client: "National Heritage Foundation",
    description: "A museum that blends with the desert landscape",
  },
]
