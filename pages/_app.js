import HashLoader from "react-spinners/HashLoader";
import { useRouter } from "next/router";
import '../styles/globals.css'
import Navigation from '../components/Navigation';
import FooterNavigation from '../components/FooterNavigation';
import { useRef, useContext, useEffect, useState } from 'react'
import NavModal from '../components/NavModal';
import { motion } from 'framer-motion'
import Link from 'next/link'
import AnimateOpacity from '../components/AnimateOpacity'
import { menuVariants } from '../variants/variants'

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

  useEffect(() => {
    setLoading(true);
    window.addEventListener('load', function () {
      console.log('loaded')
      setLoading(false);
    })
    return () => window.removeEventListener('load', function () { setLoading(false) })
  }, [])

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
      {loading && <AnimateOpacity><div className="w-[100vw] h-[100vh] flex items-center justify-center fixed bg-white z-50"><HashLoader color="#1B3F79" loading={loading} size={150} /></div></AnimateOpacity>}
      <div className="relative" onClick={closeModal}>
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
              <Link href="/">
                <a className="hover:text-gray-500">HOME</a>
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
    </>

  )
}

export default MyApp
