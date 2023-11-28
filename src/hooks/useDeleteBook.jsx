import { useMutation } from "react-query";
import axios from "axios";
import { urlBooks } from "../../endpoints";

const deleteBook = (id) => axios.delete(`${urlBooks}/${id}`);


export default function useDeleteBook(onSuccess, onError) {
    return useMutation(deleteBook, {
        onSuccess: onSuccess,
        onError: onError,
    })
}