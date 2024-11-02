import './Billboard.css'

export default function Billboard() {
    return (
        <div className="billboard">
            <img className="billboard-img" src="src/assets/building1.jpg" alt="building" />
            <div className="greeting">
                <h1 className="greeting-text">Добро пожаловать</h1>
                <p>Ознакомьтесь с нашими обширными коллекциями и услугами</p>
            </div>
        </div>
    )
}