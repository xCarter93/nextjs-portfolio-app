import { getContents } from "@/lib/contents";
import { ModernInnerShadowCardVariant1 } from "./_components/ModernInnerShadowCardVariant1";

export default function ProjectsPage() {
  const projects = getContents("projects");

  return (
    <div className="p-4 text-gray-300">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ModernInnerShadowCardVariant1
            key={project.slug}
            backgroundImage={project.metadata.image}
          >
            <div className="flex h-full flex-col justify-between space-y-2">
              <div>
                <h2 className="text-lg font-semibold text-gray-200">
                  {project.metadata.title}
                </h2>
                <p className="line-clamp-2 text-sm text-gray-400">
                  {project.metadata.summary}
                </p>
              </div>
              <code className="text-sm text-[#5de4c7]">
                Technology: {project.metadata.technology}
              </code>
            </div>
          </ModernInnerShadowCardVariant1>
        ))}
      </div>
    </div>
  );
}
