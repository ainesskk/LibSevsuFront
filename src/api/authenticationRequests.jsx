import axios from "axios";
import {baseUrl} from "../data.js";
import {getImageId, setData} from "../localStorage/localStorageFunctions.jsx";

//Запрос на вход пользователя
export async function loginRequest(userData) {
    axios.post(`${baseUrl}/Account/auth-token`, userData)
        .then((response) => {
            console.log(response);
            setData(response.data);
            return response.status;

        })
        .catch((error) => {
            console.error("Error:", error);
            return error.status;
        });
}

export async function registrationRequest(userData, formData) {
    try {
        const response = await axios.post(`${baseUrl}/Account`, userData);
        console.log(response);
        if(response.status === 201) {
            const loginData = {
                login: userData.login,
                password: userData.password
            };
            await postUserImageRequest(formData);
            await loginRequest(loginData);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function postUserImageRequest(formData) {
    try {
        const response = await axios.post(`${baseUrl}/User/Image`, formData);
        console.log(response, response);
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function userInfoRequest(token) {
    try {
        const response = await axios.get(`${baseUrl}/User`, {
            headers: { "Authorization": `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

export async function userImageRequest() {
    try {
        const imageId = await getImageId();
        console.log(imageId);
        const response = await axios.get(`${baseUrl}/Image/${imageId}`, {
        });
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}