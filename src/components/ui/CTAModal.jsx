import { motion, AnimatePresence } from "framer-motion";
import Icon from '@mdi/react';
import { mdiAlertCircle } from '@mdi/js';
import PropTypes from 'prop-types';
import { Buttons } from "../index";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const modalVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.2 }
  }
}

export const CTAModal = ({ show, title, text, onCancelClick, onConfirmClick }) => {
  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div className="flex justify-center items-center backdrop-blur-md fixed top-0 left-0 w-full h-full z-1" variants={backdropVariants} animate="visible" initial="hidden" exit="hidden">
          <motion.div className="bg-slate-50 shadow-lg border rounded-xl p-6 text-center" variants={modalVariants}>
            <div className="flex flex-col justify-center items-center gap-4">
              <Icon path={mdiAlertCircle} size={8} className="text-orange-500" />
              <p className="text-2xl text-gray-800 font-semibold">{title}</p>
              <p className="text-xl text-gray-600">{text}</p>
            </div>
            <div className="flex justify-between mt-8">
              <Buttons.ActionButton
                onClick={onConfirmClick}
                type="button"
                text="Confirm"
                className="bg-blue-500 hover:bg-blue-600"
              />
              <Buttons.ActionButton
                onClick={onCancelClick}
                type="button"
                text="Cancel"
                className="bg-red-500 hover:bg-red-600"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
};

CTAModal.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  onCancelClick: PropTypes.func,
  onConfirmClick: PropTypes.func,
}
