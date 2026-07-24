import { useCallback, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Nav } from './components/layout/Nav';
import { HeroScene } from './components/scene/HeroScene';
import { SceneBoundary } from './components/scene/SceneBoundary';
import { ProjectModal } from './components/projects/ProjectModal';
import { About, Contact, Experience, WorkList } from './components/sections/ContentSections';
import { personal, projects } from './data/portfolio';
import type { Project } from './types/portfolio';
export default function App() {
  const [selected, setSelected] = useState<Project | null>(null);
  const reduced = useReducedMotion() ?? false;
  const close = useCallback(() => setSelected(null), []);
  const step = useCallback(
    (n: number) =>
      setSelected((current) => {
        const i = projects.findIndex((p) => p.id === current?.id);
        return projects[(i + n + projects.length) % projects.length];
      }),
    [],
  );
  return (
    <>
      <Nav />
      <main>
        <section id="top" className="hero">
          <SceneBoundary>
            <HeroScene onSelect={setSelected} paused={!!selected} reducedMotion={reduced} />
          </SceneBoundary>
          <div className="hero-vignette" />
          <motion.div
            className="hero-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="eyebrow">Engineer / Developer / Creative Technologist</p>
            <h1>{personal.name}</h1>
            <p>{personal.statement}</p>
            <a className="primary" href="#work">
              Explore my work <span>↘</span>
            </a>
          </motion.div>
          <motion.div
            className="hero-role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
          >
            <span>Discipline</span>
            <p>{personal.role}</p>
          </motion.div>
          <div className="interaction-note">
            <i />
            <span>Move your cursor to influence the system.</span>
          </div>
          <a className="scroll-cue" href="#work">
            Scroll to discover <i />
          </a>
        </section>
        <WorkList onSelect={setSelected} />
        <About />
        <Experience />
        <Contact />
      </main>
      <ProjectModal project={selected} onClose={close} onStep={step} />
    </>
  );
}
