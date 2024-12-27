import HomeContent from "../markdown/home.mdx";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-gray-300">
      <div className="prose prose-invert max-w-none">
        <HomeContent />
      </div>
    </div>
  );
}
