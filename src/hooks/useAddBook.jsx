import { useMutation } from "react-query";
import axios from "axios";
import { urlBooks } from "../../endpoints";

const addBook = (book) => axios.post(urlBooks, book);

export default function useAddBook(onSuccess, onError) {
    return useMutation(addBook, {
        onSuccess: onSuccess,
        onError: onError,
    })
}