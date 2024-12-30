import { Tree } from "./recursive-tree";

export function Sidebar() {
  return (
    <div className="hidden h-full w-60 shrink-0 flex-col overflow-hidden border-r border-gray-800 bg-[#1e1e1e] md:flex">
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
        <Tree contentTree="Portfolio" defaultCollapsed={false}>
          <Tree contentTree="home.ts" path="/" />
          <Tree contentTree="about.ts" path="/about" />
          <Tree contentTree="contact.ts" path="/contact" />
          <Tree contentTree="projects.ts" path="/projects" />
          <Tree contentTree="work-experience.ts" path="/work-experience" />
        </Tree>

        <Tree contentTree="Other Cool Stuff" defaultCollapsed={false}>
          <Tree contentTree="coding-stats.ts" path="/coding-stats" />
          <Tree contentTree="guest-book.ts" path="/guest-book" />
          <Tree contentTree="git-history.ts" path="/git-history" />
        </Tree>
      </div>
    </div>
  );
}
