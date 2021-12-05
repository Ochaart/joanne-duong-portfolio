import Link from 'next/link'
import Image from 'next/image'

const Navigation = ({ openModal, toggleModal }) => {
  const toggleModalHandler = (e) => {
    e.stopPropagation();
    toggleModal();
  }
  return (
    <div className="px-8 py-4 sm:p-8 lg:px-24 grid grid-cols-3 fixed w-screen items-center bg-white z-50">
      <div className="flex flex-row content-">
        <Link href="/">
          <a className="text-2xl sm:text-3xl lg:text-4xl font-merriweather flex flex-nowrap whitespace-nowrap">
            <div className="w-5 h-5 mr-1 mb-1 sm:w-6 sm:h-6 relative self-center">
              <Image
                src='/shopping_bag.svg'
                alt='Logo'
                layout='fill'
              />
            </div>
            Joanne Duong
          </a>
        </Link>
      </div>
      <button
        className="relative w-7 h-7 sm:w-9 sm:h-9 justify-self-end col-start-3 lg:hidden"
        onClick={(e) => toggleModalHandler(e)}
      >
        <Image
          src='/hamburger_menu.svg'
          alt='Menu button'
          layout='fill'
        />
      </button>
      <ul className="hidden text-gray-500 font-montserrat lg:flex lg:flex-row lg:justify-end col-start-3 text-2xl">
        <li>
          <Link href="/#projects">
            <a className="hover:text-black">PROJECTS</a>
          </Link>
        </li>
        <li className="ml-10">
          <Link href="/about">
            <a className='hover:text-black'>ABOUT</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation;