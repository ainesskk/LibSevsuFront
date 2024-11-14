import axios from "axios";
import {baseUrl} from "../data.js";
import {getToken} from "../localStorage/localStorageFunctions.jsx";

//запрос на отправку данных новости
export async function postNewsRequest(newsData) {
    try {
        const response = await axios.post(`${baseUrl}/News`, newsData, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            }
        });
        console.log("postNewsRequest: ", response);
        return response.data
    } catch (error) {
        console.error("Error postNewsRequest: ", error);
        return error.data
    }
}

//запрос на загрузку изображения новости
export async function postNewsImageRequest(formData, newsImageId) {
    try {
        const response = await axios.post(`${baseUrl}/News/${newsImageId}/Image`, formData, {
            headers: { "Authorization": `Bearer ${getToken()}` }
        });
        console.log("postUserImageRequest:", response);
    } catch (error) {
        console.error("Error postUserImageRequest:", error);
    }
}