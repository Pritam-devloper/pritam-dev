import { FiExternalLink, FiGithub } from 'react-icons/fi'

const ProjectCard = ({ project }) => {
  return (
    <div className="comic-panel overflow-hidden hover:rotate-2 transition-transform">
      <div className="relative overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover border-b-4 border-black"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300?text=' + project.title
          }}
        />
        <div className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center space-x-4 halftone">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark text-accent p-4 border-3 border-black shadow-comic hover:shadow-comic-lg transition-all"
              aria-label="GitHub"
            >
              <FiGithub size={32} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark text-accent p-4 border-3 border-black shadow-comic hover:shadow-comic-lg transition-all"
              aria-label="Live Demo"
            >
              <FiExternalLink size={32} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6 bg-white halftone">
        <h3 className="text-2xl font-comic mb-2 uppercase text-primary">{project.title}</h3>
        <p className="text-dark mb-4 font-sketch">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-accent text-dark text-sm font-sketch border-2 border-black uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
