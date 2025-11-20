export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-bg-waves">
        <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="rgba(139,92,246,0.05)"
          />
        </svg>
      </div>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Kontak</h2>
          <p className="section-subtitle">kontak yang dapat dihubungi & alamat sekarang</p>
        </div>
        <div className="contact-content">
          <div className="contact-card">
            <div className="contact-card-icon email-icon"></div>
            <h3>Email</h3>
            <p>daniramdani121201@gmail.com</p>
            <a href="mailto:daniramdani121201@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              Kirim Email
            </a>
          </div>
          <div className="contact-card">
            <div className="contact-card-icon phone-icon"></div>
            <h3>Whatsapp</h3>
            <p>+62 895-6076-29222</p>
            <a href="https://wa.me/+62895607629222" target="_blank" rel="noopener noreferrer" className="contact-link">
              Hubungi Sekarang
            </a>
          </div>
          <div className="contact-card">
            <div className="contact-card-icon location-icon"></div>
            <h3>Alamat</h3>
            <p>Cianjur, Indonesia</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              Lihat di Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

