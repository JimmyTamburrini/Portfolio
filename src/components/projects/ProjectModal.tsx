import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import type { Project } from '../../types/portfolio';
export function ProjectModal({
  project,
  onClose,
  onStep,
}: {
  project: Project | null;
  onClose: () => void;
  onStep: (n: number) => void;
}) {
  const close = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!project) return;
    const previous = document.activeElement as HTMLElement;
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
      if (e.key === 'Tab') {
        const dialog = close.current?.closest('[role=dialog]');
        const items = dialog?.querySelectorAll<HTMLElement>('button,a');
        if (items?.length) {
          const first = items[0],
            last = items[items.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };
    document.body.classList.add('modal-open');
    addEventListener('keydown', key);
    requestAnimationFrame(() => close.current?.focus());
    return () => {
      document.body.classList.remove('modal-open');
      removeEventListener('keydown', key);
      previous?.focus();
    };
  }, [project, onClose, onStep]);
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.article
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            className="modal"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div
              className="modal-visual"
              style={{ '--accent': project.accent } as React.CSSProperties}
            >
              <span>{project.number}</span>
              <div>{project.glyph}</div>
              <small>PROJECT FIELD / {project.category}</small>
            </div>
            <div className="modal-copy">
              <button
                ref={close}
                className="modal-close"
                onClick={onClose}
                aria-label="Close project details"
              >
                Close ×
              </button>
              <p className="eyebrow">Selected work / {project.number}</p>
              <h2 id="project-title">{project.title}</h2>
              <p className="lead">{project.description}</p>
              <div className="modal-facts">
                <section>
                  <h3>The problem</h3>
                  <p>{project.problem}</p>
                </section>
                <section>
                  <h3>My solution</h3>
                  <p>{project.solution}</p>
                </section>
                <section>
                  <h3>Main outcome</h3>
                  <p>{project.outcome}</p>
                </section>
              </div>
              <ul className="tool-list">
                {project.tools.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {(project.projectUrl || project.codeUrl) && (
                <div className="modal-links">
                  {project.projectUrl && <a href={project.projectUrl}>View project ↗</a>}
                  {project.codeUrl && <a href={project.codeUrl}>View code ↗</a>}
                </div>
              )}
              <p className="placeholder-note">
                Project media and external links are ready to add in the portfolio data file.
              </p>
              <div className="modal-controls">
                <button onClick={() => onStep(-1)}>← Previous</button>
                <button onClick={() => onStep(1)}>Next →</button>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
