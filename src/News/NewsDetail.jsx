import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { baseUrl } from "../data.js";
import "./Post.css"
import "./NewsDetail.css"
import axios from "axios";

export default function NewsDetail() {
    const navigate = useNavigate();
    const [newsItem, setNewsItem] = useState(null);

    useEffect(() => {
        async function loadNewsItem() {

            try {
                const response = await axios.get(`${baseUrl}/News/${id}`);
                setNewsItem(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        loadNewsItem();
    }, []);

    const goBack = () => {
        navigate(-1);
    };

    return (
        <>
            <div className="post post-news-detail ">
                <div className="post-title">
                    <h3>{newsItem.label}</h3>
                </div>
                <div className="post-text">
                    <div className="post-description">
                        <p>{newsItem.text}</p>
                    </div>
                    <div className="post-img">
                        <img src={`${baseUrl}/Image/${newsItem.imageId}`} alt={newsItem.id} />
                    </div>
                </div>
                <button className="more-button" onClick={goBack}>Назад</button>
            </div>
        </>
    );
}
