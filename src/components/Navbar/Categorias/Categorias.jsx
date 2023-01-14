import { Link } from "react-router-dom";

const Categorias = () => {
    return (
        <>
            <button className="c-1 d-flex align-items-center">
                <Link className="nav-link" to={"/"}>
                    <div className="d-flex flex-column text-center">
                        <span>Inicio</span>
                        <i className="fas fa-solid fa-house"></i>
                    </div>
                </Link>
            </button>
            <button className="c-2 d-flex align-items-center">
                <Link className="nav-link" to={"/category/1"}>
                    <div className="d-flex flex-column text-center">
                        <span>Laptops</span>
                        <i className="fas fa-laptop"></i>
                    </div>
                </Link>
            </button>
            <button className="c-3 d-flex align-items-center">
                <Link className="nav-link" to={"/category/2"}>
                    <div className="d-flex flex-column text-center">
                        <span>Teléfonos</span>
                        <i className="fas fa-mobile"></i>
                    </div>
                </Link>
            </button>
            <button className="c-3 d-flex align-items-center">
                <Link className="nav-link" to={"/category/3"}>
                    <div className="d-flex flex-column text-center">
                        <span>Televisores</span>
                        <i className="fas fa-tv"></i>
                    </div>
                </Link>
            </button>
            <button className="c-3 d-flex align-items-center">
                <Link className="nav-link" to={"/category/4"}>
                    <div className="d-flex flex-column text-center">
                        <span>Auriculares</span>
                        <i className="fas fa-headphones"></i>
                    </div>
                </Link>
            </button>
        </>

    );
}

export default Categorias;