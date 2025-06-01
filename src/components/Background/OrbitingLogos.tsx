"use client";

import React from "react";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { useIDEWindow } from "@/contexts/IDEWindowContext";

// Technology slugs mapped to simpleicons.org icons
const slugs = [
  "nextdotjs",      // Next.js
  "python",         // Python  
  "typescript",     // TypeScript
  "react",          // React
  "tailwindcss",    // Tailwind CSS
  "javascript",     // JavaScript
  "salesforce",     // Salesforce
  "html5",          // HTML5
  "mongodb",        // MongoDB
  "postgresql",     // PostgreSQL
  "css3",           // CSS3
];

export function OrbitingLogos() {
  const { windowSize } = useIDEWindow();
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}.svg`,
  );

  // Use IDE window width to determine if we should show large or small version
  const isLargeWindow = windowSize.width >= 1400;

  return (
    <div 
      className="relative flex items-center justify-center transform"
      style={{
        height: isLargeWindow ? '700px' : '400px',
        width: isLargeWindow ? '700px' : '400px',
        transform: isLargeWindow ? 'scale(1.25)' : 'scale(1)',
      }}
    >
      <IconCloud images={images} />
    </div>
  );
}
