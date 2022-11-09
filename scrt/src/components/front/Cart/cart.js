import React from 'react'
import './cart.css'

const cart = ({ 
    cartItems, 
    handelAddProduct, 
    handelRemoveProduct,
    handelCartClearence }) => {
    const totalPrice = cartItems.reduce(
        (price, item) => price + item.quantity * item.price, 0);
    return (
        <div className="cart-items">
            <h2 className="cart-items-header">Cart Items</h2>
            <div className="clear-cart">
                {cartItems.length >= 1 && ( 
                    <button className="clear-cart-button" onClick={handelCartClearence}>Clear Cart</button>
                )}
            </div>

            {cartItems.length === 0 && (
                <div className="cart-items-empty">No items are added</div>
            )}

            <div>
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-items-list">
                        <img src={item.image}
                            alt={item.name}
                            className="cart-items-image" />
                        <div className="cart-items-name">{item.name}</div>
                        <div className="cart-items-function">
                            <button 
                            className="cart-items-add" onClick={() => handelAddProduct(item)}>+</button>
                            <button className="cart-items-remove" onClick={() => handelRemoveProduct(item)}>-</button>
                        </div>
                        <div className="cart-items-price">
                            {item.quantity} * ₹{item.price}
                        </div>
                    </div>
                ))}
                <div className="cart-items-total-price-name">
                    Total Price
                    <div className="cart-items-total-price">₹{totalPrice}</div>
                </div>
            </div>
        </div>
    )
}

export default cart
