import Link from 'next/link'
import cx from 'classnames'

const ProjectNavigation = ({ project }) => {
  const toTheTop = () => {
    document.body.classList.add('smoothScroll')
    document.documentElement.classList.add('smoothScroll');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.body.classList.remove('smoothScroll')
    document.documentElement.classList.remove('smoothScroll');
  }

  return (
    <div>
      <ul className="grid grid-cols-3 justify-items-center whitespace-nowrap gap-y-5 md:flex w-[100vw] px-8 justify-evenly items-center md:gap-x-10 font-montserrat text-xs md:text-sm text-[#555555] py-32">
        <li><Link href="/#projects"><a className="hover:text-gray-900">All</a></Link></li>
        <li><Link href="/projects/drink-perfect"><a className={cx({ "hover:text-gray-900": project !== "drinkPerfect", "text-gray-900 font-bold text-base": project === "drinkPerfect" })}>Drink Perfect</a></Link></li>
        <li><Link href="/projects/catch"><a className={cx({ "hover:text-gray-900": project !== "catch", "text-gray-900 font-bold text-base": project === "catch" })}>Catch</a></Link></li>
        <li><Link href="/projects/happy-quest"><a className={cx({ "hover:text-gray-900": project !== "happyQuest", "text-gray-900 font-bold text-base": project === "happyQuest" })}>Happy Quest</a></Link></li>
        <li><Link href="/projects/ongo"><a className={cx({ "hover:text-gray-900": project !== "ongo", "text-gray-900 font-bold text-base": project === "ongo" })}>Ongo</a></Link></li>
      </ul>
      <button className="w-[100vw] bg-gray-700 text-white flex justify-center items-center h-10 font-montserrat" onClick={toTheTop}>Back to Top</button>
    </div>
  )
}

export default ProjectNavigation;