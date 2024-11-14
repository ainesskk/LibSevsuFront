import { useState, useEffect, useContext } from "react";
import { postUserImageRequest } from "../api/authenticationRequests.jsx";
import {getImageId, getRole, getToken, setData, useDeleteUserInfo} from "../localStorage/localStorageFunctions.jsx";
import { baseUrl } from "../data.js";
import './UserPage.css';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AppContext/AuthContext.jsx";
import AddNews from "../Admin/AddNews.jsx"

export default function UserPage() {
    const [photo, setPhoto] = useState(null);
    const [imgURL, setImgURL] = useState("");
    const deleteUserInfo = useDeleteUserInfo();
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const defaultImg = "../src/assets/unknownUser.png";

    // функция фиксации изменений в поле загрузки файла
    const handleChangeFile = (event) => {
        setPhoto(event.target.files[0]);
    };

    // функция выхода из аккаунта
    const handleLogout = async () => {
        await deleteUserInfo();
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
            setImgURL(imageURL);
        } catch (error) {
            console.error("Ошибка при загрузке изображения:", error);
            setImgURL(defaultImg);
        }
    };

    const returnAdminTools = () => {
        if(getRole() === "Admin") {
            return (
                <AddNews />
            )
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <img className="user-photo" src={imgURL || defaultImg} alt=""/>
                <input type="file" name="photo" placeholder="Фото пользователя" onChange={handleChangeFile}/>
                <button className="login" type="submit">Загрузить аватарку</button>
            </form>
            {
                returnAdminTools()
            }
            <button className="logout" onClick={handleLogout}>Выйти</button>
        </>
    );
}
