
import PropTypes from 'prop-types';

export const PrimaryButton = ({ icon, text }) => {
    return (
        <button type='button' className='flex justify-center items-center gap-2 max-w-xs bg-emerald-500 uppercase rounded-md drop-shadow-xl text-slate-50 font-bold py-4 px-6 text-xl transition-colors hover:bg-emerald-600'>
            {icon && icon}
            <span>{text}</span>
        </button>
    )
};

PrimaryButton.propTypes = {
    icon: PropTypes.node,
    text: PropTypes.string.isRequired,
};


