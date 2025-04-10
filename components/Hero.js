export default function Hero() {
    return (
      <section className="hero">
        <h1>Hola, soy <span>Tu Nombre</span></h1>
        <p>Desarrollador Frontend & UX/UI Designer</p>
  
        <style jsx>{`
          .hero {
            text-align: center;
            padding: 6rem 2rem;
            background-color: #f5f5f5;
          }
          h1 {
            font-size: 3rem;
            margin-bottom: 0.5rem;
          }
          span {
            color: green;
          }
          p {
            font-size: 1.2rem;
            color: #555;
          }
        `}</style>
      </section>
    );
  }
  