import {useState} from "react";
import {postBookImageRequest, postBookRequest} from "../api/booksRequests.jsx";
import "./AddBooks.css"
export default function AddBooks() {

    const [photo, setPhoto] = useState("");
    const [bookPhotoName, setbookPhotoName] = useState("");
    const [book, setBook] = useState({name: "", description: "", author: "", publishDate: "" });

    const handleChangeFile = (event) => {
        const file = event.target.files[0];
        setPhoto(file);
        setbookPhotoName(file.name);
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
            <div className="add-book-container">
                <h2 className="add-book-header">Добавить книгу</h2>
                <form onSubmit={handleSubmit}>
                    <div className="add-book-form">
                        <textarea name="name" placeholder="Название книги" rows={2} cols={40} onChange={handleChange}/>
                        <textarea name="description" placeholder="Описание книги" rows={4} cols={40}
                                  onChange={handleChange}/>
                        <textarea name="author" placeholder="Автор книги" rows={2} cols={40} onChange={handleChange}/>
                        <input type="date" name="publishDate" placeholder="Дата издания" onChange={handleChange}/>
                        <div className="book-photo-upload">
                            <label className="choose-book-file">
                                <input type="file" name="photo" placeholder="Фото книги" onChange={handleChangeFile}/>
                                <div>
                                    {bookPhotoName === "" ? 'Файл не выбран' : bookPhotoName}
                                </div>
                            </label>

                        </div>

                        <button className="create-book-button" type="submit">Подтвердить</button>
                    </div>
                </form>
            </div>

        </>
    )
}