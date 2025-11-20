'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface PortfolioModalProps {
  isOpen: boolean
  imageSrc: string
  title: string
  onClose: () => void
}

export default function PortfolioModal({ isOpen, imageSrc, title, onClose }: PortfolioModalProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setImageLoaded(false)
    } else {
      document.body.style.overflow = ''
      // Reset state when modal closes
      setTimeout(() => {
        setImageLoaded(false)
      }, 300)
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (imageSrc && isOpen) {
      setImageLoaded(false)
    }
  }, [imageSrc, isOpen])

  const handleImageLoad = () => {
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setImageLoaded(true)
    }, 100)
  }

  const handleImageError = () => {
    setImageLoaded(true)
  }

  if (!isOpen) return null

  return (
    <div className={`portfolio-modal ${isOpen ? 'active' : ''}`}>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-content">
        <button className="modal-close" aria-label="Close modal" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="modal-image-container">
          {/* Skeleton/Shimmer Loading */}
          {imageSrc && (
            <div className={`modal-loading-wrapper ${imageLoaded ? 'fade-out' : ''}`}>
              <div className="modal-skeleton">
                <div className="skeleton-shimmer"></div>
              </div>
              <div className="modal-loading">
                <div className="loading-spinner"></div>
                <p className="loading-text">Memuat gambar...</p>
              </div>
            </div>
          )}
          {/* Actual Image */}
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={title}
              width={1200}
              height={800}
              className={`modal-image ${imageLoaded ? 'loaded' : ''}`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              priority
            />
          )}
        </div>
        <div className="modal-title">{title}</div>
      </div>
    </div>
  )
}

