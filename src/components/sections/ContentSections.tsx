import { motion } from 'framer-motion';
import { useState } from 'react';
import { personal, projects, skills, timeline } from '../../data/portfolio';
import type { Project } from '../../types/portfolio';
const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65 },
};
export function WorkList({ onSelect }: { onSelect: (p: Project) => void }) {
  return (
    <section id="work" className="section work">
      <motion.div {...reveal} className="section-heading">
        <p className="eyebrow">01 / Selected work</p>
        <h2>Systems in orbit.</h2>
        <p>Six explorations across physical design, automation, software, and visual thinking.</p>
      </motion.div>
      <div className="project-list">
        {projects.map((p) => (
          <motion.button {...reveal} key={p.id} onClick={() => onSelect(p)}>
            <span style={{ color: p.accent }}>{p.number}</span>
            <strong>{p.title}</strong>
            <small>{p.category}</small>
            <i>Explore ↗</i>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
export function About() {
  return (
    <section id="about" className="section about">
      <motion.div {...reveal}>
        <p className="eyebrow">02 / Practice</p>
        <h2>Precision is a creative medium.</h2>
      </motion.div>
      <motion.div {...reveal} className="about-copy">
        <p>{personal.bio}</p>
        <p>
          I focus on mechanical design, SolidWorks automation, VBA development, engineering systems,
          web development, AI-assisted workflows, and creative technical work.
        </p>
      </motion.div>
      <div className="skills" aria-label="Skills and tools">
        {skills.map((s, i) => (
          <motion.span {...reveal} key={s}>
            <b>{String(i + 1).padStart(2, '0')}</b>
            {s}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
export function Experience() {
  return (
    <section id="experience" className="section experience">
      <motion.div {...reveal} className="section-heading">
        <p className="eyebrow">03 / Trajectory</p>
        <h2>Built through practice.</h2>
      </motion.div>
      <div className="timeline">
        {timeline.map((t, i) => (
          <motion.article {...reveal} key={i}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            <div>
              <small>{t.kind}</small>
              <h3>{t.title}</h3>
              <p>{t.detail}</p>
            </div>
            <time className={t.placeholder ? 'placeholder' : ''}>{t.period}</time>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };
  return (
    <section id="contact" className="section contact">
      <motion.div {...reveal}>
        <p className="eyebrow">04 / Contact</p>
        <h2>Let’s make the complex feel inevitable.</h2>
        <p>
          Have an engineering, automation, or creative technology problem worth solving? I’d like to
          hear about it.
        </p>
      </motion.div>
      <motion.div {...reveal} className="contact-actions">
        <a className="primary" href={`mailto:${personal.email}`}>
          Start a conversation ↗
        </a>
        <button onClick={copy}>{copied ? 'Email copied ✓' : 'Copy email'}</button>
        {personal.linkedin ? (
          <a href={personal.linkedin}>LinkedIn ↗</a>
        ) : (
          <span title="Add URL in portfolio data">LinkedIn / link to add</span>
        )}
        {personal.github ? (
          <a href={personal.github}>GitHub ↗</a>
        ) : (
          <span title="Add URL in portfolio data">GitHub / link to add</span>
        )}
        <a href={personal.resume} download>
          Download résumé ↓
        </a>
      </motion.div>
      <footer>
        <span>Jimmy Tamburrini / Engineering × Technology × Art</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </section>
  );
}
