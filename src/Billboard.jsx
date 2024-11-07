import './Billboard.css'
import {useEffect, useState} from "react";

export default function Billboard() {
    const[img, setImg] = useState('src/assets/building1.png');
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 660) {
                setImg("src/assets/building2_1.png");
            } else {
                setImg("src/assets/building1.png");
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="billboard">
            <img className="billboard-img" src={img} alt="building"/>
            <div className="greeting">
                <h1 className="greeting-text">Добро<br></br> пожаловать</h1>
                <p>Ознакомьтесь с нашими обширными<br></br> коллекциями и услугами</p>
            </div>
        </div>

    )
}