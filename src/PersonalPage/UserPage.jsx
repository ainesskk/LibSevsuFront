import { useState, useEffect, useContext } from "react";
import { postUserImageRequest } from "../api/authenticationRequests.jsx";
import { getImageId, getRole, getToken, setData, useDeleteUserInfo, getName } from "../localStorage/localStorageFunctions.jsx";
import { baseUrl } from "../data.js";
import './UserPage.css';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AppContext/AuthContext.jsx";

export default function UserPage() {
    const [photo, setPhoto] = useState(null);
    const [photoName, setPhotoName] = useState("");
    const [imgURL, setImgURL] = useState("");
    const deleteUserInfo = useDeleteUserInfo();
    const { logout } = useContext(AuthContext);
    const { setDefaultPhoto, setPhotoChanged } = useContext(AuthContext);
    const navigate = useNavigate();
    const defaultImg = "../src/assets/unknownUser.png";

    // функция фиксации изменений в поле загрузки файла
    const handleChangeFile = (event) => {
        const file = event.target.files[0];
        setPhoto(file);
        setPhotoName(file.name);
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
        if (getRole() === "Admin") {
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
                <div className={"user-name-container"}>
                    <p className="user-name">{getName()}</p>
                </div>
                <div className="user-details">
                    <form onSubmit={handleSubmit}>

                        <div className="user-photo-container">
                            <div className="user-photo">
                                <img src={imgURL || defaultImg} alt=""/>
                            </div>
                        </div>
                        <div className="user-photo-upload">
                            <label className="choose-file">
                                <input
                                    type="file"
                                    name="photo"
                                    placeholder="Фото пользователя"
                                    onChange={handleChangeFile}
                                />
                                <div>
                                    {photoName === "" ? 'Файл не выбран' : photoName}
                                </div>
                            </label>

                            <button className="login" type="submit">Загрузить аватарку</button>
                        </div>
                    </form>
                    <div className="user-buttons-container">
                        {returnAdminTools()}
                        <button className="logout" onClick={handleLogout}>Выйти</button>
                    </div>

                </div>
            </div>
        </>
    );
}
