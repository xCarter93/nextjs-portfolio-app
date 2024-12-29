import { NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function GET() {
  try {
    // Get the last commit date
    const { stdout } = await execAsync("git log -1 --format=%cd");
    const date = new Date(stdout);

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
