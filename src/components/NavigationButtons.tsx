"use client";

import Link from "next/link";
import { useTabsContext } from "@/contexts/TabsContext";
import { SkillIconsTypescript } from "./Icons/SkillIconsTypescript";
import { VscodeIconsFileTypeLightJson } from "./Icons/VscodeIconsFileTypeLightJson";

export function NavigationButtons() {
  const { addTab } = useTabsContext();

  return (
    <div className="flex flex-wrap gap-4">
      <Link
        href="/about"
        className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        onClick={() =>
          addTab({
            name: "about.ts",
            path: "/about",
            icon: SkillIconsTypescript,
          })
        }
      >
        Learn More
      </Link>
      <Link
        href="/contact"
        className="rounded-md border border-slate-600 px-4 py-2 text-slate-200 transition-all duration-200 hover:border-slate-400 hover:bg-slate-800 hover:text-white"
        onClick={() =>
          addTab({
            name: "contact.json",
            path: "/contact",
            icon: VscodeIconsFileTypeLightJson,
          })
        }
      >
        Get in Touch
      </Link>
      <a
        href="/Patrick_Carter_Resume.pdf"
        download
        className="rounded border border-[#18B4C8] px-4 py-2 text-[#18B4C8] transition-colors hover:bg-[#18B4C8] hover:text-gray-900"
      >
        Download Resume
      </a>
    </div>
  );
}
