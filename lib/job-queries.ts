export const GET_ALL_JOBS = `
  query GetAllJobs {
    jobPostings(orderBy: createdAt_DESC) {
      id
      jobtitle
      slug
      workModel
      description
      requirements {
        html
      }
      applyUrl
      createdAt
      updatedAt
    }
  }
`

export const GET_JOB_BY_SLUG = `
  query GetJobBySlug($slug: String!) {
    jobPosting(where: { slug: $slug }) {
      id
      jobtitle
      slug
      workModel
      description
      requirements {
        html
      }
      applyUrl
      createdAt
      updatedAt
    }
  }
`

export const GET_JOB_SLUGS = `
  query GetJobSlugs {
    jobPostings {
      slug
    }
  }
`
