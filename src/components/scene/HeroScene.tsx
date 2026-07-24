import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { Suspense } from 'react';
import type { Project } from '../../types/portfolio';
import { projects } from '../../data/portfolio';
import { usePointerDynamics } from '../../hooks/usePointerDynamics';
import { Orb } from './Orb';
import { OrbitProject } from './OrbitProject';
export function HeroScene({
  onSelect,
  paused,
  reducedMotion,
}: {
  onSelect: (p: Project) => void;
  paused: boolean;
  reducedMotion: boolean;
}) {
  const pointer = usePointerDynamics(reducedMotion);
  return (
    <div className="scene" aria-hidden="true">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 8.6], fov: 43 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.55} />
          <pointLight position={[3, 3, 4]} intensity={18} color="#35cfff" />
          <pointLight position={[-4, -2, 2]} intensity={13} color="#d52fff" />
          <Stars
            radius={40}
            depth={12}
            count={reducedMotion ? 180 : 600}
            factor={1.3}
            saturation={0.35}
            fade
            speed={reducedMotion ? 0 : 0.15}
          />
          <Orb pointer={pointer} reducedMotion={reducedMotion} />
          {projects.map((p, i) => (
            <OrbitProject
              key={p.id}
              project={p}
              index={i}
              onSelect={onSelect}
              paused={paused}
              reducedMotion={reducedMotion}
            />
          ))}
        </Suspense>
      </Canvas>
    </div>
  );
}
