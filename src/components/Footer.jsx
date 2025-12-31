import { Link } from 'react-router-dom'
import { socialLinks } from '../data/socialLinks'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white border-t-8 border-primary halftone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="speech-bubble bg-yellow-100 text-dark">
            <h3 className="text-2xl font-comic mb-4 uppercase text-primary">Pritam Das</h3>
            <p className="font-sketch">
              Full Stack Developer passionate about creating beautiful and functional web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-comic mb-4 uppercase text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white hover:text-accent transition-colors font-sketch text-lg transform hover:translate-x-2 inline-block">
                  ⚡ Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-accent transition-colors font-sketch text-lg transform hover:translate-x-2 inline-block">
                  ⚡ About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white hover:text-accent transition-colors font-sketch text-lg transform hover:translate-x-2 inline-block">
                  ⚡ Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-accent transition-colors font-sketch text-lg transform hover:translate-x-2 inline-block">
                  ⚡ Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-comic mb-4 uppercase text-blue">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-dark p-3 border-3 border-black shadow-comic hover:shadow-comic-lg transform hover:-translate-y-1 transition-all text-2xl"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t-4 border-accent mt-8 pt-8 text-center">
          <p className="font-comic text-xl text-accent">&copy; {currentYear} Pritam Das. All rights reserved! POW!</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
