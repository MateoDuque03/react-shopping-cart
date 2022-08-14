import Product from "./pages/Products/Products";
import NewProduct from "./pages/NewProduct/NewProduct";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { setAllProducts } from "./store/reducers/shoppingCart";
import getProducts from "./services/GetProducts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Modal from "./components/Modal/Modal";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts()
      .then(({products}) => {
        dispatch(setAllProducts(products))
      })
  }, [])

  return (
    <Router>
      <Header/>
      <Modal />
      <Routes>
        <Route path="/new-product" element={<NewProduct/>} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/" element={<Product/>} />
      </Routes>
    </Router>
  );
}

export default App;
