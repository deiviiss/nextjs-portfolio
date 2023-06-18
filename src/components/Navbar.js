import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex w-full py-2 bg-[#373A3C] text-white">
      <div className="w-full p-4 max-w-7xl mx-auto">

        <Link href="/" className="text-xl">
          Bienvenido
        </Link>

      </div>
    </nav>
  )
}

export default Navbar
