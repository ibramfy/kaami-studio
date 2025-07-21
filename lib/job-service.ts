import { request } from "graphql-request"
import { GET_ALL_JOBS, GET_JOB_BY_SLUG, GET_JOB_SLUGS } from "./job-queries"
import type { JobPosting, JobsResponse } from "@/types/job"
import { isHygraphConfigured } from "./hygraph"

const endpoint = process.env.HYGRAPH_ENDPOINT!
const token = process.env.HYGRAPH_TOKEN!

export async function getAllJobs(): Promise<JobPosting[]> {
  try {
    if (!isHygraphConfigured()) {
      console.log("⚠️ Hygraph not configured, using fallback data")
      const { jobPostings: fallbackJobs } = await import("@/data/jobs")
      return fallbackJobs
    }

    console.log("🔍 Fetching jobs from Hygraph...")
    const data = await request<JobsResponse>(
      endpoint,
      GET_ALL_JOBS,
      {},
      {
        Authorization: `Bearer ${token}`,
      },
    )

    console.log("✅ Jobs fetched successfully:", data.jobPostings?.length || 0)
    return data.jobPostings || []
  } catch (error) {
    console.error("❌ Error fetching jobs from Hygraph:", error)

    // Fallback to local data
    const { jobPostings: fallbackJobs } = await import("@/data/jobs")
    return fallbackJobs
  }
}

export async function getJobBySlug(slug: string): Promise<JobPosting | null> {
  try {
    if (!isHygraphConfigured()) {
      console.log("⚠️ Hygraph not configured, using fallback data")
      const { jobPostings: fallbackJobs } = await import("@/data/jobs")
      return fallbackJobs.find((job) => job.slug === slug) || null
    }

    console.log("🔍 Fetching job by slug from Hygraph:", slug)
    const data = await request<{ jobPosting: JobPosting }>(
      endpoint,
      GET_JOB_BY_SLUG,
      { slug },
      {
        Authorization: `Bearer ${token}`,
      },
    )

    console.log("✅ Job fetched successfully:", data.jobPosting?.jobtitle || "Not found")
    return data.jobPosting || null
  } catch (error) {
    console.error("❌ Error fetching job from Hygraph:", error)

    // Fallback to local data
    const { jobPostings: fallbackJobs } = await import("@/data/jobs")
    return fallbackJobs.find((job) => job.slug === slug) || null
  }
}

export async function getJobSlugs(): Promise<string[]> {
  try {
    if (!isHygraphConfigured()) {
      const { jobPostings: fallbackJobs } = await import("@/data/jobs")
      return fallbackJobs.map((job) => job.slug)
    }

    const data = await request<{ jobPostings: { slug: string }[] }>(
      endpoint,
      GET_JOB_SLUGS,
      {},
      {
        Authorization: `Bearer ${token}`,
      },
    )

    return data.jobPostings?.map((job) => job.slug) || []
  } catch (error) {
    console.error("❌ Error fetching job slugs from Hygraph:", error)

    // Fallback to local data
    const { jobPostings: fallbackJobs } = await import("@/data/jobs")
    return fallbackJobs.map((job) => job.slug)
  }
}
