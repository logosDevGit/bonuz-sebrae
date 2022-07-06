import OwlCoin from "../../../assets/images/owlCoin.svg"
import { packageProps } from "../../../helpers/package";
import PackageCard from "../../PackageCard";
import './styles.css'

const Package = () => {

    return(
        <div className="package wd-cont">
            <div className="sec-1">
                <img src={OwlCoin} alt="Coruja com moedas"/>
                <div className="info">
                    <h2>Compre pacotes e ganhe BNZ's!</h2>
                    <p>Nossa Moeda Virtual Bonuz. Adquira um pacote, ganhe BNZ’s e troque por Serviços! </p>
                    <p>Seu saldo BNZ's não expira!</p>
                </div>               
            </div>
            <div className="sec-2">
                <h2>Nossos Pacotes</h2>
                <p>Adquira uns dos pacotes Bonuz, ganhe créditos BNZ's (nossa moeda virtual) e troque por serviços. </p>
                <div className="cards mb-3">
                    {packageProps.map((card) => (
                        <PackageCard card={card}/> 
                    ))}
                </div>
                <small className="my-3">*Os Pacotes BNZ variam de acordo com a necessidade do seu serviço.</small>
            </div>
        </div>
    )
}

export default Package;