"use client";

import { useEffect, useState } from "react";
import { getGitHubProfile } from "@/lib/actions";
import Image from "next/image";
import { ContributionGraph } from "./ContributionGraph";

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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await getGitHubProfile();
        setProfile(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch profile",
        );
      }
    }

    fetchProfile();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-lg bg-gray-800 p-4">
        <div className="flex items-center gap-4">
          <Image
            src={profile.avatarUrl}
            alt={profile.name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-200">
              {profile.name}
            </h2>
            <p className="text-gray-400">@{profile.login}</p>
          </div>
        </div>
        <div className="hidden sm:flex sm:items-center sm:gap-4">
          <div className="text-base text-gray-200">
            {profile.repositories.totalCount} repositories
          </div>
          <div className="h-6 w-0.5 bg-gray-600" />
          <div className="text-base text-gray-200">
            {profile.followers.totalCount} followers
          </div>
          <div className="h-6 w-0.5 bg-gray-600" />
          <div className="text-base text-gray-200">
            {profile.following.totalCount} following
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-gray-800 p-4">
        <ContributionGraph />
      </div>
    </div>
  );
}
