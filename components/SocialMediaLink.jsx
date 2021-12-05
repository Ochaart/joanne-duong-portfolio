import Link from 'next/link'

const SocialMediaLink = ({ href, text }) => (
  <Link href={href}>
    <a target="_blank" className="font-montserrat text-md text-white hover:text-gray-500">{text}</a>
  </Link>
)

export default SocialMediaLink;