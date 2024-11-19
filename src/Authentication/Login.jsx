import {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../api/authenticationRequests.jsx";
import {AuthContext} from "../contexts/AppContext/AuthContext.jsx";
import "./Login.css"
import PropTypes from "prop-types";
import Registration from "./Registration.jsx";

export default function Login({ handleGetAuthentStatus }) {
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

    const handleClick = () => {
        handleGetAuthentStatus("Registration")
    }


    return (
        <>
            <div className="login-form-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-container">
                        <img className="login-img" src="src/assets/account_blue.svg" alt="account blue"/>
                        <input name="login" type="text" placeholder="Введите логин..." onChange={handleChange}/>
                        <input name="password" type="password" placeholder="Введите пароль..." autoComplete="on"
                               onChange={handleChange}/>
                    </div>
                    <div className="login-form-buttons">
                        <button id="login-button" type="submit">Войти</button>
                        <button id="login-registration-button" type="reset" onClick={handleClick}>Регистрация</button>
                    </div>
                </form>
            </div>

        </>
    )
}

Registration.propsType = {
    handleGetAuthentStatus: PropTypes.func.isRequired
};