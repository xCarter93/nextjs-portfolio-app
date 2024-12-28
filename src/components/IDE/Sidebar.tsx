import { Tree } from "./recursive-tree";

export function Sidebar() {
  return (
    <div className="flex h-full w-60 shrink-0 flex-col overflow-hidden border-r border-gray-800 bg-[#1e1e1e]">
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
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
