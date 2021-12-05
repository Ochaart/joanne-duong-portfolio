import Image from 'next/image'
import RightArrow from './icons/RightArrow'
import LeftArrow from './icons/LeftArrow'
import { useEffect, useState, useCallback } from 'react'

const Showcase = ({ id, images, containerHeight }) => {
  const [hasPreviousPhotos, setHasPreviousPhotos] = useState(false);
  const [hasNextPhotos, setHasNextPhotos] = useState(false);

  const updateButton = useCallback(() => {
    const slider = document.getElementById(id);
    if (slider) {
      const silderWidth = slider.scrollWidth - slider.clientWidth;
      console.log(slider.scrollWidth, slider.clientWidth);
      if (silderWidth && slider.scrollLeft !== silderWidth) {
        console.log('hello')
        setHasNextPhotos(true);
      } else {
        setHasNextPhotos(false);
      }
      if (slider.scrollLeft === 0) {
        setHasPreviousPhotos(false);
      } else {
        setHasPreviousPhotos(true);
      }
    } else {
      setHasNextPhotos(false);
      if (slider.scrollLeft === 0) {
        setHasPreviousPhotos(false);
      } else {
        setHasPreviousPhotos(true);
      }
    }
  },[id]);

  useEffect(() => {
    let unmounted = false;
    setTimeout(() => {
      if (!unmounted) {
        window.addEventListener('resize', updateButton);
      }
    }, 50);
    return () => {
      unmounted = true;
      window.removeEventListener('resize', updateButton);
    };
  }, [updateButton]);

  useEffect(() => {
    if (id !== undefined) {
      const thumbnailsSlider = document.getElementById(id);
      if (thumbnailsSlider) {
        updateButton();
      }
    }
  }, [id, updateButton]);

  const left = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const silder = document.getElementById(id);
    silder.scrollLeft -= 279;
    if (silder.scrollLeft < 558) {
      silder.scrollLeft = 0;
      setHasNextPhotos(true);
      setHasPreviousPhotos(false);
      return null;
    }
    setHasNextPhotos(true);
    return null;
  };

  const right = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const silder = document.getElementById(id);
    silder.scrollLeft += 279;
    if (
      silder.scrollLeft > silder.scrollWidth - silder.clientWidth - 558
    ) {
      silder.scrollLeft = silder.scrollWidth;
      setHasNextPhotos(false);
      setHasPreviousPhotos(true);
      return null;
    }
    setHasPreviousPhotos(true);
    return null;
  };

  return (
    <section className="relative">
      <h2 className="text-2xl pt-5 text-center">Showcased Design Progression</h2>
      <div id={id} className={`mt-5 flex mx-auto ${containerHeight} max-w-[1450px] gap-x-3 overflow-auto overflow-x-hidden relative smoothScroll`}>
        {images.map((image, i) => (
          <div className={`relative ${image.height} ${image.width} border border-solid border-gray-300`} key={i}>
            <Image
              src={image.src}
              layout="fill"
              alt={image.alt}
            />
          </div>
        ))}
      </div>
      {hasPreviousPhotos && <button onClick={(event) => left(event)}className="absolute top-[49%] left-0 z-10"><LeftArrow width="50" height="50" /></button>}
      {hasNextPhotos && <button onClick={(event) => right(event)} className="absolute top-[49%] right-0  z-10"><RightArrow width="50" height="50" /></button>}
    </section>
  )
}

export default Showcase;