"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "about.tsx", path: "/about" },
  { name: "projects.tsx", path: "/projects" },
  { name: "contact.tsx", path: "/contact" },
];

export function Tabs() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-10 border-b border-gray-800 bg-[#1e1e1e]">
      <div className="flex">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            href={tab.path}
            className={`border-r border-gray-800 px-3 py-1.5 text-xs text-gray-400 hover:bg-gray-800 ${
              pathname === tab.path ? "bg-gray-800 text-gray-200" : ""
            }`}
          >
            {tab.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
