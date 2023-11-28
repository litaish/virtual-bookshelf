import { useMutation } from "react-query";
import axios from "axios";
import { urlBooks } from "../../endpoints";

const updateBook = (id, book) => axios.put(`${urlBooks}/${id}`, book);

export default function useUpdateBook(onSuccess, onError) {
    return useMutation(updateBook, {
        onSuccess: onSuccess,
        onError: onError,
    })
}