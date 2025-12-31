import { useState } from 'react'
import SkillCard from '../components/SkillCard'
import { skillsData } from '../data/skillsData'

const Skills = () => {
  const [filter, setFilter] = useState('All')
  
  const categories = ['All', ...new Set(skillsData.map(skill => skill.category))]
  
  const filteredSkills = filter === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === filter)

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-yellow-200 to-accent halftone">
      <div className="section-container">
        <h1 className="section-title text-primary">My Skills</h1>
        <p className="section-subtitle">
          Technologies and tools I work with
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`comic-btn font-comic text-lg uppercase ${
                filter === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-dark hover:bg-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-primary to-purple text-white p-10 text-center border-8 border-black shadow-comic-xl halftone relative overflow-hidden">
          <div className="absolute top-4 right-4 text-6xl font-comic opacity-20">ZAP!</div>
          <h2 className="text-4xl font-comic mb-4 uppercase">Always Learning</h2>
          <p className="text-xl max-w-2xl mx-auto font-sketch">
            I'm constantly exploring new technologies and staying updated with the 
            latest trends in web development to deliver the best solutions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills
