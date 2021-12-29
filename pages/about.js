import Image from 'next/image';
import AnimateOpacity from '../components/AnimateOpacity'
import useModuleInView from '../hooks/useModuleInView'
import { motion } from 'framer-motion'
import { moduleVariants } from '../variants/variants'

const About = () => {
  const { module: refDanceModule, controls: danceModuleControls } = useModuleInView();

  return (
    <AnimateOpacity>
      <section className="flex flex-col-reverse lg:grid lg:grid-cols-2 mx-auto lg:px-28 pb-16 pt-20 sm:pt-28 items-center">
        <div className="flex flex-col gap-y-5 px-10">
          <div className="font-montserrat text-base xl:text-xl pt-8 lg:pt-0">HI THERE!</div>
          <div className="font-merriweather text-2xl xl:text-3xl">I&apos;m Joanne Duong</div>
          <p className="text-base xl:text-xl">
            I&apos;m a product designer based in San Francisco. I&apos;m originally from Seattle, but moved to SF after my first solo trip to Central America. I love traveling the world and bring my global perspective to my work. I get excited about designing which makes life easier so that we have more time to do what’s important: connect in real life.
          </p>
          <p className="text-base xl:text-xl">
            In design, I believe in researching users to understand their needs. With my understanding of users and past experiences in retail, I design solutions which achieve business goals.
          </p>
        </div>
        <div className="relative min-h-[320px] min-w-[320px] md:min-h-[450px] md:min-w-[450px] justify-self-center">
          <Image
            src="/joanne_with_bike.png"
            layout="fill"
            alt="Joanne with a bike in a sunny urban neighborhood"
            objectFit="contain"
            priority
          />
        </div>
      </section>
      <motion.section
      ref={refDanceModule}
      initial="initial"
      animate={danceModuleControls}
      variants={moduleVariants}
      className="flex flex-col mb-28 lg:grid lg:grid-cols-2 mx-auto px-8 lg:px-28 justify-items-center justify-center items-center gap-y-8">
        <div className="relative w-[347.21px] h-[252.52px] sm:w-[458.33px] sm:h-[333.33px] md:w-[550px] md:h-[400px] xl:w-[660px] xl:h-[480px]">
          <Image
            src="/joanne_dancing.jpg"
            layout="fill"
            alt="Joanne in a hip-hop dance perfomance"
            objectFit="contain"
            objectPosition="0"
            priority
          />
        </div>
        <div className="flex flex-col gap-y-8 lg:px-20">
          <div className="font-merriweather text-2xl xl:text-3xl">In my free time, <span>I enjoy:</span></div>
          <ul className="flex flex-col gap-y-5 font-openSans text-base xl:text-xl list-disc pl-8">
            <li>
              Dancing
            </li>
            <li>
              Traveling
            </li>
            <li>
              Shopping
            </li>
          </ul>
        </div>
      </motion.section>
    </AnimateOpacity>
  )
}

export default About