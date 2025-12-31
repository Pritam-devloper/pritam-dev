const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary',
  className = '',
  disabled = false 
}) => {
  const baseStyles = 'comic-btn font-comic text-lg uppercase'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-red border-black',
    secondary: 'bg-secondary text-white hover:bg-accent border-black',
    outline: 'bg-white text-dark hover:bg-accent border-black',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'pow-effect'
      }`}
    >
      {children}
    </button>
  )
}

export default Button
