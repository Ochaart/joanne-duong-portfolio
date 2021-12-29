import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

const useModuleInView = (options) => {
  const { ref: module, inView } = useInView(options || { threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (!inView) {
      return;
    }
    
    controls.start('animate');
  }, [controls, inView])

  return { module, inView, controls };
}

export default useModuleInView;