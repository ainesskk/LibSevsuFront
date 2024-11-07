import './Navigation.css'
import {Link} from "react-router-dom";

export default function PinsMenu() {
    return (
        <>
            <div className="nav-item-pins-container">
                <li className="pin-container"><a><img src="/src/assets/search.svg" alt="search"></img></a></li>
                <li className="pin-container"><a><img src="/src/assets/favourites.svg" alt="favourites"></img></a></li>
                <li className="pin-container"><Link to="/authentication"><img
                    src="/src/assets/account.svg" alt="acсount"></img></Link></li>
            </div>
        </>
    )
}