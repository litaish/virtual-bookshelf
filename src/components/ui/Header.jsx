
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

export const Header = ({ text, bookCount, className }) => {
    return (
        <header className={twMerge('border-solid border-b-2 flex justify-between items-center p-4 text-gray-800 text-3xl', className)}>
            <h1>{text}</h1>
            {bookCount && <div className='rounded-md border-solid border-2 py-1 px-2 border-gray-300'>{bookCount}</div>}
        </header>
    )
};

Header.propTypes = {
    text: PropTypes.string.isRequired,
    bookCount: PropTypes.number,
    className: PropTypes.string,
};

