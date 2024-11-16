import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { baseUrl } from "../data.js";
import "./Post.css";
import "./NewsDetail.css";
import axios from "axios";

export default function NewsDetail() {
    const location = useLocation();
    const { id } = location.state;
    const navigate = useNavigate();
    const [newsItem, setNewsItem] = useState(null);

    useEffect(() => {
        async function loadNewsItem() {
            if (!id) {
                console.error('ID не найден');
                return;
            }

            try {
                const response = await axios.get(`${baseUrl}/News/${id}`);
                setNewsItem(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        loadNewsItem();
    }, [id]);

    const goBack = () => {
        navigate(-1);
    };

    if (!newsItem) {
        return <div>Загрузка...</div>;
    }

    return (
        <>
            <div className="post post-news-detail">
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
