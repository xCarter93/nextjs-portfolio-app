import { Suspense } from "react";
import CodingChart from "@/components/WakaTime/CodingChart";
import LanguagesChart from "@/components/WakaTime/LanguagesChart";
import { getActivityData, getLanguagesData } from "@/lib/wakatime";

function ChartSkeleton() {
  return (
    <div className="skeleton h-[500px] w-full rounded-lg bg-gray-800/50" />
  );
}

export default async function CodingStatsPage() {
  const [activityData, languagesData] = await Promise.all([
    getActivityData(),
    getLanguagesData(),
  ]);

  return (
    <div className="flex h-full w-full items-center justify-center overflow-auto bg-gray-800 p-4">
      <div className="flex w-full max-w-[1600px] flex-col gap-4 xl:flex-row">
        <Suspense fallback={<ChartSkeleton />}>
          <CodingChart data={activityData} />
        </Suspense>
        <Suspense fallback={<ChartSkeleton />}>
          <LanguagesChart data={languagesData} />
        </Suspense>
      </div>
    </div>
  );
}
