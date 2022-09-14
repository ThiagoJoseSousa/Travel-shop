import React from "react";

const Cart=({cartItems,handleAddProduct})=>{
    return (
        <div className="cart-items">
            <div className="cart-items-header">
            Cart Items 
            {cartItems.length === 0 && (<div className="cart-items-empty">
             No items are added.   </div>)}
            <div>
                
                {
                cartItems.map((item)=> (
                    <div key={item.id} className='cart-item-list'>
                        <img className="cart-items-image" src={item.image} alt='item.name'></img>
                    </div>
                ))}
            </div>

            </div>
        </div>
    )
}

export default Cart;