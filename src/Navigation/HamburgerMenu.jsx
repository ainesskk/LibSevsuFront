import {Link} from "react-router-dom";
import {useRef, useState} from "react";
import {useClickOutside} from "../hook/useClickOutside.jsx";
import './HamburgerMenu.css'

export default function HamburgerMenu() {
    const irbisHref = 'https://lib.sevsu.ru/cgi-bin/irbis64r_plus/cgiirbis_64_ft.exe?IS_FIRST_AUTH=false&C21COM=F&I21DBN=AUTHOR&P21DBN=BOOK&LNG=&Z21ID=GUEST&Z21FLAGID=1'

    const[isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);
    // проверка на клик вне выпавшего меню
    useClickOutside(menuRef, () => {
        if(isOpen){
            setTimeout(() => setOpen(false), 200);
        }
    });

    let authentication = "/authentication";
    let search = "/search";


    return (
        <>
            <ul className={`burger-menu ${isOpen ? "active" : ""}`} ref={menuRef}>
                <li className="item"><Link to="/" onClick={() => setOpen(false)}>Главная</Link></li>
                   <li className="item"><Link to={authentication} onClick={() => setOpen(false)}>Аккаунт</Link></li>
                <li className="item"><Link to={search} onClick={() => setOpen(false)}>Поиск</Link></li>
                <li className="item"><a>Избранное</a></li>
                <li className="item">
                    <a href={irbisHref} target="_blank" onClick={() => setOpen(false)}>Электронный каталог</a>
                </li>
                <li className="item">
                    <a href="https://lib.sevsu.ru/xmlui/" target="_blank" onClick={() => setOpen(false)}>Репозиторий eSevSUIR</a>
                </li><li className="item"><a>О нас</a></li>
                <li className="item">
                    <a href="https://www.sevsu.ru" target="_blank" onClick={() => setOpen(false)}>СевГУ</a>
                </li>
            </ul>
            <ul className="head-menu">
                <li className="library-head">
                    <img className="logo" src="src/assets/logo2.png" alt="SevSU logo"></img>
                    <h2 className="uni-name">Библиотека Севастопольского<br></br> государственного университета</h2>
                </li>
                <li onClick={() => setOpen(!isOpen)}><img className="menu-icon"
                    src="/src/assets/account.svg" alt="menu"></img></li>
            </ul>
        </>
    )
}