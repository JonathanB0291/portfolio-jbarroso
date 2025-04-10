export default function Contact() {
    return (
      <section id="contact" className="section">
        <h2>Contacto</h2>
        <p>📧 <a href="mailto:tucorreo@gmail.com">tucorreo@gmail.com</a></p>
        <p>💼 <a href="https://linkedin.com/in/tuusuario" target="_blank">LinkedIn</a></p>
        <p>💻 <a href="https://github.com/tuusuario" target="_blank">GitHub</a></p>
  
        <style jsx>{`
          .section {
            padding: 4rem 2rem;
            text-align: center;
          }
          a {
            color: green;
          }
          a:hover {
            text-decoration: underline;
          }
        `}</style>
      </section>
    );
  }
  