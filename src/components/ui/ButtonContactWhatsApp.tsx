'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface ButtonContactWhatsAppProps {
  name?: string
  className?: string
  icon?: React.ReactNode
}

export const ButtonContactWhatsApp = ({ name, className, icon }: ButtonContactWhatsAppProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const fixedScrollThreshold = 2 // 2% scroll threshold

  const handleScroll = () => {
    // calculate the vertical scroll percentage
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    setIsVisible(scrolled > fixedScrollThreshold) // show the button if the percentage is greater than the fixed value
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll) // add the event listener for the scroll

    return () => {
      window.removeEventListener('scroll', handleScroll) // delete the event listener when the component is unmounted
    }
  }, [])

  return (
    <div className={`${isVisible ? 'fade-in pointer-events-auto' : 'opacity-0  pointer-events-none'}`}>
      <button
        className={className}
      >
        <Link href="https://wa.me/529811250049?text=Hola%2C%20deseo%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de..." passHref target='_blank'>
          {icon && <span className="icon">{icon}</span>}
          {name && <span>{name}</span>}
        </Link>
      </button>
    </div>
  )
}
