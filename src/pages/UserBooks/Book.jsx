
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import Icon from '@mdi/react';
import { mdiCheckCircle } from '@mdi/js';
import styles from './UserBooks.module.css';

export const Book = ({ imgSrc, id, title, authors, rating, isRead }) => {
  return (
    <div className='relative'>
      <div className='flex flex-col justify-center items-center gap-1 text-center'>
        <Link to={`/book/${id}`}>
          <img className='rounded-md mb-2' src={imgSrc} alt={`${title} `} />
        </Link>
        <p className='text-gray-800 text-xl font-medium'>{title}</p>
        {authors.map((author) => {
          return <p key={author.name} className='text-xl text-gray-600'>{author.name}</p>;
        })}
        <Rating
          value={rating}
          readOnly={true}
          style={{ maxWidth: 80 }}
        />
      </div>
      {isRead && (
        <div className={`${styles.read_icon} text-green-600`}>
          <Icon path={mdiCheckCircle} size={2} />
        </div>
      )}
    </div>
  )
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  isRead: PropTypes.bool.isRequired,
};
