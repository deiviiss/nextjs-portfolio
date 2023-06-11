'use client'

import { useRouter } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'
import classNames from 'classnames'

const Layout = ({ children, title, footer = true, dark = false }) => {

  return (
    <div className={classNames({ 'bg-dark': dark, 'bg-light': !dark })}>
      <Navbar />

      <main className="container py-4">
        {
          title && (
            <h2 className={classNames('text-center', { 'text-light': dark })}>
              {title}
            </h2>
          )
        }

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
