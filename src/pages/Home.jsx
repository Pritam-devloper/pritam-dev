import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { FiDownload, FiArrowRight } from 'react-icons/fi'

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-300 via-accent to-secondary min-h-screen flex items-center halftone relative overflow-hidden">
        {/* Comic POW effects */}
        <div className="absolute top-20 right-10 text-8xl font-comic text-primary opacity-20 transform rotate-12">POW!</div>
        <div className="absolute bottom-20 left-10 text-8xl font-comic text-red opacity-20 transform -rotate-12">BAM!</div>
        
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1 z-10">
              <div className="speech-bubble mb-6">
                <h1 className="text-5xl md:text-6xl font-comic mb-4 uppercase text-primary">
                  Hi, I'm <span className="text-red">Pritam Das</span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-sketch text-dark mb-6">
                  Computer Application Student & Developer
                </h2>
                <p className="text-lg text-dark mb-8 leading-relaxed font-sans">
                  A quick learner, punctual, friendly and self-motivated individual passionate 
                  about building exceptional digital experiences using React, Laravel, PHP, and AI/ML technologies. 
                  Currently pursuing BCA at Gouri College of Learning & Management Science.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="primary" className="text-xl">
                    Get In Touch <FiArrowRight className="inline ml-2" />
                  </Button>
                </Link>
                <a href="/assets/pdf/Pritam_Das_CV.pdf" download>
                  <Button variant="outline" className="text-xl">
                    Download CV <FiDownload className="inline ml-2" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center z-10">
              <div className="relative">
                <div className="absolute -inset-4 bg-accent border-8 border-black transform rotate-6"></div>
                <img
                  src="/assets/images/profile.jpg"
                  alt="Pritam Das"
                  className="relative w-64 h-64 md:w-96 md:h-96 object-cover border-8 border-black shadow-comic-xl transform -rotate-3 hover:rotate-0 transition-transform"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400?text=Profile'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-16 border-y-8 border-black">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center comic-panel p-6 bg-yellow-100">
              <h3 className="text-5xl font-comic text-primary mb-2">2023</h3>
              <p className="text-dark font-sketch text-lg">Started BCA</p>
            </div>
            <div className="text-center comic-panel p-6 bg-red-100">
              <h3 className="text-5xl font-comic text-red mb-2">5+</h3>
              <p className="text-dark font-sketch text-lg">Projects Completed</p>
            </div>
            <div className="text-center comic-panel p-6 bg-blue-100">
              <h3 className="text-5xl font-comic text-blue mb-2">19+</h3>
              <p className="text-dark font-sketch text-lg">Technologies</p>
            </div>
            <div className="text-center comic-panel p-6 bg-purple-100">
              <h3 className="text-5xl font-comic text-purple mb-2">7.8</h3>
              <p className="text-dark font-sketch text-lg">Average SGPA</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
