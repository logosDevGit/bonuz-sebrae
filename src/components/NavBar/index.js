import Logo from "../../assets/images/logoNav.svg"
import './styles.css'

const NavBar = () => {

    return(
        <nav className="wd-cont">
            <img src={Logo} alt="logo"/>
        </nav>
    )
}

export default NavBar