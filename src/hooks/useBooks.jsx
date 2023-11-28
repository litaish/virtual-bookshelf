import { useQuery } from "react-query";
import axios from "axios";
import { urlBooks } from "../../endpoints";

const getBooks = async () => {
    const { data } = await axios.get(
        urlBooks
    );
    return data;
};

export default function useBooks() {
    return useQuery("books", getBooks);
}