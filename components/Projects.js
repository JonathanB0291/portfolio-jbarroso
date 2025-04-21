import Head from 'next/head';
import { FaGithub, FaHtml5, FaLinkedin, FaJs, FaReact, FaNodeJs, FaCss3Alt, FaGitAlt, FaPython } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setResponseMessage('');

    // Aquí debes agregar tus credenciales de EmailJS
    const serviceID = 'service_jnz000b';
    const templateID = 'template_lci4mmq';
    const userID = 'FuvMQky_VIoUnSWAz';

    emailjs.send(
      serviceID,
      templateID,
      formData,
      userID
    )
      .then((response) => {
        setIsSending(false);
        setResponseMessage('Mensaje enviado con éxito.');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        setIsSending(false);
        setResponseMessage('Hubo un error al enviar el mensaje.');
      });
  };

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
            <a href="../cv/Cv- Jonathan Barroso 2025.pdf" download="Mi_CV.pdf" className="download-cv">CV</a>
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
            <div className="project-card">
              <h3>Mateando</h3>
              <p>Pequeña pagina de venta de mates.</p>
              <a href="https://mateandoestoy.netlify.app/" target="_blank" rel="noopener noreferrer">Visitar sitio</a>
            </div>
            <div className="project-card">
              <h3>Juego Simon Dice</h3>
              <p>Pequeño juego interactivo desarrollado con Html, Css y JavaScript.</p>
              <a href="https://simon-dic.netlify.app/" target="_blank" rel="noopener noreferrer">Jugar</a>
            </div>
            <div className="project-card">
              <h3>Clima actual</h3>
              <p>Pequeña pagina del clima desarrollado con Html, Css y JavaScript.</p>
              <a href="https://clima-ya.netlify.app/" target="_blank" rel="noopener noreferrer">Visitar sitio</a>
            </div>
          </div>
        </section>

        <section className="skills">
          <h2>Habilidades</h2>
          <div className="skills-list">
            <div className="skill">
              <FaJs size={35} />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <FaHtml5 size={35} />
              <p>Html</p>
            </div>
            <div className="skill">
              <FaReact size={35} />
              <p>React</p>
            </div>
            <div className="skill">
              <FaNodeJs size={35} />
              <p>Node.js</p>
            </div>
            <div className="skill">
              <FaCss3Alt size={35} />
              <p>CSS</p>
            </div>
            <div className="skill">
              <FaGitAlt size={35} />
              <p>Git</p>
            </div>
            <div className="skill">
              <FaPython size={35} />
              <p>Python</p>
            </div>
          </div>
        </section>

        <section className="contact">
          <h2>Contacta conmigo</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <button type="submit" disabled={isSending}>
              {isSending ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
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
          color: rgb(57, 220, 144);
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

        .download-cv {
          color: #aaa;
          margin-left: 1.5rem;
          font-size: 1.1rem;
          text-decoration: none;
          border: 1px solid rgb(107, 116, 76);
          padding: 0.5rem 1rem;
          border-radius: 12px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .download-cv:hover {
          background-color:rgb(76, 97, 87);
          color: #111;
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
          color:rgb(81, 85, 83);
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

        .project-card p {
          color: #ccc;
          font-size: 1rem;
          margin: 1rem 0;
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

       .skills {
          padding: 4rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
          margin-top: 4rem;
          text-align: center;
          background-color: #f4f4f4; /* Fondo más suave similar a la sección de proyectos */
          border-radius: 10px;
          margin-bottom: 2rem;
        }

        .skills h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #00ff88; /* Color que resalta, manteniendo la coherencia */
        }

        .skills-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          justify-items: center;
        }

        .skill {
          background: #fff; /* Fondo blanco para las habilidades */
          padding: 2rem;
          border-radius: 10px; /* Esquinas redondeadas similares a los proyectos */
          text-align: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Sombra suave */
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .skill:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0, 255, 136, 0.2); /* Sombra con efecto al pasar el mouse */
        }

        .skill p {
          font-size: 1rem;
          color: #333;
          margin-top: 1rem;
        }


        .contact form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact input, .contact textarea {
          padding: 0.8rem;
          background: #222;
          border: 1px solid #333;
          border-radius: 8px;
          color: #fff;
          font-size: 1rem;
        }

        .contact button {
          padding: 1rem;
          background: #00ff88;
          border: none;
          border-radius: 8px;
          color: #111;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .contact button:hover {
          background-color: #00e577;
        }
      `}</style>
    </>
  );
}
