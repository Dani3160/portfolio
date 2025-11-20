export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Tentang Saya</h2>
        </div>
        <div className="about-content">
          <div className="about-visual">
            <div className="visual-card">
              <div className="card-content">
                <div className="visual-icon"></div>
                <h3>Web Developer</h3>
                <p>Passionate Developer</p>
              </div>
            </div>
          </div>
          <div className="about-text">
            <h3>Biodata</h3>
            <div className="bio-info">
              <div className="bio-item">
                <span className="bio-label">Nama Lengkap:</span>
                <span className="bio-value">Dani Ramdani</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Tempat, Tanggal Lahir:</span>
                <span className="bio-value">Cianjur, 12 Desember 2001</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Alamat:</span>
                <span className="bio-value">Cianjur, Jawa Barat</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Email:</span>
                <span className="bio-value">daniramdani121201@gmail.com</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Telepon:</span>
                <span className="bio-value">+62 895-6076-29222</span>
              </div>
              <div className="bio-item">
                <span className="bio-label">Pendidikan:</span>
                <span className="bio-value">SMK Nurul Islam - Rekayasa Perangkat Lunak</span>
              </div>
            </div>
            <p className="bio-description">
              Saya adalah seorang Web Developer dengan pengalaman lebih dari 5 tahun dalam
              mengembangkan website dan aplikasi web. Saya memiliki keahlian dalam berbagai
              teknologi web modern dan selalu mengikuti perkembangan terbaru dalam dunia
              teknologi. Saya senang bekerja dalam tim dan selalu berusaha memberikan
              solusi terbaik untuk setiap proyek.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

