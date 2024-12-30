"use client";

import Link from "next/link";
import { useTabsContext } from "@/contexts/TabsContext";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAVIGATION_ITEMS = [
  { name: "home.tsx", path: "/" },
  { name: "about.tsx", path: "/about" },
  { name: "contact.tsx", path: "/contact" },
  { name: "projects.tsx", path: "/projects" },
  { name: "work-experience.tsx", path: "/work-experience" },
  { name: "coding-stats.tsx", path: "/coding-stats" },
  { name: "guest-book.tsx", path: "/guest-book" },
  { name: "git-history.tsx", path: "/git-history" },
];

export function Tabs() {
  const { openTabs, activeTab, removeTab, setActiveTab } = useTabsContext();
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="sticky top-0 z-10 border-b border-gray-800 bg-[#1e1e1e]">
      <div className="flex overflow-x-auto">
        {(isMobile ? NAVIGATION_ITEMS : openTabs).map((tab) => (
          <div
            key={tab.path}
            className={`group flex shrink-0 items-center border-r border-gray-800 ${
              activeTab === tab.path || pathname === tab.path
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
            {!isMobile && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  removeTab(tab.path);
                }}
                className="mr-1 rounded-sm p-0.5 opacity-0 hover:bg-gray-700 group-hover:opacity-100"
              >
                <X size={14} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
