import { Tree } from "./recursive-tree";

export function Sidebar() {
  return (
    <div className="flex h-full flex-col overflow-hidden border-r border-gray-800 bg-[#1e1e1e]">
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
        <Tree contentTree="Portfolio" defaultCollapsed={false}>
          <Tree contentTree="home.html" path="/" />
          <Tree contentTree="about.ts" path="/about" />
          <Tree contentTree="contact.json" path="/contact" />
          <Tree contentTree="projects.css" path="/projects" />
          <Tree contentTree="work-experience.md" path="/work-experience" />
        </Tree>

        <Tree contentTree="Other Cool Stuff" defaultCollapsed={false}>
          <Tree contentTree="coding-stats.env" path="/coding-stats" />
          <Tree contentTree="guest-book.tsx" path="/guest-book" />
          <Tree contentTree="git-history.git" path="/git-history" />
        </Tree>
      </div>
    </div>
  );
}
