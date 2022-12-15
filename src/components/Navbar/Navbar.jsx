import Categorias from "./Categorias/Categorias";
import CartWidget from "../CartWidget.jsx/CartWidget";
import logo from '../../img/Logo-1.png';

const Navbar = () => {
    return (
        <div className="row nav rounded-top align-items-stretch justify-content-between">
            <div className="col-md-12 col-lg logo d-flex align-items-center justify-content-center justify-content-lg-start">
                <a href="#" className="logo">
                    <img className="logo" src={logo} style={{ width: '180px', height: '110px' }} alt="..."/>
                </a>
            </div>
            <nav className="col-md-12 col-lg-auto menu d-flex align-items-stretch flex-wrap flex-sm-nowrap">
                <Categorias />
                <CartWidget />
            </nav>
        </div>
    );
}

export default Navbar;
