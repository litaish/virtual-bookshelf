
import no_books from '../../assets/no_books.svg';

export const NoBooksAlert = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-2 mt-16'>
    <p className='font-semibold text-emerald-700 text-2xl'>No books added yet!</p>
      <p className='text-xl text-gray-600'>Add some books to your library. They will show up here.</p>
      <img src={no_books} alt="" />
    </div>
  )
};
