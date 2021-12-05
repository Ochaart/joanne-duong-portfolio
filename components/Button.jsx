import Link from 'next/link'

const Button = ({ href, width, text, border }) => (
  <Link href={href}>
    <a className={`bg-black p-3 md:p-4 font-montserrat tracking-wide text-white text-lg md:text-2xl text-center ${width} ${border}`}>{text}</a>
  </Link>
)

export default Button