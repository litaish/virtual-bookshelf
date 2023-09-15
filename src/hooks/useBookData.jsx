import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { urlBooks } from "../../endpoints";

const getAllBooks = () => axios.get(urlBooks);

const getSingleBook = (id) => axios.get(`${urlBooks}/${id}`);

const addBook = (book) => axios.post(urlBooks, book);

// If bookId is not defined, use a regular query that fetches all books.
export function useBookData(bookId) {
  const queryKey = bookId ? ["book", bookId] : "all_books";

  return useQuery(queryKey, () => {
    if (bookId) {
      return getSingleBook(bookId);
    } else {
      return getAllBooks();
    }
  },
    {
      select: (data) => {
        const books = data.data;
        return books;
      },
    });
}

export const useAddBookData = () => useMutation(addBook);

