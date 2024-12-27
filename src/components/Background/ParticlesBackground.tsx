"use client";

import React, { useEffect, useRef, useCallback } from "react";

interface ParticlesProps {
  quantity?: number;
  size?: number;
  vx?: number;
  vy?: number;
}

interface Circle {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
}

const ParticlesBackground = ({
  quantity = 500,
  size = 0.4,
  vx = 0,
  vy = 0,
}: ParticlesProps) => {
  const circles = useRef<Circle[]>([]);
  const rafID = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });

  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  const createCircleParams = useCallback((): Circle => {
    const { w, h } = canvasSize.current;
    return {
      x: Math.floor(Math.random() * w),
      y: Math.floor(Math.random() * h),
      translateX: 0,
      translateY: 0,
      size: Math.max(1, Math.floor(Math.random() * 2) + size),
      alpha: 0,
      targetAlpha: Number((Math.random() * 0.5 + 0.1).toFixed(1)),
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
    };
  }, [size]);

  const drawCircle = useCallback((circle: Circle, update = false) => {
    const ctx = context.current;
    if (!ctx) return;

    ctx.save();
    ctx.translate(circle.translateX, circle.translateY);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${circle.alpha})`;
    ctx.fill();
    ctx.restore();

    if (!update) circles.current.push(circle);
  }, []);

  const initCanvas = useCallback(() => {
    const container = canvasContainerRef.current;
    const canvas = canvasRef.current;

    if (!canvas || !container) return;

    circles.current = [];

    canvasSize.current = {
      w: container.offsetWidth,
      h: container.offsetHeight,
    };

    canvas.width = canvasSize.current.w * dpr;
    canvas.height = canvasSize.current.h * dpr;
    canvas.style.width = `${canvasSize.current.w}px`;
    canvas.style.height = `${canvasSize.current.h}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(dpr, dpr);
    context.current = ctx;

    for (let i = 0; i < quantity; i++) {
      const circle = createCircleParams();
      drawCircle(circle);
    }
  }, [quantity, dpr, createCircleParams, drawCircle]);

  const animate = useCallback(() => {
    const ctx = context.current;
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);

    for (let i = circles.current.length - 1; i >= 0; i--) {
      const circle = circles.current[i];

      const edgeDistances = [
        circle.x + circle.translateX - circle.size,
        canvasSize.current.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        canvasSize.current.h - circle.y - circle.translateY - circle.size,
      ];

      const closestEdge = Math.min(...edgeDistances);
      const alphaModifier = Math.max(Math.min(closestEdge / 20, 1), 0);

      circle.alpha +=
        alphaModifier > 0.5
          ? circle.alpha < circle.targetAlpha
            ? 0.02
            : 0
          : circle.targetAlpha * alphaModifier;

      circle.x += circle.dx + vx;
      circle.y += circle.dy + vy;

      drawCircle(circle, true);

      if (
        circle.x < -circle.size ||
        circle.x > canvasSize.current.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasSize.current.h + circle.size
      ) {
        circles.current.splice(i, 1);
        const newCircle = createCircleParams();
        drawCircle(newCircle);
      }
    }

    rafID.current = window.requestAnimationFrame(animate);
  }, [vx, vy, createCircleParams, drawCircle]);

  // Effect for canvas initialization and cleanup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    context.current = canvas.getContext("2d");
    initCanvas();
    animate();

    const handleResize = () => initCanvas();
    window.addEventListener("resize", handleResize);

    return () => {
      if (rafID.current != null) window.cancelAnimationFrame(rafID.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [animate, initCanvas]);

  return (
    <div
      className="pointer-events-none absolute inset-0 left-0 top-0 h-dvh w-dvw bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_34px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,#000_100%)]"
      ref={canvasContainerRef}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
};

export default ParticlesBackground;
