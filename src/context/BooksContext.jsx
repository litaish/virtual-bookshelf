import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        let requestOptions = {
            method: "GET",
            redirect: "follow",
        }
        // Fake JSON API
        fetch('http://localhost:3030/books', requestOptions)
            .then((response) => response.json())
            .then((result) => setBooks(result))
            .catch((error) => console.log("error", error))
        setBooks([]);
    }

    return (
        <BooksContext.Provider value={{ books, fetchBooks }}>
            {children}
        </BooksContext.Provider>
    )
}

BooksProvider.propTypes = {
    children: PropTypes.object.isRequired,
}

