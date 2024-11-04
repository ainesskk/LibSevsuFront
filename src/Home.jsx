import Billboard from "./Billboard.jsx";
import "./Billboard.css"
import Services from "./Services.jsx";
import "./Services.css"


export default function Home() {
    return (
        <>
            <div className="main-container">
                <Billboard/>
            </div>
            <Services/>
        </>)
}