import { NavigationButtons } from "./NavigationButtons";
import { TypeWriter } from "./TypeWriter";

export function HomeContent() {
  return (
    <div className="flex w-full max-w-4xl flex-col space-y-6">
      <TypeWriter
        text="Hi, I'm Patrick Carter"
        className="text-4xl font-bold text-slate-200"
      />
      <p className="text-xl text-slate-400">
        Full Stack Developer specializing in modern web applications. I craft
        elegant solutions using Next.js, TypeScript, and cutting-edge
        technologies.
      </p>
      <p className="text-lg text-slate-400">
        I believe that great software is born from a combination of technical
        excellence and creative innovation. Let&apos;s build something amazing
        together.
      </p>
      <NavigationButtons />
      <div className="text-sm text-[#898989]">
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
  );
}
