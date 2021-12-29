import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from "next/router";
import '../styles/globals.css'
import Navigation from '../components/Navigation';
import FooterNavigation from '../components/FooterNavigation';
import { useRef, useContext, useEffect, useState } from 'react'
import NavModal from '../components/NavModal';
import { motion } from 'framer-motion'
import Link from 'next/link'
import { menuVariants } from '../variants/menu_variants'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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

  // useEffect(() => {
  //   window.addEventListener('load', () => {
  //     setLoading(false);
  //   })
  //   console.log('loaded')
  //   return () => window.removeEventListener('load', () => {
  //     setLoading(false);
  //   })
  // }, [])

  useEffect(() => {
    router.events.on("routeChangeError", (e) => setLoading(true));
    router.events.on("routeChangeStart", (e) => setLoading(true));
    router.events.on("routeChangeComplete", (e) => setLoading(false));

    return () => {
      router.events.off("routeChangeError", (e) => setLoading(true));
      router.events.off("routeChangeStart", (e) => setLoading(true));
      router.events.off("routeChangeComplete", (e) => setLoading(false));
    };
  }, [router.events]);

  return (
    <>
      {loading ? <div className="w-[100vw] h-[100vh] flex items-center justify-center"><ClipLoader color="#1B3F79" loading={loading} size={150} /></div> : <div onClick={closeModal}>
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
      </div>}
    </>

  )
}

export default MyApp
