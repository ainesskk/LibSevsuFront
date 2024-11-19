import { useState, useEffect, useContext } from "react";
import { postUserImageRequest } from "../api/authenticationRequests.jsx";
import {getImageId, getRole, getToken, setData, useDeleteUserInfo, getName} from "../localStorage/localStorageFunctions.jsx";
import { baseUrl } from "../data.js";
import './UserPage.css';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AppContext/AuthContext.jsx";
import AddNews from "../Admin/AddNews.jsx"
import AddBooks from "../Admin/AddBooks.jsx";

export default function UserPage() {
    const [photo, setPhoto] = useState(null);
    const [imgURL, setImgURL] = useState("");
    const deleteUserInfo = useDeleteUserInfo();
    const { logout } = useContext(AuthContext);
    const { setDefaultPhoto, setPhotoChanged } = useContext(AuthContext);
    const navigate = useNavigate();
    const defaultImg = "../src/assets/unknownUser.png";

    // функция фиксации изменений в поле загрузки файла
    const handleChangeFile = (event) => {
        setPhoto(event.target.files[0]);
    };

    // функция выхода из аккаунта
    const handleLogout = async () => {
        await deleteUserInfo();
        setDefaultPhoto();
        logout();
        navigate("/");
    };

    // загрузка данных при монтировании
    useEffect(() => {
        async function initializeData() {
            await setData(getToken());
            const imgId = await getImageId();
            console.log(imgId);

            if (imgId) {
                try {
                    const imageURL = `${baseUrl}/Image/${imgId}`;
                    setPhotoChanged(imgId);
                    setImgURL(imageURL);
                } catch (error) {
                    console.error("Ошибка при загрузке изображения:", error);
                    setImgURL(defaultImg);
                }
            } else {
                setImgURL(defaultImg);
                console.log("Установлено изображение по умолчанию");
            }
        }

        initializeData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("кнопка формы");

        if (!photo) {
            return;
        }

        const formData = new FormData();
        formData.append('file', photo);
        console.log("форма ", formData);

        try {
            await postUserImageRequest(formData);
            await setData(getToken());

            const imgId = await getImageId();
            const imageURL = `${baseUrl}/Image/${imgId}`;
            setPhotoChanged(imgId);
            setImgURL(imageURL);
        } catch (error) {
            console.error("Ошибка при загрузке изображения:", error);
            setImgURL(defaultImg);
        }
    };

    const returnAdminTools = () => {
        if(getRole() === "Admin") {
            return (
                <>
                    <button className="navigate-add-book" onClick={() => {
                        navigate('/addbooks')
                    }}>Добавить книгу
                    </button>
                    <button className="navigate-add-news" onClick={() => {
                        navigate('/addnews')
                    }}>Добавить новость
                    </button>
                </>
            )
        }
    }

    return (
        <>
            <div className="user-page-container">
                <h2 className="user-page-header">Личный кабинет</h2>
                <form onSubmit={handleSubmit}>
                    <p>{getName()}</p>
                    <img className="user-photo" src={imgURL || defaultImg} alt=""/>
                    <input type="file" name="photo" placeholder="Фото пользователя" onChange={handleChangeFile}/>
                    <button className="login" type="submit">Загрузить аватарку</button>
                </form>
                {
                    returnAdminTools()
                }
                <button className="logout" onClick={handleLogout}>Выйти</button>
            </div>
        </>
    );
}
