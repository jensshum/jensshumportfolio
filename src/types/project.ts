export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  liveUrl: string;
  githubUrl?: string;
}