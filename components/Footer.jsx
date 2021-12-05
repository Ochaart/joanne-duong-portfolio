import styles from '../styles/Footer.module.css';
import Button from './Button';
import SocialMediaLink from './SocialMediaLink';
import classNames from 'classnames'

const Footer = () => (
  <section className={classNames(styles.footerContainer, "flex flex-col items-center justify-center h-1/3 mt-40")}>
    <p className="font-merriweather text-2xl md:text-3xl text-white mb-4">
      Want to work together?
    </p>
    <Button
      href="mailto:joannesduong@gmail.com"
      text="EMAIL ME"
      width="md:w-44"
    />
  </section>
)

export default Footer;

