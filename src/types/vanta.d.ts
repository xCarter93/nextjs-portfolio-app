import * as THREE from "three";

declare module "vanta/dist/vanta.net.min" {
  export interface VantaEffect {
    destroy: () => void;
  }

  export interface VantaConfig {
    el: HTMLElement | null;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
  }

  const NET: (config: VantaConfig) => VantaEffect;
  export default NET;
}

export type { VantaEffect } from "vanta/dist/vanta.net.min";
