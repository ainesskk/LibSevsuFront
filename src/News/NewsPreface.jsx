import "./News.css"
import {useNavigate} from "react-router-dom";

export default function NewsPreface() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/allnews");
    }

    return (
        <>
            <div className="news-preface-container">
                <h2>Новости и мероприятия</h2>
                <p>Ознакомьтесь с нашими последними новостями, событиями и избранными статьями</p>
                <button onClick={handleClick}>Посмотреть все новости</button>
            </div>
        </>
    )
}