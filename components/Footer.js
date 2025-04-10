export default function Footer() {
    return (
      <footer className="footer">
        <p>© {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
  
        <style jsx>{`
          .footer {
            background-color: #111;
            color: #eee;
            text-align: center;
            padding: 1.5rem;
          }
        `}</style>
      </footer>
    );
  }
  