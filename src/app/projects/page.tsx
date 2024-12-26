export default function ProjectsPage() {
  return (
    <div className="text-gray-300">
      <code>{`// projects.tsx`}</code>
      <div className="mt-4">
        <h1 className="mb-4 text-2xl font-bold">Projects</h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-200">
              IDE-Style Portfolio
            </h2>
            <p className="mt-2">
              A portfolio website styled like a modern IDE, built with Next.js
              and TypeScript.
            </p>
            <div className="mt-2">
              <code className="text-sm text-gray-400">
                Technologies: Next.js, TypeScript, Tailwind CSS, React-Rnd
              </code>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-200">
              Project Name
            </h2>
            <p className="mt-2">
              Project description goes here. Explain what the project does and
              why it&apos;s interesting.
            </p>
            <div className="mt-2">
              <code className="text-sm text-gray-400">
                Technologies: React, Node.js, MongoDB
              </code>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-200">
              Another Project
            </h2>
            <p className="mt-2">
              Another project description. Highlight the key features and
              technologies used.
            </p>
            <div className="mt-2">
              <code className="text-sm text-gray-400">
                Technologies: Vue.js, Express, PostgreSQL
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
