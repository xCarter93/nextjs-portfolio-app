import { Metadata } from "next";
import { GitHistory } from "@/components/Git/GitHistory";
import { getGitHistory } from "@/lib/actions";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Git History | Patrick Carter",
  description: "View the commit history of this portfolio project",
};

function GitHistorySkeleton() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-4">
        <div className="h-8 animate-pulse rounded bg-gray-700/50" />
        <div className="h-8 animate-pulse rounded bg-gray-700/50" />
        <div className="col-span-2 h-8 animate-pulse rounded bg-gray-700/50" />
      </div>
      {[...Array(10)].map((_, i) => (
        <div key={i} className="grid grid-cols-4 gap-4">
          <div className="h-6 animate-pulse rounded bg-gray-700/30" />
          <div className="h-6 animate-pulse rounded bg-gray-700/30" />
          <div className="col-span-2 h-6 animate-pulse rounded bg-gray-700/30" />
        </div>
      ))}
    </div>
  );
}

async function GitHistorySection() {
  const commits = await getGitHistory();
  return <GitHistory initialCommits={commits} />;
}

export default function GitHistoryPage() {
  return (
    <div className="py-8">
      <Suspense fallback={<GitHistorySkeleton />}>
        <GitHistorySection />
      </Suspense>
    </div>
  );
}
