import { useRef } from "react";
import { useGalaxyCanvas } from "../../hooks/useGalaxyCanvas";
import "./GalaxyBackground.css";

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useGalaxyCanvas(canvasRef);

  return <canvas ref={canvasRef} className="galaxy-canvas" />;
}