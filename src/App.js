import React from "react";
import { itemList } from "./back data/itemList";
import { Header } from "./components/Header";
import {BrowserRouter as Router} from "react-router-dom";
import RoutesComp from "./components/Routes";
import { useState } from "react";
import Products from "./components/Products";

function App() {
  // const [productItems] = {itemList}; destructuring is for separing elements within
  const [cartItems, setCartItems]=useState([])
  const handleAddProduct= (product)=> {
    const ProductExist= cartItems.find((item)=>item.id===product.id );
    if (ProductExist) {
      setCartItems(cartItems.map((item)=>item.id ===product.id? {...ProductExist,quantity:ProductExist.quantity +1}:item));
    } else {
      setCartItems([...cartItems, {...product,quantity:1}]);
    }
  } 

  const handleRemoveProduct = (product) => {
    const ProductExist= cartItems.find((item)=>item.id===product.id );
    if (ProductExist.quantity===1) {
      setCartItems(cartItems.filter((item)=> item.id !==product.id));
    } else {setCartItems(
      cartItems.map((item)=> item.id ===product.id ? {...ProductExist, quantity:ProductExist.quantity -1} :item)
    )}
  }

  return (<div>
    <Router>
    <Header/>  
    <RoutesComp productItems={itemList} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>
    </Router>
    </div>)
}

export default App;
