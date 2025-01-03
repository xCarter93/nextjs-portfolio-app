import { StyledCode } from "@/components/StyledCode";
import { aboutCode } from "@/markdown/about";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="text-gray-300">
      <div className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-2">
        {/* Text Column */}
        <div className="space-y-6">
          <div>
            <h1 className="mb-4 text-2xl font-bold text-slate-200">About Me</h1>
            <p className="text-slate-400">
              Hi, I&apos;m Patrick Carter, a passionate Full Stack Developer
              with a deep love for creating elegant solutions to complex
              problems. With a background in both front-end and back-end
              development, I bring a comprehensive approach to web development.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-slate-200">
              What I Do
            </h2>
            <p className="mb-4 text-slate-400">
              I specialize in building modern web applications and Salesforce
              solutions using cutting-edge technologies. My expertise includes:
            </p>
            <ul className="list-inside list-disc space-y-2 text-slate-400">
              <li>Full-stack development with Next.js and TypeScript</li>
              <li>Salesforce development and administration</li>
              <li>Building responsive and accessible user interfaces</li>
              <li>Database design and optimization</li>
              <li>API development and integration</li>
              <li>Performance optimization and scalability</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-slate-200">
              Salesforce Certifications
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Image
                src="/jd1_cert.png"
                alt="Salesforce JavaScript Developer I"
                width={150}
                height={150}
                className="rounded-lg transition-transform hover:scale-105"
              />
              <Image
                src="/pba_cert.png"
                alt="Salesforce Platform App Builder"
                width={150}
                height={150}
                className="rounded-lg transition-transform hover:scale-105"
              />
              <Image
                src="/sfadmin_cert.png"
                alt="Salesforce Administrator"
                width={150}
                height={150}
                className="rounded-lg transition-transform hover:scale-105"
              />
              <Image
                src="/pd1_cert.png"
                alt="Salesforce Platform Developer I"
                width={150}
                height={150}
                className="rounded-lg transition-transform hover:scale-105"
              />
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-slate-200">
              My Approach
            </h2>
            <p className="text-slate-400">
              I believe in writing clean, maintainable code that solves
              real-world problems. I&apos;m constantly learning and adapting to
              new technologies while maintaining a strong foundation in software
              development principles.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-slate-200">
              Let&apos;s Connect
            </h2>
            <p className="text-slate-400">
              I&apos;m always interested in new opportunities and
              collaborations. Whether you have a project in mind or just want to
              connect, feel free to reach out through any of my social platforms
              or the contact form.
            </p>
          </div>
        </div>

        {/* Code Column */}
        <div className="rounded-lg bg-gray-800 p-4">
          <StyledCode code={aboutCode} language="typescript" />
        </div>
      </div>
    </div>
  );
}
