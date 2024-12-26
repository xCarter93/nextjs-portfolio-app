"use client";

import { Rnd } from "react-rnd";

const defaultSize = { width: 1100, height: 700 };
const defaultPosition = { x: 100, y: 50 };

interface DraggableWindowProps {
  children: React.ReactNode;
}

export function DraggableWindow({ children }: DraggableWindowProps) {
  return (
    <Rnd
      default={{
        x: defaultPosition.x,
        y: defaultPosition.y,
        width: defaultSize.width,
        height: defaultSize.height,
      }}
      minWidth={700}
      minHeight={500}
      maxWidth={1400}
      maxHeight={900}
      bounds="parent"
      dragHandleClassName="handle"
    >
      <div className="h-full overflow-hidden rounded-lg border border-gray-700 bg-[#1e1e1e] shadow-2xl">
        {children}
      </div>
    </Rnd>
  );
}
