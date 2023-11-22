import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { urlBooks } from "../../endpoints";

const getAllBooks = () => axios.get(urlBooks);

const getSingleBook = (id) => axios.get(`${urlBooks}/${id}`);

const addBook = (book) => axios.post(urlBooks, book);

const updateBook = (id, book) => axios.put(`${urlBooks}/${id}`, book);

const deleteBook = (id) => axios.delete(`${urlBooks}/${id}`);

// If bookId is not defined, use a regular query that fetches all books.
export function useBookData({ id, onSuccess, onError }) {
  const queryKey = id ? ["book", id] : "all_books";

  return useQuery(queryKey, () => {
    if (id) {
      return getSingleBook(id);
    } else {
      return getAllBooks();
    }
  },
    {
      onSuccess: onSuccess,
      onError: onError,
      select: (data) => {
        const books = data.data;
        return books;
      },
    });
}

export const useAddBookData = () => useMutation(addBook);
export const useUpdateBookData = () => useMutation(updateBook);
export const useDeleteBookData = () => useMutation(deleteBook);

