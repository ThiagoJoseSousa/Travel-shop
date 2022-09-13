import React from "react";

//import '../assets/Products.css'
const Products = (itemList) => {
 // passing props creates an outer object. 
    return ( <div className="products">
        
    { 
    itemList.itemList.productItems.map((productItem)=> (
        <div className="card" id={productItem.id}>
            <div> {//require is synchronous
            }
                <img className="product-image" src={productItem.image
                } alt={productItem.name}></img>
            </div>
        </div>
    ))
    
    }
    </div>
    )
}

export default Products;