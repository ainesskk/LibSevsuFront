import {useState} from "react";
import {registrationRequest} from "../api/authenticationRequests.jsx";
import axios from "axios";
import {baseUrl} from "../data.js";
import {getToken} from "../localStorage/localStorageFunctions.jsx";


export default function Registration() {


    const [photo, setPhoto] = useState({ });

    const handleChangeFile = (event) => {
        setPhoto(event.target.files[0]);
    }

    const [data, setData] = useState({ login: "", password: "", name: "" });

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', photo);

        const userData = {
            login: data.login,
            password: data.password,
            name: data.name
        };
        axios.post(`${baseUrl}/User/Image`,formData, {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            }
        } )
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        //await registrationRequest(userData, formData);

    };



    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //
    //
    //     axios.post(`${baseUrl}/News/c1958607-5838-498b-eb6d-8a4d710aba4a/Image`,formData )
    //         .then((response) => {
    //             console.log(response);
    //         })
    //         .catch((error) => {
    //             console.error("Error:", error);
    //         });
    // };

    return (
        <>
            {/*пидорас*/}
            <form onSubmit={handleSubmit}>
                <input name="login" type="login" placeholder="Логин" onChange={handleChange}/>
                <input name="password" type="password" placeholder="Пароль" autoComplete="on" onChange={handleChange}/>
                <input name="name" type="name" placeholder="Имя" onChange={handleChange}/>
                <input type="file" name="photoNews" placeholder="Фото новости" onChange={handleChangeFile}/>
                <button className="login" type="submit">Зарегистрироваться</button>
            </form>
        </>
    )
}

// const books = async () => {
//     let response = await axios.get(baseUrl + "/Book/354e91af-31e8-4baa-8a32-3632b193b187");
//
//     console.log(response);
// }
//
// useEffect( () => {
//     const fetchData = async () => {
//         await books()
//     }
//
//     fetchData();
// }, []);
