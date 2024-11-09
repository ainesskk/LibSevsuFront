import {useState} from "react";
import axios from "axios";
import {baseUrl} from "../data.js";

export default function AddNews() {

    const [id, setId] = useState({ });

    const handleChange = (event) => {
        setId(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        axios.delete(`${baseUrl}/News/${id}`,{} )
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
                <input type="text" name="news" placeholder="id новости" onChange={handleChange}/>
                <button type="submit">Elfkbnm</button>
            </form>
        </>
    )
}