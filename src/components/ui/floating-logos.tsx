import React from 'react'

interface FloatingLogosProps {
  className?: string
}

export const FloatingLogos: React.FC<FloatingLogosProps> = ({ className = "" }) => {
  const logos = [
    // Purple square with abstract icon
    <div key="logo1" className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
      <div className="w-4 h-4 bg-white rounded-sm"></div>
    </div>,
    // Black square with white icon (ChatGPT-like)
    <div key="logo2" className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
      <div className="w-3 h-3 bg-white rounded-full"></div>
    </div>,
    // Slack-like icon
    <div key="logo3" className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
      <div className="w-4 h-2 bg-white rounded-sm"></div>
    </div>,
    // AWS-like logo
    <div key="logo4" className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
      <div className="w-3 h-3 bg-white rounded-sm"></div>
    </div>,
    // Blue circle with 'A'
    <div key="logo5" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
      A
    </div>,
    // Yellow 'P' in black square
    <div key="logo6" className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-yellow-400 font-bold text-sm">
      P
    </div>,
    // Google 'G' logo
    <div key="logo7" className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
      G
    </div>,
    // Green square with icon
    <div key="logo8" className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
      <div className="w-3 h-3 bg-white rounded-sm"></div>
    </div>
  ]

  return (
    <div className={`relative w-full h-full ${className}`}>
      {logos.map((logo, index) => (
        <div
          key={index}
          className="absolute opacity-60 floating-logo"
          style={{
            left: `${15 + (index * 10) % 70}%`,
            top: `${20 + (index * 15) % 60}%`,
            animationDelay: `${index * 0.5}s`,
          }}
        >
          {logo}
        </div>
      ))}
    </div>
  )
} 