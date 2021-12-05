import SocialMediaLink from './SocialMediaLink';

const FooterNavigation = () => (
  <section className="h-14 bg-gray-900 flex items-center justify-center md:justify-end md:pr-28">
    <div className="flex space-x-10">
      <SocialMediaLink
        href="https://www.linkedin.com/in/joanneduo"
        text="LINKEDIN"
      />
      <SocialMediaLink
        href="https://www.behance.net/joanneduong"
        text="BEHANCE"
      />
    </div>
  </section>
)

export default FooterNavigation;