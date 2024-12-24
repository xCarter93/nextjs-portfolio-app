export default function AboutPage() {
  return (
    <div className="text-gray-300">
      <h1 className="mb-4 text-2xl font-bold">About Me</h1>
      <div className="space-y-4">
        <div className="rounded-lg bg-gray-800 p-4">
          <code>{`// Professional Summary`}</code>
          <p className="mt-2">
            A passionate developer with expertise in modern web technologies.
          </p>
        </div>

        <div className="rounded-lg bg-gray-800 p-4">
          <code>{`// Skills`}</code>
          <ul className="mt-2 list-disc pl-4">
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Cloud Architecture</li>
            <li>DevOps</li>
          </ul>
        </div>

        <div className="rounded-lg bg-gray-800 p-4">
          <code>{`// Experience`}</code>
          <div className="mt-2">
            <p className="font-semibold">Senior Developer @ Company</p>
            <p className="text-sm text-gray-400">2020 - Present</p>
          </div>
        </div>
      </div>
    </div>
  );
}
