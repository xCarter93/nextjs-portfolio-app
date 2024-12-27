"use client";

import { Tree } from "./recursive-tree";

export function Sidebar() {
  return (
    <div className="w-60 border-r border-gray-800 bg-[#1e1e1e]">
      <div className="flex flex-col gap-4 p-4">
        <Tree contentTree="Portfolio" defaultCollapsed={false}>
          <Tree contentTree="home.tsx" path="/" />
          <Tree contentTree="about.tsx" path="/about" />
          <Tree contentTree="contact.tsx" path="/contact" />
          <Tree contentTree="projects.tsx" path="/projects" />
          <Tree contentTree="work-experience.tsx" path="/work-experience" />
        </Tree>

        <Tree contentTree="Other Cool Stuff" defaultCollapsed={false}>
          <Tree contentTree="coding-stats.tsx" path="/coding-stats" />
          <Tree contentTree="guest-book.tsx" path="/guest-book" />
        </Tree>
      </div>
    </div>
  );
}
