import "./News.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { baseUrl } from "../data.js";
import Post from "./Post";

export default function News() {
    const [pagin, setPagin] = useState({ take: 2, skip: 0 });
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
            } finally {
                isFetching.current = false;
            }
        }

        fetchNews();
    }, [pagin]);

    return (
        <>
            <div className="news-container">
                <h2>Новости и анонсы</h2>
                <div className="post-container">
                    {news.map(item => (
                        <Post key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
}
