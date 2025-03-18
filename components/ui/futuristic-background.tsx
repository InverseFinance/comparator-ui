"use client"; // If using Next.js App Router

import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

export default function FuturisticBackground({ children }: { children: React.ReactNode }) {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
          particles: {
            number: { value: 50 },
            color: { value: "#00ccff" },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: { value: 2 },
            move: { enable: true, speed: 1 },
          },
        }}
        className="absolute inset-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {children}
      </div>
    </div>
  );
}
