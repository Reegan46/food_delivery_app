import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import CartProvider from "./context/CartContext";
import Orders from "./pages/Orders.jsx";
import Admin from "./pages/Admin.jsx";
import Register from "./pages/Register.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import AddressForm from "./pages/AddressForm.jsx";
import './App.css'


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/addressform" element={<AddressForm />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
