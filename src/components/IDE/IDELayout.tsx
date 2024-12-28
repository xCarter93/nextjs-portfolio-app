"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { Tabs } from "./Tabs";
import { Footer } from "./Footer";
import { DraggableWindow } from "./DraggableWindow";

export function IDELayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex min-h-screen w-screen items-center justify-center overflow-hidden p-0 md:p-4">
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
          {mounted && (
            <>
              <Sidebar />
              <div className="flex w-full flex-1 flex-col">
                <Tabs />
                <div className="flex h-full flex-1 overflow-y-auto bg-gray-800">
                  <main className="w-full max-w-full overflow-x-hidden px-4">
                    {children}
                  </main>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <Footer />
      </DraggableWindow>
    </div>
  );
}
