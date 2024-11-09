import {useState} from "react";
import {loginRequest, } from "../api/authenticationRequests.jsx";
import Registration from "./Registration.jsx";
import UserPage from "../PersonalPage/UserPage.jsx";


export default function Login() {

    const [data, setData] = useState({ login: "", password: "" });
    const [login, setLogin] = useState(false);


    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            login: data.login,
            password: data.password
        };

        if( (await loginRequest(userData)) === 200){
            setLogin(true);
        }
    };

    function getLogin() {
        if(login === true){
            return <UserPage />
        }
    }

    return (
        <>
            {/*пидорас*/}
            <form onSubmit={handleSubmit}>
                <input name="login" type="login" placeholder="Логин" onChange={handleChange}/>
                <input name="password" type="password" placeholder="Пароль" autoComplete="on" onChange={handleChange}/>
                <button className="login" type="submit">Войти</button>
            </form>
            {
                getLogin()
            }
        </>
    )
}