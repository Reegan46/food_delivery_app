import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);



  function resetCart(){
    setCart([])

  }

  return (
    <CartContext.Provider value={{ cart,resetCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
