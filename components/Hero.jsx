import Image from 'next/image'
import HashLoader from "react-spinners/HashLoader";

const Hero = ({ src, title, alt }) => {
  return (
    <section className="flex flex-col items-center h-[580px] gap-y-10 pt-20 sm:pt-24">
      <div className="relative w-full h-[100%]">
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          objectPosition="0 0"
          alt={alt}
          priority
        />
      </div>
    </section>
  )
}

export default Hero;