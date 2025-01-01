"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useState, useEffect } from "react";
import { SVGProps } from "react";

interface Tab {
  name: string;
  path: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
}

interface TabsContextType {
  openTabs: Tab[];
  activeTab: string | null;
  addTab: (tab: Tab) => void;
  removeTab: (path: string) => void;
  setActiveTab: (path: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export function TabsProvider({ children }: { children: React.ReactNode }) {
  const [openTabs, setOpenTabs] = useState<Tab[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [pendingNavigation, setPendingNavigation] = useState<string | null>(
    null,
  );
  const router = useRouter();

  useEffect(() => {
    if (pendingNavigation !== null) {
      router.push(pendingNavigation);
      setPendingNavigation(null);
    }
  }, [pendingNavigation, router]);

  const addTab = (tab: Tab) => {
    if (!openTabs.some((t) => t.path === tab.path)) {
      setOpenTabs((prev) => [...prev, tab]);
    }
    setActiveTab(tab.path);
  };

  const removeTab = (path: string) => {
    setOpenTabs((prev) => {
      const newTabs = prev.filter((tab) => tab.path !== path);
      if (newTabs.length === 0) {
        setPendingNavigation("/");
      } else if (activeTab === path) {
        // If we're closing the active tab, activate the last remaining tab
        const lastTab = newTabs[newTabs.length - 1];
        setActiveTab(lastTab.path);
        setPendingNavigation(lastTab.path);
      }
      return newTabs;
    });
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
