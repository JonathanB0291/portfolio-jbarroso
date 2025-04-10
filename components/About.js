export default function About() {
    return (
      <section id="about" className="section">
        <h2>Sobre Mí</h2>
        <p>
          Soy un desarrollador frontend con enfoque en diseño limpio y experiencia de usuario. Me encanta crear interfaces modernas, accesibles y eficientes. Trabajo con React, Next.js, Tailwind, Figma y más.
        </p>
  
        <style jsx>{`
          .section {
            padding: 4rem 2rem;
            background-color: #f0f0f0;
          }
          h2 {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          p {
            max-width: 700px;
            margin: 0 auto;
            line-height: 1.6;
            text-align: center;
          }
        `}</style>
      </section>
    );
  }
  