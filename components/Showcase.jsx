import InnerImageZoom from 'react-inner-image-zoom'
import Image from 'next/image'
import RightArrow from './icons/RightArrow'
import LeftArrow from './icons/LeftArrow'
import { useEffect, useState, useCallback } from 'react'
import cx from "classnames"
import X from './icons/X'
import { motion, AnimatePresence } from "framer-motion"

const Showcase = ({ id, images = [], containerHeight, research, description, task, layout = "default" }) => {
  const [hasPreviousPhotos, setHasPreviousPhotos] = useState(false);
  const [hasNextPhotos, setHasNextPhotos] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [displayHeight, setDisplayHeight] = useState('80vh');
  const [thumbContainerHeight, setThumbContainerHeight] = useState('20vh');
  const [thumbHeight, setThumbHeight] = useState('16vh');
  const length = images.length;
  const movement = layout === "default" || layout === "web" ? 279 : 351;

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

  const updateHeights = () => {
    setDisplayHeight((window.innerHeight * .8) + 'px')
    setThumbHeight((window.innerHeight * .16) + 'px')
    setThumbContainerHeight((window.innerHeight * .20) + 'px')
  }

  useEffect(() => {
    let unmounted = false;
    setTimeout(() => {
      if (!unmounted) {
        window.addEventListener('resize', updateButton);
        window.addEventListener('resize', updateHeights);
      }
    }, 50);
    return () => {
      unmounted = true;
      window.removeEventListener('resize', updateButton);
      window.removeEventListener('resize', updateHeights);
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
    silder.scrollLeft -= movement;
    if (silder.scrollLeft < movement * 2) {
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
    silder.scrollLeft += movement;
    if (
      silder.scrollLeft > silder.scrollWidth - silder.clientWidth - movement * 2
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
      {task && (
        <div className="px-8 mx-auto max-w-[760px] pt-28 pb-6">
          <h3>{task}</h3>
          <h2 className="text-4xl pt-2">{research}</h2>
          <p className="pt-3">{description}</p>
        </div>
      )}
      {task ? null : <h2 className="text-2xl pt-5 px-8 text-center">Showcased Design Progression</h2>}
      <div className="relative">
        {hasPreviousPhotos && <button onClick={(event) => left(event)} className={cx("hidden md:block absolute left-0 z-10 cursor-pointer", {
          "top-[38%]": layout === "web",
          "top-[45%]": layout === "default",
          "top-[48%]": layout === "sketches",
        })}><LeftArrow width="50" height="50" /></button>}
        {hasNextPhotos && <button onClick={(event) => right(event)} className={cx("hidden md:block absolute right-0 z-10 cursor-pointer", {
          "top-[38%]": layout === "web",
          "top-[45%]": layout === "default",
          "top-[48%]": layout === "sketches",
        })}><RightArrow width="50" height="50" /></button>}
        <div id={id} className={`mt-5 flex mx-auto ${containerHeight} max-w-[1450px] gap-x-3 overflow-auto md:overflow-x-hidden overflow-y-hidden h-auto relative smoothScroll`}>
          {images.map((image, i) => (
            <button onClick={openModal} className={`relative ${image.height} ${image.width} border border-solid border-gray-300 cursor-pointer outline-none hover:border-gray-900 self-start`} key={i}>
              <Image
                src={image.src}
                layout="fill"
                alt={image.alt}
                priority
              />
            </button>
          ))}
        </div>
      </div>
      {showModal && <div className="w-[100vw] h-[100vh] fixed bg-opacity-[98%] top-0 left-0 bg-gray-900 z-50 gap-y-5">
        <div className="mb-[1vh] sm:mt-[3vh] flex justify-center items-center" style={{ height: displayHeight }}>
          {images.map((image, i) => (
            <div key={i}>
              {currentImage === i &&
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: .5 }}
                    id="displayedImage"
                    onClick={(event) => event.stopPropagation()}
                    className={cx(image.showcaseWidthTailwind)}
                    style={{ height: image.showcaseHeight, width: image.showcaseWidth }}>
                    {currentImage === i && <InnerImageZoom
                      src={image.src}
                      alt={image.alt}
                      className="displayImage"
                      hideHint={true}
                      moveType="drag"
                      fullscreenOnMobile={true}
                    />}
                  </motion.div>
                </AnimatePresence>
              }
            </div>
          ))}
        </div>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ delay: .5, duration: .5 }}
            className="overflow-x-auto" style={{ height: thumbContainerHeight }}>
            <div className={cx("flex mx-auto gap-x-5 z-50 items-center", {
              "w-[456px]": layout === "default",
              "w-[853px]": layout === "web",
              "w-[360px]": layout === "sketches",
            })} style={{ height: thumbHeight }}>
              {images.map((image, i) => (
                <div key={i} onClick={(event) => updateSlide(event, i)} className={`relative cursor-pointer ${currentImage === i ? "opacity-90" : ""} ${image.thumbWidth}`} style={{ height: image.thumbHeight }}>
                  <Image
                    src={image.src}
                    layout="fill"
                    alt={image.alt}
                    priority
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
        <button onClick={(event) => prevSlide(event)} className="hidden sm:flex justify-center items-center h-[80vh] w-[90px] absolute top-0 left-0 z-10 cursor-pointer "><LeftArrow fill="white" width="30" height="30" /></button>
        <button onClick={(event) => nextSlide(event)} className="hidden sm:flex justify-center items-center h-[80vh] w-[90px] absolute top-0 right-0 z-10 cursor-pointer "><RightArrow fill="white" width="30" height="30" /></button>
        <button onClick={() => closeModal()} className="absolute right-0 sm:right-5 top-0 z-10 cursor-pointer h-[50px] w-[50px] flex items-center justify-center"><X className="h-[20px] w-[20px] stroke-2" /></button>
      </div>}
    </section >
  )
}

export default Showcase;