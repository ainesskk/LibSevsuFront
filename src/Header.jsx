import Navigation from "./Menu/Navigation.jsx";
import "./Header.css"

export default function Header() {
    return (
        <>
            <div className="nav-container">
                <div className="sevsu-head">
                    <img className="sevsu-logo" src="src/assets/logo2.png" alt="SevSU logo"></img>
                    <h2 className="university-name">Библиотека Севастопольского государственного университета</h2>
                </div>
                <Navigation/>
            </div>
        </>
    )
}