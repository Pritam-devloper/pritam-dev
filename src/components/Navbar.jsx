import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b-4 border-black ${
        scrolled ? 'bg-yellow-300 shadow-comic-lg' : 'bg-comic'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 w-12 mr-2 border-3 border-black"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
            <span className="text-3xl font-comic text-primary uppercase" style={{textShadow: '2px 2px 0px rgba(0,0,0,0.9)'}}>Pritam Das</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-dark hover:text-primary transition-all font-sketch text-xl uppercase transform hover:scale-110 ${
                    isActive ? 'text-primary font-bold scale-110' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-primary"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-yellow-200 shadow-comic-lg border-b-4 border-black">
          <div className="px-2 pt-2 pb-3 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 text-base font-sketch uppercase border-3 border-black shadow-comic ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'bg-white text-dark hover:bg-accent'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
