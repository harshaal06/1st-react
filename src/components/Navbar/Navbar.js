import "./Navbar.css"

function Navbar() {
  return (
    <div className="Navbar">
        <a href="/" className="nav-name">Home</a>
        <a href="/about" className="nav-name">About</a>
        <a href="/contact" className="nav-name">Contact</a>
    </div>
  )
}

export default Navbar