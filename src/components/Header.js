import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="max-w-7xl mx-auto bg-[#242729] p-6 mt-0">
      <div className=' md:flex sm:gap-4'>

        <div className="flex w-full justify-end md:justify-center" >
          <Image priority width={324} height={123} className="object-contain w-auto h-auto" src="/logo_david.webp" alt="profile" />
        </div>

        <div className="flex flex-col text-white text-base">
          <h2 className='text-3xl my-2'>Full Stack developer</h2>
          <p className='mb-6'>Pasión por el Backend con habilidades de Frontend. Comprometido con proyectos desde una perspectiva más amplia que solo el código.
          </p>
          <div className='flex gap-2 w-full justify-end'>
            <Link href="mailto:david.hilera@hotmail.com" className="w-36 max-w-xs text-center border-white border py-1 px-3 hover:bg-white hover:text-[#242729] cursor-pointer rounded-md transition duration-150 ease-in-out">
            Contactáme
          </Link>

            <Link
            href="/CV-David-Hilera.pdf"
            download={true}
            target='_blank'
            className="w-36 max-w-xs text-center border-white border py-1 px-3 hover:bg-white hover:text-[#242729] cursor-pointer rounded-md transition duration-150 ease-in-out"
            >
              Descargar CV
            </Link>

          </div>
        </div>
      </div>
    </header>
  )
}
