import React from "react";

//import '../assets/Products.css'
const Products = (itemList) => {
 // passing props creates an outer object. 
    return ( <div className="products">
        
    { 
    itemList.itemList.productItems.map((productItem)=> (
        <div className="card" id={productItem.id}>
            <div> 
                <img className="product-image" src={productItem.image
                } alt={productItem.name}></img>
            </div>
            <div>
                <h3 className="product.name">{productItem.name}</h3>
            </div> 

           <div className="product-price">${productItem.price}</div>
                <div>
                    <button className="product-add-button">Add to Cart</button>
                </div>
        </div>
    ))
    
    }
    </div>
    )
}

export default Products;