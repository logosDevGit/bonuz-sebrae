import Intracasa from "../../../assets/images/clients/intracasa.svg";
import Jobecam from "../../../assets/images/clients/jobecam.svg";
import Mimoo from "../../../assets/images/clients/mimoo.svg";
import Mvisia from "../../../assets/images/clients/mvisia.svg";
import Samplify from "../../../assets/images/clients/samplify.svg";
import StayFilm from "../../../assets/images/clients/stayfilm.svg";
import Zipz from "../../../assets/images/clients/zipz.svg";

const style = {mixBlendMode: "luminosity", opacity: '0.5'}

const Clients = () => {
    return ( 
        <div className="clients wd-cont">
            <h3 className="text-center py-4">Alguns dos nossos clientes:</h3>
            <div className="d-flex justify-content-around flex-wrap">
                <img src={Jobecam} alt="Jobecam logo" style={style}/>
                <img src={Intracasa} alt="IntraCasa logo" style={style} />
                <img src={Mimoo} alt="Mimoo logo" style={style}/>
                <img src={Mvisia} alt="Mvisia logo" style={style}/>
                <img src={Samplify} alt="Samplify logo" style={style}/>
                <img src={StayFilm} alt="StayFilm logo" style={style}/>
                <img src={Zipz} alt="Zipz logo" style={style}/>
            </div>
        </div>
     );
}
 
export default Clients;