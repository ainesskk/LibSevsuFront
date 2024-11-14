import {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../api/authenticationRequests.jsx";
import {AuthContext} from "../contexts/AppContext/AuthContext.jsx";

export default function Login() {
    const [data, setData] = useState({ login: "", password: "" });
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            login: data.login,
            password: data.password
        };

        const status = await loginRequest(userData);
        console.log('Login Response Status:', status);
        if (status === 200) {
            login();
            navigate("/userpage");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="login" type="text" placeholder="Логин" onChange={handleChange} />
                <input name="password" type="password" placeholder="Пароль" autoComplete="on" onChange={handleChange} />
                <button className="login" type="submit">Войти</button>
            </form>
        </>
    )
}