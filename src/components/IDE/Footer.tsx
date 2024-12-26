"use client";

import { GitBranchIcon, Terminal } from "lucide-react";
import { SiSalesforce, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTabsContext } from "@/contexts/TabsContext";
import { useTerminalStore } from "@/store/useTerminalStore";

export function Footer() {
  const router = useRouter();
  const { addTab } = useTabsContext();
  const toggle = useTerminalStore((state) => state.toggle);

  const handleStatsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    addTab({
      name: "coding-stats.tsx",
      path: "/coding-stats",
    });
    router.push("/coding-stats");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 flex h-6 items-center justify-between border-t border-gray-800 bg-[#1f1f1f] px-3 text-[11px] text-gray-400">
      <div className="flex items-center gap-3">
        <Link
          href="https://github.com/xCarter93"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-gray-300"
        >
          <GitBranchIcon size={12} />
          <span>main</span>
        </Link>
        <Link
          href="https://www.salesforce.com/trailblazer/pcarter8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-gray-300"
        >
          <SiSalesforce size={14} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/patrick-carter-306746a8/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-gray-300"
        >
          <SiLinkedin size={14} />
        </Link>
        <Link
          href="/coding-stats"
          className="flex items-center hover:text-gray-300"
          title="Coding Stats"
          onClick={handleStatsClick}
        >
          <Image
            src="https://wakatime.com/badge/user/80aca99d-fb3d-4239-8ed6-9f39fbcab253.svg"
            alt="Total time coded"
            width={100}
            height={16}
            className="h-4 w-auto"
          />
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          className="flex items-center hover:text-gray-300"
          title="Toggle contact terminal"
        >
          <Terminal size={14} />
        </button>
        <span>TypeScript</span>
        <span>UTF-8</span>
        <span>LF</span>
      </div>
    </div>
  );
}
