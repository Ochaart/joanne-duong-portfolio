import Image from 'next/image';
import Project from '../components/Project';
import classNames from 'classnames'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="py-16 -mt-32 -mb-28 sm:mt-0 md:py-20 sm:mb-16 h-full mx-28 relative flex flex-col justify-center lg:grid-cols-2 xl:grid-cols-2 lg:grid 2xl:grid-cols-contact items-center">
        <div className="lg:ml-20 xl:ml-20 2xl:ml-32 relative 2xl:justify-self-center z-10">
          <h1 className="mx-auto lg:m-0 text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl w-max font-merriweather">
            Product Designer
          </h1>
          <h2 className=" text-md sm:text-xl xl:text-3xl 2xl:text-4xl w-max font-openSans mt-1">
            Designing to achieve greater user conversion
          </h2>
        </div>
          <div className="relative xl:justify-self-center xl:mr-0 w-profile-sm h-profile-sm sm:w-profile-lg sm:h-profile-lg 2xl:w-profile-2xl lg:w-profile-xl lg:h-profile-xl 2xl:h-profile-2xl 2xl:mr-32">
            <Image
              src="/me.jpg"
              alt="Joanne Duong"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
      </section>
      <section className="relative py-28 -mt-28" id="projects">
        <h2 className="mx-auto px-10 md:px-24 text-2xl md:text-3xl mb-6">Completed Work:</h2>
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 auto-rows-max gap-x-24 gap-y-24 justify-items-center px-10 md:px-24">
          <Project
            title="MOBILE APP: DRINK PERFECT"
            objectPosition="0% 50%"
            description="I converted new users with a redesigned onboarding experience"
            maxWidth="max-w-2xl"
            image="/drink_perfect_hero.jpg"
            href="/projects/drink-perfect"
            alt="Mobile App: Drink Perfect"
          />
          <Project
            title="WEB APP: CATCH"
            description="I converted referred users with an actionable web portal"
            image="/catch_hero.jpg"
            href="/projects/catch"
            alt="Web app: Catch"
            objectPosition="0% 0%"
          />
          <Project
            title="MOBILE APP: HAPPY QUEST"
            description="I improved user engagement with a new positivity app"
            image="/happy_quest.jpg"
            href="/projects/happy-quest"
            alt="Mobile app: Happy Quest"
          />
          <Project
            title="LANDING PAGE: ONGO"
            description="I increased app downloads for a health and fitness app"
            image="/ongo.jpg"
            href="/projects/ongo"
            alt="Landing Page: ONGO"
            objectPosition="0% 0%"
          />
        </div>
      </section>
    </div>
  )
}
