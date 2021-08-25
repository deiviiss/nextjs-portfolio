import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from './Navbar'
import Footer from './Footer'
import nprogress from 'nprogress'
import classNames from 'classnames'
import PropTypes from 'prop-types'

{/* Layout recibe props*/ }
const Layout = ({ children, title, footer = true, dark = false }) => {

  const router = useRouter();

  //al cambiar de url
  useEffect(() => {
    const eventChangeRoute = url => {
      nprogress.start();
    }

    router.events.on('routeChangeStart', eventChangeRoute)

    router.events.on('routeChangeComplete', () => nprogress.done());

    router.events.on('routeChangeError', () => nprogress.done());

    return () => {
      router.events.off('routeChangeStart', eventChangeRoute);
    };
  }, []);

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
        {children} {/* agrega componentes debajo del Navbar*/}
      </main>

      {
        footer && (
          <Footer />
        )
      }
    </div>
  )
}

Layout.proptypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  footer: PropTypes.bool,
};

export default Layout;