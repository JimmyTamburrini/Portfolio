export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  tools: string[];
  outcome: string;
  accent: string;
  glyph: string;
  image?: string;
  projectUrl?: string;
  codeUrl?: string;
  orbit: { radius: number; speed: number; tilt: number; phase: number };
}
export interface TimelineItem {
  period: string;
  kind: string;
  title: string;
  detail: string;
  placeholder?: boolean;
}
