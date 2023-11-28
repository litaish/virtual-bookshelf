import { useMutation } from "react-query";
import axios from "axios";
import { urlBooks } from "../../endpoints";

const updateBook = ({id, body}) => axios.put(`${urlBooks}/${id}`, body);

export default function useUpdateBook(onSuccess, onError) {
    return useMutation(updateBook, {
        onSuccess: onSuccess,
        onError: onError,
    })
}
