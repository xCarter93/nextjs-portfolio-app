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
    <div className="w-64 overflow-y-auto border-r border-gray-800">
      <div className="p-4">
        <h2 className="mb-2 text-sm uppercase text-gray-400">Explorer</h2>
        {sidebarItems.map((item) => (
          <div key={item.name}>
            <div className="flex items-center gap-2 rounded px-2 py-1 text-gray-300 hover:bg-gray-800">
              <FolderIcon size={16} />
              <span>{item.name}</span>
            </div>
            <div className="ml-4">
              {item.items.map((subItem) => (
                <Link
                  key={subItem.name}
                  href={subItem.path}
                  className={`flex items-center gap-2 rounded px-2 py-1 text-gray-300 hover:bg-gray-800 ${
                    pathname === subItem.path ? "bg-gray-800" : ""
                  }`}
                >
                  <FileIcon size={16} />
                  <span>{subItem.name}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
