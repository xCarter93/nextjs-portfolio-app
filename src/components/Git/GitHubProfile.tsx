"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface GitHubProfile {
  avatarUrl: string;
  name: string;
  login: string;
  repositories: {
    totalCount: number;
  };
  followers: {
    totalCount: number;
  };
  following: {
    totalCount: number;
  };
}

export function GitHubProfile() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch("/api/github-profile");
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProfile();
  }, []);

  if (isLoading) {
    return (
      <div className="flex animate-pulse items-center justify-center gap-4">
        <div className="h-12 w-12 rounded-full bg-gray-700" />
        <div className="h-6 w-72 rounded bg-gray-700 sm:w-96" />
      </div>
    );
  }

  if (!profile) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-6">
      <Image
        src={profile.avatarUrl}
        alt={profile.name}
        width={48}
        height={48}
        className="rounded-full"
      />
      <div className="flex items-center gap-4 text-base text-gray-200 md:text-lg">
        <span>{profile.login}</span>
        <div className="hidden sm:flex sm:items-center sm:gap-4">
          <div className="h-6 w-0.5 bg-gray-600" />
          <span>{profile.repositories.totalCount} repositories</span>
          <div className="h-6 w-0.5 bg-gray-600" />
          <span>{profile.followers.totalCount} followers</span>
          <div className="h-6 w-0.5 bg-gray-600" />
          <span>{profile.following.totalCount} following</span>
        </div>
      </div>
    </div>
  );
}
