// React Router
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";


import Navbar from './components/Navbar/Navbar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";


import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <CartProvider>
    <BrowserRouter>
        <Navbar/>
    
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer />}/>
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
    
        </BrowserRouter>
        </CartProvider>
  );
}

export default App;
