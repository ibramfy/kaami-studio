export interface Team {
  id: string
  name: string
  slug: string
  position?: string
  bio?: string
  expertise?: string[] // Enumeration dengan multiple values
  education: string[] // Multi line text dengan multiple values
  avatarImage: {
    url: string
  }
  heroImage: {
    url: string
  }
  project?: {
    id: string
    title: string
    slug: string
  }[]
}
