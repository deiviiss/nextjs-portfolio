'use client'

import Navbar from './Navbar'
import Footer from './Footer'
import classNames from 'classnames'

const Layout = ({ children, footer = true, dark = false }) => {
  return (
    <div className={classNames({ 'bg-dark': dark, 'bg-light': !dark })}>

      <Navbar />
      <main className="p-4 max-w-6xl mx-auto">

        {/* Content */}
        {children} {/* agrega componentes debajo del Navbar */}
      </main>

      {
        footer && (
          <Footer />
        )
      }
    </div>
  )
}

export default Layout
