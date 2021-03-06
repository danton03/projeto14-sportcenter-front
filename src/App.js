import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import LogIn from "./logIn_SingUp/LogIn";
import HomePage from "./components/HomePage";
import SingUp from "./logIn_SingUp/SingUp";
import Entrega from "./checkout/Entrega";
import Pagamento from "./checkout/Pagamento";
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import MenuContext from "./contexts/MenuContext";
import CartPage from "./components/CartPage";
import ProductPage from "./components/ProductPage";
import SendContext from "./contexts/SendContext";
import CompletedPurchase from "./checkout/CompletedPurchase";
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from "react-toastify";

function App() {
  const [homePage , setHomePage] = useState('/');
  const [user , setUser] = useState();
  const [dataSend, setDataSend] = useState({});
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [dataPurchase, setDataPurchase] = useState({})
  
  return (
    <UserContext.Provider value={{user , setUser, cart, setCart, total, setTotal}} >
      <MenuContext.Provider value={{homePage , setHomePage}}>
        <SendContext.Provider value={{dataSend, setDataSend, dataPurchase, setDataPurchase}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/login" element={<LogIn/>} />
              <Route path="/singup" element={<SingUp/>} />
              <Route path="/produto/:productId" element={<ProductPage/>} />
              <Route path="/carrinho" element={<CartPage/>} />
              <Route path="/entrega" element={<Entrega/>} />
              <Route path="/pagamento" element={<Pagamento/>} />
              <Route path="/compraFeita" element={<CompletedPurchase/>} />
            </Routes>
            <ToastContainer />
          </BrowserRouter>
       </SendContext.Provider>
      </MenuContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
