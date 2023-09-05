import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import Icon from '@mdi/react';
import { mdiCheckCircle } from '@mdi/js';

export const Book = ({ book }) => {
  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center gap-1 text-center">
        <Link to={`/book/${book.id}`} state={{ data: book }}>
          <img
            className="rounded-md mb-2"
            src={book.imgSrc}
            alt={`${book.title} `}
          />
        </Link>
        <p className="text-gray-800 text-xl font-medium">{book.title}</p>

        <p className="text-xl text-gray-600">
          {/* Return an array of name property values and join them with comma */}
          {book.authors.map(author => author.name).join()}
        </p>

        <Rating value={book.rating} readOnly={true} style={{ maxWidth: 80 }} />
      </div>

      {book.isRead && (
        <div className='text-green-800 absolute -top-3 -right-3'>
          <Icon path={mdiCheckCircle} size={2} />
        </div>
      )}
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};
