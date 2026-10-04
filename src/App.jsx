import "./App.css";

function App() {
  const githubUrl = "https://github.com/Bhoomimalimath";

  const linkedinUrl =
    "https://www.linkedin.com/in/bhoomika-sm-175655308/";

  const leetcodeUrl =
    "https://leetcode.com/u/bhoomikamalimath/";

  const email = "bhoomikasm0205@gmail.com";

  const skillCategories = [
    {
      title: "Programming Languages",
      description:
        "Core languages I use for software development.",
      skills: ["Java", "C", "Python"],
    },
    {
      title: "Frontend Technologies",
      description:
        "Building responsive and interactive user interfaces.",
      skills: ["HTML", "CSS", "React.js"],
    },
    {
      title: "Backend Technologies",
      description:
        "Developing scalable server-side applications.",
      skills: ["Spring Boot"],
    },
    {
      title: "Machine Learning / AI",
      description:
        "Applying machine learning techniques to solve real-world problems.",
      skills: ["ML Concept", "Scikit-Learn"],
    },
    {
      title: "Databases",
      description:
        "Working with relational databases for data storage and management.",
      skills: ["SQL", "PostgreSQL"],
    },
  ];

  const projects = [
    {
      number: "01",
      title: "AgriSmart",
      category: "AI / ML • Full Stack",
      github: "https://github.com/Bhoomimalimath",
      description:
        "An AI/ML-based smart farming and agricultural decision support platform that helps farmers with crop recommendations, weather insights, mandi price analysis, MSP comparison, price prediction, and profit estimation.",
      technologies: [
        "React.js",
        "FastAPI",
        "Python",
        "PostgreSQL",
        "Scikit-learn",
      ],
    },

    {
      number: "02",
      title: "Microservices Authentication System",
      category: "Backend • Security",
      github: "https://github.com/Bhoomimalimath",
      description:
        "A secure microservices authentication system implementing JWT authentication, role-based access control, QR login, token validation, and Redis-based session management.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "Redis",
      ],
    },

    {
      number: "03",
      title: "Education Suggestion Website",
      category: "Web Development",
      github: "https://github.com/Bhoomimalimath",
      description:
        "A web application that provides degree, college, and career guidance to students after 2nd PUC based on their interests and academic background.",
      technologies: [
        "AngularJS",
        "Spring Boot",
        "Java",
        "PostgreSQL",
      ],
    },

    {
      number: "04",
      title: "AgriSense",
      category: "AI / ML",
      github: "https://github.com/Bhoomimalimath",
      description:
        "An AI-powered agriculture application for crop disease detection and fertilizer recommendation using machine learning techniques.",
      technologies: [
        "React.js",
        "FastAPI",
        "Python",
        "Machine Learning",
      ],
    },
  ];

  const certifications = [
    {
      title:
        "Top 100 Finalist – Capgemini Exceller AgentifAI Buildathon",
      year: "2026",
    },
    {
      title:
        "SAP Certified – Data Analyst – SAP Analytics Cloud",
      year: "2026",
    },
    {
      title:
        "Database Structures and Management with MySQL – Meta",
      year: "2025",
      subtitle: "Coursera",
    },
    {
      title:
        "Generative AI Landscape – Infosys Springboard",
      year: "2026",
    },
    {
      title:
        "Introduction to R – Infosys Springboard",
      year: "2026",
    },
  ];

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            <span className="logo-mark">B</span>

            <span>
              Bhoomika
              <span className="logo-accent">.</span>
            </span>
          </a>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#certifications">
              Certifications
            </a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href={`mailto:${email}`}
            className="nav-contact"
          >
            Let's Talk
          </a>

        </div>
      </header>

      <main>

        {/* ================= HERO ================= */}

        <section id="home" className="hero">

          <div className="hero-container">

            <div className="hero-content">

              <div className="eyebrow">
                <span className="eyebrow-line"></span>
                Hello, I'm
              </div>

              <h1>
                Bhoomika
                <span> SM</span>
              </h1>

              <h2>
                Computer Science &amp; Data Science Student
              </h2>

              <p className="hero-description">
                I build practical software solutions using modern
                technologies, data, and machine learning. Passionate
                about turning ideas into useful digital products.
              </p>

              <div className="hero-actions">

                <a
                  href="#projects"
                  className="btn btn-primary"
                >
                  View My Work
                  <span>↗</span>
                </a>

              </div>

              <div className="hero-socials">

                <a
                  href={`mailto:${email}`}
                  className="social-link"
                >
                  <span className="social-icon">@</span>
                  Email
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon">
                    in
                  </span>
                  LinkedIn
                </a>

                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon">
                    ⌘
                  </span>
                  GitHub
                </a>

                <a
                  href={leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon">
                    &lt;/&gt;
                  </span>
                  LeetCode
                </a>

              </div>

            </div>

            {/* HERO PROFILE CARD */}

            <div className="hero-visual">

              <div className="hero-glow"></div>

              <div className="profile-card">

                <div className="profile-card-top">
                  <span className="status-dot"></span>
                  Available for opportunities
                </div>

                <div className="profile-avatar">
                  BS
                </div>

                <h3>Bhoomika SM</h3>

                <p>
                  Software Developer • Machine Learning
                </p>

                <div className="profile-divider"></div>

                <div className="profile-stats">

                  <div>
                    <strong>12+</strong>
                    <span>Skills</span>
                  </div>

                  <div>
                    <strong>04</strong>
                    <span>Projects</span>
                  </div>

                  <div>
                    <strong>05</strong>
                    <span>Certifications</span>
                  </div>

                </div>

                <div className="profile-tech">
                  <span>Java</span>
                  <span>Python</span>
                  <span>React</span>
                  <span>ML</span>
                </div>

              </div>

              <div className="floating-card floating-card-one">
                <span>⌘</span>

                <div>
                  <strong>Software</strong>
                  <small>Development</small>
                </div>
              </div>

              <div className="floating-card floating-card-two">
                <span>AI</span>

                <div>
                  <strong>Machine</strong>
                  <small>Learning</small>
                </div>
              </div>

            </div>

          </div>

          <div className="scroll-indicator">
            <span></span>
            Scroll to explore
          </div>

        </section>

        {/* ================= ABOUT ================= */}

        <section
          id="about"
          className="section about-section"
        >

          <div className="section-container">

            <div className="section-header">

              <span>01 — ABOUT</span>

              <h2>
                Turning ideas into
                <em> useful solutions.</em>
              </h2>

            </div>

            <div className="about-grid">

              <div className="about-main">

                <p className="about-lead">
                  I am a Computer Science and Data Science
                  student interested in software development,
                  machine learning, databases, and modern web
                  technologies.
                </p>

                <p>
                  I enjoy building real-world applications that
                  combine software engineering and intelligent
                  technologies to solve practical problems. My
                  projects range from full-stack web applications
                  to AI-powered agricultural solutions.
                </p>

                <p>
                  I am continuously improving my programming,
                  problem solving, and development skills while
                  exploring new technologies and building projects
                  that have practical value.
                </p>

              </div>

              <div className="about-side">

                <div className="about-info">

                  <span>01</span>

                  <div>
                    <strong>
                      Software Development
                    </strong>

                    <p>
                      Building scalable and practical
                      applications.
                    </p>
                  </div>

                </div>

                <div className="about-info">

                  <span>02</span>

                  <div>
                    <strong>Data &amp; AI</strong>

                    <p>
                      Exploring machine learning and
                      data-driven solutions.
                    </p>
                  </div>

                </div>

                <div className="about-info">

                  <span>03</span>

                  <div>
                    <strong>
                      Continuous Learning
                    </strong>

                    <p>
                      Improving through projects and
                      problem solving.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= SKILLS ================= */}

        <section
          id="skills"
          className="section skills-section"
        >

          <div className="section-container">

            <div className="skills-heading">

              <div className="skills-label">
                <span></span>
                02 — SKILLS
              </div>

              <h2>
                Technical <em>skills.</em>
              </h2>

              <p>
                Technologies and tools I use to build real-world
                applications and solve practical problems.
              </p>

            </div>

            <div className="skills-grid">

              {skillCategories.map(
                (category, index) => (

                  <div
                    className={`skill-category skill-category-${index + 1}`}
                    key={category.title}
                  >

                    <div className="skill-card-top">

                      <div className="skill-index">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </div>

                      <div className="skill-icon">

                        {index === 0 && "</>"}

                        {index === 1 && "▣"}

                        {index === 2 && "▤"}

                        {index === 3 && "✦"}

                        {index === 4 && "◉"}

                      </div>

                      <span className="skill-card-arrow">
                        ↗
                      </span>

                    </div>

                    <div className="skill-card-content">

                      <h3>
                        {category.title}
                      </h3>

                      <p>
                        {category.description}
                      </p>

                    </div>

                    <div className="skill-items">

                      {category.skills.map(
                        (skill) => (
                          <span
                            className="skill-item"
                            key={skill}
                          >
                            {skill}
                          </span>
                        )
                      )}

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </section>


        {/* ================= PROJECTS ================= */}

        <section
          id="projects"
          className="section projects-section"
        >

          <div className="section-container">

            <div className="section-header projects-header">

              <div>

                <span>03 — PROJECTS</span>

                <h2>
                  Things I've
                  <em> built.</em>
                </h2>

              </div>

              <p>
                A selection of projects that showcase my
                development and problem-solving skills.
              </p>

            </div>

            <div className="projects-list">

              {projects.map((project) => (

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card"
                  key={project.number}
                >

                  <div className="project-top">

                    <span className="project-number">
                      {project.number}
                    </span>

                    <span className="project-category">
                      {project.category}
                    </span>

                    <span className="project-arrow">
                      ↗
                    </span>

                  </div>

                  <div className="project-content">

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>

                    <div className="technology-list">

                      {project.technologies.map(
                        (tech) => (
                          <span key={tech}>
                            {tech}
                          </span>
                        )
                      )}

                    </div>

                  </div>

                </a>

              ))}

            </div>

          </div>

        </section>


        {/* ================= EDUCATION ================= */}

        <section
          id="education"
          className="section education-section"
        >

          <div className="section-container">

            <div className="section-header">

              <span>04 — EDUCATION</span>

              <h2>
                My academic
                <em> journey.</em>
              </h2>

            </div>

            <div className="timeline">

              <div className="timeline-item">

                <div className="timeline-year">
                  2023 — 2027
                </div>

                <div className="timeline-dot"></div>

                <div className="timeline-content">

                  <span>
                    BE • COMPUTER SCIENCE
                  </span>

                  <h3>
                    Bachelor of Engineering —
                    Computer Science &amp; Data Science
                  </h3>

                  <p>
                    New Horizon College of Engineering
                  </p>

                  <small>
                    Visvesvaraya Technological
                    University (VTU)
                    &nbsp; • &nbsp; CGPA: 8.95
                  </small>

                </div>

              </div>


              <div className="timeline-item">

                <div className="timeline-year">
                  2021 — 2023
                </div>

                <div className="timeline-dot"></div>

                <div className="timeline-content">

                  <span>PUC • XII</span>

                  <h3>
                    Sri Vidyaniketan PU College
                  </h3>

                  <small>
                    Percentage: 92.16%
                  </small>

                </div>

              </div>


              <div className="timeline-item">

                <div className="timeline-year">
                  2020 — 2021
                </div>

                <div className="timeline-dot"></div>

                <div className="timeline-content">

                  <span>SSLC • X</span>

                  <h3>
                    Shree Krishna Devaraya High School
                  </h3>

                  <small>
                    Percentage: 87.52%
                  </small>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CERTIFICATIONS ================= */}

        <section
          id="certifications"
          className="section certifications-section"
        >

          <div className="section-container">

            <div className="section-header">

              <span>05 — CERTIFICATIONS</span>

              <h2>
                Learning beyond
                <em> the classroom.</em>
              </h2>

            </div>

            <div className="certifications-grid">

              {certifications.map(
                (certificate, index) => (

                  <div
                    className="certificate-card"
                    key={certificate.title}
                  >

                    <div className="certificate-top">

                      <span>
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span>
                        {certificate.year}
                      </span>

                    </div>

                    <div className="certificate-icon">
                      ✓
                    </div>

                    <h3>
                      {certificate.title}
                    </h3>

                    {certificate.subtitle && (
                      <p>
                        {certificate.subtitle}
                      </p>
                    )}

                  </div>

                )
              )}

            </div>

          </div>

        </section>


        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="contact-section"
        >

          <div className="contact-container">

            <div className="contact-label">
              06 — CONTACT
            </div>

            <h2>
              Let's build something
              <span> meaningful.</span>
            </h2>

            <p>
              Have an opportunity, project, or simply want
              to connect? I'd love to hear from you.
            </p>

            <a
              href={`mailto:${email}`}
              className="contact-email"
            >
              {email}
              <span>↗</span>
            </a>

            <div className="contact-socials">

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href={leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                LeetCode ↗
              </a>

              <a href={`mailto:${email}`}>
                Email ↗
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-logo">
            Bhoomika<span>.</span>
          </div>

          <p>
            Designed &amp; built with React.js
          </p>

          <div className="footer-links">

            <a href="#home">
              Back to top ↑
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;