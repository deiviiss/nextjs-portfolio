import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="navbar-dark bg-dark">
      <div className="p-4 max-w-7xl mx-auto">

        <Link href="/" className="navbar-brand text-xl">
          Bienvenido
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* <li className="nav-item">
              <Link href="/blog">
                <a className="nav-link active" aria-current="page">Blog</a>
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link href="/github">
                <a className="nav-link active" aria-current="page">GitHub</a>
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link href="/reto_platzi.jpg">
                <a className="nav-link active" aria-current="page">Reto Platzi</a>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
