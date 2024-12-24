"use client";

import { Sidebar } from "./Sidebar";
import { Tabs } from "./Tabs";

export function IDELayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Tabs />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
