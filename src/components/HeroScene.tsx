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
      0.05
    );
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      mouse.current.x * 0.6,
      0.05
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

  const crimsonWireframe = "#C0143C";
  const crimsonGlow = "#E8194A";

  return (
    <group ref={group} scale={0.95}>
      {/* Main shell wireframe - Crimson 40% opacity */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(4.4, 2.6, 5.2)]} />
        <lineBasicMaterial color={crimsonWireframe} transparent opacity={0.4} linewidth={1.5} />
      </lineSegments>

      {/* Inner offset wireframe structure */}
      <lineSegments scale={0.98}>
        <edgesGeometry args={[new THREE.BoxGeometry(4.4, 2.6, 5.2)]} />
        <lineBasicMaterial color={crimsonGlow} transparent opacity={0.25} />
      </lineSegments>

      {/* Roof pitch */}
      <mesh position={[0, 1.3, 0]} rotation={[0, Math.PI / 4, 0]}>
        <lineSegments>
          <edgesGeometry args={[new THREE.ConeGeometry(3.3, 1.2, 4)]} />
          <lineBasicMaterial color={crimsonWireframe} transparent opacity={0.4} linewidth={1.5} />
        </lineSegments>
      </mesh>

      {/* Structural columns */}
      {columns.map((p, i) => (
        <lineSegments key={i} position={p}>
          <edgesGeometry args={[new THREE.BoxGeometry(0.14, 2.6, 0.14)]} />
          <lineBasicMaterial
            color={i % 2 === 0 ? crimsonGlow : crimsonWireframe}
            transparent
            opacity={0.45}
          />
        </lineSegments>
      ))}

      {/* Parallelogram motif diagonal cross-bracings */}
      {[-1.8, 1.8].map((z, idx) => (
        <lineSegments key={idx} position={[0, 0, z]} rotation={[0, 0, Math.PI / 6]}>
          <edgesGeometry args={[new THREE.BoxGeometry(4.2, 0.08, 0.08)]} />
          <lineBasicMaterial color={crimsonWireframe} transparent opacity={0.35} />
        </lineSegments>
      ))}

      {/* Floor grid - Crimson & Charcoal */}
      <gridHelper args={[7, 14, "#C0143C", "#161616"]} position={[0, -1.32, 0]} />
    </group>
  );
}

function Particles() {
  const points = useRef<THREE.Points>(null);
  const count = 350;
  
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const crimsonColor = new THREE.Color("#C0143C");
    const crimsonGlowColor = new THREE.Color("#E8194A");
    const whiteColor = new THREE.Color("#FFFFFF");

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 9;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;

      // Crimson and White sparks ONLY
      const rand = Math.random();
      const chosenColor = rand > 0.4 ? (rand > 0.7 ? crimsonGlowColor : crimsonColor) : whiteColor;

      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }
    return { positions: pos, colors: col };
  }, []);

  useFrame((_, delta) => {
    const geo = points.current?.geometry;
    const attr = geo?.attributes["position"];
    if (!attr) return;
    const arr = attr.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const idx = i * 3 + 1;
      arr[idx] = (arr[idx] ?? 0) + delta * (0.15 + (i % 5) * 0.05);
      if ((arr[idx] ?? 0) > 4.5) arr[idx] = -4.5;
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
      />
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
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} color="#E8194A" />
      <pointLight position={[-3, 2, 3]} intensity={1} color="#C0143C" />
      <CameraRig />
      <WarehouseFrame />
      <Particles />
      <fog attach="fog" args={["#0D0D0D", 8, 20]} />
    </Canvas>
  );
}
