import {useState} from "react";
import axios from "axios";
import {baseUrl} from "../data.js";

export default function AddNews() {

    const [photo, setPhoto] = useState({ });
    const [data, setData] = useState({ label: "", text: ""});

    const handleChangeFile = (event) => {
        setPhoto(event.target.files[0]);
    };

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', photo);
        axios.post(`${baseUrl}/News/c1958607-5838-498b-eb6d-8a4d710aba4a/Image`,formData )
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="news=label" placeholder="Заголовок новости" onChange={handleChange}/>
                <input type="text" name="news-text" placeholder="Текст новости" onChange={handleChange}/>
                <input type="file" name="news-photo" placeholder="Фото новости" onChange={handleChangeFile}/>
                <button type="submit">Добавить книгу</button>
            </form>
        </>
    )
}