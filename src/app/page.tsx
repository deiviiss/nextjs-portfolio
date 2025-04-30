
import { IoArrowUp, IoLogoWhatsapp } from 'react-icons/io5'
import { ButtonContactWhatsApp } from '../components/ui/ButtonContactWhatsApp'
import { ButtonScrollTop } from '../components/ui/ButtonScrollTop'
import { HeroSection } from '@/components/landing/hero-section/HeroSection'
import { ProjectsSection } from '@/components/landing/projects-section/ProjectsSection'
import AboutSection from '@/components/landing/about-section/AboutSection'
import { ExperienceSection } from '@/components/landing/experience-section/ExperienceSection.tsx'
import { ContactSection } from '@/components/landing/contact-section/ContactSection'
import { Footer } from '@/components/landing/footer/Footer'

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />


      <ButtonContactWhatsApp className='fixed bottom-20 right-6 p-3 text-center rounded-full border hover:bg-[#020817] hover:text-white cursor-pointer transition duration-150 ease-in-out hover:no-underline bg-primary print:hidden hover:animate-none text-white dark:text-[#020817] dark:hover:text-white'
        icon={<IoLogoWhatsapp className='w-7 h-7' />}
      />

      <ButtonScrollTop className='fixed bottom-4 right-6 p-3 text-center rounded-full border hover:bg-[#020817] hover:text-white cursor-pointer transition duration-150 ease-in-out hover:no-underline bg-primary print:hidden hover:animate-none text-white dark:text-[#020817] dark:hover:text-white' icon={<IoArrowUp className='w-7 h-7' />} />

      <Footer />
    </ >
  )
}

export default Home
