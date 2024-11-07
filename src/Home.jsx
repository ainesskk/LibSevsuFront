import Billboard from "./Billboard.jsx";
import "./Billboard.css"
import Services from "./Services/Services.jsx";
import "./Services/Services.css"
import NewsPreface from "./News/NewsPreface.jsx";
import News from "./News/News.jsx";


export default function Home() {
    return (
        <>
            {/*<div className="billboard-container">*/}
            <Billboard/>
            {/*</div>*/}
            <Services/>
            <NewsPreface />
            <News />
        </>)
}