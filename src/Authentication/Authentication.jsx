import Registration from "./Registration.jsx";
import Login from "./Login.jsx";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../contexts/AppContext/AuthContext.jsx";
import {useNavigate} from "react-router-dom";
import "./Login.css"

export default function AuthenticationTeg() {
    const {isAuthorized} = useContext(AuthContext);
    const [statusAuthent, setStatusAuthent] = useState("Login");
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthorized){
            navigate('/userpage');
        }
    }, [navigate])

    const handleGetAuthentStatus = (status) => {
        setStatusAuthent(status);
    }

    return (
        <>
            {
                statusAuthent === "Login" ?
                    <Login handleGetAuthentStatus={handleGetAuthentStatus}/> :
                    <Registration handleGetAuthentStatus={handleGetAuthentStatus} />
            }
        </>
    )
}