"use client";

import { projects } from "../data/projects";

export default function ProjectsSection() {
  const currentProjects = projects.filter((p) => p.status === "current");
  const pastProjects = projects.filter((p) => p.status === "past");
  const comingSoonProjects = projects.filter((p) => p.status === "coming-soon");

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        {project.status === "coming-soon" && (
          <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
            Coming Soon
          </span>
        )}
        {project.status === "current" && (
          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
            Active
          </span>
        )}
      </div>
      <p className="text-gray-400 mb-4">{project.description}</p>
      {project.technologies && project.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      <div className="flex gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-sm"
          >
            GitHub →
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-sm"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Projects
        </h2>

        {currentProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Current Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {pastProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Past Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {comingSoonProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Coming Soon
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comingSoonProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {projects.length === 0 && (
          <p className="text-gray-400 text-center">
            No projects added yet. Check back soon!
          </p>
        )}
      </div>
    </section>
  );
}
