import 'animate.css/animate.min.css'
import '../styles/global.css'

export const metadata = {
  title: 'Portfolio David Hilera',
  description: 'Portfolio website David Hilera'
}

export default function RootLayout ({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}) {
  return (
    <html lang="es"
    >
      <body className='font-exo'>
        {children}
      </body>
    </html>
  )
}
