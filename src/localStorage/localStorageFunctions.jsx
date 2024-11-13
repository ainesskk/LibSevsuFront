/*import {userImageRequest, userInfoRequest} from "../api/authenticationRequests.jsx";

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

export function getPhoto(){
    return localStorage.getItem('photoId');
}
//photoId
export async function getImageIdLS() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo && userInfo.photoId) {
        return userInfo.photoId;
    } else {
        return null;
    }
}
//imageId
export async function getImageLS() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo && userInfo.photoId) {
        return userInfo.photoId;
    } else {
        return null;
    }
}*/

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

export function getPhoto(){
    return localStorage.getItem('photoId');
}

export async function getImageId() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo && userInfo.photoId) {
        return userInfo.photoId.toString();
    } else {
        return null;
    }
}

//photoId
export async function getImageIdLS() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo && userInfo.photoId) {
        return userInfo.photoId;
    } else {
        return null;
    }
}
//imageId
export async function getImageLS() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo && userInfo.photoId) {
        return userInfo.photoId;
    } else {
        return null;
    }
}