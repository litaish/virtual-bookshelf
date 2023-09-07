import { Layout } from '../../components/index';
import { Rating } from '@smastrom/react-rating';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const GiveARating = ({ initialRating }) => {
  const [rating, setRating] = useState(initialRating); // Initial value

  return (
    <section className="flex flex-col gap-6">
      <Layout.SecondaryHeader text="Give A Rating"/>
      <Rating style={{ maxWidth: 160 }} value={rating} onChange={setRating} />
    </section>
  );
};

GiveARating.propTypes = {
  initialRating: PropTypes.number.isRequired,
}
