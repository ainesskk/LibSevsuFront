import './Navigation.css'

export default function Navigation(){
    return (
        <>
            <ul className="navbar">
                <li className="nav-item">Главная</li>
                <li className="nav-item">Электронный каталог</li>
                <li className="nav-item">Репозиторий eSevSUIR</li>
                <li className="nav-item">О нас</li>
                <li className="nav-item">
                    <a href="https://www.sevsu.ru" target="_blank">СевГУ</a>
                </li>
            </ul>

        </>
    )
}