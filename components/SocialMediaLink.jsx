import Link from 'next/link'

const SocialMediaLink = ({ href, svg }) => (
  <Link href={href}>
    <a target="_blank" className="font-montserrat text-md text-white hover:text-gray-500">{svg}</a>
  </Link>
)

export default SocialMediaLink;