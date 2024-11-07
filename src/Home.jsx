import Billboard from "./Billboard.jsx";
import "./Billboard.css"
import Services from "./Services/Services.jsx";
import "./Services/Services.css"


export default function Home() {
    return (
        <>
            {/*<div className="billboard-container">*/}
            <Billboard/>
            {/*</div>*/}
            <Services/>
        </>)
}