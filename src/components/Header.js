import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="max-w-7xl mx-auto bg-[#373A3C] p-6 mt-4">
      <div className=' md:flex sm:gap-4'>

        <div className="flex w-full justify-end md:justify-center" >
          <Image width={324} height={123} className="object-contain" src="/logo_david.png" alt="profile" />
        </div>

        <div className="flex flex-col text-white text-base">
          <h2 className='text-3xl my-2'>Full Stack developer</h2>
          <p className='mb-6'>Pasión por el Backend con habilidades de Frontend. Comprometido con proyectos desde una perspectiva más amplia que solo el código.
          </p>
          <Link href="mailto:david.hilera@hotmail.com" className="w-36 max-w-xs text-center border-white border py-1 px-3 hover:bg-white hover:text-[#373A3C] cursor-pointer rounded-md transition duration-150 ease-in-out">
            Contactáme
          </Link>
        </div>
      </div>
    </header>
  )
}
