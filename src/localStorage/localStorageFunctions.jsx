import {userImageRequest, userInfoRequest} from "../api/authenticationRequests.jsx";

export async function setData(token) {
    localStorage.setItem('token', token);
    async function getUserInfo() {
        return await userInfoRequest(token)
    }

    const data = await getUserInfo();
    console.log("local storage");
    console.log(data);
    localStorage.setItem("userInfo", JSON.stringify(data));

    const photo = await userImageRequest();
    localStorage.setItem("photoId", photo);
}

export function getToken() {
    return localStorage.getItem('token');
}

export async function getImageId() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo && userInfo.photoId) {
        return userInfo.photoId.toString();
    } else {
        return null;
    }
}