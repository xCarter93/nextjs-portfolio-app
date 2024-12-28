"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { SiReact } from "react-icons/si";
import Link from "next/link";
import { useTabsContext } from "@/contexts/TabsContext";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface TreeProps {
  contentTree: string;
  defaultCollapsed?: boolean;
  depth?: number;
  path?: string;
  children?: React.ReactNode;
}

export function Tree({
  contentTree,
  defaultCollapsed = false,
  depth = 0,
  path = "",
  children,
}: TreeProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const hasChildren = React.Children.count(children) > 0;
  const { addTab } = useTabsContext();
  const pathname = usePathname();

  const getFileIcon = (fileName: string) => {
    if (fileName.endsWith(".tsx")) {
      return <SiReact size={14} className="shrink-0 text-[#61DAFB]" />;
    }
    return null;
  };

  return (
    <div style={{ paddingLeft: depth ? `${depth * 0.5}rem` : "0" }}>
      <div className="flex items-center gap-1 py-1">
        {hasChildren && (
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex h-4 w-4 shrink-0 items-center justify-center rounded hover:bg-gray-700"
          >
            <ChevronRight
              className={`h-3 w-3 transition-transform ${
                !isCollapsed ? "rotate-90" : ""
              }`}
            />
          </button>
        )}
        {!hasChildren ? (
          <Link
            href={path}
            className={cn(
              "ml-4 flex min-w-0 items-center gap-2 text-sm text-gray-400 hover:text-gray-300",
              pathname === path && "text-white",
            )}
            onClick={() => path && addTab(contentTree, path)}
          >
            {getFileIcon(contentTree)}
            <span className="truncate">{contentTree}</span>
          </Link>
        ) : (
          <span className="text-sm text-gray-400">{contentTree}</span>
        )}
      </div>
      {hasChildren && !isCollapsed && (
        <div className="relative ml-2 border-l border-gray-800">{children}</div>
      )}
    </div>
  );
}
