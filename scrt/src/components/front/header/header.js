import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

const header = (cartItems) => {
    return (
        <header className="header">
            <div>
                <h1>
                    <Link to="/" className="logo">
                        Shopping Cart
                    </Link>
                </h1>
            </div>
            <div className="header-links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/signup">SignUp</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/cart" className="cart">
                            <i class="fas fa-shopping-cart"></i>
                            <span className="cart-length">
                                {cartItems["cartItems"].length === 0 ? "" : cartItems["cartItems"].length}
                            </span>
                        </Link>
                    </li>
                </ul>
            </div> 
        </header>
    )
}

export default header
