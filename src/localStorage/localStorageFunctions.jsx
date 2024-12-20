import {userInfoRequest} from "../api/authenticationRequests.jsx";

//функции по работе с данными пользователя из localstorage

//функция загрузки данных пользователя из бд в localstorage
export async function setData(token) {
    localStorage.setItem('token', token);
    async function getUserInfo() {
        return await userInfoRequest(token)
    }
    const data = await getUserInfo();
    localStorage.setItem("userInfo", JSON.stringify(data));
}

//функция получения токена пользователя из localstorage
export function getToken() {
    return localStorage.getItem('token');
}

//функция получения роли пользователя из localstorage
export function getRole(){
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo && userInfo.role) {
        return userInfo.role;
    } else {
        return null;
    }
}

//функция получения имени из localstorage
export function getName(){
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo && userInfo.name) {
        return userInfo.name;
    } else {
        return null;
    }
}

//функция получения id изображения пользователя из localstorage
export async function getImageId() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo && userInfo.photoId) {
        return userInfo.photoId;
    } else {
        return null;
    }
}

//хук удаления данных пользователя из localstorage
export const useDeleteUserInfo = () => {
    const handleDeleteInfo = async () =>{
        localStorage.clear();
    }
    return handleDeleteInfo;
}