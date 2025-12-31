import { useState } from 'react'
import Button from './Button'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
    setStatus('Message sent successfully!')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })

    setTimeout(() => setStatus(''), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-comic uppercase text-dark mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-4 border-black shadow-comic focus:shadow-comic-lg outline-none transition-all font-sans"
          placeholder="Your Name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-comic uppercase text-dark mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-4 border-black shadow-comic focus:shadow-comic-lg outline-none transition-all font-sans"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-comic uppercase text-dark mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-4 border-black shadow-comic focus:shadow-comic-lg outline-none transition-all font-sans"
          placeholder="Subject"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-comic uppercase text-dark mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full px-4 py-3 border-4 border-black shadow-comic focus:shadow-comic-lg outline-none transition-all resize-none font-sans"
          placeholder="Your message..."
        ></textarea>
      </div>

      {status && (
        <div className="p-4 bg-accent border-4 border-black shadow-comic">
          <p className="font-comic text-lg uppercase">{status}</p>
        </div>
      )}

      <Button type="submit" variant="primary" className="w-full text-xl">
        Send Message ⚡
      </Button>
    </form>
  )
}

export default ContactForm
