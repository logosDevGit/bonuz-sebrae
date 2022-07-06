import Logo from "../../assets/images/logoNav.png"
import './styles.css'

const NavBar = () => {

    return(
        <nav className="wd-cont">
            <img src={Logo} alt="logo"/>
        </nav>
    )
}

export default NavBar