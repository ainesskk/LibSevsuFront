import {useState} from "react";
import {postBookImageRequest, postBookRequest} from "../api/booksRequests.jsx";
export default function AddBooks() {

    const [photo, setPhoto] = useState("");
    const [book, setBook] = useState({name: "", description: "", author: "", publishDate: "" });

    const handleChangeFile = (event) => {
        setPhoto(event.target.files[0]);
    };

    const handleChange = (event) => {
        setBook({ ...book, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const bookData = {
            name: book.name,
            description: book.description,
            author: book.author,
            publishDate: book.publishDate
        };

        console.log("bookData ", bookData);


        const formData = new FormData();
        formData.append('file', photo);

        const bookId = await postBookRequest(bookData);
        console.log(bookId);

        await postBookImageRequest(formData, bookId);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <textarea name="name" placeholder="Название книги" rows={2} cols={40} onChange={handleChange}/>
                <textarea name="description" placeholder="Описание книги" rows={4} cols={40} onChange={handleChange}/>
                <textarea name="author" placeholder="Автор книги" rows={2} cols={40} onChange={handleChange}/>
                <input type="date" name="publishDate" placeholder="Дата издания" onChange={handleChange}/>
                <input type="file" name="photo" placeholder="Фото книги" onChange={handleChangeFile}/>
                <button type="submit">Опубликовать книгу</button>
            </form>
        </>
    )
}