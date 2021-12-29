import '../styles/globals.css'
import Navigation from '../components/Navigation';
import FooterNavigation from '../components/FooterNavigation';
import { useRef, useContext, useEffect } from 'react'
import NavModal from '../components/NavModal';
import { motion } from 'framer-motion'
import Link from 'next/link'
import { menuVariants } from '../variants/menu_variants'

function MyApp({ Component, pageProps }) {
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.openModal();
  }

  const closeModal = () => {
    modalRef.current.closeModal();
  }

  const toggleModal = () => {
    modalRef.current.toggleModal();
  }

  useEffect(() => {
    window.addEventListener('load', () => {
      console.log('loaded');
    })
  }, [])

  return (
    <div onClick={closeModal}>
      <Navigation openModal={openModal} toggleModal={toggleModal} />
      <Component {...pageProps} />
      <FooterNavigation />
      <NavModal
        ref={modalRef}
        overlayStyles="lg:hidden fixed right-9 top-11 sm:top-16 z-50 w-52 h-32 bg-gray-900 overflow-hidden"
      >
        <motion.ul
          className="text-white font-montserrat flex flex-col text-2xl h-[100%] px-10 justify-center space-y-4"
        >
          <li>
            <Link href="/#projects">
              <a className="hover:text-gray-500">PROJECTS</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className='hover:text-gray-500'>ABOUT</a>
            </Link>
          </li>
        </motion.ul>
      </NavModal>
    </div>
  )
}

export default MyApp
