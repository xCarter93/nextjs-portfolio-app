import { StyledCode } from "@/components/StyledCode";
import { aboutCode } from "@/markdown/about";

export default function AboutPage() {
  return (
    <div className="text-gray-300">
      <div className="mb-6 mt-4">
        <div className="rounded-lg bg-gray-800">
          <StyledCode code={aboutCode} language="typescript" />
          <p className="mt-4 text-sm text-gray-400">
            Feel free to connect with me on any of the social platforms above
          </p>
        </div>
      </div>
    </div>
  );
}
