import Image from 'next/image'
import Layout from '../components/Layout'
import { experiences, proyects } from '../../profile'
import Link from 'next/link'

const Home = () => {

  return (
    <Layout>
      {/* Header*/}
      <header className="bg-[#373A3C] p-4">
        <div className=' md:flex sm:gap-4'>

          <div className="flex w-full justify-end md:justify-center" >
            <Image width={324} height={123} className="object-contain" src="/logo_david.png" alt="profile" />
          </div>

          <div className="flex flex-col text-white text-base">
            <h2 className='text-3xl my-2'>Full Stack developer</h2>
            <p className='mb-4'>Pasión por el Backend con habilidades de Frontend. Comprometido con proyectos desde una perspectiva más amplia que solo el código.
            </p>
            <Link href="mailto:david.hilera@hotmail.com" className="w-28 max-w-xs text-center border-white border py-1 px-3 hover:bg-white hover:text-[#373A3C] cursor-pointer rounded-md transition duration-150 ease-in-out">
              Contactáme
            </Link>
          </div>
        </div>
      </header>

      {/* Section */}
      <section className="animate__animated animate__fadeInUp">

        <div className="flex flex-col border-[#373A3C] border mt-8 p-3 pb-4">
          <h2 className='text-3xl mb-2'>Experiencia</h2>

          <ul className=' pl-8'>
            {/* List Item Experience */}
            {
              experiences.map(({ title, description, from, to, option }, index) => (
                <li key={index}>
                  <h3 className='text-2xl mb-2'>{title}</h3>
                  <h4 className='text-xl mb-2'>{from} {to ? `- ${to}` : '- current'}</h4>
                  <p className='pb-2'>{description}</p>
                  <p className='mb-4'>{option}</p>
                </li>
              ))
            }
          </ul>

          <div className="flex justify-center">
            <Link href="https://www.linkedin.com/in/davidhilera/" className="w-full max-w-xs text-center rounded-md border-[#373A3C] border-1 py-[6px] px-[12px] hover:bg-[#373A3C] hover:text-white hover:border-red cursor-pointer transition duration-150 ease-in-out" target="_blank">
              Conoce más!
            </Link>
          </div>

        </div>

      </section>

      {/* Portfolio */}
      <section className="animate__animated animate__fadeInUp">
        <div className="flex flex-col bg-[#373A3C] mt-4 pt-3 pb-4">

          <h1 className="text-3xl mb-2 text-white text-center">Portafolio</h1>

          <div className="sm:grid sm:grid-cols-2 p-2 sm:gap-4 px-3">
            {
              proyects.map(({ name, description, image, url, repo }, index) => (
                <div className="text-[#373A3C] break-words bg-white bg-clip-border border-[#373A3C]" key={index}>
                  <h3 className="text-2xl p-4">{name}</h3>
                  <div className="flex w-full justify-center">
                    <Image width={324} height={123} className="object-contain" src={`${image}`} alt={name} />
                  </div>

                  <div className="flex flex-col p-3 gap-4">
                    <p>{description}</p>
                    <div className="flex gap-2">
                      <Link href={url} className="w-28 text-center rounded-md border-[#373A3C] border-1 py-[6px] px-[12px] hover:bg-[#373A3C] hover:text-white hover:border-red cursor-pointer transition duration-150 ease-in-out" target="_blank">
                        Demo
                      </Link>
                      <Link href={repo} className="w-28 text-center rounded-md border-[#373A3C] border-1 py-[6px] px-[12px] hover:bg-[#373A3C] hover:text-white hover:border-red cursor-pointer transition duration-150 ease-in-out" target="_blank">
                        Repo
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

          <div className="flex justify-center text-white">
            <Link href="https://github.com/deiviiss" className="w-full max-w-xs text-center border-white border py-1 hover:bg-white hover:text-[#373A3C] cursor-pointer rounded-md transition duration-150 ease-in-out mt-4 mx-4">
              Más proyectos
            </Link>
          </div>

        </div>
      </section >


    </Layout >
  )
}

export default Home
