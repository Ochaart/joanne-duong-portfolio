import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import Button from './Button';

const Project = ({ title, objectPosition, description, maxWidth, image, href, alt }) => (
  <div className="w-full h-[400px] md:h-[600px] flex flex-col items-center">
    <div className="relative w-full h-full">
      <Image
        src={image}
        alt={alt}
        layout="fill"
        objectFit="cover"
        objectPosition={objectPosition}
      />
    </div>
    <h3 className=" text-sm md:text2xl mt-2">{title}</h3>
    <p className={`text-lg md:text-3xl ${maxWidth} text-center mb-2 md:mb-5 leading-7 md:leading-10`}>{description}</p>
    <Button
      href={href}
      width={'w-38'}
      text={'SEE HOW'}
    />
  </div>
);

export default Project;