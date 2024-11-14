import axios from "axios";
import {baseUrl} from "../data.js";
import {getImageId, getToken, setData} from "../localStorage/localStorageFunctions.jsx";

//Запрос на вход пользователя
export async function loginRequest(userData) {
    // axios.post(`${baseUrl}/Account/auth-token`, userData)
    //     .then((response) => {
    //         console.log(response);
    //         setData(response.data);
    //         return response.status;
    //
    //     })
    //     .catch((error) => {
    //         console.error("Error:", error);
    //         return error.status;
    //     });
    try {
        const response = await axios.post(`${baseUrl}/Account/auth-token`, userData);
        console.log(response);
        if(response.status === 200) {
            console.log(response);
                    setData(response.data);
                    return response.status;
        }
    } catch (error) {
        console.error("Error:", error);
                return error.status;
    }
}

export async function registrationRequest(userData) {
    try {
        const response = await axios.post(`${baseUrl}/Account`, userData);
        console.log(response);
        if(response.status === 201) {
            const loginData = {
                login: userData.login,
                password: userData.password
            };
            await loginRequest(loginData);
        }
        return response.status;
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function userInfoRequest() {
    try {
        const response = await axios.get(`${baseUrl}/User`, {
            headers: { "Authorization": `Bearer ${getToken()}` }
        });
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

export async function postUserImageRequest(formData) {
    try {
        const response = await axios.post(`${baseUrl}/User/Image`, formData, {
            headers: { "Authorization": `Bearer ${getToken()}` }
        });
        console.log("postUserImageRequest:", response);
    } catch (error) {
        console.error("Error postUserImageRequest:", error);
    }
}

export async function userImageRequest() {
    try {
        const imageId = await getImageId();
        console.log("userImageRequest ", imageId);
        const response = await axios.get(`${baseUrl}/Image/${imageId}`, {
            headers: { "Authorization": `Bearer ${getToken()}` }
        });
        return response;
    }
    catch (error) {
        console.error("Error:", error);
        return null;
    }
}