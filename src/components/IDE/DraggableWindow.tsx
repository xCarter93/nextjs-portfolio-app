"use client";

import { Rnd } from "react-rnd";

interface DraggableWindowProps {
  children: React.ReactNode;
}

export function DraggableWindow({ children }: DraggableWindowProps) {
  return (
    <Rnd
      default={{
        x: window ? (window.innerWidth - 1400) / 2 : 0,
        y: window ? (window.innerHeight - 800) / 2 : 0,
        width: 1400,
        height: 800,
      }}
      minWidth={1000}
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
      className="overflow-hidden rounded-lg border border-gray-800 bg-[#1e1e1e] shadow-2xl"
    >
      {children}
    </Rnd>
  );
}
