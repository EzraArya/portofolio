"use client";

import { useEffect, useRef, useCallback } from "react";
import { useTheme } from "next-themes";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  baseSpeedX: number;
  baseSpeedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  swayPhase: number;
  swaySpeed: number;
}

export function SakuraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const petalsRef = useRef<Petal[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const { theme } = useTheme();

  const createPetal = useCallback((canvas: HTMLCanvasElement): Petal => {
    const baseSpeedX = -0.3 + Math.random() * 0.6;
    const baseSpeedY = 0.4 + Math.random() * 0.8;
    return {
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 100,
      size: 6 + Math.random() * 10,
      speedX: baseSpeedX,
      speedY: baseSpeedY,
      baseSpeedX,
      baseSpeedY,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      opacity: 0.15 + Math.random() * 0.25,
      swayPhase: Math.random() * Math.PI * 2,
      swaySpeed: 0.005 + Math.random() * 0.01,
    };
  }, []);

  const drawPetal = useCallback(
    (ctx: CanvasRenderingContext2D, petal: Petal, isDark: boolean, isMobile: boolean) => {
      ctx.save();
      ctx.translate(petal.x, petal.y);
      ctx.rotate(petal.rotation);
      ctx.globalAlpha = petal.opacity;

      ctx.beginPath();
      const s = petal.size;
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(s * 0.3, -s * 0.4, s * 0.8, -s * 0.3, s, 0);
      ctx.bezierCurveTo(s * 0.8, s * 0.3, s * 0.3, s * 0.4, 0, 0);

      if (isMobile) {
        // High-performance flat fill on mobile to avoid expensive gradient allocations per frame
        ctx.fillStyle = isDark ? "rgba(255, 160, 180, 0.9)" : "rgba(255, 120, 150, 0.8)";
      } else {
        const gradient = ctx.createLinearGradient(0, -s * 0.4, s, s * 0.4);
        if (isDark) {
          gradient.addColorStop(0, "rgba(255, 183, 197, 0.9)");
          gradient.addColorStop(1, "rgba(255, 140, 162, 0.7)");
        } else {
          gradient.addColorStop(0, "rgba(255, 150, 170, 0.8)");
          gradient.addColorStop(1, "rgba(255, 105, 135, 0.6)");
        }
        ctx.fillStyle = gradient;
      }

      ctx.fill();
      ctx.restore();
    },
    []
  );

  const isDarkRef = useRef(theme === "dark");

  // Keep the ref in sync without re-running the animation effect
  useEffect(() => {
    isDarkRef.current = theme === "dark";
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const PETAL_COUNT = isMobile ? 15 : 50;

    const handleResize = () => {
      // Clamp DPR to reduce the number of pixels to render on high-res mobile devices
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
      document.body.addEventListener("mouseleave", handleMouseLeave);
    }

    petalsRef.current = [];
    for (let i = 0; i < PETAL_COUNT; i++) {
      const petal = createPetal(canvas);
      petal.y = Math.random() * (canvas.height / (isMobile ? 1.5 : 2)); // Adjust starting height
      petalsRef.current.push(petal);
    }

    let isPaused = false;

    const animate = () => {
      if (isPaused) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      petalsRef.current.forEach((petal) => {
        // Skip mouse calculation completely on mobile
        if (!isMobile) {
          const dx = petal.x - mouseRef.current.x;
          const dy = petal.y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const force = (120 - distance) / 120;
            petal.speedX += (dx / distance) * force * 0.6;
            petal.speedY += (dy / distance) * force * 0.6;
          }

          // Friction towards base speed
          petal.speedX += (petal.baseSpeedX - petal.speedX) * 0.05;
          petal.speedY += (petal.baseSpeedY - petal.speedY) * 0.05;
        }

        // Update position
        petal.swayPhase += petal.swaySpeed;
        petal.x += petal.speedX + Math.sin(petal.swayPhase) * 0.5;
        petal.y += petal.speedY;

        // Spin faster if pushed
        const spinForce = Math.abs(petal.speedX - petal.baseSpeedX);
        petal.rotation += petal.rotationSpeed + (isMobile ? 0 : spinForce * 0.05);

        // Reset if offscreen
        const resetMargin = 20;
        const currentWidth = canvas.width / (isMobile ? 1.5 : 2);
        const currentHeight = canvas.height / (isMobile ? 1.5 : 2);

        if (petal.y > currentHeight + resetMargin || petal.x < -50 || petal.x > currentWidth + 50) {
          petal.x = Math.random() * currentWidth;
          petal.y = -20 - Math.random() * 40;
          petal.opacity = 0.15 + Math.random() * 0.25;
          petal.speedX = petal.baseSpeedX;
          petal.speedY = petal.baseSpeedY;
        }

        drawPetal(ctx, petal, isDarkRef.current, isMobile);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Pause when tab/app goes background to save battery & CPU cycles
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isPaused = true;
        cancelAnimationFrame(animationRef.current);
      } else {
        isPaused = false;
        animate();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (!isMobile) {
        window.removeEventListener("mousemove", handleMouseMove);
        document.body.removeEventListener("mouseleave", handleMouseLeave);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationRef.current);
    };
  }, [createPetal, drawPetal]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
