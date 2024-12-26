"use client";

import dynamic from "next/dynamic";
import { Sidebar } from "./Sidebar";
import { Tabs } from "./Tabs";
import { Footer } from "./Footer";

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
    <div className="flex min-h-screen items-center justify-center p-4">
      <DraggableWindow>
        {/* Title bar */}
        <div className="handle flex h-8 cursor-move items-center border-b border-gray-800 bg-[#1f1f1f] px-3">
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
        <div className="flex h-[calc(100%-3.5rem)]">
          <Sidebar />
          <div className="flex flex-1 flex-col">
            <Tabs />
            <div className="flex-1 overflow-y-auto bg-gray-800">
              <main>{children}</main>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </DraggableWindow>
    </div>
  );
}
