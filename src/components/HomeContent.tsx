export function HomeContent() {
  return (
    <div className="flex w-full max-w-4xl flex-col items-center py-8">
      <div className="prose-invert prose flex w-full flex-col items-center justify-center space-y-4 px-2 text-center sm:px-4">
        <h1 className="text-2xl font-bold">Welcome to my Portfolio</h1>
        <p className="text-base">
          Hi, I&apos;m Patrick Carter, a Senior Sales Systems Analyst at Datadog
          with 8+ years of experience in technical leadership and process
          automation. I specialize in Salesforce development, web technologies,
          and building efficient solutions that bridge business and technology.
        </p>
        <p className="text-base">
          Currently, I focus on optimizing sales operations through technical
          solutions, holding multiple Salesforce certifications and expertise in
          modern web development using React, TypeScript, and Node.js.
        </p>
        <p className="text-sm text-gray-400">
          This portfolio is designed to look like a code editor. Feel free to
          explore the different sections using the file tree on the left or the
          tabs above.
        </p>
      </div>
      <div className="mt-8 flex flex-col items-center gap-4">
        <a
          href="/Patrick_Carter_Resume.pdf"
          download
          className="rounded border border-[#18B4C8] px-4 py-2 text-[#18B4C8] transition-colors hover:bg-[#18B4C8] hover:text-gray-900"
        >
          Download Resume
        </a>
        <div className="text-center text-sm text-[#898989]">
          Design inspired by{" "}
          <code className="text-[#18B4C8]">
            <a
              href="https://wiscaksono.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-inherit no-underline"
            >
              wiscaksono.com
            </a>
          </code>
          {" and "}
          <code className="text-[#18B4C8]">
            <a
              href="https://itscrazydev.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-inherit no-underline"
            >
              itscrazydev.netlify.app
            </a>
          </code>
        </div>
      </div>
    </div>
  );
}
