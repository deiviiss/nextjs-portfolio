import Image from 'next/image'
import Link from 'next/link'
import { experiences, proyects } from '../../profile'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout>

      {/* Section */}
      <section className="animate__animated animate__fadeInUp">

        <div className="flex flex-col border-[#24272925] border mt-3 p-3 pb-6 text-[#242729f7]">
          <h2 className='text-3xl mb-2'>Experiencia</h2>

          <ul className=' pl-8'>
            {/* List Item Experience */}
            {
              experiences.map(({ title, description, from, to, option }, index) => (
                <li key={index}>
                  <h3 className='text-2xl mb-2'>{title}</h3>
                  <h4 className='text-xl mb-2'>{from} {to ? `- ${to}` : '- 2024'}</h4>
                  <p className='pb-2 mb-4'>{description}</p>
                  <p className='mb-4'>{option}</p>
                </li>
              ))
            }
          </ul>

          <div className="flex justify-center pt-3">
            <Link href="https://www.linkedin.com/in/davidhilera/" className="w-full max-w-[10rem] text-center rounded-md border-[#2427297f] border-2 py-1 px-3 hover:bg-[#242729] hover:text-white hover:border-red cursor-pointer transition duration-150 ease-in-out" target="_blank">
              Conoce más!
            </Link>
          </div>

        </div>

      </section>

      {/* Portfolio */}
      <section className="animate__animated animate__fadeInUp">
        <div className="flex flex-col bg-[#242729] mt-7 pt-3 pb-4">

          <h1 className="text-3xl mb-2 text-white text-center">Portafolio</h1>

          <div className="flex flex-col gap-y-5 sm:grid sm:grid-cols-2 p-2 sm:gap-4 px-3">
            {
              proyects.map(({ name, description, image, url, repo }, index) => (
                <div className="text-[#242729] break-words bg-white bg-clip-border border-[#242729]" key={index}>
                  <h3 className="text-2xl p-4">{name}</h3>
                  <div className="flex w-full justify-center">
                    <Image width={324} height={123} className="w-auto h-auto max-h-48 object-contain" src={`${image}`} alt={name} loading='lazy' />
                  </div>

                  <div className="flex flex-col p-4 my-3 gap-4">
                    <p>{description}</p>
                    <div className="flex gap-2">
                      <Link href={url} className="w-28 text-center rounded-md border-[#2427297f] border-2 py-[6px] px-[12px] hover:bg-[#242729] hover:text-white hover:border-red cursor-pointer transition duration-150 ease-in-out" target="_blank">
                        Demo
                      </Link>
                      <Link href={repo} className="w-28 text-center rounded-md border-[#2427297f] border-2 py-[6px] px-[12px] hover:bg-[#242729] hover:text-white hover:border-red cursor-pointer transition duration-150 ease-in-out" target="_blank">
                        Repo
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

          <div className="flex justify-center mt-2 text-white">
            <Link href="https://github.com/deiviiss" className="w-full max-w-[10rem] text-center border-white border py-1 hover:bg-white hover:text-[#242729] cursor-pointer rounded-md transition duration-150 ease-in-out mt-4 mx-4">
              Más proyectos
            </Link>
          </div>

        </div>
      </section >

    </Layout >
  )
}

export default Home
