import InnerImageZoom from 'react-inner-image-zoom'
import Image from 'next/image'
import RightArrow from './icons/RightArrow'
import LeftArrow from './icons/LeftArrow'
import { useEffect, useState, useCallback } from 'react'
import cx from "classnames"


const Showcase = ({ id, images = [], containerHeight, research, description, comparitiveResearch }) => {
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
      {comparitiveResearch && (
        <div className="px-8 mx-auto max-w-[760px] pt-36">
          <h3>COMPARITIVE RESEARCH</h3>
          <h2 className="text-4xl">{research}</h2>
          <p className="text-lg">{description}</p>
        </div>
      )}
      {comparitiveResearch ? null : <h2 className="text-2xl pt-5 text-center">Showcased Design Progression</h2>}
      <div className="relative">
        {hasPreviousPhotos && <button onClick={(event) => left(event)} className={cx("absolute left-0 z-10 cursor-pointer", {
          "top-[40%]": comparitiveResearch !== undefined,
          "top-[45%]": comparitiveResearch === undefined,
        })}><LeftArrow width="50" height="50" /></button>}
        {hasNextPhotos && <button onClick={(event) => right(event)} className={cx("absolute right-0 z-10 cursor-pointer", {
          "top-[40%]": comparitiveResearch !== undefined,
          "top-[45%]": comparitiveResearch === undefined,
        })}><RightArrow width="50" height="50" /></button>}
        <div id={id} className={`mt-5 flex mx-auto ${containerHeight} max-w-[1450px] gap-x-3 overflow-auto overflow-x-hidden overflow-y-hidden h-auto relative smoothScroll`}>
          {images.map((image, i) => (
            <button onClick={openModal} className={`relative ${image.height} ${image.width} border border-solid border-gray-300 cursor-pointer outline-none hover:border-gray-900 self-start`} key={i}>
              <Image
                src={image.src}
                layout="fill"
                alt={image.alt}
              />
            </button>
          ))}
        </div>
      </div>
      {showModal && <div onClick={closeModal} className="w-[100vw] h-[100vh] fixed bg-opacity-[98%] top-0 left-0 bg-gray-900 z-50 gap-y-5">
        <div className="absolute grid grid-rows-4 row-start-1 row-end-4 justify-items-center items-center h-[100vh] w-[100vw] gap-y-5">
          <div className="row-start-1 row-end-4 justify-center items-center h-auto mt-[2%]">
            {images.map((image, i) => (
              <div className="overflow-hidden" key={i}>
                {currentImage === i &&
                  <div id="displayedImage" onClick={(event) => event.stopPropagation()} className={`relative ${image.showcaseHeight} ${image.showcaseWidth} overflow-hidden`}>
                    {currentImage === i && <InnerImageZoom
                      src={image.src}
                      alt={image.alt}
                      className="displayImage"
                      hideHint={true}
                    />}
                  </div>}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-rows-4 justify-items-center items-center h-[100vh] gap-y-5 overflow-auto">
          <div className={cx("self-end row-start-4 flex mx-auto gap-x-5 mb-[2%] z-50 min-w-[465px] max-h-[25vh]", {
            "max-w-[465px]": comparitiveResearch === undefined,
            "max-w-[800px]": comparitiveResearch !== undefined,
          })}>
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
        </div>
        <button onClick={(event) => prevSlide(event)} className="hidden sm:block absolute top-[35%] left-10 z-10 cursor-pointer "><LeftArrow fill="white" width="50" height="50" /></button>
        <button onClick={(event) => nextSlide(event)} className="hidden sm:block absolute top-[35%] right-10  z-10 cursor-pointer "><RightArrow fill="white" width="50" height="50" /></button>
      </div>}
    </section>
  )
}

export default Showcase;