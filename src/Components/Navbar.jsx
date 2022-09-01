import './Navbar.css';
import CartWidget from './CartWidget/CartWidget';

const Navbar = () => {
    return (
        <header className="Navbar">
            <h1 className="Navbar-h1">
                <a href="/#" className="Navbar-a"> Caelum</a>
            </h1>

               <nav className= "Navvar-main">
            <ul className="Navbar-ul">
                <li className="Navbar-li"><a href="/#" className="Navbar-a">Home</a></li>
                <li className="Navbar-li"><a href="/#" className="Navbar-a">Quienes Somos</a></li>
                <li className="Navbar-li"><a href="/#" className="Navbar-a"><CartWidget /> </a></li>
            </ul>
        </nav>



        </header>
    )
}

export default Navbar