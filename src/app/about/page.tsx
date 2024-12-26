import AboutContent from "@/markdown/about.mdx";

export default function AboutPage() {
  return (
    <div className="text-gray-300">
      <div className="space-y-4">
        <div className="bg-gray-800">
          <div className="mt-4">
            <AboutContent />
          </div>
        </div>
      </div>
    </div>
  );
}
