import {useContext, useState} from "react";
import {registrationRequest} from "../api/authenticationRequests.jsx";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../contexts/AppContext/AuthContext.jsx";
import "./Registration.css"
import PropTypes from "prop-types";


export default function Registration({ handleGetAuthentStatus }) {
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

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

        const status = await registrationRequest(userData);
        console.log('Login Response Status:', status);
        if (status === 201) {
            login();
            navigate("/userpage");
        }

    };

    const handleClick = () => {
        handleGetAuthentStatus("Login")
    }

    return (
        <>
            <div className="registration-form-container">
                <form className="registration-form" onSubmit={handleSubmit}>
                    <div className="registration-container">
                        <input name="name" type="name" placeholder="Введите имя..." onChange={handleChange}/>
                        <input name="login" type="login" placeholder="Введите логин..." onChange={handleChange}/>
                        <input name="password" type="password" placeholder="Введите пароль..." onChange={handleChange}/>
                    </div>
                    <div className="registration-form-buttons">
                        <button id="registration-login-button" type="reset" onClick={handleClick}>Вход</button>
                        <button id="registration-button" type="submit">Зарегистрироваться</button>
                    </div>
                </form>
            </div>

        </>
    )
}

Registration.propsType = {
    handleGetAuthentStatus: PropTypes.func.isRequired
};