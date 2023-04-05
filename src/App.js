import NavBar from "./Components/NavBar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Cart from "./Components/Cart/Cart";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/CartContext";

function App() {

  const onAdd = (cantidad) =>{
    console.log('Se agregó al carrito ${cantidad} elementos')
  }

  let stock = 5
  
  let initial = 1   

  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryName" element={<ItemListContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/itemDetail/:id" element={<ItemDetailContainer/>}/>
            <Route path="*" element={<h1>error 404: Not found.</h1>}/>
          </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;

