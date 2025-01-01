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

interface ContributionCalendar {
  totalContributions: number;
  weeks: {
    contributionDays: {
      contributionCount: number;
      date: string;
    }[];
  }[];
}

interface GitHubProfileProps {
  initialProfile: GitHubProfile;
  initialContributions: ContributionCalendar;
}

export function GitHubProfile({
  initialProfile,
  initialContributions,
}: GitHubProfileProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-lg bg-gray-800 p-4">
        <div className="flex items-center gap-4">
          <Image
            src={initialProfile.avatarUrl}
            alt={initialProfile.name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-200">
              {initialProfile.name}
            </h2>
            <p className="text-gray-400">@{initialProfile.login}</p>
          </div>
        </div>
        <div className="hidden sm:flex sm:items-center sm:gap-4">
          <div className="text-base text-gray-200">
            {initialProfile.repositories.totalCount} repositories
          </div>
          <div className="h-6 w-0.5 bg-gray-600" />
          <div className="text-base text-gray-200">
            {initialProfile.followers.totalCount} followers
          </div>
          <div className="h-6 w-0.5 bg-gray-600" />
          <div className="text-base text-gray-200">
            {initialProfile.following.totalCount} following
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-gray-800 p-4">
        <ContributionGraph contributions={initialContributions} />
      </div>
    </div>
  );
}
