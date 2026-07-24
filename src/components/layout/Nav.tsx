import { useEffect, useState } from 'react';
import { personal } from '../../data/portfolio';
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(scrollY > 30);
    addEventListener('scroll', fn, { passive: true });
    return () => removeEventListener('scroll', fn);
  }, []);
  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <a className="logo" href="#top" aria-label="Home">
        <span>{personal.initials}</span>
        <i />
      </a>
      <button
        className="menu"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="navlinks"
      >
        Menu
      </button>
      <nav id="navlinks" className={open ? 'open' : ''} aria-label="Main navigation">
        {[
          ['Work', 'work'],
          ['About', 'about'],
          ['Experience', 'experience'],
          ['Contact', 'contact'],
        ].map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-resume" href={personal.resume} download>
          Résumé ↗
        </a>
      </nav>
    </header>
  );
}
