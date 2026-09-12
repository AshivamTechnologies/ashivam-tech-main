"use client";
import { Canvas } from "@react-three/fiber";

export default function ThreeBackground() {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={1} />
        <mesh rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[5, 5, 5]} />
          <meshBasicMaterial color="#D4AF37" wireframe={true} />
        </mesh>
      </Canvas>
    </div>
  );
}
