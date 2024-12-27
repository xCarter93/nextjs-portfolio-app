"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useRouter, usePathname } from "next/navigation";

interface Tab {
  name: string;
  path: string;
}

export interface TabsContextType {
  openTabs: Tab[];
  activeTab: string | null;
  addTab: (label: string, path: string) => void;
  removeTab: (path: string) => void;
  setActiveTab: (path: string | null) => void;
}

const pathToTabName: Record<string, string> = {
  "/about": "about.tsx",
  "/projects": "projects.tsx",
  "/work-experience": "work-experience.tsx",
  "/contact": "contact.tsx",
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export function TabsProvider({ children }: { children: ReactNode }) {
  const [openTabs, setOpenTabs] = useState<Tab[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Initialize tabs based on current route
  useEffect(() => {
    if (pathname && pathname !== "/" && pathToTabName[pathname]) {
      const initialTab = {
        name: pathToTabName[pathname],
        path: pathname,
      };
      setOpenTabs((tabs) => {
        if (!tabs.some((tab) => tab.path === pathname)) {
          return [...tabs, initialTab];
        }
        return tabs;
      });
      setActiveTab(pathname);
    }
  }, [pathname]);

  const addTab = (label: string, path: string) => {
    if (!openTabs.some((t) => t.path === path)) {
      setOpenTabs([...openTabs, { name: label, path }]);
    }
    setActiveTab(path);
  };

  const removeTab = (path: string) => {
    const newTabs = openTabs.filter((tab) => tab.path !== path);
    setOpenTabs(newTabs);

    // If we're closing the active tab
    if (path === activeTab) {
      // Navigate to the last tab if it exists, otherwise go home
      const lastTab = newTabs[newTabs.length - 1];
      if (lastTab) {
        setActiveTab(lastTab.path);
        router.push(lastTab.path);
      } else {
        setActiveTab(null);
        router.push("/");
      }
    }
  };

  return (
    <TabsContext.Provider
      value={{
        openTabs,
        activeTab,
        addTab,
        removeTab,
        setActiveTab,
      }}
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
