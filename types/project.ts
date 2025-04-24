export interface Project {
  id: string
  title: string
  categories: string[]
  year: number
  location?: string
  client?: string
  description: string
  coverImage?: {
    url: string
  }
  gallery?: {
    url: string
  }[]
}
