import './Navigation.css'
import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {baseUrl} from "../data.js";
import { AuthContext } from "../contexts/AppContext/AuthContext.jsx";

export default function PinsMenu() {
    const [imgURL, setImgURL] = useState("");
    const { photoChanged } = useContext(AuthContext);
    const defaultImg = "../src/assets/unknownUser.png";

    let authentication = "authentication";
    let search = "search";

    useEffect(() => {
        async function loadUserImage() {

                try {
                    const imageURL = `${baseUrl}/Image/${photoChanged}`;
                    setImgURL(imageURL);
                } catch (error) {
                    console.error("Ошибка при загрузке изображения:", error);
                    setImgURL(defaultImg);
                }
            }

        loadUserImage();
    }, [photoChanged]);

    return (
        <>
            <div className="nav-item-pins-container">
                <li className="pin-container"><Link to={search}><img src="/src/assets/search.svg" alt="search"></img></Link></li>
                <li className="pin-container"><Link to="/"><img src="/src/assets/favourites.svg" alt="favourites"></img></Link></li>
                <li className="pin-container"><Link to={authentication}><img
                    src="/src/assets/account.svg" alt="acсount"></img></Link></li>
                <li className="user-photo-pin-container">
                    <div className="user-photo-pin"><img src={imgURL || defaultImg} alt="userPhoto"></img></div>
                </li>
            </div>
        </>
    )
}
