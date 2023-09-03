import no_books from '../../assets/no_books.svg';
import { twMerge } from 'tailwind-merge';
import PropTypes from 'prop-types';

export const NoBooksAlert = ({ className }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <p
        className={twMerge(
          'font-semibold text-emerald-700 text-2xl',
          className,
        )}
      >
        No books added yet!
      </p>
      <p className="text-xl text-gray-600">
        Add some books to your library. They will show up here.
      </p>
      <img src={no_books} alt="" />
    </div>
  );
};

NoBooksAlert.propTypes = {
  className: PropTypes.string,
};
