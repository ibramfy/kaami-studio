export interface Project {
  id: string
  title: string
  slug: string
  description: string
  categories: string[]
  image: string
  year: number
  location?: string
  client?: string
}
