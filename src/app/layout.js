import 'bootswatch/dist/cosmo/bootstrap.min.css'
import 'animate.css/animate.min.css'
import '../styles/global.css'

export const metadata = {
  title: 'Portfolio David Hilera',
  description: 'Portfolio website David Hilera',
  link: 'https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css',
  script: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js'
}

export default function RootLayout ({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en"
    >
      <body>{children}</body>
    </html>
  )
}