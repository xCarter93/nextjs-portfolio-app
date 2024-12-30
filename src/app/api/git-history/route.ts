import { NextResponse } from "next/server";

export async function GET() {
  try {
    const owner = "xCarter93";
    const repo = "nextjs-portfolio-app";
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_PAT}`,
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}`);
    }

    const commits = await response.json();
    return NextResponse.json(commits);
  } catch (error) {
    console.error("Error fetching commits:", error);
    return NextResponse.json(
      { error: "Failed to fetch commits" },
      { status: 500 },
    );
  }
}
