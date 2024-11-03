import {useState} from "react";
import './Navigation.css'

export default function Navigation(){
    const irbisHref = 'https://lib.sevsu.ru/cgi-bin/irbis64r_plus/cgiirbis_64_ft.exe?IS_FIRST_AUTH=false&C21COM=F&I21DBN=AUTHOR&P21DBN=BOOK&LNG=&Z21ID=GUEST&Z21FLAGID=1'

    const[isOpen, setOpen] = useState();

    return (
        <>
            <ul className="navbar">
                <div className={`navbar-volatile ${isOpen ? "active" : ""}`}>
                    <li className="nav-item"><a>Главная</a></li>
                    <li className="nav-item">
                        <a href={irbisHref} target="_blank">Электронный каталог</a>
                    </li>
                    <li className="nav-item">
                        <a href="https://lib.sevsu.ru/xmlui/" target="_blank">Репозиторий eSevSUIR</a>
                    </li>
                    <li className="nav-item"><a>О нас</a></li>
                    <li className="nav-item">
                        <a href="https://www.sevsu.ru" target="_blank">СевГУ</a>
                    </li>
                </div>
                <div className="nav-item-pins-container">
                    <li className="pin-container"><a><img src="/src/assets/search.svg" alt="search"></img></a></li>
                    <li className="pin-container"><a><img src="/src/assets/favourites.svg" alt="favourites"></img></a>
                    </li>
                    <li className="pin-container"><a href="https://www.sevsu.ru" target="_blank"><img
                        src="/src/assets/account.svg" alt="search"></img></a></li>
                    <li className="pin-container menu-button" onClick={() => setOpen(!isOpen)}>
                        <img src="/src/assets/account.svg" alt="menu" ></img></li>
                </div>
            </ul>

        </>
    )
}