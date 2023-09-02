import { Buttons, UI } from "../../components/index";
import { UserBooks } from "../index";
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';
import styles from './UserBooks.module.css';
import { useQuery } from "react-query";
import axios from "axios";

export const UserBooksView = () => {

  const { isLoading, data, isError, error } = useQuery('books', () => {
    return axios.get('http://localhost:3030/books');
  });

  return (
    <main className="p-8">
      <Buttons.PrimaryButton text='Add new book' icon={<Icon path={mdiPlus} size={1.5} />} />
      <UI.Header text='My Books' bookCount={data?.data.length} className='mt-4' />
      <div>SEARCH BAR HERE</div>

      {isLoading && (
        <div className="flex justify-center items-center mt-20">
          <UI.LoadingSpinner className='w-14 h-14'/>
        </div>
      )}

      {isError && (
        <UI.ErrorAlert errorMessage={error.message}/>
      )}

      {data?.data.length === 0 && (
        <UserBooks.NoBooksAlert />
      )}

      <div className={`${styles.grid_books} mt-8`}>
        {data?.data.map((book) => {
          return (
            <UserBooks.Book key={book.id} id={book.id} title={book.title} authors={book.authors} rating={book.rating} isRead={book.isRead} imgSrc={book.imgSrc} />
          )
        })}
      </div>

    </main>
  );
};
