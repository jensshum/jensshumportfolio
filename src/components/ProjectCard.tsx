import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-56">
        <img
          src={project.images[currentImageIndex]}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover"
        />
        {project.images.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentImageIndex === index
                    ? 'bg-white'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-slate-200 dark:border-slate-700">
          <div className="flex space-x-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github size={20} />
              </a>
            )}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              aria-label={`Visit ${project.title} website`}
            >
              <ExternalLink size={20} />
            </a>
          </div>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-teal-500 dark:text-teal-400 hover:underline font-medium"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;