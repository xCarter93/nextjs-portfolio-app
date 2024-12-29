import { NextResponse } from "next/server";

// This will be set at build time
const BUILD_DATE = new Date().toISOString();

export async function GET() {
  try {
    const date = new Date(BUILD_DATE);

    // Format the date to a readable string
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    return NextResponse.json({ lastUpdated: formattedDate });
  } catch (error) {
    console.error("Error getting last updated date:", error);
    return NextResponse.json({ lastUpdated: "Unknown" });
  }
}
