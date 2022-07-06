import { useState } from "react";
import "./styles.css";

const ServiceCard = ({service}) => {    
    const {
        id,
        title,
        description,
        icon
    } = service;
    
    const [flipped, setFlipped] = useState(false)

    return ( 
        <div key={id} className='position-relative' onClick={() => setFlipped(!flipped)}>
                <div className={flipped ? "card front flipped" : "card front"}>
                    <div className='icon'>
                        <img src={icon} alt={description}/>
                    </div>
                    <h6>{title}</h6>
                    <span>Ver mais</span>
                </div>
                <div className={flipped ? "card back flipped" : "card back"}>
                    <div className='icon'>
                        <img src={icon} alt={description}/>
                    </div>
                    <p className='my-auto px-1' style={{fontSize: "14px"}}>{description}</p>
                </div>
        </div>
    );
};
 
export default ServiceCard;