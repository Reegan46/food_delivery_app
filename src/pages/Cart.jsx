import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
// import "./Cart.css";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const deliveryFee = cart.length > 0 ? 20 : 0;
  const gst = cart.length > 0 ? subtotal * 0.05 : 0; // 5% GST
  const total = subtotal + deliveryFee + gst;

  function handleAdd() {
    if (cart.length === 0) return;
    navigate("/addressform");
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2 className="cart-title">🛒 Your Cart</h2>

        {cart.length === 0 ? (
          <p className="empty-text">Your cart is empty!</p>
        ) : (
          <>
            <ul className="cart-list">
              {cart.map(item => (
                <li key={item.id} className="cart-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">₹{item.price}</span>
                  <button
                    className="btn-remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="bill-box">
              <p>Subtotal: <strong>₹{subtotal.toFixed(2)}</strong></p>
              <p>Delivery Fee: <strong>₹{deliveryFee.toFixed(2)}</strong></p>
              <p>GST (5%): <strong>₹{gst.toFixed(2)}</strong></p>
              <h4 className="total-text">
                Grand Total: ₹{total.toFixed(2)}
              </h4>
            </div>

            <button className="btn-order" onClick={handleAdd}>
              ✅ Place Order
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
