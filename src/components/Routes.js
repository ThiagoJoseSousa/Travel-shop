import React from "react";
import Products from "./Products";
import {Route, Routes} from "react-router-dom"

const RoutesComp = (itemList) => {
    return <div>
        <Routes>
            <Route path='/' element={<Products itemList={itemList}/>}  />
        </Routes>

    </div>
}

export default RoutesComp;