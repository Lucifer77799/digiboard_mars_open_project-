import { RefObject, useEffect } from "react";
import { motion } from "framer-motion";

import { CANVAS_SIZE } from "@/common/constants/canvasSize";
import { useBackground } from "@/common/recoil/background";
import { useBoardPosition } from "../../hooks/useBoardPosition";

const Background = ({ bgRef }: { bgRef: RefObject<HTMLCanvasElement> }) => {
  const bg = useBackground();
  const { x, y } = useBoardPosition();

  useEffect(() => {
    const canvas = bgRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    // Gradient Background
    const gradient = ctx.createRadialGradient(
      CANVAS_SIZE.width / 2,
      CANVAS_SIZE.height / 2,
      0,
      CANVAS_SIZE.width / 2,
      CANVAS_SIZE.height / 2,
      CANVAS_SIZE.width
    );

    if (bg.mode === "dark") {
      gradient.addColorStop(0, "#1e1e1e");
      gradient.addColorStop(1, "#111");
      document.body.style.backgroundColor = "#111";
    } else {
      gradient.addColorStop(0, "#fefefe");
      gradient.addColorStop(1, "#e0e7ff");
      document.body.style.backgroundColor = "#e0e7ff";
    }

    // Apply Gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, CANVAS_SIZE.width, CANVAS_SIZE.height);

    // Optional grid lines
    if (bg.lines) {
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = bg.mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)";

      const spacing = 25;
      for (let i = 0; i < CANVAS_SIZE.height; i += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(CANVAS_SIZE.width, i);
        ctx.stroke();
      }
      for (let i = 0; i < CANVAS_SIZE.width; i += spacing) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, CANVAS_SIZE.height);
        ctx.stroke();
      }
    }
  }, [bgRef, bg]);

  return (
    <motion.canvas
      ref={bgRef}
      width={CANVAS_SIZE.width}
      height={CANVAS_SIZE.height}
      className="absolute top-0 rounded-md shadow-md"
      style={{ x, y }}
    />
  );
};

export default Background;
