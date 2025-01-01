interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

interface ContributionGraphProps {
  contributions: ContributionCalendar;
}

export function ContributionGraph({ contributions }: ContributionGraphProps) {
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
        {contributions.totalContributions} contributions in the last year
      </div>
      <div className="w-full overflow-x-auto">
        <div className="min-w-max px-4">
          <div className="grid grid-flow-col gap-1">
            {contributions.weeks.map((week, weekIndex) => (
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
