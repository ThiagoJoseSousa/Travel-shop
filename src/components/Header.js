import React from "react";
import { Link } from "react-router-dom";

export const Header = ({cartItems})=> {
    return (<div className="header">
        <div>
        <h1> <Link to='/' className="logo">Travel shop</Link></h1>
        </div>
        <div className="header-links">
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/signup'>Signup</Link>
            </li>
            <li>
                <Link to='/cart' className="cart icon">
                    <img src="../../assets/cart.png" alt="cart icon" className="icon"></img>
                <span className="cart-length">
                    {cartItems.length ===0 ?"":" " + cartItems.length}
                </span>
                </Link>
            </li>
        </ul>

        </div>
        </div>)
    
}