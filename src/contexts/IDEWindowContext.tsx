"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface IDEWindowContextType {
  windowSize: { width: number; height: number };
  setWindowSize: (size: { width: number; height: number }) => void;
}

const IDEWindowContext = createContext<IDEWindowContextType | undefined>(undefined);

export function IDEWindowProvider({ children }: { children: ReactNode }) {
  const [windowSize, setWindowSize] = useState({ width: 1600, height: 900 });

  return (
    <IDEWindowContext.Provider value={{ windowSize, setWindowSize }}>
      {children}
    </IDEWindowContext.Provider>
  );
}

export function useIDEWindow() {
  const context = useContext(IDEWindowContext);
  if (context === undefined) {
    throw new Error("useIDEWindow must be used within an IDEWindowProvider");
  }
  return context;
} 