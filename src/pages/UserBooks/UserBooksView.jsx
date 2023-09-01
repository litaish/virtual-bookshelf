import { Header } from "../../components/ui";
import { PrimaryButton } from "../../components/buttons";
import { Book } from "./Book";
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';
import styles from './UserBooks.module.css';
import { useEffect, useState } from "react";

export const UserBooksView = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
      let requestOptions = {
          method: "GET",
          redirect: "follow",
      }
      // Fake JSON API
      fetch('http://localhost:3030/books', requestOptions)
          .then((response) => response.json())
          .then((result) => setBooks(result))
          .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <main className="p-8">
      <PrimaryButton text='Add new book' icon={<Icon path={mdiPlus} size={1.5} />} />
      <Header text='My Books' bookCount={100} className='mt-4' />
      <div>SEARCH BAR HERE</div>
      <div className={`${styles.grid_books} mt-8`}>
         {books.map((book) => {
          return <Book key={book.id} id={book.id} title={book.title} authors={book.authors} rating={book.rating} isRead={book.isRead} imgSrc={book.imgSrc}/>
         })}
      </div>
    </main>
  );
};
