import { getContents } from "@/lib/contents";
import { ModernInnerShadowCardVariant1 } from "./_components/ModernInnerShadowCardVariant1";

const DEFAULT_IMAGE = "/placeholder.jpg";

export default function ProjectsPage() {
  const projects = getContents("projects");

  return (
    <div className="p-4 text-gray-300">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ModernInnerShadowCardVariant1
            key={project.slug}
            title={project.metadata.title}
            hoverTitle={`View ${project.metadata.title}`}
            description={project.metadata.summary}
            tag={project.metadata.technology}
            image={project.metadata.image || DEFAULT_IMAGE}
            hoverImage={project.metadata.image || DEFAULT_IMAGE}
          />
        ))}
      </div>
    </div>
  );
}
