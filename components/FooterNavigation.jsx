import SocialMediaLink from './SocialMediaLink'
import Image from 'next/image'

const FooterNavigation = () => (
  <section className="h-14 bg-[#1B3F79] flex items-center justify-center md:justify-end md:pr-28">
    <div className="flex space-x-2">
      <SocialMediaLink
        href="https://www.linkedin.com/in/joanneduo"
        svg={<div className="relative w-[30px] h-[30px]"><Image src="/icon_linkedin.svg" layout="fill" alt="linkedin link"/></div>}
      />
      <SocialMediaLink
        href="https://www.behance.net/joanneduong"
        svg={<div className="relative w-[30px] h-[30px]"><Image src="/icon_behance.svg" layout="fill" alt="behance link" /></div>}
      />
      <SocialMediaLink
        href="mailto:joannesduong@gmail.com"
        svg={<div className="relative w-[30px] h-[30px]"><Image src="/icon_gmail.svg" layout="fill" alt="gmail link" /></div>}
      />
    </div>
  </section>
)

export default FooterNavigation;