import {useState} from "react";
import axios from "axios";
import {baseUrl} from "../data.js";

export default function AddNews() {

    const [photo, setPhoto] = useState({ });

    const handleChange = (event) => {
        setPhoto(event.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', photo);
        axios.post(`${baseUrl}/News/c1958607-5838-498b-eb6d-8a4d710aba4a/Image`,formData )
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="file" name="photoNews" placeholder="Фото новости" onChange={handleChange}/>
                <button type="submit">Gjlndthlbnm</button>
            </form>
        </>
    )
}