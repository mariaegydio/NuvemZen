import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">🌤️ NuvemZen</h1>
        <ul className="nav-links">
          <li><Link to="/">Início</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/servicos">Serviços</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
