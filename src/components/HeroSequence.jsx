import { useEffect, useRef, useState, useCallback } from "react";

// ─── CONFIG ───────────────────────────────────────────────
const TOTAL_FRAMES = 40;
const FRAME_PATH = (n) =>
  `/frames/ezgif-frame-${String(n).padStart(3, "0")}.jpg`;
// ──────────────────────────────────────────────────────────

function preloadFrames(total) {
  const images = [];
  for (let i = 1; i <= total; i++) {
    const img = new Image();
    img.src = FRAME_PATH(i);
    images.push(img);
  }
  return images;
}

export default function HeroSequence() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const framesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const rafRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  const drawFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const img = framesRef.current[index];
    if (!img || !img.complete) return;

    // Use logical dimensions for drawing logic since ctx.scale is applied
    const logicalWidth = window.innerWidth;
    const logicalHeight = window.innerHeight;

    const scale = Math.max(
      logicalWidth / img.naturalWidth,
      logicalHeight / img.naturalHeight
    );
    const x = (logicalWidth - img.naturalWidth * scale) / 2;
    const y = (logicalHeight - img.naturalHeight * scale) / 2;
    
    ctx.clearRect(0, 0, logicalWidth, logicalHeight);
    ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
  }, []);

  // Preload all frames on mount
  useEffect(() => {
    const images = preloadFrames(TOTAL_FRAMES);
    framesRef.current = images;

    let loadedCount = 0;
    const handleLoad = () => {
      loadedCount++;
      if (loadedCount >= TOTAL_FRAMES) setLoaded(true);
    };

    images.forEach((img) => {
      if (img.complete) {
        handleLoad();
      } else {
        img.onload = handleLoad;
        img.onerror = handleLoad; // Count errors too so we don't hang
      }
    });

    // Draw first frame immediately
    if (images[0].complete) drawFrame(0);
    else images[0].onload = () => drawFrame(0);
  }, [drawFrame]);

  // Resize canvas to fill window with DPR scaling
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      
      const ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);
      
      drawFrame(Math.round(currentFrameRef.current));
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [drawFrame]);

  const eventDispatched = useRef(false);

  // Scroll → Frame calculation + Animation Loop
  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const scrollY = -rect.top; 
      const maxScroll = rect.height - window.innerHeight;
      
      const progress = Math.max(0, Math.min(scrollY / maxScroll, 1));
      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
      
      const done = progress >= 0.98;
      setAnimationDone(done);

      if (done && !eventDispatched.current) {
        window.dispatchEvent(new CustomEvent('heroComplete'));
        eventDispatched.current = true;
      }
    };

    const animate = () => {
      const current = currentFrameRef.current;
      const target = targetFrameRef.current;
      const next = current + (target - current) * 0.12;
      currentFrameRef.current = next;
      drawFrame(Math.min(Math.round(next), TOTAL_FRAMES - 1));
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [drawFrame]);

  return (
    <div ref={containerRef} style={{ position: "relative", height: "500vh" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          background: "#105232",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            inset: 0,
          }}
        />

        {/* Headline + CTA - Hidden until progress reaches 98% */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 24px",
            opacity: animationDone ? 1 : 0,
            transform: animationDone ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
            pointerEvents: animationDone ? "all" : "none",
          }}
        >
          <h1
            style={{
              fontFamily: "Copperplate, 'Copperplate Gothic Light', serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              color: "#F8F3DF",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              margin: 0,
              lineHeight: 1.15,
              textShadow: "0 2px 24px rgba(16,82,50,0.5)",
            }}
          >
            Your Body Already<br />Knows How to Heal.
          </h1>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.9rem, 1.8vw, 1.2rem)",
              color: "#D8E0D1",
              marginTop: "1.5rem",
              letterSpacing: "0.06em",
            }}
          >
            India's first hemp wellness clinic. Natural Curatives.
          </p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "2.5rem" }}>
            <a
              href="#pillars"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: "#F8F3DF",
                color: "#105232",
                padding: "14px 32px",
                textDecoration: "none",
                borderRadius: "3px",
              }}
            >
              Shop by Concern
            </a>
            <a
              href="/consult"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: "1px solid #F8F3DF",
                color: "#F8F3DF",
                padding: "14px 32px",
                textDecoration: "none",
                borderRadius: "3px",
              }}
            >
              Book a Consultation
            </a>
          </div>
        </div>

        {/* Scroll cue - Hidden once animation is done */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            opacity: animationDone ? 0 : 0.6,
            transition: "opacity 0.6s ease",
            pointerEvents: "none",
          }}
        >
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem",
            letterSpacing: "0.15em", color: "#D8E0D1", textTransform: "uppercase" }}>
            Scroll
          </span>
          <div style={{ width: "1px", height: "40px", background: "#D8E0D1",
            animation: "scrollPulse 1.8s ease-in-out infinite" }} />
        </div>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.6); }
          50% { opacity: 1; transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}
