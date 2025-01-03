import { getContents } from "@/lib/contents";
import { ModernInnerShadowCardVariant1 } from "../_components/ModernInnerShadowCardVariant1";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const DEFAULT_IMAGE = "/placeholder.jpg";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const projects = getContents("projects");
  const category = params.category.toLowerCase();

  const filteredProjects = projects.filter(
    (project) => project.metadata.technology?.toLowerCase() === category,
  );

  if (filteredProjects.length === 0) {
    notFound();
  }

  return (
    <div className="p-4 text-gray-300">
      <div className="mb-6">
        <Link
          href="/projects"
          className="group flex items-center gap-2 text-gray-400 transition-colors hover:text-gray-200"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Categories</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
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
