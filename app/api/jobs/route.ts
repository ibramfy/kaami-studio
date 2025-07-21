import { NextResponse } from "next/server"
import { getAllJobs } from "@/lib/job-service"

export async function GET() {
  try {
    console.log("🚀 /api/jobs called")

    const jobs = await getAllJobs()

    console.log("✅ Jobs API response:", {
      count: jobs.length,
      source: process.env.HYGRAPH_ENDPOINT ? "hygraph" : "fallback",
    })

    return NextResponse.json({
      success: true,
      jobs,
      count: jobs.length,
      source: process.env.HYGRAPH_ENDPOINT ? "hygraph" : "fallback",
    })
  } catch (error) {
    console.error("❌ Jobs API Error:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch jobs",
        jobs: [],
        count: 0,
        source: "error",
      },
      { status: 500 },
    )
  }
}
