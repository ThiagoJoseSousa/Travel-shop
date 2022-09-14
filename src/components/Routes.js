import React from "react";
import Products from "./Products";
import {Route, Routes} from "react-router-dom"
import Signup from "./Signup";
import Cart from "./Cart";

const RoutesComp = ({productItems, cartItems, handleAddProduct}) => { // we destructure the props instantly LOL 
    return <div>
        <Routes>
            <Route path='/' element={<Products itemList={productItems} handleAddProduct={handleAddProduct}/>}  />
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/cart' element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct}/>}/>
        </Routes>

    </div>
}

export default RoutesComp;