import React from "react";
import { itemList } from "./back data/itemList";
import { Header } from "./components/Header";
import {BrowserRouter as Router} from "react-router-dom";
import RoutesComp from "./components/Routes";

function App() {
  // const [productItems] = {itemList}; destructuring is for separing elements within
  return (<div>
    <Router>
    <Header/>  
    <RoutesComp productItems={itemList}/>
    </Router>
    </div>)
}

export default App;
