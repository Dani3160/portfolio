import Image from 'next/image'

interface PortfolioItem {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
}

interface PortfolioProps {
  onImageClick: (imageSrc: string, title: string) => void
}

export default function Portfolio({ onImageClick }: PortfolioProps) {
  const portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      title: 'JEC Rekrutmen',
      description: 'Website Lowongan Pekerjaan yang terintegrasi dengan sistem hiring, sehingga HR dapat menerima, memproses, dan mengelola aplikasi kandidat secara online dengan lebih cepat dan praktis.',
      image: '/jec-recrutment.png',
      tags: ['Laravel', 'Vue.js', 'Bootstrap', 'MySQL'],
    },
    {
      id: '2',
      title: 'Synergy',
      description: 'Website perusahaan dengan desain modern dan responsif. Sistem HRIS untuk mempermudah pengelolaan data karyawan, absensi, penggajian, dan laporan secara otomatis dan efisien.',
      image: '/jec-hris.png',
      tags: ['Laravel', 'Bootstrap', 'MySQL'],
    },
    {
      id: '3',
      title: 'E-FORM BJB',
      description: 'Aplikasi E-Form Pembukaan Rekening Bank BJB Cianjur guna mendigitalisasi alur pembukaan rekening baru agar lebih efisien dan paperless.',
      image: '/eform-bjb.png',
      tags: ['Vue.js', 'Laravel', 'Chart.js', 'MySQL', 'Woowa (Blast WA)'],
    },
    {
      id: '4',
      title: 'CAPTAIN BJB (CASH PICKUP)',
      description: 'Aplikasi Operasional Cash Pickup UMKM Bank BJB Cianjur',
      image: '/pickup-bjb.png',
      tags: ['Laravel', 'Bootstrap', 'MySQL', 'Google Maps API (Tracking)', 'Chart.js'],
    },
    {
      id: '5',
      title: 'CAPTAIN BJB (MANAGER)',
      description: 'Aplikasi Monitoring Account Officer & Cash Pickup UMKM Bank BJB Cianjur untuk mempercepat dan mempermudah proses monitoring operasional.',
      image: '/manager-bjb.png',
      tags: ['Laravel', 'Bootstrap', 'MySQL', 'Google Maps API (Tracking)', 'Chart.js', 'Woowa (Blast WA)'],
    },
    {
      id: '6',
      title: 'Dairy Diary',
      description: 'Website promosi untuk distributor bahan baku kue di Indonesia yang menyediakan berbagai varian berkualitas terbaik dari Anchor Food Professionals, seperti mentega Anchor, krim keju Anchor, susu, keju natural & keju olahan, dan lainnya.',
      image: '/dairydiary.png',
      tags: ['PHP', 'Bootstrap', 'jQuery', 'AJAX', 'MySQL'],
    },
    {
      id: '7',
      title: 'Quick Silver Cruise',
      description: 'Platform booking paket wisata / tur laut (cruise, watersport, tur ke Nusa Penida)',
      image: '/cruise.png',
      tags: ['Laravel', 'Bootstrap', 'jQuery', 'AJAX', 'MySQL', 'Payment Gateway (Midtrans)'],
    },
    {
      id: '8',
      title: 'Socialchat',
      description: 'Aplikasi CRM Omnichannel, Menampilkan rangkaian fitur canggih seperti Kotak Masuk terpadu, Manajemen Pipeline, Kontak Terpusat, Chatbot AI pintar, Kampanye promosi yang terarah, serta Laporan Aktivitas berbasis data untuk membantu bisnis bekerja lebih efektif dan efisien.',
      image: '/socialchat.png',
      tags: ['Nest JS', 'Vue.js', 'Golang', 'RabbitMQ', 'MongoDB', 'Gemini API', 'Meta API', 'Payment Gateway (Xendit)', 'Socket.io'],
    },
    {
      id: '9',
      title: 'Manypage',
      description: 'Aplikasi kelola sosial media yang membantu Anda menghemat waktu dan tenaga, membuat konten yang menarik dan relevan, serta melacak hasil posting.',
      image: '/manypage.png',
      tags: ['Nest JS', 'Vue.js', 'Golang', 'RabbitMQ', 'MongoDB', 'Payment Gateway (Xendit)', 'Socket.io'],
    },
  ]

  const handleImageClick = (image: string, title: string) => {
    onImageClick(image, title)
  }

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-bg-shapes">
        <div className="bg-shape shape-a"></div>
        <div className="bg-shape shape-b"></div>
      </div>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">Beberapa proyek website yang telah saya kerjakan</p>
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-image">
                <div className="portfolio-overlay">
                  <button
                    className="portfolio-link"
                    onClick={() => handleImageClick(item.image, item.title)}
                  >
                    Lihat Detail
                  </button>
                </div>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="portfolio-img"
                  onClick={() => handleImageClick(item.image, item.title)}
                />
              </div>
              <div className="portfolio-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="portfolio-tags">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

