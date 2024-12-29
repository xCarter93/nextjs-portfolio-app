"use client";

import { useState } from "react";
import { BootScreen } from "./BootScreen";

// This variable persists across route changes but resets on page refresh
let hasBooted = false;

interface ClientBootWrapperProps {
  children: React.ReactNode;
}

export function ClientBootWrapper({ children }: ClientBootWrapperProps) {
  const [isBooting, setIsBooting] = useState(!hasBooted);

  const handleBootComplete = () => {
    hasBooted = true;
    setIsBooting(false);
  };

  if (isBooting) {
    return <BootScreen onBootComplete={handleBootComplete} />;
  }

  return children;
}
