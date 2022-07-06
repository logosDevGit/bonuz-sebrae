import { ReactComponent as LogoWhite} from "../../assets/images/logoWhite.svg"
import "./styles.css"
import {FaInstagram, FaFacebookF, FaLinkedinIn} from "react-icons/fa"

const Footer = () => {

    return(
        <footer>
            <LogoWhite/>
            <div className="icons">
                <a rel="noreferrer" href="https://www.instagram.com/b.onuz/" target="_blank"><FaInstagram/></a>
                <a className="mx-3" rel="noreferrer" href="https://www.facebook.com/BNZAdvogados/" target="_blank"><FaFacebookF/></a>
                <a rel="noreferrer" href="https://www.linkedin.com/company/bonuz/" target="_blank"><FaLinkedinIn/></a>
            </div>
            <div>
                <p>© Copyright 2021 Bonuz IT - All Rights Reserved</p>
                <a rel="noreferrer" href="https://www.bonuz.it/internos/termos_servicos.html" target="_blank" style={{color: "var(--bonuz-red)"}}>Termos de Serviços</a> <span style={{color: "var(--bonuz-red)"}}> |</span> <a rel="noreferrer" href="https://www.bonuz.it/internos/politica_privacidade.html" target="_blank" style={{color: "var(--bonuz-red)"}}>Política de Privacidade</a>
                <p>contato@bonuz.it | +55 11 986820121</p>
                <p>Rua Estados Unidos 1140, São Paulo, São Paulo 01427-001, BR Bonuz do Brasil Assessoria Empresarial Ltda. •</p>
                <p>CNPJ 36.454.710/0001-39</p>
            </div>
        </footer>
    )
}

export default Footer;