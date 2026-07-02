import { useEffect, useRef } from "react";

interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  text: string;
  isAccent: boolean;
  baseColor: string;
  glowColor: string;
}

const ArsenalCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions based on container
    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Tech list
    const techs = [
      { text: "LangChain", isAccent: true },
      { text: "LangGraph", isAccent: false },
      { text: "OpenAI API", isAccent: false },
      { text: "RAG", isAccent: true },
      { text: "Pinecone", isAccent: false },
      { text: "FAISS", isAccent: false },
      { text: "ChromaDB", isAccent: false },
      { text: "Python", isAccent: true },
      { text: "Embeddings", isAccent: false },
      { text: "Multi-Agent", isAccent: false },
      { text: "Vector Search", isAccent: true },
      { text: "Streamlit", isAccent: false },
      { text: "FastAPI", isAccent: false },
      { text: "Docker", isAccent: false },
      { text: "PostgreSQL", isAccent: false },
    ];

    // Initialize balls
    const balls: Ball[] = [];
    const minRadius = 40;
    const padding = 15;

    techs.forEach((tech) => {
      // Calculate radius based on text length
      const radius = Math.max(minRadius, tech.text.length * 4.5 + 22);
      
      // Spawn at random position
      let x = radius + Math.random() * (canvas.width - radius * 2);
      let y = radius + Math.random() * (canvas.height - radius * 2);
      
      // Prevent spawning overlapping balls
      let attempts = 0;
      while (attempts < 100) {
        let overlapping = false;
        for (let i = 0; i < balls.length; i++) {
          const other = balls[i];
          const dist = Math.hypot(x - other.x, y - other.y);
          if (dist < radius + other.radius + padding) {
            overlapping = true;
            break;
          }
        }
        if (!overlapping) break;
        x = radius + Math.random() * (canvas.width - radius * 2);
        y = radius + Math.random() * (canvas.height - radius * 2);
        attempts++;
      }

      // Random slow velocity
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.4 + Math.random() * 0.4;

      balls.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius,
        text: tech.text,
        isAccent: tech.isAccent,
        baseColor: tech.isAccent ? "#ff6b00" : "#ffffff",
        glowColor: "rgba(0, 168, 255, 0.4)",
      });
    });

    // Mouse interaction track
    const mouse = { x: -1000, y: -1000, radius: 100 };
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Collision Helper
    const resolveCollision = (b1: Ball, b2: Ball) => {
      const xDiff = b2.x - b1.x;
      const yDiff = b2.y - b1.y;
      const dist = Math.hypot(xDiff, yDiff);

      if (dist < b1.radius + b2.radius) {
        // Find normal and tangent vectors
        const nx = xDiff / dist;
        const ny = yDiff / dist;

        // Tangent vector
        const tx = -ny;
        const ty = nx;

        // Project velocities onto normal and tangent vectors
        const v1n = b1.vx * nx + b1.vy * ny;
        const v1t = b1.vx * tx + b1.vy * ty;
        const v2n = b2.vx * nx + b2.vy * ny;
        const v2t = b2.vx * tx + b2.vy * ty;

        // Elastic collision formula for 1D velocities along normal (assuming equal mass)
        const v1nTag = v2n;
        const v2nTag = v1n;

        // Convert scalar velocities back to 2D vectors
        b1.vx = v1nTag * nx + v1t * tx;
        b1.vy = v1nTag * ny + v1t * ty;
        b2.vx = v2nTag * nx + v2t * tx;
        b2.vy = v2nTag * ny + v2t * ty;

        // Push away slightly to prevent sticking
        const overlap = b1.radius + b2.radius - dist;
        b1.x -= nx * (overlap / 2);
        b1.y -= ny * (overlap / 2);
        b2.x += nx * (overlap / 2);
        b2.y += ny * (overlap / 2);
      }
    };

    // Animation loop
    let animationFrameId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      balls.forEach((ball, idx) => {
        // Move
        ball.x += ball.vx;
        ball.y += ball.vy;

        // Wall collisions
        if (ball.x - ball.radius < 0) {
          ball.x = ball.radius;
          ball.vx *= -1;
        } else if (ball.x + ball.radius > canvas.width) {
          ball.x = canvas.width - ball.radius;
          ball.vx *= -1;
        }

        if (ball.y - ball.radius < 0) {
          ball.y = ball.radius;
          ball.vy *= -1;
        } else if (ball.y + ball.radius > canvas.height) {
          ball.y = canvas.height - ball.radius;
          ball.vy *= -1;
        }

        // Check collision against all subsequent balls
        for (let i = idx + 1; i < balls.length; i++) {
          resolveCollision(ball, balls[i]);
        }

        // Mouse interaction (push effect)
        const mDist = Math.hypot(ball.x - mouse.x, ball.y - mouse.y);
        if (mDist < mouse.radius + ball.radius) {
          const forceDirectionX = (ball.x - mouse.x) / mDist;
          const forceDirectionY = (ball.y - mouse.y) / mDist;
          
          // Gentle push
          ball.vx += forceDirectionX * 0.15;
          ball.vy += forceDirectionY * 0.15;
          
          // Limit max speed
          const maxSpeed = 2.5;
          const currentSpeed = Math.hypot(ball.vx, ball.vy);
          if (currentSpeed > maxSpeed) {
            ball.vx = (ball.vx / currentSpeed) * maxSpeed;
            ball.vy = (ball.vy / currentSpeed) * maxSpeed;
          }
        } else {
          // Slow drag towards baseline speed
          ball.vx *= 0.99;
          ball.vy *= 0.99;
        }

        // Draw Ball
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        
        // Glassmorphic look
        const gradient = ctx.createRadialGradient(
          ball.x, ball.y, 0,
          ball.x, ball.y, ball.radius
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.03)");
        gradient.addColorStop(1, ball.isAccent ? "rgba(0, 168, 255, 0.06)" : "rgba(255, 255, 255, 0.01)");
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.strokeStyle = ball.isAccent ? "rgba(0, 168, 255, 0.28)" : "rgba(255, 255, 255, 0.08)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Optional glow effect for accent balls
        if (ball.isAccent) {
          ctx.shadowColor = "rgba(0, 168, 255, 0.2)";
          ctx.shadowBlur = 8;
        } else {
          ctx.shadowColor = "transparent";
          ctx.shadowBlur = 0;
        }

        // Draw Text
        ctx.fillStyle = ball.isAccent ? ball.baseColor : "rgba(255, 255, 255, 0.75)";
        ctx.font = `600 13px Geist, system-ui, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(ball.text, ball.x, ball.y);
        
        // Reset shadow
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%", position: "relative" }}>
      <canvas ref={canvasRef} style={{ display: "block", position: "absolute", top: 0, left: 0 }} />
    </div>
  );
};

export default ArsenalCanvas;
