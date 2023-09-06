import { Layout } from '../../components/index';
import { Rating } from '@smastrom/react-rating';
import { useState } from 'react';

export const GiveARating = () => {
  const [rating, setRating] = useState(4); // Initial value

  return (
    <section className="flex flex-col gap-6">
      <Layout.SecondaryHeader text="Give A Rating"/>
      <Rating style={{ maxWidth: 160 }} value={rating} onChange={setRating} />
    </section>
  );
};
