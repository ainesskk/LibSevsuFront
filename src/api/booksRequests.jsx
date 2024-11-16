import axios from "axios";
import {baseUrl} from "../data.js";
import {getToken} from "../localStorage/localStorageFunctions.jsx";

//запрос на отправку данных книги
export async function postBookRequest(bookData) {
    try {
        const response = await axios.post(`${baseUrl}/Book`, bookData, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            }
        });
        console.log("postBooksRequest: ", response);
        return response.data
    } catch (error) {
        console.error("Error postBooksRequest: ", error);
        return error.data
    }
}

//запрос на загрузку изображения книги
export async function postBookImageRequest(formData, bookId) {
    try {
        const response = await axios.post(`${baseUrl}/Book/${bookId}/Image`, formData, {
            headers: { "Authorization": `Bearer ${getToken()}` }
        });
        console.log("postBooksImageRequest:", response);
    } catch (error) {
        console.error("Error postBooksImageRequest:", error);
    }
}

//запрос на загрузку поиск книг
export async function getBookSearchRequest(bookData) {
    try {
        const response = await axios.post(`${baseUrl}/Book/search`, bookData, {
            headers: { "Authorization": `Bearer ${getToken()}` }
        });
        console.log("postBooksImageRequest:", response);
        return response.data
    } catch (error) {
        console.error("Error postBooksImageRequest:", error);
        return error.data
    }
}