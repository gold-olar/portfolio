export interface Project {
  id: string;
  title: string;
  description: string;
  status: "current" | "past" | "coming-soon";
  technologies?: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "VideoIntel.js",
    description: "A TypeScript-first video intelligence library that runs entirely in the browser. Extract thumbnails, detect scenes, analyze colors, and more — all in the browser, with zero server costs. Privacy-first, open source, and built for modern web applications.",
    status: "current",
    technologies: ["TypeScript", "JavaScript", "Canvas API", "Web Workers"],
    githubUrl: "https://github.com/gold-olar/video-intel.js",
    liveUrl: "https://gold-olar.github.io/video-intel.js/",
  },
];
