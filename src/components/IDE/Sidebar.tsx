"use client";

import { FileIcon, FolderIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    name: "portfolio",
    type: "folder",
    items: [
      { name: "about.tsx", path: "/about", type: "file" },
      { name: "projects.tsx", path: "/projects", type: "file" },
      { name: "contact.tsx", path: "/contact", type: "file" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-56 overflow-y-auto border-r border-gray-800">
      <div className="p-3">
        <h2 className="mb-2 text-xs uppercase text-gray-400">Explorer</h2>
        {sidebarItems.map((item) => (
          <div key={item.name}>
            <div className="flex items-center gap-1.5 rounded px-1.5 py-0.5 text-gray-300 hover:bg-gray-800">
              <FolderIcon size={14} />
              <span className="text-xs">{item.name}</span>
            </div>
            <div className="ml-3">
              {item.items.map((subItem) => (
                <Link
                  key={subItem.name}
                  href={subItem.path}
                  className={`flex items-center gap-1.5 rounded px-1.5 py-0.5 text-gray-300 hover:bg-gray-800 ${
                    pathname === subItem.path ? "bg-gray-800" : ""
                  }`}
                >
                  <FileIcon size={14} />
                  <span className="text-xs">{subItem.name}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
