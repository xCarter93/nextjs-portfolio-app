"use server";

import { redirect } from "next/navigation";
import { revalidatePath, revalidateTag } from "next/cache";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { Resend } from "resend";
import { createElement } from "react";
import { ContactTemplate } from "@/components/emails/ContactTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

// GitHub GraphQL Queries
const GITHUB_PROFILE_QUERY = `
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

const GITHUB_CONTRIBUTIONS_QUERY = `
query($userName:String!) { 
  user(login: $userName){
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
`;

export async function getGitHubProfile() {
  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_PAT}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GITHUB_PROFILE_QUERY,
        variables: { userName: "xCarter93" },
      }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}`);
    }

    const data = await response.json();
    return data.data.user;
  } catch (error) {
    console.error("Error fetching GitHub profile:", error);
    throw new Error("Failed to fetch GitHub profile");
  }
}

export async function getGitHubContributions() {
  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_PAT}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GITHUB_CONTRIBUTIONS_QUERY,
        variables: { userName: "xCarter93" },
      }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}`);
    }

    const data = await response.json();
    return data.data.user.contributionsCollection.contributionCalendar;
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    throw new Error("Failed to fetch GitHub contributions");
  }
}

export async function getGitHistory() {
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
    return commits;
  } catch (error) {
    console.error("Error fetching commits:", error);
    throw new Error("Failed to fetch commits");
  }
}

export const createPost = async (formData: FormData) => {
  const user = await currentUser();
  const desc = formData.get("desc") as string;

  if (!user) {
    return redirect("/guest-book");
  }

  if (!desc) {
    return redirect("/guest-book");
  }

  try {
    // Create or update user in our database with only the fields we have in our schema
    const dbUser = await prisma.user.upsert({
      where: { id: user.id },
      create: {
        id: user.id,
        name: user.username || user.firstName || "Anonymous",
        image: user.imageUrl || null,
      },
      update: {
        name: user.username || user.firstName || "Anonymous",
        image: user.imageUrl || null,
      },
    });

    // Create the guest book entry
    await prisma.guestBookEntry.create({
      data: {
        message: desc,
        userId: dbUser.id,
      },
    });

    revalidatePath("/guest-book");
    revalidateTag("guestBookEntries");
  } catch (error) {
    throw error;
  }
};

type EmailState = { success: boolean } | null;

export async function sendEmail(prevState: EmailState, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    throw new Error("Please fill in all fields.");
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: ["xcarter93@gmail.com"],
      subject: `${name} has reached out!`,
      replyTo: email,
      react: createElement(ContactTemplate, { name, email, message }),
    });

    return { success: true };
  } catch {
    throw new Error("Failed to send message. Please try again.");
  }
}

export async function getAstronomyData() {
  try {
    const apiKey = process.env.IP_GEOLOCATION_API_KEY;
    const response = await fetch(
      `https://api.ipgeolocation.io/astronomy?apiKey=${apiKey}`,
      { next: { revalidate: 60 } }, // Cache for 1 minute
    );

    if (!response.ok) {
      throw new Error("Failed to fetch astronomy data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching astronomy data:", error);
    throw new Error("Failed to fetch astronomy data");
  }
}
