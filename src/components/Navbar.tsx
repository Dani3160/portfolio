'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
  }, [isMenuOpen])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-brand">DR</div>
        <button
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={(e) => scrollToSection(e, '#home')}>Home</a></li>
          <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')}>Tentang</a></li>
          <li><a href="#experience" onClick={(e) => scrollToSection(e, '#experience')}>Pengalaman</a></li>
          <li><a href="#skills" onClick={(e) => scrollToSection(e, '#skills')}>Skills</a></li>
          <li><a href="#portfolio" onClick={(e) => scrollToSection(e, '#portfolio')}>Portfolio</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Kontak</a></li>
        </ul>
      </div>
    </nav>
  )
}

