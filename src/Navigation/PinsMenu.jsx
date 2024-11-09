import './Navigation.css'
import {Link} from "react-router-dom";

export default function PinsMenu() {

    let authentication = "authentication";
    let search = "search";

    return (
        <>
            <div className="nav-item-pins-container">
                <li className="pin-container"><Link to={search}><img src="/src/assets/search.svg" alt="search"></img></Link></li>
                <li className="pin-container"><Link to="/"><img src="/src/assets/favourites.svg" alt="favourites"></img></Link></li>
                <li className="pin-container"><Link to={authentication}><img
                    src="/src/assets/account.svg" alt="acсount"></img></Link></li>
            </div>
        </>
    )
}
