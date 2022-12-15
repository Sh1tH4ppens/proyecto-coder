import { Link } from "react-router-dom";

const Categorias = () => {
    return (
        <>
            <a href={"/"} className="c-1 d-flex align-items-center">
                <div className="d-flex flex-column text-center">
                    <span>Inicio</span>
                    <i className="fas fa-solid fa-house"></i>
                </div>
            </a>
            <a href={"/category/1"} className="c-2 d-flex align-items-center">
                <div className="d-flex flex-column text-center">
                    <span>Laptops</span>
                    <i className="fas fa-laptop"></i>
                </div>
            </a>
            <a href={"/category/2"} className="c-3 d-flex align-items-center">
                <div className="d-flex flex-column text-center">
                    <span>Teléfonos</span>
                    <i className="fas fa-mobile"></i>
                </div>
            </a>
            <a href={"/category/3"} className="c-3 d-flex align-items-center">
                <div className="d-flex flex-column text-center">
                    <span>Televisores</span>
                    <i className="fas fa-tv"></i>
                </div>
            </a>
            <a href={"/category/4"} className="c-3 d-flex align-items-center">
                <div className="d-flex flex-column text-center">
                    <span>Auriculares</span>
                    <i className="fas fa-headphones"></i>
                </div>
            </a>
        </>

    );
}

export default Categorias;