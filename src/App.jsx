
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Cart from "./Cart";
import CartContextProvider from "./context/CartContext";
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';
import Navbar from './Navbar';


function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/tipo_producto/:tipo" element={<ItemListContainer/>}/>
            <Route path="/tipo_producto/:tipo/:juego" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<div>ERROR 404</div>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      
      

    </>
  );
}

export default App;
