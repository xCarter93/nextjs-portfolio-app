"use client";

import { useEffect, useState } from "react";

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionData {
  totalContributions: number;
  weeks: ContributionWeek[];
}

export function ContributionGraph() {
  const [data, setData] = useState<ContributionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchContributions() {
      try {
        const response = await fetch("/api/github-contributions");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching contributions:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchContributions();
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-2">
        <div className="h-4 w-48 animate-pulse rounded bg-gray-700" />
        <div className="grid grid-cols-7 gap-1">
          {[...Array(35)].map((_, i) => (
            <div
              key={i}
              className="h-4 w-4 animate-pulse rounded bg-gray-700/50"
            />
          ))}
        </div>
      </div>
    );
  }

  if (!data) {
    return <div>Failed to load contribution data</div>;
  }

  const getContributionColor = (count: number) => {
    if (count === 0) return "bg-gray-900";
    if (count <= 3) return "bg-green-900/90";
    if (count <= 6) return "bg-green-700/90";
    if (count <= 9) return "bg-green-500/90";
    return "bg-green-300/90";
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="text-sm text-gray-400">
        {data.totalContributions} contributions in the last year
      </div>
      <div className="w-full overflow-x-auto">
        <div className="min-w-max px-4">
          <div className="grid grid-flow-col gap-1">
            {data.weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-rows-7 gap-1">
                {week.contributionDays.map((day, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`h-3 w-3 rounded-sm ${getContributionColor(
                      day.contributionCount,
                    )}`}
                    title={`${day.contributionCount} contributions on ${new Date(
                      day.date,
                    ).toLocaleDateString()}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
