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

  // Mouse position — starts far off-screen so no interaction on load
  const mouseRef = useRef({ x: -9999, y: -9999 });
  // Mouse velocity for wind-directional force
  const mouseVelRef = useRef({ x: 0, y: 0 });
  const prevMouseRef = useRef({ x: -9999, y: -9999 });

  // Cache isMobile so we don't query the layout every frame
  const isMobileRef = useRef(false);

  const { theme } = useTheme();
  const isDarkRef = useRef(theme === "dark");
  useEffect(() => {
    isDarkRef.current = theme === "dark";
  }, [theme]);

  // ─── Petal factory ───────────────────────────────────────────────────────
  const createPetal = useCallback((width: number): Petal => {
    const baseSpeedX = -0.3 + Math.random() * 0.6;
    const baseSpeedY = 0.5 + Math.random() * 0.9;
    return {
      x: Math.random() * width,
      y: -20 - Math.random() * 100,
      size: 6 + Math.random() * 10,
      speedX: baseSpeedX,
      speedY: baseSpeedY,
      baseSpeedX,
      baseSpeedY,
      rotation: Math.random() * Math.PI * 2,
      // Fix #7: wider rotation speed range so petals tumble visibly
      rotationSpeed: (Math.random() - 0.5) * 0.08,
      // Fix #8: wider opacity range for better depth perception
      opacity: 0.08 + Math.random() * 0.47,
      swayPhase: Math.random() * Math.PI * 2,
      swaySpeed: 0.005 + Math.random() * 0.01,
    };
  }, []);

  // ─── Draw a single petal ──────────────────────────────────────────────────
  const drawPetal = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      petal: Petal,
      isDark: boolean,
      isMobile: boolean
    ) => {
      ctx.save();
      ctx.translate(petal.x, petal.y);
      ctx.rotate(petal.rotation);
      ctx.globalAlpha = petal.opacity;

      const s = petal.size;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(s * 0.3, -s * 0.4, s * 0.8, -s * 0.3, s, 0);
      ctx.bezierCurveTo(s * 0.8, s * 0.3, s * 0.3, s * 0.4, 0, 0);

      if (isMobile) {
        ctx.fillStyle = isDark
          ? "rgba(255, 160, 180, 0.9)"
          : "rgba(255, 120, 150, 0.8)";
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

  // ─── Main effect ──────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // ── Resize handler ──
    // Fix #1: reset transform before scaling to prevent stacking
    const handleResize = () => {
      isMobileRef.current = window.innerWidth < 768;
      const dpr = Math.min(
        window.devicePixelRatio || 1,
        isMobileRef.current ? 1.5 : 2
      );

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      // Reset transform first so we never stack scale calls
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Fix #3: respawn petals spread across the viewport on count change
      const targetCount = isMobileRef.current ? 15 : 50;
      const current = petalsRef.current.length;

      if (current < targetCount) {
        for (let i = current; i < targetCount; i++) {
          const p = createPetal(window.innerWidth);
          // Spread new petals across the full viewport height
          p.y = Math.random() * window.innerHeight;
          petalsRef.current.push(p);
        }
      } else if (current > targetCount) {
        petalsRef.current = petalsRef.current.slice(0, targetCount);
      }
    };

    // ── Input handlers ──
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }
    };

    const handleInputLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
      mouseVelRef.current = { x: 0, y: 0 };
      prevMouseRef.current = { x: -9999, y: -9999 };
    };

    // ── Setup ──
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouchMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("mouseleave", handleInputLeave);

    // Initial petals spread across full viewport
    petalsRef.current = [];
    const initialCount = isMobileRef.current ? 15 : 50;
    for (let i = 0; i < initialCount; i++) {
      const p = createPetal(window.innerWidth);
      p.y = Math.random() * window.innerHeight;
      petalsRef.current.push(p);
    }

    // ── Animation loop ──
    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const isMobile = isMobileRef.current; // Fix #4: read cache, not layout

      // Fix #6: derive mouse velocity for wind-directional force
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const pmx = prevMouseRef.current.x;
      const pmy = prevMouseRef.current.y;

      // Smooth the velocity so it doesn't feel jerky
      mouseVelRef.current = {
        x: mouseVelRef.current.x * 0.8 + (mx - pmx) * 0.2,
        y: mouseVelRef.current.y * 0.8 + (my - pmy) * 0.2,
      };
      prevMouseRef.current = { x: mx, y: my };

      const velMag = Math.sqrt(
        mouseVelRef.current.x ** 2 + mouseVelRef.current.y ** 2
      );

      petalsRef.current.forEach((petal) => {
        // ── Interaction ──
        const dx = petal.x - mx;
        const dy = petal.y - my;
        // Fix #5: squared distance check first — sqrt only when inside radius
        const distSq = dx * dx + dy * dy;
        const interactionRadius = isMobile ? 80 : 180;
        const radiusSq = interactionRadius * interactionRadius;

        if (distSq < radiusSq) {
          const distance = Math.max(Math.sqrt(distSq), 0.1); // Fix #10: proper epsilon guard

          // Fix #6: velocity-driven wind force — petals flow in the direction
          // the cursor is moving, scaled by cursor speed and proximity
          const proximity = (interactionRadius - distance) / interactionRadius;
          const windStrength = isMobile ? 0.25 : 0.6;

          if (velMag > 0.5) {
            // Wind mode: push petals along cursor travel direction
            petal.speedX +=
              (mouseVelRef.current.x / velMag) * proximity * windStrength * Math.min(velMag * 0.15, 2.5);
            petal.speedY +=
              (mouseVelRef.current.y / velMag) * proximity * windStrength * Math.min(velMag * 0.15, 2.5);
          } else {
            // Hover mode (cursor still): gentle radial push so petals don't
            // freeze inside the cursor area
            const repelStrength = isMobile ? 0.3 : 0.8;
            petal.speedX += (dx / distance) * proximity * repelStrength;
            petal.speedY += (dy / distance) * proximity * repelStrength;
          }
        }

        // Friction — gently return to natural drift speed
        petal.speedX += (petal.baseSpeedX - petal.speedX) * 0.04;
        petal.speedY += (petal.baseSpeedY - petal.speedY) * 0.04;

        // Position update
        petal.swayPhase += petal.swaySpeed;
        petal.x += petal.speedX + Math.sin(petal.swayPhase) * 0.5;
        petal.y += petal.speedY;

        // Spin faster when displaced from natural speed
        const spinForce = Math.abs(petal.speedX - petal.baseSpeedX);
        petal.rotation += petal.rotationSpeed + spinForce * 0.05;

        // Reset off-screen petals
        const margin = 50;
        const W = window.innerWidth;
        const H = window.innerHeight;
        if (
          petal.y > H + margin ||
          petal.x < -margin ||
          petal.x > W + margin
        ) {
          Object.assign(petal, createPetal(W));
          petal.y = -margin;
        }

        drawPetal(ctx, petal, isDarkRef.current, isMobile);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Fix #2: use animationRef to prevent dual RAF loops on tab restore
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationRef.current);
      } else {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchMove);
      window.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("mouseleave", handleInputLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [createPetal, drawPetal]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}