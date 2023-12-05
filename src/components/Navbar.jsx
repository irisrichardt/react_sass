import "../styles/components/navbar.sass"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="center">
        <div className="logo">Íris Balk</div>
        <ul className="nav-list">
          <li>Home</li>
          <li>Sobre</li>
          <li>Projetos</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
