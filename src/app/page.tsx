'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import PortfolioModal from '@/components/PortfolioModal'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState('')
  const [modalTitle, setModalTitle] = useState('')

  const openModal = (imageSrc: string, title: string) => {
    setModalImage(imageSrc)
    setModalTitle(title)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => {
      setModalImage('')
      setModalTitle('')
    }, 300)
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isModalOpen])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolio onImageClick={openModal} />
      <Contact />
      <Footer />
      <ScrollToTop />
      <PortfolioModal
        isOpen={isModalOpen}
        imageSrc={modalImage}
        title={modalTitle}
        onClose={closeModal}
      />
    </>
  )
}

