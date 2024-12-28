import HomeContent from "../markdown/home.mdx";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center overflow-y-auto p-4 text-gray-300 lg:justify-center">
      <div className="flex flex-col items-center py-8">
        <div className="mb-8">
          <Image
            src="/me.jpg"
            alt="Patrick Carter"
            width={200}
            height={200}
            className="h-[150px] w-[150px] rounded-full border-2 border-[#5de4c7] lg:h-[200px] lg:w-[200px]"
            priority
          />
        </div>
        <div className="prose-invert prose flex max-w-none flex-col items-center justify-center px-2">
          <HomeContent />
        </div>
        <div className="mt-4 flex flex-col items-center gap-4">
          <a
            href="/Patrick_Carter_Resume.pdf"
            download
            className="rounded border border-[#5de4c7] px-4 py-2 text-[#5de4c7] transition-colors hover:bg-[#5de4c7] hover:text-gray-900"
          >
            Download Resume
          </a>
          <div className="text-center text-sm text-[#898989]">
            Design inspired by{" "}
            <code className="text-[#5de4c7]">
              <a
                href="https://wiscaksono.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit no-underline"
              >
                wiscaksono.com
              </a>
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
