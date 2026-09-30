import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo">Bhoomika SM</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section id="home" className="hero">

        <div className="hero-content">

          <p className="hero-small-text">
            HELLO, I'M
          </p>

          <h1>
            Bhoomika <span>SM</span>
          </h1>

          <h2>
            Computer Science & Data Science Student
          </h2>

          <p className="hero-description">
            Computer Science and Data Science student passionate about
            software development, web technologies, databases and
            Artificial Intelligence & Machine Learning.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn primary-btn">
              View My Work
            </a>

            <a href="/resume.pdf" target="_blank" className="btn secondary-btn">
              View Resume
            </a>

          </div>

        </div>


        <div className="hero-profile">

          <div className="profile-circle">
            BS
          </div>

          <h3>Bhoomika SM</h3>

          <p>
            Developer • AI/ML Enthusiast
          </p>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="section">

        <p className="section-label">
          ABOUT ME
        </p>

        <h2 className="section-title">
          Building solutions with <span>technology</span>
        </h2>

        <div className="about-container">

          <div className="about-text">

            <p>
              I am a Computer Science and Data Science student at
              New Horizon College of Engineering, with a strong
              interest in software development, programming,
              databases, web technologies and emerging technologies.
            </p>

            <p>
              I enjoy developing academic and personal projects
              that combine software development with practical
              problem-solving.
            </p>

            <p>
              I am continuously learning new technologies and
              improving my programming, development and
              problem-solving skills.
            </p>

          </div>


          <div className="stats-container">

            <div className="stat-card">
              <h3>8.95</h3>
              <p>CGPA</p>
            </div>

            <div className="stat-card">
              <h3>4+</h3>
              <p>Projects</p>
            </div>

            <div className="stat-card">
              <h3>2027</h3>
              <p>Graduation</p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}
      <section id="skills" className="section dark-section">

        <p className="section-label">
          MY EXPERTISE
        </p>

        <h2 className="section-title">
          Technical <span>Skills</span>
        </h2>


        <div className="skills-grid">

          <div className="skill-card">

            <div className="skill-icon">
              &lt;/&gt;
            </div>

            <h3>Programming Languages</h3>

            <div className="skill-tags">
              <span>Java</span>
              <span>C</span>
              <span>Python</span>
            </div>

          </div>


          <div className="skill-card">

            <div className="skill-icon">
              WEB
            </div>

            <h3>Frontend Technologies</h3>

            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>React.js</span>
              
            </div>

          </div>


          <div className="skill-card">

            <div className="skill-icon">
              API
            </div>

            <h3>Backend Technologies</h3>

            <div className="skill-tags">
              <span>Spring Boot</span>
              <span>FastAPI</span>
            </div>

          </div>


          <div className="skill-card">

            <div className="skill-icon">
              AI
            </div>

            <h3>Machine Learning</h3>

            <div className="skill-tags">
              <span>Machine Learning</span>
              <span>Pandas</span>
              <span>Numpy</span>
              <span>Scikit-learn</span>
            </div>

          </div>


          <div className="skill-card">

            <div className="skill-icon">
              DB
            </div>

            <h3>Databases</h3>

            <div className="skill-tags">
              <span>SQL</span>
              <span>PostgreSQL</span>
              <span>MySQL</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section">

        <p className="section-label">
          MY WORK
        </p>

        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>


        <div className="projects-grid">


          {/* PROJECT 1 */}
          <div className="project-card">

            <div className="project-top">
              <span className="project-number">
                01
              </span>

              <span className="project-category">
                AI / ML
              </span>
            </div>

            <h3>
              AgriSmart
            </h3>

            <p>
              AI/ML-powered Smart Farming and Agricultural Decision
              Support System for crop recommendation, mandi price
              analysis, MSP comparison, weather insights, price
              prediction and profit estimation.
            </p>

            <div className="project-tech">

              <span>React.js</span>
              <span>FastAPI</span>
              <span>Python</span>
              <span>PostgreSQL</span>
              <span>Scikit-learn</span>

            </div>

            <a href="#" className="project-link">
              View Project →
            </a>

          </div>


          {/* PROJECT 2 */}
          <div className="project-card">

            <div className="project-top">

              <span className="project-number">
                02
              </span>

              <span className="project-category">
                BACKEND
              </span>

            </div>

            <h3>
              Microservices Authentication System
            </h3>

            <p>
              Secure authentication system featuring JWT,
              Role-Based Access Control, QR-code based login
              and Redis-backed session management.
            </p>

            <div className="project-tech">

              <span>Java</span>
              <span>Spring Boot</span>
              <span>Spring Security</span>
              <span>JWT</span>
              <span>Redis</span>

            </div>

            <a href="#" className="project-link">
              View Project →
            </a>

          </div>


          {/* PROJECT 3 */}
          <div className="project-card">

            <div className="project-top">

              <span className="project-number">
                03
              </span>

              <span className="project-category">
                FULL STACK
              </span>

            </div>

            <h3>
              Education Suggestion Website
            </h3>

            <p>
              Full-stack web application designed to help
              post-2nd PUC students explore degree programs,
              college options and career paths.
            </p>

            <div className="project-tech">

              <span>AngularJS</span>
              <span>Spring Boot</span>
              <span>Java</span>
              <span>PostgreSQL</span>

            </div>

            <a href="#" className="project-link">
              View Project →
            </a>

          </div>


          {/* PROJECT 4 */}
          <div className="project-card">

            <div className="project-top">

              <span className="project-number">
                04
              </span>

              <span className="project-category">
                AI / ML
              </span>

            </div>

            <h3>
              AgriSense
            </h3>

            <p>
              AI-powered agriculture platform integrating
              machine learning models with FastAPI for crop
              disease detection and fertilizer recommendations.
            </p>

            <div className="project-tech">

              <span>React.js</span>
              <span>FastAPI</span>
              <span>Python</span>
              <span>Machine Learning</span>

            </div>

            <a href="#" className="project-link">
              View Project →
            </a>

          </div>


        </div>

      </section>


      {/* ================= EDUCATION ================= */}
      <section id="education" className="section dark-section">

        <p className="section-label">
          MY JOURNEY
        </p>

        <h2 className="section-title">
          Education
        </h2>


        <div className="timeline">


          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-date">
                2023 – 2027
              </span>

              <h3>
                Bachelor of Engineering
              </h3>

              <h4>
                Computer Science and Data Science
              </h4>

              <p>
                New Horizon College of Engineering
              </p>

              <strong>
                CGPA: 8.95
              </strong>

            </div>

          </div>


          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-date">
                2021 – 2023
              </span>

              <h3>
                XII Standard
              </h3>

              <p>
                Sri Vidyaniketan PU College
              </p>

              <strong>
                92.16%
              </strong>

            </div>

          </div>


          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-date">
                2020 – 2021
              </span>

              <h3>
                X Standard
              </h3>

              <p>
                Shree Krishna Devaraya High School
              </p>

              <strong>
                87.52%
              </strong>

            </div>

          </div>


        </div>

      </section>


      {/* ================= CERTIFICATIONS ================= */}
      <section id="certifications" className="section">

        <p className="section-label">
          ACHIEVEMENTS
        </p>

        <h2 className="section-title">
          Certifications & <span>Achievements</span>
        </h2>


        <div className="certifications-list">


          <div className="certificate-card">

            <span className="certificate-number">
              01
            </span>

            <div>

              <h3>
                Top 100 Finalist
              </h3>

              <p>
                Capgemini Exceller AgentifAI Buildathon — 2026
              </p>

            </div>

          </div>


          <div className="certificate-card">

            <span className="certificate-number">
              02
            </span>

            <div>

              <h3>
                SAP Certified
              </h3>

              <p>
                Data Analyst – SAP Analytics Cloud — 2026
              </p>

            </div>

          </div>


          <div className="certificate-card">

            <span className="certificate-number">
              03
            </span>

            <div>

              <h3>
                Database Structures and Management with MySQL
              </h3>

              <p>
                Meta — Coursera — 2025
              </p>

            </div>

          </div>


          <div className="certificate-card">

            <span className="certificate-number">
              04
            </span>

            <div>

              <h3>
                Generative AI Landscape
              </h3>

              <p>
                Infosys Springboard — 2026
              </p>

            </div>

          </div>


          <div className="certificate-card">

            <span className="certificate-number">
              05
            </span>

            <div>

              <h3>
                Introduction to R
              </h3>

              <p>
                Infosys Springboard — 2026
              </p>

            </div>

          </div>


        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section id="contact" className="contact-section">

        <p className="section-label">
          GET IN TOUCH
        </p>

        <h2>
          Let's build something <span>amazing.</span>
        </h2>

        <p className="contact-description">
          I'm open to opportunities, collaborations and
          interesting technology projects.
        </p>


        <div className="contact-buttons">

          <a
            href="mailto:bhoomikasm0205@gmail.com"
            className="btn primary-btn"
          >
            Email Me
          </a>

          <a
            href="#"
            className="btn secondary-btn"
          >
            LinkedIn
          </a>

          <a
            href="#"
            className="btn secondary-btn"
          >
            GitHub
          </a>

        </div>


        <p className="copyright">
          © 2026 Bhoomika SM. All rights reserved.
        </p>

      </section>

    </div>
  );
}

export default App;