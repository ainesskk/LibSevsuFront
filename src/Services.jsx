import ServicesItem from './ServicesItem.jsx'
import {services} from './data.js'
import {servicesImages} from './data.js'
import './Services.css'

export default function Services() {
    return (
        <>
            <div className="services-container">
                <h2>Сервисы</h2>
                <div className="services-item-container">
                    {
                        services.map((item, index) => (
                            <ServicesItem key={item.title} title={item.title} description={item.description} image={servicesImages[index]} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}