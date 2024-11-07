import {Link} from "react-router-dom";
import PinsMenu from "./PinsMenu.jsx";


export default function StandardMenu() {
    const irbisHref = 'https://lib.sevsu.ru/cgi-bin/irbis64r_plus/cgiirbis_64_ft.exe?IS_FIRST_AUTH=false&C21COM=F&I21DBN=AUTHOR&P21DBN=BOOK&LNG=&Z21ID=GUEST&Z21FLAGID=1'


    return (
        <>
            <ul className="navbar">
                <div className="navbar-volatile">
                    <li className="nav-item"><Link to="/">Главная</Link></li>
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
                <PinsMenu/>
            </ul>
        </>
    )
}