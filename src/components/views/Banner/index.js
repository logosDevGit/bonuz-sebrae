import './styles.css';
import Owl from "../../../assets/images/owl.svg";

const Banner = () => {
    return ( 
        <div className="banner">
            <div className='owl'><img src={Owl} alt="Corujinha" /></div>
        </div>
     );
}
 
export default Banner;