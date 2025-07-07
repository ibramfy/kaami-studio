import { GraphQLClient } from "graphql-request"

// Pastikan kita menggunakan environment variable dengan benar
const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT
const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN

// Log untuk debugging hanya di development
if (process.env.NODE_ENV === "development") {
  console.log("HYGRAPH_ENDPOINT set:", !!HYGRAPH_ENDPOINT)
  console.log("HYGRAPH_TOKEN set:", !!HYGRAPH_TOKEN)
}

// Buat client hanya jika endpoint tersedia
let hygraphClient: GraphQLClient

if (HYGRAPH_ENDPOINT) {
  hygraphClient = new GraphQLClient(HYGRAPH_ENDPOINT, {
    headers: {
      // Tambahkan token API jika tersedia
      ...(HYGRAPH_TOKEN && {
        Authorization: `Bearer ${HYGRAPH_TOKEN}`,
      }),
    },
  })
} else {
  // Create a dummy client that will throw meaningful errors
  hygraphClient = new GraphQLClient("", {
    headers: {},
  })
}

export default hygraphClient

// Export a function to check if Hygraph is configured
export function isHygraphConfigured(): boolean {
  return !!(HYGRAPH_ENDPOINT && HYGRAPH_TOKEN)
}
