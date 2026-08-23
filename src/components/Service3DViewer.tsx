import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface ModelProps {
  type: "peb" | "fabrication" | "civil" | "material";
}

function PEB3DModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group ref={groupRef} scale={1.1}>
      {/* PEB Frame structure - Crimson wireframe */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(3.6, 2.2, 4)]} />
        <lineBasicMaterial color="#C0143C" transparent opacity={0.4} linewidth={2} />
      </lineSegments>
      <lineSegments position={[0, 1.6, 0]} rotation={[0, Math.PI / 4, 0]}>
        <edgesGeometry args={[new THREE.ConeGeometry(2.8, 1.1, 4)]} />
        <lineBasicMaterial color="#E8194A" transparent opacity={0.5} linewidth={2} />
      </lineSegments>

      {/* Columns & rafters */}
      {[-1.5, 0, 1.5].map((z, idx) => (
        <group key={idx} position={[0, 0, z]}>
          <mesh position={[-1.75, 0, 0]}>
            <boxGeometry args={[0.15, 2.2, 0.15]} />
            <meshStandardMaterial color="#C0143C" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[1.75, 0, 0]}>
            <boxGeometry args={[0.15, 2.2, 0.15]} />
            <meshStandardMaterial color="#C0143C" metalness={0.9} roughness={0.2} />
          </mesh>
          <lineSegments position={[0, 1.1, 0]}>
            <edgesGeometry args={[new THREE.BoxGeometry(3.5, 0.1, 0.1)]} />
            <lineBasicMaterial color="#E8194A" transparent opacity={0.4} />
          </lineSegments>
        </group>
      ))}

      {/* Floor grid */}
      <gridHelper args={[6, 12, "#C0143C", "#161616"]} position={[0, -1.1, 0]} />
    </group>
  );
}

function Fabrication3DModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.001) * 0.15;
    }
  });

  return (
    <group ref={groupRef} scale={1.2}>
      {/* Heavy Steel Column */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.3, 3, 0.6]} />
        <meshStandardMaterial color="#C0143C" metalness={0.9} roughness={0.15} />
      </mesh>
      {/* Cross Beam */}
      <mesh position={[0, 0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.25, 2.8, 0.5]} />
        <meshStandardMaterial color="#2A2A2A" metalness={0.85} roughness={0.2} />
      </mesh>
      {/* Gusset Plates */}
      {[-0.6, 0.6].map((x, i) => (
        <mesh key={i} position={[x, 0.5, 0.26]}>
          <cylinderGeometry args={[0.2, 0.2, 0.05, 6]} />
          <meshStandardMaterial color="#E8194A" metalness={0.95} roughness={0.1} />
        </mesh>
      ))}
      <mesh position={[0, -1.5, 0]}>
        <boxGeometry args={[1.2, 0.1, 1.2]} />
        <meshStandardMaterial color="#161616" metalness={0.7} roughness={0.3} />
      </mesh>
      <gridHelper args={[5, 10, "#E8194A", "#161616"]} position={[0, -1.55, 0]} />
    </group>
  );
}

function Civil3DModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef} scale={1.15}>
      {/* Footing */}
      <mesh position={[0, -0.8, 0]}>
        <boxGeometry args={[2.5, 0.6, 2.5]} />
        <meshStandardMaterial color="#222222" roughness={0.8} />
      </mesh>
      {/* Concrete Column */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1.1, 2, 1.1]} />
        <meshStandardMaterial color="#333333" roughness={0.7} transparent opacity={0.85} />
      </mesh>
      {/* Rebar Cage Wireframe - Crimson 40% */}
      <lineSegments position={[0, 0.5, 0]}>
        <edgesGeometry args={[new THREE.BoxGeometry(0.9, 2.1, 0.9)]} />
        <lineBasicMaterial color="#C0143C" transparent opacity={0.5} linewidth={2} />
      </lineSegments>
      <mesh position={[0, 1.4, 0]}>
        <boxGeometry args={[3.2, 0.35, 1.2]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.6} />
      </mesh>
      <gridHelper args={[6, 12, "#C0143C", "#161616"]} position={[0, -1.12, 0]} />
    </group>
  );
}

function Material3DModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.28;
    }
  });

  return (
    <group ref={groupRef} scale={1.2}>
      {/* TMT Steel Rods */}
      <group position={[-0.6, 0, 0]}>
        {[-0.3, -0.1, 0.1, 0.3].map((x, i) =>
          [-0.3, -0.1, 0.1, 0.3].map((z, j) => (
            <mesh key={`${i}-${j}`} position={[x, 0, z]}>
              <cylinderGeometry args={[0.08, 0.08, 2.6, 12]} />
              <meshStandardMaterial color="#C0143C" metalness={0.9} roughness={0.2} />
            </mesh>
          ))
        )}
      </group>
      {/* Bricks Stack */}
      <group position={[0.7, -0.3, 0]}>
        {[-0.3, 0.3].map((x, idx) =>
          [-0.4, 0, 0.4].map((y, idy) => (
            <mesh key={`${idx}-${idy}`} position={[x, y, 0]}>
              <boxGeometry args={[0.5, 0.25, 0.7]} />
              <meshStandardMaterial color="#9A9A9A" roughness={0.8} />
            </mesh>
          ))
        )}
      </group>
      <gridHelper args={[5, 10, "#C0143C", "#161616"]} position={[0, -1.35, 0]} />
    </group>
  );
}

export default function Service3DViewer({ type }: ModelProps) {
  return (
    <div className="relative h-72 w-full overflow-hidden rounded-2xl border border-glass-border bg-[#161616] backdrop-blur-md sm:h-96">
      <Canvas
        camera={{ position: [0, 1.5, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#FFFFFF" />
        <pointLight position={[-4, -2, -4]} intensity={1.2} color="#C0143C" />
        <pointLight position={[4, 4, 4]} intensity={1} color="#E8194A" />

        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
          {type === "peb" && <PEB3DModel />}
          {type === "fabrication" && <Fabrication3DModel />}
          {type === "civil" && <Civil3DModel />}
          {type === "material" && <Material3DModel />}
        </Float>

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
      <div className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-glass-border bg-[#0D0D0D]/80 px-3 py-1 text-[0.65rem] font-mono uppercase tracking-widest text-[#F5F5F5] backdrop-blur-md">
        Interactive 3D • Drag to Rotate
      </div>
    </div>
  );
}
