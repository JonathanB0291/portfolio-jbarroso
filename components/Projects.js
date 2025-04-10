// pages/index.js
import Head from 'next/head';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonathan Barroso – Frontend Developer</title>
      </Head>

      <header className="header">
        <nav className="navbar">
          <div className="logo">Jonathan Barroso</div>
          <div className="links">
            <a href="#about">Sobre mí</a>
            <a href="#projects">Proyectos</a>
            <a href="https://www.linkedin.com/in/jonathanbarroso2/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/JonathanB0291" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </nav>
      </header>

      <main className="main">
        <section id="about" className="about">
          <h1>Hola, soy Jonathan 👋</h1>
          <p>
            Desarrollador frontend apasionado por crear interfaces intuitivas y visualmente atractivas. Busco constantemente perfeccionar mis habilidades y brindar soluciones modernas y funcionales.
          </p>
        </section>

        <section id="projects" className="projects">
          <h2>Proyectos Destacados</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>ValenFitness</h3>
              <p>Sitio web de entrenamiento personalizado. Diseño atractivo, responsive y moderno.</p>
              <a href="https://rainbow-cupcake-fb0f26.netlify.app/" target="_blank" rel="noopener noreferrer">Visitar sitio</a>
            </div>
            <div className="project-card">
              <h3>Psicóloga Sofía</h3>
              <p>Landing page profesional para una psicóloga. Colores suaves y enfoque minimalista.</p>
              <a href="https://psicologa-sofia.netlify.app/" target="_blank" rel="noopener noreferrer">Visitar sitio</a>
            </div>
            <div className="project-card">
              <h3>Restaurante</h3>
              <p>Menú digital con diseño responsive y funcionalidad básica para reservas.</p>
              <a href="https://restaurante-digital.netlify.app/" target="_blank" rel="noopener noreferrer">Visitar sitio</a>
            </div>
            <div className="project-card">
              <h3>Juego del Ahorcado</h3>
              <p>Pequeño juego interactivo desarrollado con JavaScript.</p>
              <a href="https://ahorcado-juego.netlify.app/" target="_blank" rel="noopener noreferrer">Jugar</a>
            </div>
            <div className="project-card">
             <h3>Juego adivina el número</h3>
             <p>Pequeño juego interactivo desarrollado con JavaScript.</p>
             <a href="https://adivinasunumero.netlify.app/" target="_blank" rel="noopener noreferrer">Jugar</a>
           </div> 

            <div className="project-card">
            <h3>Juegos minimalistas</h3>
            <p>Pequeño juego interactivo desarrollado con JavaScript.</p>
            <a href="https://juegosminimalistas.netlify.app/" target="_blank" rel="noopener noreferrer">Jugar</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Jonathan Barroso. Todos los derechos reservados.</p>
      </footer>

      <style jsx>{`
        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          background-color: #0f0f0f;
          color: #fff;
        }

        .header {
          background: #111;
          padding: 1rem 2rem;
          border-bottom: 1px solid #333;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .logo {
          font-weight: bold;
          font-size: 1.5rem;
          color: #00ff88;
        }

        .links a {
          color: #aaa;
          margin-left: 1.5rem;
          text-decoration: none;
          font-size: 1.1rem;
          transition: color 0.3s ease;
        }

        .links a:hover {
          color: #00ff88;
        }

        .main {
          padding: 4rem 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .about h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .about p {
          font-size: 1.2rem;
          color: #ccc;
        }

        .projects h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
          text-align: center;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: #1a1a1a;
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid #333;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 20px rgba(0, 255, 136, 0.2);
        }

        .project-card h3 {
          color: #00ff88;
        }

        .project-card a {
          display: inline-block;
          margin-top: 1rem;
          color: #00ff88;
          text-decoration: none;
          font-weight: 500;
        }

        .footer {
          background: #111;
          text-align: center;
          padding: 2rem;
          margin-top: 4rem;
          font-size: 0.9rem;
          color: #777;
        }
      `}</style>
    </>
  );
}