import {useState} from "react";
import {postNewsImageRequest, postNewsRequest} from "../api/newsRequests.jsx";
import "./AddNews.css"
export default function AddNews() {

    const [photo, setPhoto] = useState("");
    const [newsPhotoName, setNewsPhotoName] = useState("");
    const [news, setNews] = useState({ label: "", text: ""});

    const handleChangeFile = (event) => {
        const file = event.target.files[0];
        setPhoto(file);
        setNewsPhotoName(file.name);
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
            <div className="add-news-container">
                <h2 className="add-book-header">Добавить новость</h2>
                <form onSubmit={handleSubmit}>
                    <div className="add-news-form">
                        <textarea name="label" placeholder="Заголовок новости" rows={2} cols={40}
                                  onChange={handleChange}/>
                        <textarea name="text" placeholder="Текст новости" rows={4} cols={40} onChange={handleChange}/>
                        <div className="news-photo-upload">
                            <label className="choose-news-file">
                                <input type="file" name="photo" placeholder="Фото книги" onChange={handleChangeFile}/>
                                <div>
                                    {newsPhotoName === "" ? 'Файл не выбран' : newsPhotoName}
                                </div>
                            </label>
                        </div>

                        <button className="create-news-button" type="submit">Подтвердить</button>
                    </div>
                </form>
            </div>
        </>
    )
}