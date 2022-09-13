import React from "react";
import Products from "./Products";
import {Route, Routes} from "react-router-dom"
import Signup from "./Signup";
import Cart from "./Cart";

const RoutesComp = (itemList) => {
    return <div>
        <Routes>
            <Route path='/' element={<Products itemList={itemList}/>}  />
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>

    </div>
}

export default RoutesComp;