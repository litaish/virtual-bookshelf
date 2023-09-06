import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

export const SecondaryHeader = ({ text, className }) => {
  return (
    <h2 className={twMerge("border-solid border-b-2 flex justify-between items-center p-4 text-gray-800 text-2xl", className)}>
        {text}
    </h2>
  )
};

SecondaryHeader.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
}
