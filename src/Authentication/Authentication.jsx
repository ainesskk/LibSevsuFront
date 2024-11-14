import Registration from "./Registration.jsx";
import Login from "./Login.jsx";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../contexts/AppContext/AuthContext.jsx";
import {useNavigate} from "react-router-dom";

export default function AuthenticationTeg() {
    const {isAuthorized} = useContext(AuthContext);
    const [statusAuthent, setStatusAuthent] = useState("Registration");
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthorized){
            navigate('/userpage');
        }
    }, [navigate])

    function getAuthenticationTeg() {

        if(statusAuthent === "Registration"){
            return <Registration />
        }else{
            return <Login />
        }
    }
    return (
        <>
            {
                getAuthenticationTeg()
            }
            <button className="button-register" onClick={() => {
                setStatusAuthent("Registration");
            }}>Регистрация</button>

            <button className="button-login" onClick={() => {
                setStatusAuthent("Login");
            }}>Вход</button>
        </>
    )
}