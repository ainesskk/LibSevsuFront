import PropTypes from 'prop-types';
import './Services.css'

export default function ServicesItem(props) {
    return(
        <>
            <div className="services-item">
                <div className="services-item-img-container">
                    <img className="services-item-img" src={props.image} alt=""/>
                </div>
                <div className="services-item-discrip">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p></div>
            </div>
        </>
    )
}

ServicesItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
};