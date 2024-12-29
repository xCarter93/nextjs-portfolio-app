"use client";

import { useEffect, useState } from "react";
import { CircularProgress } from "@/components/CircularProgress";

interface BootScreenProps {
  onBootComplete: () => void;
}

export function BootScreen({ onBootComplete }: BootScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1000; // 1 second

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);

      if (newProgress < 100) {
        setProgress(newProgress);
        requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setTimeout(onBootComplete, 100); // Small delay after reaching 100%
      }
    };

    requestAnimationFrame(updateProgress);
  }, [onBootComplete]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8">
      <h2 className="text-xl font-semibold text-gray-300">
        Initializing Portfolio...
      </h2>
      <CircularProgress value={progress} size={80} strokeWidth={6} />
    </div>
  );
}
