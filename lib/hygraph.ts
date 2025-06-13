import { GraphQLClient } from "graphql-request"

// Gunakan fallback untuk environment variables
const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT || "https://api-ap-south-1.hygraph.com/v2/dummy-endpoint/master"
const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN || ""

// Buat client dengan error handling yang lebih baik
const createHygraphClient = () => {
  try {
    return new GraphQLClient(HYGRAPH_ENDPOINT, {
      headers: {
        ...(HYGRAPH_TOKEN && {
          Authorization: `Bearer ${HYGRAPH_TOKEN}`,
        }),
      },
    })
  } catch (error) {
    console.error("Failed to create Hygraph client:", error)
    // Return a dummy client that will return empty data
    return {
      request: async () => {
        console.warn("Using fallback data because Hygraph client failed to initialize")
        return { projects: [] }
      },
    } as GraphQLClient
  }
}

const hygraphClient = createHygraphClient()

export default hygraphClient
