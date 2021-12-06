import InnerImageZoom from 'react-inner-image-zoom'
import Image from 'next/image'
import RightArrow from './icons/RightArrow'
import LeftArrow from './icons/LeftArrow'
import { useEffect, useState, useCallback } from 'react'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';


const Showcase = ({ id, images, containerHeight }) => {
  const [hasPreviousPhotos, setHasPreviousPhotos] = useState(false);
  const [hasNextPhotos, setHasNextPhotos] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const length = images.length;

  const nextSlide = (event) => {
    event.stopPropagation();
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1)
  };

  const prevSlide = (event) => {
    event.stopPropagation();
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1)
  }

  const updateSlide = (event, slide) => {
    event.stopPropagation();
    setCurrentImage(slide)
  }

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto"
  }

  const updateButton = useCallback(() => {
    const slider = document.getElementById(id);
    if (slider) {
      const silderWidth = slider.scrollWidth - slider.clientWidth;
      if (silderWidth && slider.scrollLeft !== silderWidth) {
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
  }, [id]);

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
          <button onClick={openModal} className={`relative ${image.height} ${image.width} border border-solid border-gray-300 cursor-pointer outline-none hover:border-gray-900`} key={i}>
            <Image
              src={image.src}
              layout="fill"
              alt={image.alt}
            />
          </button>
        ))}
      </div>
      {hasPreviousPhotos && <button onClick={(event) => left(event)} className="absolute top-[49%] left-0 z-10 cursor-pointer "><LeftArrow width="50" height="50" /></button>}
      {hasNextPhotos && <button onClick={(event) => right(event)} className="absolute top-[49%] right-0  z-10 cursor-pointer "><RightArrow width="50" height="50" /></button>}
      {showModal && <div onClick={closeModal} className="w-[100vw] h-[100vh] fixed bg-opacity-[98%] top-0 left-0 bg-gray-900 z-50 gap-y-5">
        <div className="relative flex flex-col justify-center items-center h-[75%] mt-[2%]">
          {images.map((image, i) => (
            <div className="overflow-hidden" key={i}>
              {currentImage === i &&
                <div id="displayedImage" onClick={(event) => event.stopPropagation()} className={`relative overflow-hidden`}>
                  {currentImage === i && <InnerImageZoom
                    src={image.src}
                    alt={image.alt}
                    width={image.showcaseWidth}
                    height={image.showcaseHeight}
                    hideHint={true}
                  />}
                </div>}
            </div>
          ))}
        </div>
        <div className="flex mx-auto items-center gap-x-5 z-50 overflow-auto max-w-[465px] max-h-[25vh]">
          {images.map((image, i) => (
            <div key={i} onClick={(event) => updateSlide(event, i)} className={`relative ${currentImage === i ? "opacity-90" : ""} ${image.thumbHeight} ${image.thumbWidth}`}>
              <Image
                src={image.src}
                layout="fill"
                alt={image.alt}
              />
            </div>
          ))}
        </div>
        <button onClick={(event) => prevSlide(event)} className="absolute top-[35%] left-10 z-10 cursor-pointer "><LeftArrow fill="white" width="50" height="50" /></button>
        <button onClick={(event) => nextSlide(event)} className="absolute top-[35%] right-10  z-10 cursor-pointer "><RightArrow fill="white" width="50" height="50" /></button>
      </div>}
    </section>
  )
}

export default Showcase;