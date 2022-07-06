import Owl from "../../../assets/images/welcomeComp.svg"
import './styles.css'

const Welcome = () => {
    return(
        <div className="welcome wd-cont">
            <div className="cont-1">
                <h1 className="my-4">Simplifique seu <span>jurídico</span>.</h1>
                <p className="my-4">A Bonuz é uma plataforma tecnológica de intermediação de serviços jurídicos consultivos, que oferece qualidade a um custo acessível.</p>
                <a className="btn btn-red my-4" rel="noreferrer" target="_blank" href="https://hubscontabilidade.com.br/clubehubs/">Consultar planos</a>
            </div>
            <div>
                <img src={Owl} alt='Coruja aplicativo Hub'/>
            </div>
        </div>
    )
}

export default Welcome