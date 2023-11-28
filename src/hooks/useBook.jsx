import { useQuery } from "react-query";
import axios from "axios";
import { urlBooks } from "../../endpoints";

const getBookById = async (id) => {
    const { data } = await axios.get(
        `${urlBooks}/${id}`
    );
    return data;
};

export default function useBook(id, onSuccess, onError) {
    return useQuery(["book", id], () => getBookById(id), {
        onSuccess: onSuccess,
        onError: onError
    });
}