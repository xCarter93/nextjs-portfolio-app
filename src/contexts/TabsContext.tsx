"use client";

import { createContext, useContext, useState } from "react";
import { SVGProps } from "react";
import { useRouter } from "next/navigation";

type Tab = {
  name: string;
  path: string;
  icon?: React.ComponentType<SVGProps<SVGSVGElement>>;
};

type TabsContextType = {
  openTabs: Tab[];
  activeTab: string | null;
  addTab: (tab: Tab) => void;
  removeTab: (path: string) => void;
  setActiveTab: (path: string) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export function TabsProvider({ children }: { children: React.ReactNode }) {
  const [openTabs, setOpenTabs] = useState<Tab[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const router = useRouter();

  const addTab = (tab: Tab) => {
    if (!openTabs.some((t) => t.path === tab.path)) {
      setOpenTabs([...openTabs, tab]);
    }
    setActiveTab(tab.path);
  };

  const removeTab = (path: string) => {
    const newTabs = openTabs.filter((tab) => tab.path !== path);
    setOpenTabs(newTabs);
    if (activeTab === path) {
      const newActiveTab = newTabs[newTabs.length - 1]?.path || null;
      setActiveTab(newActiveTab);
      if (newActiveTab) {
        router.push(newActiveTab);
      }
    }
  };

  return (
    <TabsContext.Provider
      value={{ openTabs, activeTab, addTab, removeTab, setActiveTab }}
    >
      {children}
    </TabsContext.Provider>
  );
}

export function useTabsContext() {
  const context = useContext(TabsContext);
  if (context === undefined) {
    throw new Error("useTabsContext must be used within a TabsProvider");
  }
  return context;
}
