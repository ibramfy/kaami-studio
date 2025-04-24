import { GraphQLClient } from "graphql-request"

// Pastikan kita menggunakan environment variable dengan benar
const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT

// Log untuk debugging
if (process.env.NODE_ENV === "development") {
  console.log("HYGRAPH_ENDPOINT set:", !!HYGRAPH_ENDPOINT)

  // Jangan log URL lengkap di production untuk keamanan
  if (HYGRAPH_ENDPOINT) {
    console.log("HYGRAPH_ENDPOINT value (first 10 chars):", HYGRAPH_ENDPOINT.substring(0, 10) + "...")
  }
}

if (!HYGRAPH_ENDPOINT) {
  console.error("HYGRAPH_ENDPOINT environment variable is not set or is invalid")
}

// Buat client hanya jika endpoint tersedia
const hygraphClient = new GraphQLClient(HYGRAPH_ENDPOINT || "", {
  headers: {
    // Tambahkan token API jika tersedia
    ...(process.env.HYGRAPH_TOKEN && {
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    }),
  },
})

export default hygraphClient
