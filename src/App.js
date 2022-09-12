import React from "react";
import { itemList } from "./back data/itemList";
import { Header } from "./components/Header";

function App() {
  const {productItems} = itemList;
  return (<div><Header/></div>)
}

export default App;
