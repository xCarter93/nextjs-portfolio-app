import { Metadata } from "next";
import CodingChart from "@/components/WakaTime/CodingChart";
import LanguagesChart from "@/components/WakaTime/LanguagesChart";
import { ContributionGraph } from "@/components/Git/ContributionGraph";
import { GitHubProfile } from "@/components/Git/GitHubProfile";
import { getActivityData, getLanguagesData } from "@/lib/wakatime";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Coding Stats | Patrick Carter",
  description: "View my coding statistics and activity",
};

function ChartSkeleton() {
  return (
    <div className="h-[40vh] w-full animate-pulse rounded-lg bg-gray-800/50" />
  );
}

export default async function CodingStatsPage() {
  const [activityData, languagesData] = await Promise.all([
    getActivityData(),
    getLanguagesData(),
  ]);

  return (
    <div className="py-8">
      <div className="space-y-8">
        <section className="mx-auto max-w-4xl rounded-lg border border-gray-700 bg-gray-900/50 p-6">
          <GitHubProfile />
        </section>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Suspense fallback={<ChartSkeleton />}>
            <CodingChart data={activityData} />
          </Suspense>
          <Suspense fallback={<ChartSkeleton />}>
            <LanguagesChart data={languagesData} />
          </Suspense>
        </div>
        <section className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-xl font-semibold text-white">
            GitHub Contributions
          </h2>
          <ContributionGraph />
        </section>
      </div>
    </div>
  );
}
