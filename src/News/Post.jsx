import PropTypes from 'prop-types';
import "./Post.css"
import "./News.css"
import { useNavigate } from 'react-router-dom';
import { baseUrl } from "../data.js";

export default function Post({ item }) {
    const navigate = useNavigate();

    const changeNavigation = () => {
        console.log(item.id);
        navigate("/newsdetail", { state: { key: `${item.id}` } });
    }

    return (
        <>
            <div id={item.id} className="post">
                <div className="post-title">
                    <h3>{item.label}</h3>
                </div>
                <div className="post-text">
                    <div className="post-description">
                        <p>{item.text}</p>
                        <button className="more-button" onClick={changeNavigation}>Подробнее</button>
                    </div>
                    <div className="post-img">
                        <img src={`${baseUrl}/Image/${item.imageId}`} alt={item.id} />
                    </div>
                </div>
            </div>
        </>
    );
}

Post.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        label: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        imageId: PropTypes.string.isRequired,
    }).isRequired,
};
