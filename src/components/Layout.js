import Footer from './Footer'
import { Header } from './Header'

const Layout = ({ children }) => {
  return (
    <>

      <Header />

      <main className="p-4 px-2 max-w-6xl mx-auto">

        {/* Content */}
        {children} {/* agrega componentes debajo del Navbar */}
      </main>

      <Footer />

    </>
  )
}

export default Layout
