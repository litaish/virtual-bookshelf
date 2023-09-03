import { Rating } from '@smastrom/react-rating';
import { useState } from 'react';

export const GiveARating = () => {
  const [rating, setRating] = useState(4); // Initial value

  return (
    <section className="flex flex-col gap-6">
      <h2 className="border-solid border-b-2 flex justify-between items-center p-4 text-gray-800 text-2xl">
        Give A Rating
      </h2>
      <Rating style={{ maxWidth: 160 }} value={rating} onChange={setRating} />
    </section>
  );
};
