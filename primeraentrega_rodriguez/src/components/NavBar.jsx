import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget'

const NavBar = ({background}) =>{
    const logo = '../public/img/logo.png';
    return(
        
        <header className={`header background--${background}`}>

        <div className="header-container">

        {/* Boton de menu */}
        <div className="menu-button">
        <FontAwesomeIcon icon={faBars} size='lg' color='black'/>
        <small>Menu</small>
        </div>


        {/* Links de navegacion */}
        <nav>
            <ul className='nav-container'>
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li className='products-item'>
                    <a href="/">Productos <span className='arrow'></span></a>
                </li>
                <li>
                    <a href="/">Blog</a>
                </li>
                <li>
                    <a href="/">Contacto</a>
                </li>
            </ul>
        </nav>

        {/* Logo de la marca */}
        <div className='logo-container'>
        <img src={logo} alt="logo" />
        </div>
            </div>
            {/* cart-widget */}
            <div>
                <CartWidget/>
            </div>
            </header>
    )
}
export default NavBar