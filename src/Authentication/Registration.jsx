import {useContext, useState} from "react";
import {registrationRequest} from "../api/authenticationRequests.jsx";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../contexts/AppContext/AuthContext.jsx";


export default function Registration() {
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

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="login" type="login" placeholder="Логин" onChange={handleChange}/>
                <input name="password" type="password" placeholder="Пароль" autoComplete="on" onChange={handleChange}/>
                <input name="name" type="name" placeholder="Имя" onChange={handleChange}/>
                <button className="login" type="submit">Зарегистрироваться</button>
            </form>
        </>
    )
}



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
