import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { FiHome } from 'react-icons/fi'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-300 to-accent halftone relative overflow-hidden">
      <div className="absolute top-10 left-10 text-9xl font-comic text-primary opacity-10 transform -rotate-12">CRASH!</div>
      <div className="absolute bottom-10 right-10 text-9xl font-comic text-red opacity-10 transform rotate-12">BOOM!</div>
      
      <div className="text-center px-4 z-10">
        <div className="speech-bubble bg-white mb-8 inline-block">
          <h1 className="text-9xl font-comic text-primary mb-4" style={{textShadow: '8px 8px 0px rgba(0,0,0,0.9)'}}>404</h1>
          <h2 className="text-5xl font-comic mb-4 uppercase text-red">Page Not Found</h2>
          <p className="text-dark mb-8 max-w-md mx-auto font-sketch text-xl">
            Oops! The page you're looking for doesn't exist. It might have been 
            moved or deleted.
          </p>
        </div>
        <Link to="/">
          <Button variant="primary" className="text-xl">
            <FiHome className="inline mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
