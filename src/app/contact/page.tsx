import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Patrick Carter",
  description: "Get in touch with me",
};

export default function ContactPage() {
  return (
    <div className="py-8">
      <h1 className="mb-8 text-3xl font-bold text-white">Contact</h1>
      <div className="space-y-4">
        <p className="text-gray-300">
          Feel free to reach out to me through any of the following methods:
        </p>
        <ul className="list-inside list-disc space-y-2 text-gray-300">
          <li>
            Email:{" "}
            <a
              href="mailto:pcarter1993@gmail.com"
              className="text-blue-400 hover:text-blue-300"
            >
              pcarter1993@gmail.com
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/patrick-carter-306746a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              Patrick Carter
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/xCarter93"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              xCarter93
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
