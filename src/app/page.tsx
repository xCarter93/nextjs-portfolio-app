export default function Home() {
  return (
    <div className="text-gray-300">
      <h1 className="mb-4 text-2xl font-bold">Welcome to My Portfolio</h1>
      <p className="mb-2">
        This portfolio is designed to look like a code editor. Feel free to
        explore the different sections using the file tree on the left or the
        tabs above.
      </p>
      <div className="rounded-lg bg-gray-800 p-4">
        <code>{`// Start exploring by clicking on about.tsx or projects.tsx`}</code>
      </div>
    </div>
  );
}
