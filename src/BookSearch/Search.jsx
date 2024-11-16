import './BookSearch.css'
import {useState} from "react";
import {getBookSearchRequest} from "../api/booksRequests.jsx";

export default function Search() {

    const [book, setBook] = useState({ take: 5, skip: 0, searchString: "", startDate: "2000-01-01", endDate: "2024-12-31"});

    const handleChange = (event) => {
        setBook({ ...book, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const bookData = {
            take: 5,
            skip: 0,
            searchString: book.searchString,
            startDate: book.startDate,
            endDate: book.endDate
        };

        console.log("bookData ", bookData);

        const books = await getBookSearchRequest(bookData);
        console.log(books);
    };

    return(
        <>
            <div className="search-container">
                <h1>Поиск книг, статей и многого другого</h1>
                <form className="searchbar" onSubmit={handleSubmit}>
                    <div className="searchbar-input-container">
                        <input className="searchbar-input" name="searchString" type="text" placeholder="Поиск" onChange={handleChange}/>
                    </div>
                    <div className="search-filter-container">
                        <h2>Уточните свой поиск</h2>
                    </div>
                    <input type="date" name="startDate" value="2000-01-01" onChange={handleChange}/>
                    <input type="date" name="endDate" value="2024-12-31" onChange={handleChange}/>
                    <button type="submit">Поиск</button>
                </form>
            </div>
        </>
    )
}