import Image from 'next/image';

const About = () => {
  return (
    <div>
      <section className="flex flex-col-reverse lg:grid lg:grid-cols-2 mx-auto lg:px-28 h-full py-16 lg:pt-28 items-center gap-y-8">
        <div className="flex flex-col gap-y-5 px-10">
          <div className="font-montserrat text-base xl:text-xl">HI THERE!</div>
          <div className="font-merriweather text-2xl xl:text-3xl">I&apos;m Joanne Duong</div>
          <p className="text-base xl:text-xl">
            I&apos;m a product designer based in San Francisco. I&apos;m originally from Seattle, but moved to SF after my first solo trip to Central America. I love traveling the world and bring my global perspective to my work. I get excited about designing which makes life easier so that we have more time to do what’s important: connect in real life.
          </p>
          <p className="text-base xl:text-xl">
            In design, I believe in researching users to understand their needs. With my understanding of users and past experiences in retail, I design solutions which achieve business goals.
          </p>
        </div>
        <div className="relative lg:min-h-[350px] lg:min-w-[450px] h-4/6 w-5/6 lg:h-5/6 lg:w-6/6 justify-self-center">
          <Image
            src="/joanne_with_bike.png"
            layout="fill"
            alt="Joanne with a bike in a sunny urban neighborhood"
            objectFit="contain"
            priority
          />
        </div>
      </section>
      <section className="flex flex-col lg:grid lg:grid-cols-2 mx-auto px-8 lg:px-28 h-[450px] sm:h-[650px] items-center gap-y-8">
        <div className="relative min-w-[320px] lg:min-h-[400px] lg:min-w-[550px] h-4/6 w-5/6 lg:h-5/6 lg:w-6/6 justify-self-center">
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
      </section>
    </div>
  )
}

export default About