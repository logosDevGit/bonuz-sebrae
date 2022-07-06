import ArenaHub from '../../../assets/images/partners/arenaHub.png'
import SpVentura from '../../../assets/images/partners/spVentura.png'
import Ifood from '../../../assets/images/partners/ifood.png'
import Hubs from '../../../assets/images/partners/hubs.png'
import Distrito from '../../../assets/images/partners/distrito.png'
import Inovabra from '../../../assets/images/partners/inovabra.png'
import "./styles.css";

const Partners = () => {
    return ( 
        <div className="partners wd-cont pb-5">
            <h5 className='text-center'>Nossos parceiros:</h5>
            <div className="img-cont">
                <div><img src={Ifood} alt="Ifood Logo"/></div>
                <div><img src={Hubs} alt="Hubs Logo"/></div>
                <div><img src={SpVentura} alt="SPVentura Logo"/></div>
                <div><img src={Inovabra} alt="Inovabra Logo"/></div>
                <div><img src={ArenaHub} alt="Arena Hub Logo"/></div>
                <div><img src={Distrito} alt="Distrito Logo"/></div>
            </div>
        </div>
     );
}
 
export default Partners;