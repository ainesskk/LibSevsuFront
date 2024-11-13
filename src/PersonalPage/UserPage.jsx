import { useState, useEffect } from "react";
import { postUserImageRequest, userImageRequest, userInfoRequest } from "../api/authenticationRequests.jsx";
import { getImageIdLS, getPhoto, getToken } from "../localStorage/localStorageFunctions.jsx";
import { baseUrl } from "../data.js";

export default function UserPage() {
    const [photo, setPhoto] = useState();
    const [img, setImg] = useState('..src/assets/unknownUser.png');

    const handleChangeFile = (event) => {
        setPhoto(event.target.files[0]);
        console.log("File selected:", event.target.files[0]);

    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted");

        const formData = new FormData();
        formData.append('file', photo);
        console.log("FormData created:", formData);

        try {
            const response = await postUserImageRequest(formData);
            console.log("Image upload response:", response);

            const imageUrl = await userImageRequest(getToken());
            console.log("Fetched image URL:", imageUrl);

        } catch (error) {
            console.error("Error during image upload:", error);
        }

        try {
            const dataUser = await userInfoRequest(getToken());
            console.log("User info:", dataUser);

        } catch (error) {
            console.error("Error fetching user info:", error);
        }
    };



    async function uploadPhoto() {
        const data = await userInfoRequest(getToken());
        await setImg(data.photoId);
    }
    uploadPhoto();
    getPhoto();
    return (
        <>
            <form onSubmit={handleSubmit}>
                {
                    async () => {
                        if(await userImageRequest(getToken()) === 404)
                            return <img src={`${img}`} alt=""/>
                        else
                            return <img src={`${baseUrl}/Image/${img}`} alt=""/>
                    }
                }
                <input type="file" name="photo" placeholder="Фото новости" onChange={handleChangeFile}/>
                <button className="login" type="submit">Загрузить аватарку</button>
            </form>
        </>
    );
}
