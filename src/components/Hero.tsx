'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).style.opacity = '1'
            ;(entry.target as HTMLElement).style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const sections = document.querySelectorAll('section:not(.hero) > .container')
    sections.forEach((section) => {
      ;(section as HTMLElement).style.opacity = '0'
      ;(section as HTMLElement).style.transform = 'translateY(30px)'
      ;(section as HTMLElement).style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

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
  }

  return (
    <section id="home" className="hero">
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
        <div className="shape shape-6"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">✨ Open To Work</div>
          <h1 className="hero-title">
            <span className="greeting">Halo, Saya</span>
            <span className="name">
              <span className="name-part">Dani Ramdani</span>
            </span>
            <span className="role">
              <span className="role-word">Web</span>
              <span className="role-word">Developer</span>
            </span>
          </h1>
          <p className="hero-description">
            Saya adalah seorang <span className="highlight">Fullstack Web Developer</span> yang menangani
            pengembangan <span className="highlight">frontend </span> dan <span className="highlight"> backend</span>.
            Saya fokus membangun website serta aplikasi web yang cepat, responsif, aman, dan mudah digunakan.
            Saya memiliki passion dalam menciptakan solusi digital yang kreatif, efisien, dan mampu menjawab
            kebutuhan pengguna maupun bisnis.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Tahun Pengalaman</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Tahun Fullstack Developer</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1</div>
              <div className="stat-label">Tahun Backend Developer</div>
            </div>
          </div>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn btn-primary" onClick={(e) => scrollToSection(e, '#portfolio')}>
              <span>Lihat Portfolio</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => scrollToSection(e, '#contact')}>
              Hubungi Saya
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <div className="image-placeholder">
              <Image
                src="/myphoto.JPG"
                alt="Dani Ramdani"
                width={400}
                height={400}
                className="profile-photo"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

