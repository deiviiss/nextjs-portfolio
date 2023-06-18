import Footer from './Footer'
import { Header } from './Header'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

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
