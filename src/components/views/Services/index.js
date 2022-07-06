import './styles.css';
import { services } from '../../../helpers/services.js';
import ServiceCard from '../../ServiceCard';

const Services = () => {
    return(
        <div className="services py-5">
            <div className='wd-cont'>
                <h2>Serviços</h2>
                <div className='cards'>
                    {services.map((service) => (
                        <ServiceCard service={service} key={service.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services;