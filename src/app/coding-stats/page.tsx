import { Metadata } from "next";
import CodingChart from "@/components/WakaTime/CodingChart";
import LanguagesChart from "@/components/WakaTime/LanguagesChart";
import { GitHubProfile } from "@/components/Git/GitHubProfile";
import { getActivityData, getLanguagesData } from "@/lib/wakatime";
import { getGitHubProfile, getGitHubContributions } from "@/lib/actions";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Coding Stats | Patrick Carter",
  description: "View my coding statistics and activity",
};

function GitHubProfileSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-lg bg-gray-800 p-4">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 animate-pulse rounded-full bg-gray-700/50" />
          <div className="space-y-2">
            <div className="h-6 w-32 animate-pulse rounded bg-gray-700/50" />
            <div className="h-4 w-24 animate-pulse rounded bg-gray-700/50" />
          </div>
        </div>
        <div className="hidden sm:flex sm:items-center sm:gap-4">
          <div className="h-6 w-32 animate-pulse rounded bg-gray-700/50" />
          <div className="h-6 w-0.5 bg-gray-600" />
          <div className="h-6 w-24 animate-pulse rounded bg-gray-700/50" />
          <div className="h-6 w-0.5 bg-gray-600" />
          <div className="h-6 w-24 animate-pulse rounded bg-gray-700/50" />
        </div>
      </div>
      <div className="rounded-lg bg-gray-800 p-4">
        <div className="space-y-2">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className="h-3 w-full animate-pulse rounded bg-gray-700/50"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ChartSkeleton() {
  return (
    <div className="space-y-4 rounded-lg bg-gray-800 p-4">
      <div className="h-8 w-48 animate-pulse rounded bg-gray-700/50" />
      <div className="h-[25vh] animate-pulse rounded bg-gray-700/50" />
    </div>
  );
}

async function GitHubProfileSection() {
  const [profileData, contributionsData] = await Promise.all([
    getGitHubProfile(),
    getGitHubContributions(),
  ]);

  return (
    <GitHubProfile
      initialProfile={profileData}
      initialContributions={contributionsData}
    />
  );
}

async function CodingActivitySection() {
  const activityData = await getActivityData();
  return <CodingChart data={activityData} />;
}

async function LanguagesSection() {
  const languagesData = await getLanguagesData();
  return <LanguagesChart data={languagesData} />;
}

export default function CodingStatsPage() {
  return (
    <div className="mx-auto max-w-[90rem] space-y-8 p-4">
      <div className="rounded-lg border border-gray-700 bg-gray-900/50 p-2">
        <Suspense fallback={<GitHubProfileSkeleton />}>
          <GitHubProfileSection />
        </Suspense>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Suspense fallback={<ChartSkeleton />}>
          <CodingActivitySection />
        </Suspense>
        <Suspense fallback={<ChartSkeleton />}>
          <LanguagesSection />
        </Suspense>
      </div>
    </div>
  );
}
