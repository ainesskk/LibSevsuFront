 import "./News.css"
 import {useState, useEffect} from "react";
 import axios from "axios";
 import {baseUrl} from "../data.js";

 export default function News(){

     const [pagin, setPagin] = useState({ take: 2, skip: 0});
     const [news, setNews] = useState([]);

     useEffect(() => {
         async function fetchNews() {

             axios.post(`${baseUrl}/News/search?take=${pagin.take}&skip=${pagin.skip}`, {})
                 .then((response) => {
                     console.log(response);
                     setNews(response.data);
                 })
                 .catch((error) => {
                     console.error("Error:", error);
                 });
         }

         fetchNews();
     }, []);



    return (
        <>
            <div className="news-container">
                <h2>Новости и анонсы</h2>
                <div className="post-container">
                    {
                        news.map(item => (
                            <div key={item.id} id={item.id} className="post">
                                <h3>{item.label}</h3>
                                <p>{item.text}</p>
                                <img src={`${baseUrl}/Image/${item.imageId}`} alt={item.id}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
 }