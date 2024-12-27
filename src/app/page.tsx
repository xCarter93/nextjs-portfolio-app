import HomeContent from "../markdown/home.mdx";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 text-gray-300">
      <div className="flex flex-col items-center">
        <div className="prose-invert prose flex max-w-none flex-col items-center justify-center">
          <HomeContent />
        </div>
        <div className="mt-4 text-center text-sm text-[#898989]">
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
  );
}
