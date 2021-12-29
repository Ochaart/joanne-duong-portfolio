import Image from 'next/image';
import Project from '../components/Project';
import classNames from 'classnames'
import styles from '../styles/Home.module.css';
import AnimateOpacity from '../components/AnimateOpacity'
import useModuleInView from '../hooks/useModuleInView'
import { motion } from 'framer-motion'
import { moduleVariants } from '../variants/variants'

export default function Home() {
  const { module: refProjectsModule, controls: projectsModuleControls } = useModuleInView();

  return (
    <AnimateOpacity>
      <div className="flex flex-col">
        <section className="pb-16 pt-32 md:pt-48 md:pb-36 flex flex-col px-10 md:px-24">
          <h1 className="lg:m-0 text-4xl font-merriweather">
            Product Designer
          </h1>
          <h2 className="text-lg font-openSans mt-1">
            Designing to achieve greater user conversion
          </h2>
        </section>
        <motion.section
          ref={refProjectsModule}
          initial="initial"
          animate={projectsModuleControls}
          variants={moduleVariants}
          className="relative pb-28">
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
        </motion.section>
      </div>
    </AnimateOpacity>
  )
}
