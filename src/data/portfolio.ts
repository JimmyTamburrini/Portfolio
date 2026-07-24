import type { Project, TimelineItem } from '../types/portfolio';

// Edit this file to update all personal details, links, projects, and timeline content.
export const personal = {
  name: 'Jimmy Tamburrini',
  initials: 'JT',
  role: 'Mechanical Engineer · Developer · Creative Technologist',
  statement:
    'I build systems where engineering precision, automation, and creative technology meet.',
  email: 'hello@jimmytamburrini.com', // Editable placeholder until a preferred address is supplied.
  linkedin: '', // Add a valid URL to enable this link.
  github: '', // Add a valid URL to enable this link.
  resume: '/Jimmy-Tamburrini-Resume.txt',
  bio: 'I’m a mechanical engineering student and developer interested in the point where physical systems and software become one discipline. I turn repetitive engineering work into precise tools, build thoughtful digital products, and use technical constraints as a source of creative direction.',
};

export const skills = [
  'SolidWorks',
  'VBA',
  'Excel',
  'Mechanical Design',
  'Engineering Drawings',
  'React',
  'TypeScript',
  'JavaScript',
  'AI Workflows',
  'Automation',
  'Parametric Modeling',
  'Process Improvement',
];

export const projects: Project[] = [
  {
    id: 'bolt',
    number: '01',
    title: 'Parametric Bolt Generator',
    category: 'SolidWorks + VBA Automation',
    description:
      'A SolidWorks automation system that generates configurable fasteners, updates parametric dimensions, and produces associated engineering drawings.',
    problem:
      'Creating fastener variants and matching drawings manually consumes time and introduces revision risk.',
    solution:
      'A parameter-driven VBA workflow connects dimensional inputs to model features and standardized drawing output.',
    tools: ['SolidWorks API', 'VBA', 'Parametric Modeling'],
    outcome:
      'A repeatable model-to-drawing pipeline designed to reduce repetitive engineering work.',
    accent: '#42e8ff',
    glyph: 'HEX',
    orbit: { radius: 3.15, speed: 0.18, tilt: 0.2, phase: 0 },
  },
  {
    id: 'tilt',
    number: '02',
    title: 'AcademicTILT',
    category: 'Full-Stack Education Platform',
    description:
      'A student productivity platform designed to organize study sessions, academic progress, reports, and planning tools in one central experience.',
    problem:
      'Academic planning is fragmented across calendars, notes, and disconnected tracking tools.',
    solution:
      'A unified product experience connects planning, focus sessions, reporting, and progress signals.',
    tools: ['React', 'TypeScript', 'Full-Stack Development'],
    outcome: 'A calmer, centralized system for understanding and directing academic work.',
    accent: '#8b72ff',
    glyph: 'TILT',
    orbit: { radius: 3.65, speed: -0.14, tilt: -0.38, phase: 1.1 },
  },
  {
    id: 'drawings',
    number: '03',
    title: 'Automated Drawing System',
    category: 'Mechanical Design Automation',
    description:
      'A system for creating standardized front and right drawing views, controlling drawing scale, and automating engineering-document workflows.',
    problem: 'Repeated setup of standard drawing views makes documentation slow and inconsistent.',
    solution:
      'Automated view placement, scale logic, and document preparation enforce a predictable standard.',
    tools: ['SolidWorks', 'VBA', 'Engineering Drawings'],
    outcome: 'Faster, more consistent engineering documentation with fewer manual setup steps.',
    accent: '#ff4fb8',
    glyph: 'VIEW',
    orbit: { radius: 3.4, speed: 0.12, tilt: 0.52, phase: 2.2 },
  },
  {
    id: 'excel',
    number: '04',
    title: 'Engineering Excel Toolkit',
    category: 'Excel + VBA',
    description:
      'A collection of VBA tools for KPI reporting, duplicate detection, engineering calculations, and repetitive workflow automation.',
    problem:
      'Small manual spreadsheet operations compound into lost time and unreliable reporting.',
    solution:
      'Modular macros convert common quality checks, calculations, and reporting tasks into dependable actions.',
    tools: ['Excel', 'VBA', 'KPI Reporting'],
    outcome:
      'A reusable toolkit that makes daily engineering data work faster and less error-prone.',
    accent: '#ff9f43',
    glyph: 'KPI',
    orbit: { radius: 3.85, speed: -0.1, tilt: 0.08, phase: 3.25 },
  },
  {
    id: 'art',
    number: '05',
    title: 'Engineering as Art',
    category: 'Creative Engineering',
    description:
      'A visual series translating principles such as shear stress, conservation of energy, beam analysis, and Ohm’s law into meaningful modern artwork.',
    problem:
      'Engineering principles are often communicated without the emotion or visual clarity they contain.',
    solution:
      'Technical diagrams and physical relationships become a rigorous visual language for original artwork.',
    tools: ['Engineering Analysis', 'Visual Design', 'Creative Direction'],
    outcome: 'A growing body of work that makes technical thinking visible, human, and memorable.',
    accent: '#2df2a3',
    glyph: 'Δ',
    orbit: { radius: 3.3, speed: 0.15, tilt: -0.58, phase: 4.3 },
  },
  {
    id: 'ai',
    number: '06',
    title: 'AI Workflow Systems',
    category: 'AI + Software Automation',
    description:
      'Experimental tools and workflows that use AI agents to assist with research, development, organization, and repetitive technical tasks.',
    problem:
      'Technical knowledge work is frequently interrupted by research and organizational overhead.',
    solution:
      'Purpose-built agent workflows structure context, automate routine steps, and keep human review central.',
    tools: ['AI Agents', 'Automation', 'Research Systems'],
    outcome:
      'Experiments that reveal where AI meaningfully supports—not replaces—engineering judgment.',
    accent: '#3d8bff',
    glyph: 'AI',
    orbit: { radius: 3.7, speed: -0.13, tilt: 0.67, phase: 5.35 },
  },
];

export const timeline: TimelineItem[] = [
  {
    period: 'DATE TO ADD',
    kind: 'Education',
    title: 'Mechanical Engineering Studies',
    detail: 'Building a foundation in mechanics, design, analysis, and applied problem solving.',
    placeholder: true,
  },
  {
    period: 'DATE TO ADD',
    kind: 'Experience',
    title: 'Engineering Internship',
    detail:
      'Applied mechanical design and process-improvement thinking in a professional engineering environment.',
    placeholder: true,
  },
  {
    period: 'ONGOING',
    kind: 'Project practice',
    title: 'Design Automation Systems',
    detail:
      'Developing SolidWorks and VBA systems that connect parametric models to repeatable documentation.',
  },
  {
    period: 'CURRENT',
    kind: 'Technical milestone',
    title: 'Engineering × Software',
    detail:
      'Expanding a mechanical engineering practice through web technologies, AI workflows, and creative computation.',
  },
];
