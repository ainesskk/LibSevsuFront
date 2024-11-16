import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {baseUrl} from "../data.js";
import Post from "./Post.jsx";
import "./News.css"

export default function NewsList() {

    const [pagin, setPagin] = useState({ take: 100, skip: 0 });
    const [news, setNews] = useState([]);
    const isFetching = useRef(false);

    useEffect(() => {
        async function fetchNews() {
            if (isFetching.current) return;
            isFetching.current = true;

            try {
                const response = await axios.post(`${baseUrl}/News/search?take=${pagin.take}&skip=${pagin.skip}`, {});
                console.log(response);

                const newNews = response.data.filter(newItem => !news.some(item => item.id === newItem.id));
                setNews(prevNews => [...prevNews, ...newNews]);
            } catch (error) {
                console.error("Error:", error);
            }

            isFetching.current = false;
        }

        fetchNews();
    }, [pagin]);

    return (
        <>
            <div className="all-news-container">
                {news.map(item => (
                    <Post key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}