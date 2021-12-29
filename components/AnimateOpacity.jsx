import { motion, AnimatePresence } from "framer-motion"

const AnimateOpacity = ({ children }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .5 }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
)

export default AnimateOpacity;