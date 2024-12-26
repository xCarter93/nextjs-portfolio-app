"use client";

import dynamic from "next/dynamic";
import { Sidebar } from "./Sidebar";
import { Tabs } from "./Tabs";

// Dynamically import the DraggableWindow with no SSR
const DraggableWindow = dynamic(
  () => import("./DraggableWindow").then((mod) => mod.DraggableWindow),
  { ssr: false },
);

interface IDELayoutProps {
  children: React.ReactNode;
}

export function IDELayout({ children }: IDELayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <DraggableWindow>
        {/* Title bar */}
        <div className="handle flex h-8 cursor-move items-center bg-[#1f1f1f] px-3">
          <div className="flex space-x-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="ml-3 select-none text-xs text-gray-400">
            Portfolio - VS Code
          </div>
        </div>

        {/* IDE Content */}
        <div className="flex h-[calc(100%-2rem)]">
          <Sidebar />
          <div className="flex-1 overflow-auto">
            <Tabs />
            <main className="p-3">{children}</main>
          </div>
        </div>
      </DraggableWindow>
    </div>
  );
}
