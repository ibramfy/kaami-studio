import { NextResponse } from "next/server"

export async function GET() {
  // Hanya tampilkan dalam mode development
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ message: "This endpoint is only available in development mode" }, { status: 403 })
  }

  return NextResponse.json({
    hygraphEndpointSet: !!process.env.HYGRAPH_ENDPOINT,
    hygraphTokenSet: !!process.env.HYGRAPH_TOKEN,
    nodeEnv: process.env.NODE_ENV,
    // Jangan tampilkan nilai lengkap untuk keamanan
    hygraphEndpointPrefix: process.env.HYGRAPH_ENDPOINT ? process.env.HYGRAPH_ENDPOINT.substring(0, 10) + "..." : null,
  })
}
