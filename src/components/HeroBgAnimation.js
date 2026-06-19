"use client";

import { useEffect, useRef } from "react";

export default function HeroBgAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Characters representing binary data and coding syntax
    const characters = ["0", "1", "{", "}", "[", "]", "(", ")", "<", ">", ";", "++", "=>"];
    const nodeCount = 45;
    const nodes = [];
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22, // slow drifting
        vy: (Math.random() - 0.5) * 0.22,
        char: characters[Math.floor(Math.random() * characters.length)],
        fontSize: Math.floor(Math.random() * 5) + 10, // 10px to 14px
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Grab current theme state
      const isDark = document.documentElement.classList.contains("dark");
      const nodeColor = isDark ? "rgba(216, 198, 176, 0.25)" : "rgba(110, 90, 71, 0.3)";
      const lineColor = isDark ? "rgba(216, 198, 176, 0.05)" : "rgba(110, 90, 71, 0.06)";

      // Draw data connections (network lines)
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 160) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y - 4); // offset slightly for center of character
            ctx.lineTo(nodes[j].x, nodes[j].y - 4);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw drifting characters
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bouncing boundaries
        if (node.x < 10 || node.x > width - 10) node.vx *= -1;
        if (node.y < 15 || node.y > height - 10) node.vy *= -1;

        ctx.font = `${node.fontSize}px monospace`;
        ctx.fillStyle = nodeColor;
        ctx.fillText(node.char, node.x, node.y);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
    />
  );
}
