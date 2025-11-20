export default function Experience() {
  const experiences = [
    {
      date: '2024 - Sekarang',
      title: 'Backend Developer',
      company: 'PT Booster Tekindo',
      description: 'Berfokus pada pengembangan backend, otomatisasi sistem, dan peningkatan performa chatbot AI untuk mendukung produk dan layanan berbasis komunikasi digital.',
      tasks: [
        'Mengembangkan API Backend dan Backend Scheduler untuk dua produk utama — SocialChat (platform omnichannel) dan ManyPage — sebagai fondasi pengelolaan data dan otomasi proses.',
        'Mengoptimalkan Chatbot AI agar lebih cepat, responsif, dan akurat dalam memberikan balasan kepada pelanggan.',
        'Membuat Pesan Interaktif Meta dan Template Pesan Meta untuk meningkatkan engagement pengguna melalui integrasi platform Meta yang lebih efektif.',
      ],
    },
    {
      date: '2023 - 2024',
      title: 'Fullstack Developer',
      company: 'Jakarta Eye Center (JEC)',
      description: 'Berpengalaman mengembangkan sistem HR dan platform rekrutmen yang membantu otomatisasi proses operasional perusahaan. Fokus pada efisiensi, kemudahan penggunaan, dan digitalisasi alur kerja.',
      tasks: [
        'Mengembangkan Sistem HRIS untuk mempermudah pengelolaan data karyawan, absensi, penggajian, dan laporan secara otomatis dan efisien.',
        'Membangun Website Lowongan Pekerjaan yang terintegrasi dengan sistem hiring, sehingga HR dapat menerima, memproses, dan mengelola aplikasi kandidat secara online dengan lebih cepat dan praktis.',
      ],
    },
    {
      date: '2020 - 2023',
      title: 'Fullstack Developer',
      company: 'PT EANNOVATE',
      description: 'Berpengalaman mengembangkan fitur, modul, dan REST API pada CMS perusahaan, serta melakukan maintenance dan pengembangan front-end untuk berbagai website klien. Fokus pada antarmuka, performa, stabilitas sistem, dan peningkatan pengalaman pengguna.',
      tasks: [
        'Mengembangkan fitur dan modul termasuk bug fixing dan pembuatan REST API.',
        'Melakukan pengembangan dan maintenance front-end + CMS untuk berbagai proyek klien, seperti: Dairy Diary – maintenance front-end & CMS, Innovasindo – pembuatan front-end + CMS, Atlas – pembuatan front-end + CMS, Siprental – pembuatan front-end + CMS, Belifire – rest api & bug-fix CMS, Innoq – front-end + CMS, Accusentry – front-end + CMS, FundRoots – front-end + CMS, Quicksilver Cruise – front-end + CMS, United Tractors – maintenance CMS',
      ],
    },
    {
      date: '2019 - 2020',
      title: 'Fullstack Developer',
      company: 'PT ASQI DIGITAL INNOVATION',
      description: 'Memulai karir sebagai Junior Web Developer. Berpengalaman dalam pengembangan aplikasi internal perbankan dan sistem informasi desa. Berkontribusi dalam tim serta mengerjakan proyek personal dengan fokus pada efisiensi, digitalisasi, dan kemudahan operasional.',
      tasks: [
        'Berkontribusi dalam pengembangan Aplikasi Monitoring Account Officer & Cash Pickup UMKM Bank BJB Cianjur untuk mempercepat dan mempermudah proses monitoring operasional.',
        'Mengembangkan Aplikasi E-Form Pembukaan Rekening Bank BJB Cianjur guna mendigitalisasi alur pembukaan rekening baru agar lebih efisien dan paperless.',
        'Membangun Aplikasi Smart Village BUMDes Kabupaten Cianjur, sebuah platform pencatatan keuangan dan pengelolaan unit usaha untuk mendukung pengelolaan BUMDes secara transparan dan terstruktur.',
        'Mengembangkan website menggunakan Laravel, Vue.js, Bootstrap, Chart.js, ApexCharts, dan integrasi peta untuk fitur tracking.',
      ],
    },
  ]

  return (
    <section id="experience" className="experience">
      <div className="experience-bg-pattern"></div>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Pengalaman Kerja</h2>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">{exp.date}</div>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
                <ul className="timeline-tasks">
                  {exp.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

