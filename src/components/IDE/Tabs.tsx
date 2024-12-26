"use client";

import Link from "next/link";
import { useTabsContext } from "@/contexts/TabsContext";
import { X } from "lucide-react";

export function Tabs() {
  const { openTabs, activeTab, removeTab, setActiveTab } = useTabsContext();

  if (openTabs.length === 0) {
    return null;
  }

  return (
    <div className="sticky top-0 z-10 border-b border-gray-800 bg-[#1e1e1e]">
      <div className="flex">
        {openTabs.map((tab) => (
          <div
            key={tab.path}
            className={`group flex items-center border-r border-gray-800 ${
              activeTab === tab.path
                ? "bg-gray-800 text-gray-200"
                : "text-gray-400"
            }`}
          >
            <Link
              href={tab.path}
              onClick={() => setActiveTab(tab.path)}
              className="px-3 py-1.5 text-xs hover:bg-gray-800"
            >
              {tab.name}
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault();
                removeTab(tab.path);
              }}
              className="mr-1 rounded-sm p-0.5 opacity-0 hover:bg-gray-700 group-hover:opacity-100"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
