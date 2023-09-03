import { motion } from 'framer-motion';
import Icon from '@mdi/react';
import { mdiAlertCircle } from '@mdi/js';
import PropTypes from 'prop-types';

export const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
      {...framer_error}
    >
      <Icon path={mdiAlertCircle} size={1.5} />
      {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

InputError.propTypes = {
  message: PropTypes.string.isRequired,
};
