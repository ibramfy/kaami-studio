export interface JobPosting {
  id: string
  jobtitle: string
  slug: string
  workModel: "On-site" | "Remote" | "Hybrid"
  description: string
  requirements: {
    html: string
  }
  applyUrl: string
  createdAt: string
  updatedAt: string
}

export interface JobsResponse {
  jobPostings: JobPosting[]
}
