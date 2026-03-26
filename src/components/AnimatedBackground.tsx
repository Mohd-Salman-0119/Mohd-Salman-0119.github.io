import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface FloatingGeometryProps {
  position: [number, number, number];
  color: string;
  speed: number;
  scale: number;
}

const FloatingGeometry: React.FC<FloatingGeometryProps> = ({
  position,
  color,
  speed,
  scale,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialPosition = useRef(position);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        initialPosition.current[1] + Math.sin(clock.elapsedTime * speed) * 0.5;
      meshRef.current.rotation.x += 0.001 * speed;
      meshRef.current.rotation.y += 0.001 * speed;
    }
  });

  return (
    <Sphere
      ref={meshRef}
      args={[1, 32, 32]}
      position={position}
      scale={scale}
    >
      <meshPhongMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        wireframe={false}
      />
    </Sphere>
  );
};

const AnimatedSceneContent: React.FC = () => {
  return (
    <>
      <OrbitControls autoRotate autoRotateSpeed={0.5} />
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#00d4ff" />
      <pointLight position={[0, 0, -10]} intensity={0.5} color="#ff006e" />

      {/* Floating geometries */}
      <FloatingGeometry
        position={[-3, 2, 0]}
        color="#00d4ff"
        speed={0.5}
        scale={1}
      />
      <FloatingGeometry
        position={[3, 0, 0]}
        color="#ff006e"
        speed={0.3}
        scale={0.8}
      />
      <FloatingGeometry
        position={[0, -2, 2]}
        color="#00f5ff"
        speed={0.7}
        scale={0.6}
      />
      <FloatingGeometry
        position={[-2, 1, -2]}
        color="#00d4ff"
        speed={0.4}
        scale={0.7}
      />
      <FloatingGeometry
        position={[2, -1, 2]}
        color="#ff006e"
        speed={0.6}
        scale={0.5}
      />
    </>
  );
};

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <AnimatedSceneContent />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;
