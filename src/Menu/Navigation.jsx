import {useEffect, useState} from "react";
import './Navigation.css'
import HamburgerMenu from "./HamburgerMenu.jsx";
import StandardMenu from "./StandardMenu.jsx";

export default function Navigation(){

    // проверка на установку выпадающего меню
    const[miniSize, setMiniSize] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 660){
                setMiniSize(true);
            } else{
                setMiniSize(false);
            }
        }
            handleResize();

            window.addEventListener("resize", handleResize);

            return () => window.removeEventListener("resize", handleResize);
    }, []);

    if(miniSize){
        return (
            <>
                <HamburgerMenu/>
            </>)
    } else {
        return (
            <>
                <StandardMenu/>
            </>)
    }
}

