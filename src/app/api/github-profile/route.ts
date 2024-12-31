import { NextResponse } from "next/server";

const query = `
query($userName:String!) { 
  user(login: $userName) {
    avatarUrl
    name
    login
    repositories {
      totalCount
    }
    followers {
      totalCount
    }
    following {
      totalCount
    }
  }
}
`;

export async function GET() {
  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_PAT}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { userName: "xCarter93" },
      }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data.data.user);
  } catch (error) {
    console.error("Error fetching GitHub profile:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub profile" },
      { status: 500 },
    );
  }
}
