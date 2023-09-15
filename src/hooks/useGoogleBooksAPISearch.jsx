import { useQuery } from "react-query";
import axios from "axios";

export function useGoogleBooksAPISearch(searchTerm, onSuccess, onError) {
    return useQuery(
        ['google_books_api_search', searchTerm],
        async () => {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${searchTerm}&maxResults=1&key=${import.meta.env.VITE_GOOGLE_BOOKS_API_KEY}`);
            return response.data;
        },
        {
            refetchOnWindowFocus: false,
            enabled: !!searchTerm,
            select: (data) => {
                if (data.items) {
                    const volumeInfo = data.items[0].volumeInfo;
                    return {
                        ISBN10: volumeInfo?.industryIdentifiers?.[0]?.identifier,
                        ISBN13: volumeInfo?.industryIdentifiers?.[1]?.identifier,
                        title: volumeInfo?.title,
                        authors: volumeInfo?.authors,
                        categories: volumeInfo?.categories,
                        pageCount: volumeInfo?.pageCount,
                        img: volumeInfo?.imageLinks?.thumbnail,
                        imgSmall: volumeInfo?.imageLinks?.smallThumbnail,
                    };
                } else {
                    return null;
                }
            },
            onSuccess: onSuccess,
            onError: onError,
        }
    );
}

