import { FiAward, FiCode, FiHeart } from 'react-icons/fi'

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-comic to-yellow-200 halftone">
      <div className="section-container">
        <h1 className="section-title text-primary">About Me</h1>
        <p className="section-subtitle">
          Get to know more about who I am and what I do
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary border-6 border-black transform -rotate-6"></div>
              <img
                src="/assets/images/profile.jpg"
                alt="Pritam Das"
                className="relative border-8 border-black shadow-comic-xl w-full max-w-md transform rotate-3 hover:rotate-0 transition-transform"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x800?text=About+Me'
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="speech-bubble bg-white">
              <h2 className="text-4xl font-comic mb-4 uppercase text-primary">Computer Application Student & Developer</h2>
              <p className="text-dark leading-relaxed font-sans mb-4">
                I'm Pritam Das, currently pursuing my Bachelor of Computer Application 
                from Gouri College of Learning & Management Science (MAKAUT). Born on 
                January 5, 2005, I am a quick learner, punctual, friendly, and self-motivated 
                individual with a passion for technology and innovation.
              </p>
              <p className="text-dark leading-relaxed font-sans mb-4">
                My journey in web development and AI/ML has been driven by curiosity and 
                a strong desire to create impactful solutions. I specialize in building 
                responsive web applications using modern technologies like React, Laravel, 
                and PHP, while also exploring the exciting world of computer vision and 
                machine learning with Python, OpenCV, and TensorFlow.
              </p>
              <p className="text-dark leading-relaxed font-sans">
                When I'm not coding, you can find me listening to songs, playing guitar, 
                or planting trees. I believe in continuous learning and always strive to 
                improve my skills while contributing to meaningful projects.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-yellow-200 border-4 border-black shadow-comic">
                <FiCode className="text-5xl text-primary mx-auto mb-2" />
                <h3 className="font-comic text-xl mb-1 uppercase">Clean Code</h3>
                <p className="text-sm font-sketch">Maintainable & Scalable</p>
              </div>
              <div className="text-center p-6 bg-red-200 border-4 border-black shadow-comic">
                <FiAward className="text-5xl text-red mx-auto mb-2" />
                <h3 className="font-comic text-xl mb-1 uppercase">Best Practices</h3>
                <p className="text-sm font-sketch">Industry Standards</p>
              </div>
              <div className="text-center p-6 bg-purple-200 border-4 border-black shadow-comic">
                <FiHeart className="text-5xl text-purple mx-auto mb-2" />
                <h3 className="font-comic text-xl mb-1 uppercase">Passionate</h3>
                <p className="text-sm font-sketch">Love What I Do</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="comic-panel p-8 bg-white">
            <h3 className="text-3xl font-comic mb-6 text-primary uppercase">Education</h3>
            <div className="space-y-6">
              <div className="border-l-8 border-primary pl-4 bg-yellow-100 p-4">
                <h4 className="font-comic text-xl uppercase">Bachelors of Computer Application</h4>
                <p className="text-dark font-sketch">Gouri College of Learning & Management Science (MAKAUT)</p>
                <p className="text-sm text-dark mb-2 font-sans">2023 - 2026</p>
                <p className="text-sm text-dark font-sans">SGPA (Semester 1-4): 8.68, 7.81, 7.6, 7.26</p>
              </div>
              <div className="border-l-8 border-secondary pl-4 bg-red-100 p-4">
                <h4 className="font-comic text-xl uppercase">Higher Secondary</h4>
                <p className="text-dark font-sketch">Namakdina High School(H. S.) (WBCHSE)</p>
                <p className="text-sm text-dark mb-2 font-sans">2023</p>
                <p className="text-sm text-dark font-sans">Percentage: 65.4</p>
              </div>
              <div className="border-l-8 border-accent pl-4 bg-blue-100 p-4">
                <h4 className="font-comic text-xl uppercase">Secondary</h4>
                <p className="text-dark font-sketch">Namakdina High School(H. S.) (WBBSE)</p>
                <p className="text-sm text-dark mb-2 font-sans">2021</p>
                <p className="text-sm text-dark font-sans">Percentage: 77.71</p>
              </div>
            </div>
          </div>

          {/* Languages & Personal Info */}
          <div className="comic-panel p-8 bg-white">
            <h3 className="text-3xl font-comic mb-6 text-primary uppercase">Languages</h3>
            <div className="space-y-4 mb-8">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-comic text-lg uppercase">English</span>
                  <span className="font-sketch">85%</span>
                </div>
                <div className="w-full bg-dark border-3 border-black h-4">
                  <div className="bg-primary h-full border-r-3 border-black" style={{width: '85%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-comic text-lg uppercase">Hindi</span>
                  <span className="font-sketch">90%</span>
                </div>
                <div className="w-full bg-dark border-3 border-black h-4">
                  <div className="bg-secondary h-full border-r-3 border-black" style={{width: '90%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-comic text-lg uppercase">Bangali</span>
                  <span className="font-sketch">95%</span>
                </div>
                <div className="w-full bg-dark border-3 border-black h-4">
                  <div className="bg-accent h-full border-r-3 border-black" style={{width: '95%'}}></div>
                </div>
              </div>
            </div>
            
            <h3 className="text-3xl font-comic mb-4 text-red uppercase">Hobbies</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-dark font-sketch text-lg">
                <span className="w-4 h-4 bg-primary border-2 border-black mr-3"></span>
                ♫ Listening songs
              </li>
              <li className="flex items-center text-dark font-sketch text-lg">
                <span className="w-4 h-4 bg-secondary border-2 border-black mr-3"></span>
                🎸 Playing guitar
              </li>
              <li className="flex items-center text-dark font-sketch text-lg">
                <span className="w-4 h-4 bg-accent border-2 border-black mr-3"></span>
                🌳 Planting trees
              </li>
            </ul>
          </div>
        </div>
        
        {/* Personal Details */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white p-10 mt-8 border-8 border-black shadow-comic-xl halftone">
          <h3 className="text-4xl font-comic mb-8 uppercase text-center">Personal Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-100 text-dark p-4 border-4 border-black">
              <p className="font-sketch text-sm">Date of Birth</p>
              <p className="font-comic text-xl">05.01.2005</p>
            </div>
            <div className="bg-red-100 text-dark p-4 border-4 border-black">
              <p className="font-sketch text-sm">Gender</p>
              <p className="font-comic text-xl">Male</p>
            </div>
            <div className="bg-blue-100 text-dark p-4 border-4 border-black">
              <p className="font-sketch text-sm">Nationality</p>
              <p className="font-comic text-xl">Indian</p>
            </div>
            <div className="bg-purple-100 text-dark p-4 border-4 border-black">
              <p className="font-sketch text-sm">Religion</p>
              <p className="font-comic text-xl">Hindu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
