import {useState} from "react";
import {postNewsImageRequest, postNewsRequest} from "../api/newsRequests.jsx";
export default function AddNews() {

    const [photo, setPhoto] = useState("");
    const [news, setNews] = useState({ label: "", text: ""});

    const handleChangeFile = (event) => {
        setPhoto(event.target.files[0]);
    };

    const handleChange = (event) => {
        setNews({ ...news, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newsData = {
            label: news.label,
            text: news.text,
        };

        console.log("newsData ", newsData);


        const formData = new FormData();
        formData.append('file', photo);

        const newsId = await postNewsRequest(newsData);
        console.log(newsId);

        await postNewsImageRequest(formData, newsId);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="label" placeholder="Заголовок новости" onChange={handleChange}/>
                <input type="text" name="text" placeholder="Текст новости" onChange={handleChange}/>
                <input type="file" name="photo" placeholder="Фото новости" onChange={handleChangeFile}/>
                <button type="submit">Опубликовать новость</button>
            </form>
        </>
    )
}