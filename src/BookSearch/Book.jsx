import PropTypes from 'prop-types';
import "./Book.css"
import { baseUrl } from "../data.js";

export default function Book({ item }) {

    return (
        <>
            <div id={item.id} className="book-container">
                <div className="book-img-container">
                    <img src={`${baseUrl}/Image/${item.photoId}`} alt={item.id}/>
                </div>
                <div className="book-info-container">
                    <div className="book-name">
                        <h3>{item.name}</h3>
                    </div>
                    <div className="book-author">
                        <p>{item.author}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

Book.propTypes = {
    item: PropTypes.shape({
        author: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        description: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        photoId: PropTypes.string.isRequired,
        publishDate: PropTypes.string.isRequired,
    }).isRequired,
};
