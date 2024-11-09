import Registration from "./Registration.jsx";
import Login from "./Login.jsx";
import {useState} from "react";



export default function AuthenticationTeg() {
    const [statusAuthent, setStatusAuthent] = useState("Registration");

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
            {/*<AddNews />*/}
            {/*<DeleteNews />*/}
        </>
    )
}