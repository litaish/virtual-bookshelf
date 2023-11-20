import { Buttons, UI, Form, Layout } from '../../components/index';
import { UserBooks } from '../index';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';
import styles from './UserBooks.module.css';
import { useState } from 'react';
import { useBookData } from '../../hooks/index';

export const UserBooksView = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = e => setSearch(e.target.value);

  const { isLoading, data, isError, error } = useBookData();

  return (
    <main className="p-8 flex flex-col gap-8 2xl:px-60">
      <Buttons.ActionButton
        type="button"
        text="Add new book"
        icon={<Icon path={mdiPlus} size={1.2} />}
      />
      <Layout.PrimaryHeader text="My Books" bookCount={data?.length} />

      {isLoading && (
        <div className="flex justify-center items-center mt-32">
          <UI.LoadingSpinner className="w-14 h-14" />
        </div>
      )}

      {isError && <UI.ErrorAlert errorMessage={error.message} />}

      {data?.length === 0 && <UserBooks.NoBooksAlert />}

      {data?.length > 0 && (
        <>
          <Form.SearchInput
            label="Search"
            placeholder="Search For A Book Title ..."
            onChange={handleSearchChange}
          />
          <div className={`${styles.grid_books}`}>
            {data
              .filter(item => {
                return search.toLowerCase() === ''
                  ? item
                  : item.title.toLowerCase().includes(search.toLowerCase());
              })
              .map(book => {
                return <UserBooks.Book key={book.id} book={book} />;
              })}
          </div>
        </>
      )}
    </main>
  );
};
