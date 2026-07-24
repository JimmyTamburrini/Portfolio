import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { orbFragment, orbVertex } from '../../shaders/orb';
import type { MutableRefObject } from 'react';

export function Orb({
  pointer,
  reducedMotion,
}: {
  pointer: MutableRefObject<{ x: number; y: number; vx: number; vy: number; dragging: boolean }>;
  reducedMotion: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(() => ({ uTime: { value: 0 }, uReveal: { value: 0 } }), []);
  useFrame((state, delta) => {
    if (!group.current || !material.current) return;
    uniforms.uTime.value = state.clock.elapsedTime;
    uniforms.uReveal.value = THREE.MathUtils.damp(uniforms.uReveal.value, 1, 2.2, delta);
    const p = pointer.current;
    const idle = reducedMotion ? 0 : 0.09;
    p.vx *= 0.94;
    p.vy *= 0.94;
    group.current.rotation.y += delta * (idle + p.x * 0.055 + p.vx);
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      p.y * 0.22 + p.vy,
      3,
      delta,
    );
  });
  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.48, 6]} />
        <shaderMaterial
          ref={material}
          vertexShader={orbVertex}
          fragmentShader={orbFragment}
          uniforms={uniforms}
          transparent
          depthWrite={false}
        />
      </mesh>
      <mesh scale={1.025}>
        <sphereGeometry args={[1.48, 48, 48]} />
        <meshBasicMaterial color="#45dfff" transparent opacity={0.055} side={THREE.BackSide} />
      </mesh>
      <mesh scale={0.72}>
        <icosahedronGeometry args={[1.48, 3]} />
        <meshStandardMaterial
          color="#b13dff"
          emissive="#3a0b78"
          emissiveIntensity={2.2}
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  );
}
