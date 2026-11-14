export interface ProjectItem {
  id: string;
  title: string;
  windowTitle: string;
  category: 'backend' | 'cicd' | 'iac' | 'observability';
  categoryLabel: string;
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  previewImage?: string;
  galleryImages?: string[];
  architectureDiagram?: string;
  codeSnippet?: string;
  codeLanguage?: string;
  codeFileName?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  provider: string;
  date: string;
  label: string;
  description: string;
  image: string;
  pdfLink: string;
  verified: boolean;
}

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: { name: string; icon: string }[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  initials: string;
  rating: number;
}

export interface RoadmapPhase {
  id: string;
  num: string;
  title: string;
  stage: 'Frontend' | 'Backend' | 'Database' | 'Full-Stack Integration';
  status: 'Completed' | 'In Progress' | 'Core Stack' | 'Planned';
  topics: string[];
  task?: string;
  expectedOutcome: string;
}

