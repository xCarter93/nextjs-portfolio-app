import { Suspense } from "react";
import CodingChart from "@/components/WakaTime/CodingChart";
import LanguagesChart from "@/components/WakaTime/LanguagesChart";
import { getActivityData, getLanguagesData } from "@/lib/wakatime";

function ChartSkeleton() {
  return <div className="skeleton h-[40vh] w-full rounded-lg bg-gray-800/50" />;
}

export default async function CodingStatsPage() {
  const [activityData, languagesData] = await Promise.all([
    getActivityData(),
    getLanguagesData(),
  ]);

  return (
    <div className="flex min-h-full w-full items-center justify-center overflow-auto bg-gray-800">
      <div className="flex w-full max-w-[1600px] flex-col gap-4 py-4 xl:h-full xl:flex-row">
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
