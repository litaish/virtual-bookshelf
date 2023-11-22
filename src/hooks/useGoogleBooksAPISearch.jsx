import { useQuery } from "react-query";
import axios from "axios";

// accept params as object
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
                        Title: volumeInfo?.title,
                        PageCount: volumeInfo?.pageCount,
                        ImgSrc: volumeInfo?.imageLinks?.smallThumbnail,
                        Rating: 0,
                        Notes: "",
                        Read: false,
                        Authors: volumeInfo?.authors.map(author => ({ Name: author })),
                        Categories: volumeInfo?.categories.map(category => ({ Name: category })),
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

