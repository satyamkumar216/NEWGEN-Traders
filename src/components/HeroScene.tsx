import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function WarehouseFrame() {
  const group = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
    mouse.current.x = state.pointer.x;
    mouse.current.y = state.pointer.y;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -mouse.current.y * 0.15,
      0.05,
    );
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      mouse.current.x * 0.6,
      0.05,
    );
  });

  const columns = useMemo(() => {
    const arr: [number, number, number][] = [];
    for (let i = -2; i <= 2; i++) {
      arr.push([-2.2, 0, i * 1.3]);
      arr.push([2.2, 0, i * 1.3]);
    }
    return arr;
  }, []);

  const steel = "#38bdf8";

  return (
    <group ref={group} scale={0.95}>
      {/* main shell */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(4.4, 2.6, 5.2)]} />
        <lineBasicMaterial color={steel} transparent opacity={0.75} />
      </lineSegments>
      {/* roof pitch */}
      <mesh position={[0, 1.3, 0]} rotation={[0, Math.PI / 4, 0]}>
        <lineSegments>
          <edgesGeometry args={[new THREE.ConeGeometry(3.3, 1.2, 4)]} />
          <lineBasicMaterial color={steel} transparent opacity={0.55} />
        </lineSegments>
      </mesh>
      {/* columns */}
      {columns.map((p, i) => (
        <lineSegments key={i} position={p}>
          <edgesGeometry args={[new THREE.BoxGeometry(0.14, 2.6, 0.14)]} />
          <lineBasicMaterial color={i % 3 === 0 ? "#f97316" : steel} transparent opacity={0.5} />
        </lineSegments>
      ))}
      {/* floor grid */}
      <gridHelper args={[7, 14, "#f97316", "#1e3a5f"]} position={[0, -1.32, 0]} />
    </group>
  );
}

function Particles() {
  const points = useRef<THREE.Points>(null);
  const count = 320;
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      a[i * 3] = (Math.random() - 0.5) * 14;
      a[i * 3 + 1] = (Math.random() - 0.5) * 9;
      a[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return a;
  }, []);

  useFrame((_, delta) => {
    const geo = points.current?.geometry;
    if (!geo) return;
    const arr = geo.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += delta * (0.15 + (i % 5) * 0.05);
      if (arr[i * 3 + 1] > 4.5) arr[i * 3 + 1] = -4.5;
    }
    geo.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.045} color="#f97316" transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

function CameraRig() {
  const { camera } = useThree();
  const t = useRef(0);
  useFrame((_, delta) => {
    t.current = Math.min(t.current + delta / 3.2, 1);
    const e = 1 - Math.pow(1 - t.current, 3);
    camera.position.z = THREE.MathUtils.lerp(0.6, 9, e);
    camera.position.y = THREE.MathUtils.lerp(0, 1.6, e);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 0.6], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <CameraRig />
      <WarehouseFrame />
      <Particles />
      <fog attach="fog" args={["#0a0f1e", 8, 20]} />
    </Canvas>
  );
}
