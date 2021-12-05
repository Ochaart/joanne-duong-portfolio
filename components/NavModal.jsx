import ReactDom from 'react-dom'
import { motion } from 'framer-motion'
import { menuVariants } from '../variants/menu_variants';
import { useState, useEffect, forwardRef, useImperativeHandle } from 'react'

const NavModal = forwardRef(({ children, overlayStyles, contentStyles }, ref) => {
  const [open, setOpen] = useState(false);
  const [portal, setPortal] = useState(null);

  const openModal = () => {
    setOpen(true)
  };
  const closeModal = () => {
    setOpen(false)
  };

  const toggleModal = () => {
    setOpen(!open);
  }

  const returnIsOpen = () => {
    return open;
  }

  useImperativeHandle(
    ref, () => {
      return {
        closeModal,
        openModal,
        toggleModal,
        returnIsOpen,
      }
    }
  )

  useEffect(() => {
    setPortal(document.getElementById('portal'));
  }, [])
  if (!portal) return null
  return ReactDom.createPortal(
    <div>
      <motion.div
        initial={false}
        className={overlayStyles} onClick={closeModal}
        variants={menuVariants}
        animate={open ? "opened" : "closed"}
        transition={{ ease: "easeOut", duration: .4 }}
      >
        {children}
      </motion.div>
    </div>,
    portal
  )
})

NavModal.displayName = "NavModal"

export default NavModal;