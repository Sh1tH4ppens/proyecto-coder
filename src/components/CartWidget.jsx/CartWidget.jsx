import React from 'react';

const CartWidget = () => {
    return (
        <a href="#" className="c-4 d-flex align-items-center">
            <div className="d-flex flex-column text-center">
                <p>0</p>
                <span>Carrito</span>
                <i className="fa-solid fa-cart-arrow-down"></i>
            </div>
        </a>
    );
}

export default CartWidget;
