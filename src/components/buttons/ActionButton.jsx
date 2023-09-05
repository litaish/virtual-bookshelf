import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

export const ActionButton = ({ icon, text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={twMerge(
        'flex justify-center items-center gap-2 max-w-xs uppercase rounded-md drop-shadow-xs font-bold py-4 px-6 text-xl transition-colors bg-emerald-500 hover:bg-emerald-600 text-slate-50',
        className,
      )}
    >
      {icon && icon}
      <span>{text}</span>
    </button>
  );
};

ActionButton.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
