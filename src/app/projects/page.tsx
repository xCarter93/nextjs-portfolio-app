import { getContents } from "@/lib/contents";
import Link from "next/link";
import { Folder } from "lucide-react";

export default function ProjectsPage() {
  const projects = getContents("projects");

  // Get unique technologies and count of projects for each
  const technologies = projects.reduce(
    (acc, project) => {
      const tech = project.metadata.technology;
      if (tech) {
        acc[tech] = (acc[tech] || 0) + 1;
      }
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <div className="p-4 text-gray-300">
      <h1 className="mb-6 text-3xl font-bold">Project Categories</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(technologies).map(([technology, count]) => (
          <Link
            key={technology}
            href={`/projects/${technology.toLowerCase()}`}
            className="group relative flex flex-col items-center rounded-lg border border-gray-700 bg-gray-800/50 p-6 transition-all duration-300 hover:border-gray-600 hover:bg-gray-800/70"
          >
            <Folder className="mb-4 h-16 w-16 text-gray-400 group-hover:text-gray-300" />
            <h2 className="mb-2 text-xl font-semibold capitalize">
              {technology}
            </h2>
            <p className="text-sm text-gray-400">
              {count} project{count === 1 ? "" : "s"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
