export default function Navbar() {
    return (
      <nav className="navbar">
        <div className="logo">TuNombre.dev</div>
        <ul className="nav-links">
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
  
        <style jsx>{`
          .navbar {
            display: flex;
            justify-content: space-between;
            padding: 1.5rem 2rem;
            background-color: #fff;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 999;
          }
          .logo {
            font-weight: bold;
            font-size: 1.4rem;
            color: #111;
          }
          .nav-links {
            list-style: none;
            display: flex;
            gap: 1.5rem;
          }
          .nav-links a {
            text-decoration: none;
            color: #333;
            font-weight: 500;
          }
          .nav-links a:hover {
            color: green;
          }
        `}</style>
      </nav>
    );
  }
  