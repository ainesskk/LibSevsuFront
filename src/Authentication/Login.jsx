import axios from "axios";
import {useState} from "react";
import {baseUrl} from "../data.js";


export default function Login() {

    const [data, setData] = useState({ login: "", password: "" });

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            login: data.login,
            password: data.password
        };
       
        axios.post(`${baseUrl}/Account/auth-token`, userData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <>
            {/*пидорас*/}
            <form onSubmit={handleSubmit}>
                <input name="login" type="login" placeholder="Логин" onChange={handleChange}/>
                <input name="password" type="password" placeholder="Пароль" autoComplete="on" onChange={handleChange}/>
                <button className="login" type="submit">Войти</button>
            </form>
        </>
    )
}