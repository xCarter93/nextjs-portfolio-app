"use client";

import { Rnd } from "react-rnd";
import { useState, useEffect } from "react";

interface DraggableWindowProps {
  children: React.ReactNode;
}

export function DraggableWindow({ children }: DraggableWindowProps) {
  const [mounted, setMounted] = useState(false);
  const [size, setSize] = useState({
    width: 1400,
    height: 800,
  });

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      const padding = 256;
      const maxWidth = Math.min(window.innerWidth - padding, 1400);
      const maxHeight = Math.min(window.innerHeight - 64, 800);

      setSize({
        width: maxWidth,
        height: maxHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) {
    return (
      <div
        style={{
          width: size.width,
          height: size.height,
        }}
        className="overflow-hidden rounded-lg border border-gray-800 bg-[#1e1e1e] shadow-2xl"
      >
        {children}
      </div>
    );
  }

  return (
    <Rnd
      default={{
        x: (window.innerWidth - size.width) / 2,
        y: (window.innerHeight - size.height) / 2,
        width: size.width,
        height: size.height,
      }}
      size={size}
      minWidth={Math.min(1000, window.innerWidth - 256)}
      minHeight={600}
      bounds="parent"
      dragHandleClassName="handle"
      resizeHandleStyles={{
        bottom: { cursor: "row-resize" },
        bottomLeft: { cursor: "sw-resize" },
        bottomRight: { cursor: "se-resize" },
        left: { cursor: "col-resize" },
        right: { cursor: "col-resize" },
        top: { cursor: "row-resize" },
        topLeft: { cursor: "nw-resize" },
        topRight: { cursor: "ne-resize" },
      }}
      onResize={(e, direction, ref) => {
        setSize({
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        });
      }}
      className="overflow-hidden rounded-lg border border-gray-800 bg-[#1e1e1e] shadow-2xl"
    >
      {children}
    </Rnd>
  );
}
