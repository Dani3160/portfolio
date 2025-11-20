export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'Vue.js', 'TypeScript',
        'Tailwind CSS', 'ReactJS', 'Svelte', 'Inertia.js', 'Chart.js', 'ApexCharts', 'AJAX'
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        'PHP', 'Laravel', 'CodeIgniter', 'Node.js', 'Express.js', 'Nest JS', 'Bun',
        'Python', 'Golang', 'MySQL', 'MongoDB', 'PostgreSQL', 'RabbitMQ', 'REST API',
        'Microservice', 'Websocket', 'Socket.io'
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        'Git', 'GitHub', 'Gitlab', 'Figma', 'Postman', 'Gemini API', 'Meta API',
        'Xendit API', 'JSON', 'Bug Fixing', 'Team Work', 'CI/CD', 'Docker', 'Webhook',
        'Midtrans API', 'Google Maps API', 'Woowa (Blast WA)'
      ],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-bg-gradient"></div>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-intro">
            Teknologi dan tools yang saya kuasai untuk membangun aplikasi yang luar biasa
          </p>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

