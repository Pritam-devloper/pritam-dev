import ContactForm from '../components/ContactForm'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { socialLinks } from '../data/socialLinks'

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-yellow-300 to-comic halftone">
      <div className="section-container">
        <h1 className="section-title text-primary">Get In Touch</h1>
        <p className="section-subtitle">
          Have a project in mind? Let's work together!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="speech-bubble bg-white">
              <h2 className="text-4xl font-comic mb-6 uppercase text-primary">Let's Talk</h2>
              <p className="text-dark leading-relaxed mb-6 font-sketch text-lg">
                I'm always open to discussing new projects, creative ideas, or 
                opportunities to be part of your vision. Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 comic-panel p-4 bg-yellow-100">
                <div className="bg-primary text-white p-4 border-4 border-black shadow-comic">
                  <FiMail size={28} />
                </div>
                <div>
                  <h3 className="font-comic text-lg uppercase">Email</h3>
                  <p className="text-dark font-sketch">dasp90900@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 comic-panel p-4 bg-red-100">
                <div className="bg-red text-white p-4 border-4 border-black shadow-comic">
                  <FiPhone size={28} />
                </div>
                <div>
                  <h3 className="font-comic text-lg uppercase">Phone</h3>
                  <p className="text-dark font-sketch">+998327713516</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 comic-panel p-4 bg-blue-100">
                <div className="bg-blue text-white p-4 border-4 border-black shadow-comic">
                  <FiMapPin size={28} />
                </div>
                <div>
                  <h3 className="font-comic text-lg uppercase">Location</h3>
                  <p className="text-dark font-sketch">Asrafi Basitacharita, Buxar</p>
                  <p className="text-sm text-dark font-sans">Medinipur, West Bengal, PIN-721627</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-comic text-2xl mb-4 uppercase">Connect with me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent hover:bg-primary hover:text-white p-4 border-4 border-black shadow-comic hover:shadow-comic-lg transition-all text-2xl"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="comic-panel p-8 bg-white halftone">
            <h2 className="text-3xl font-comic mb-6 uppercase text-primary">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
