import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projectsData } from '../data/projectsData'

const Projects = () => {
  const [filter, setFilter] = useState('All')
  
  const categories = ['All', ...new Set(projectsData.map(project => project.category))]
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter)

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-comic to-secondary halftone">
      <div className="section-container">
        <h1 className="section-title text-primary">My Projects</h1>
        <p className="section-subtitle">
          A collection of my recent work and personal projects
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`comic-btn font-comic text-lg uppercase ${
                filter === category
                  ? 'bg-red text-white'
                  : 'bg-white text-dark hover:bg-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 speech-bubble bg-white">
            <p className="text-dark text-2xl font-comic uppercase">No projects found in this category! OOPS!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects
