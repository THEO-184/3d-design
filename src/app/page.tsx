"use client"
import {Canvas} from "@react-three/fiber"
import { Suspense } from "react";
import Three from "@/components/three";

export default function Home() {
  return (
    <Canvas  id="three-canvas-container"  className="w-screen h-screen" shadows>
  
      <Suspense fallback={null}>
        <Three />

      </Suspense>
    </Canvas>
  );
}
