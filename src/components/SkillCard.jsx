const SkillCard = ({ skill }) => {
  return (
    <div className="comic-panel p-6 halftone hover:-rotate-2 transition-all">
      <div className="flex items-center justify-center mb-4">
        <div className="text-6xl text-primary bg-accent p-4 border-4 border-black shadow-comic">
          {skill.icon}
        </div>
      </div>
      <h3 className="text-2xl font-comic text-center mb-2 uppercase">{skill.name}</h3>
    </div>
  )
}

export default SkillCard
