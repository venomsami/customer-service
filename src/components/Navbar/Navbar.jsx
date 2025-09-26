import './Navbar.css'

export default function Navbar(){
  return (
    <header className="nav">
      <div className="container nav__inner">
        <div className="nav__brand">CS — Ticket System</div>
        <nav className="nav__links">
          <a href="#">Home</a>
          <a href="#">FAQ</a>
          <a href="#">Changelog</a>
          <a href="#">Blog</a>
          <a href="#">Download</a>
          <a href="#">Contact</a>
          <button className="btn btn--primary">+ New Ticket</button>
        </nav>
      </div>
    </header>
  )
}
