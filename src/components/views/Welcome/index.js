import Owl from "../../../assets/images/welcomeComp.svg"
import './styles.css'

const Welcome = () => {
    return(
        <div className="welcome wd-cont">
            <div className="cont-1">
                <h1 className="my-4">Simplifique seu <span>jurídico</span>.</h1>
                <p className="my-2">A Bonuz é uma plataforma de serviços jurídicos, que oferece qualidade a um custo acessível.</p>
                <p className="my-2"><strong>Capital Empreendedor ganha R$700,00 Grátis em serviços na Bonuz!</strong></p>
                <p className="my-2">Você pode solicitar qualquer serviço com a Bonuz:<br/>(vesting, contrato de mútuo conversível e acordo de sócios)</p>
                <a className="btn btn-primary my-4" rel="noreferrer" target="_blank" href="http://www.bonuz.it/">Consultar planos</a>
            </div>
            <div>
                <img src={Owl} alt='Coruja aplicativo Hub'/>
            </div>
        </div>
    )
}

export default Welcome