"use client";

import { useEffect, useRef } from "react";
import type { VantaEffect } from "@/types/vanta";
import * as THREE from "three";
// @ts-expect-error - Vanta doesn't have proper types
import NET from "vanta/dist/vanta.net.min";

export default function VantaBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<VantaEffect | null>(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xff3f81,
        backgroundColor: 0x23153c,
        points: 13.0,
        maxDistance: 15.0,
        spacing: 15.0,
        showDots: false,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div ref={vantaRef} className="fixed inset-0">
      <div className="relative z-10">{children}</div>
    </div>
  );
}
