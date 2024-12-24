export default function ProjectsPage() {
  return (
    <div className="text-gray-300">
      <h1 className="mb-4 text-2xl font-bold">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-gray-800 p-4">
          <code>{`// Project 1`}</code>
          <div className="mt-2">
            <h2 className="text-xl font-semibold">IDE-Style Portfolio</h2>
            <p className="mt-2">
              A portfolio website styled like a modern IDE.
            </p>
            <div className="mt-2">
              <code className="text-sm text-gray-400">{`Technologies: Next.js, TypeScript, Tailwind CSS`}</code>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-gray-800 p-4">
          <code>{`// Project 2`}</code>
          <div className="mt-2">
            <h2 className="text-xl font-semibold">Project Name</h2>
            <p className="mt-2">Project description goes here.</p>
            <div className="mt-2">
              <code className="text-sm text-gray-400">{`Technologies: React, Node.js, MongoDB`}</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
