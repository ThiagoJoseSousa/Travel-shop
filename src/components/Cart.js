import React from "react";

const Cart=({cartItems,handleAddProduct, handleRemoveProduct, handleCartClearance})=>{

    const totalPrice= cartItems.reduce((price,item)=> price + item.quantity * item.price, 0)
    return (
        <div className="cart-items products" >
            <div className="cart-items-header">
                
            <h2>Cart Items</h2> <div className='clear-cart'>
                    {cartItems.length >=1 && (
                        <button className="clear-cart-button" onClick= {handleCartClearance}>
                            Clear cart
                        </button>
                    )}
                </div>
            {cartItems.length === 0 && (<div className="cart-items-empty">
             No items are added.   </div>)}
            <div>
                
                {
                cartItems.map((item)=> (
                    <div key={item.id} className='cart-item-list'>
                        <img className="cart-items-image" src={item.image} alt='item.name'></img>
                        <div className="cart-items-name">{item.name}</div>
                        <button className="cart-items-add" onClick={() =>handleAddProduct(item)}>+</button>
                        <button className="cart-items-remove" onClick={() => handleRemoveProduct(item)}>-</button>
                        <div className="cart-items-price">
                            ${item.quantity*item.price} {item.quantity} 
                        </div>
                    </div>

                ))}
            </div>
                    <div className="cart-items-total-price-name">
                    Total price
                    <div className="cart-items-total-price">
                        ${totalPrice}
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Cart;