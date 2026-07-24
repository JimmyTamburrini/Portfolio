import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import type { Project } from '../../types/portfolio';
export function OrbitProject({
  project,
  index,
  onSelect,
  paused,
  reducedMotion,
}: {
  project: Project;
  index: number;
  onSelect: (p: Project) => void;
  paused: boolean;
  reducedMotion: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const angle = useRef(project.orbit.phase);
  const [hovered, setHovered] = useState(false);
  useFrame((_, d) => {
    if (!group.current) return;
    if (!paused && !reducedMotion) angle.current += d * project.orbit.speed * (hovered ? 0.22 : 1);
    const a = angle.current,
      r = project.orbit.radius;
    group.current.position.set(
      Math.cos(a) * r,
      Math.sin(a * 1.3) * r * 0.34,
      Math.sin(a) * r * 0.68,
    );
    group.current.rotation.z = project.orbit.tilt;
    const depth = (group.current.position.z / r + 1) / 2;
    group.current.scale.setScalar(0.75 + depth * 0.28 + (hovered ? 0.08 : 0));
  });
  return (
    <group ref={group}>
      <mesh>
        <octahedronGeometry args={[0.14, 0]} />
        <meshStandardMaterial
          color={project.accent}
          emissive={project.accent}
          emissiveIntensity={2}
        />
      </mesh>
      <Html center transform distanceFactor={5.8} zIndexRange={[20, 0]}>
        <button
          className="orbit-card"
          style={
            { '--accent': project.accent, '--delay': `${index * 0.12}s` } as React.CSSProperties
          }
          onClick={() => onSelect(project)}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
          aria-label={`Open project: ${project.title}`}
        >
          <span>
            {project.number} / {project.glyph}
          </span>
          <strong>{project.title}</strong>
          <small>{project.category}</small>
        </button>
      </Html>
    </group>
  );
}
