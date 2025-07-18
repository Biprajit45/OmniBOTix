import { useEffect, useRef } from "react";

export const CyberpunkInteractiveGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gridSize = 40;
      const cols = Math.ceil(canvas.width / gridSize);
      const rows = Math.ceil(canvas.height / gridSize);
      const baseColor = "rgba(0,255,255,0.04)";
      const glowColor = "rgba(0,255,255,0.12)";
      const glowColorNear = "rgba(0,255,255,0.35)";
      const baseBlur = 1;
      const glowBlur = 22;
      for (let i = 0; i <= cols; i++) {
        ctx.save();
        ctx.beginPath();
        for (let j = 0; j <= rows; j++) {
          const dx = (i * gridSize) - mouse.current.x;
          const dy = (j * gridSize) - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const curve = Math.sin(dist / 120) * 10 * Math.exp(-dist / 600);
          const x = i * gridSize + (dx / Math.abs(dx || 1)) * curve;
          const y = j * gridSize + (dy / Math.abs(dy || 1)) * curve;
          if (j === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        if (Math.abs((i * gridSize) - mouse.current.x) < 100) {
          ctx.shadowColor = glowColorNear;
          ctx.shadowBlur = glowBlur;
          ctx.strokeStyle = glowColor;
        } else {
          ctx.shadowColor = baseColor;
          ctx.shadowBlur = baseBlur;
          ctx.strokeStyle = baseColor;
        }
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }
      for (let j = 0; j <= rows; j++) {
        ctx.save();
        ctx.beginPath();
        for (let i = 0; i <= cols; i++) {
          const dx = (i * gridSize) - mouse.current.x;
          const dy = (j * gridSize) - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const curve = Math.sin(dist / 120) * 10 * Math.exp(-dist / 600);
          const x = i * gridSize + (dx / Math.abs(dx || 1)) * curve;
          const y = j * gridSize + (dy / Math.abs(dy || 1)) * curve;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        if (Math.abs((j * gridSize) - mouse.current.y) < 100) {
          ctx.shadowColor = glowColorNear;
          ctx.shadowBlur = glowBlur;
          ctx.strokeStyle = glowColor;
        } else {
          ctx.shadowColor = baseColor;
          ctx.shadowBlur = baseBlur;
          ctx.strokeStyle = baseColor;
        }
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }
      // Draw glowing orb at cursor
      const orbRadius = 70;
      const orbGradient = ctx.createRadialGradient(
        mouse.current.x,
        mouse.current.y,
        0,
        mouse.current.x,
        mouse.current.y,
        orbRadius
      );
      orbGradient.addColorStop(0, "rgba(0,255,255,0.25)");
      orbGradient.addColorStop(0.5, "rgba(0,255,255,0.10)");
      orbGradient.addColorStop(1, "rgba(0,255,255,0)");
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.beginPath();
      ctx.arc(mouse.current.x, mouse.current.y, orbRadius, 0, 2 * Math.PI);
      ctx.fillStyle = orbGradient;
      ctx.shadowColor = "#00ffff";
      ctx.shadowBlur = 32;
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      draw();
      animationId = requestAnimationFrame(animate);
    };
    animate();

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
        display: "block",
      }}
    />
  );
}; 