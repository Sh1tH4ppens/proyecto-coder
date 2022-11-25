import CartWidget from "../CartWidget.jsx/CartWidget";
import logo from '../../img/Logo-1.png';

const Navbar = () => {
    return (
        <div className="row nav rounded-top align-items-stretch justify-content-between">
            <div className="col-md-12 col-lg logo d-flex align-items-center justify-content-center justify-content-lg-start">
                <a href="#" className="logo">
                    <img className="logo" src={logo} style={{ width: '180px', height: '110px' }} />
                </a>
            </div>
            <nav className="col-md-12 col-lg-auto menu d-flex align-items-stretch flex-wrap flex-sm-nowrap">
                <a href="#" className="c-1 d-flex align-items-center">
                    <div className="d-flex flex-column text-center">
                        <span>Inicio</span>
                        <i className="fa-solid fa-house"></i>
                    </div>
                </a>
                <a href="#" className="c-2 d-flex align-items-center">
                    <div className="d-flex flex-column text-center">
                        <span>Nosotros</span>
                        <i className="icon icon-users" />
                    </div>
                </a>
                <a href="#" className="c-3 d-flex align-items-center">
                    <div className="d-flex flex-column text-center">
                        <span>Catalogo</span>
                        <i className="fa-solid fa-tag"></i>
                    </div>
                </a>
                <CartWidget />
            </nav>
        </div>
    );
}

export default Navbar;
