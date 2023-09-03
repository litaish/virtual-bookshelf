
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

export const ActionButton = ({ icon, text, className }) => {
    return (
        <button type='button' className={twMerge('flex justify-center items-center gap-2 max-w-xs uppercase rounded-md drop-shadow-xs font-bold py-4 px-6 text-xl transition-color bg-emerald-500 hover:bg-emerald-600 text-slate-50', className)}>
            {icon && icon}
            <span>{text}</span>
        </button>
    )
};

ActionButton.propTypes = {
    icon: PropTypes.node,
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
};


