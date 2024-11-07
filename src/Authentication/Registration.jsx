import axios from "axios";
import {useState} from "react";
import {baseUrl} from "../data.js";


export default function Registration() {

    const [data, setData] = useState({ login: "", password: "", name: "" });

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            login: data.login,
            password: data.password,
            name: data.name
        };
        axios.post(`${baseUrl}/Account`, userData)
            .then((response) => {
                console.log(response.status, response.data.message);
            })
            .catch((error) => {
                console.error("Error:", error.response.data.message);
            });
    };


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


    return (
        <>
            {/*пидорас*/}
            <form onSubmit={handleSubmit}>
                <input name="login" type="login" placeholder="Логин" onChange={handleChange}/>
                <input name="password" type="password" placeholder="Пароль" autoComplete="on" onChange={handleChange}/>
                <input name="name" type="name" placeholder="Имя" onChange={handleChange}/>
                <button className="login" type="submit">Зарегистрироваться</button>
            </form>
        </>
    )
}