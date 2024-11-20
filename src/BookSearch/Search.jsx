import './BookSearch.css';
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { baseUrl } from "../data.js";
import Book from "./Book.jsx";
import "./Book.css";

export default function Search() {
    const [book, setBook] = useState({ take: 100, skip: 0, searchString: "", startDate: null, endDate: null });
    const [booksList, setBooksList] = useState([]);
    const isFetching = useRef(false);

    const handleChange = (event) => {
        setBook({ ...book, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const bookData = {
            take: 100,
            skip: 0,
            searchString: book.searchString,
            startDate: book.startDate,
            endDate: book.endDate
        };

        console.log("bookData ", bookData);

        try {
            const response = await axios.post(`${baseUrl}/Book/search`, bookData);
            console.log(response);

            setBooksList(response.data);
            console.log(booksList);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        async function fetchBooks() {
            if (isFetching.current) return;
            isFetching.current = true;

            const bookData = {
                take: 100,
                skip: 0,
                searchString: "",
                startDate: null,
                endDate: null
            };

            try {
                const response = await axios.post(`${baseUrl}/Book/search`, bookData);
                console.log(response);

                const newBooks = response.data.filter(newItem => !booksList.some(item => item.id === newItem.id));
                setBooksList(newBooks);
                console.log(booksList);
            } catch (error) {
                console.error("Error:", error);
            }

            isFetching.current = false;
        }

        fetchBooks();
    }, [setBooksList]);

    return (
        <>
            <div className="search-container">
                <h1>Поиск книг, статей и многого другого</h1>
                <form className="searchbar" onSubmit={handleSubmit}>
                    <div className="searchbar-input-container">
                        <input className="searchbar-input" name="searchString" type="text" placeholder="Поиск"
                               onChange={handleChange}/>

                        <button type="submit">Поиск</button>
                    </div>
                    <div className="search-filter-container">
                        <h2>Уточните свой поиск</h2>
                    </div>
                    <div className="datapicker-container">
                        <p>Искать с</p>
                        <input type="date" name="startDate" value="" onChange={handleChange}/>
                        <p>по</p>
                        <input type="date" name="endDate" value="" onChange={handleChange}/>
                    </div>

                </form>
                <div className="book-list-container">
                    {booksList.map(item => (
                        <Book key={item.id} item={item}/>
                    ))}
                </div>
            </div>
        </>
    );
}
