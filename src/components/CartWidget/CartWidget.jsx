import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContex";

const CartWidget = () => {
    const { getItemQuantity } = useCarritoContext()

    return (
        <>
            <button className="c-4 d-flex align-items-center">
                <div className="d-flex flex-column text-center">
                    <Link to={'/cart'} className="nav-link">
                        <i className="fas fa-shopping-cart fa-lg"></i>
                        {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
                    </Link>
                </div>
            </button>
        </>
    );
}

export default CartWidget;
