import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, totalItems, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <>
        <Navbar />

        <main className="empty-cart">
          <div className="empty-icon">🛒</div>

          <h1>Your Cart is Empty</h1>

          <p>You haven't added any products to your cart yet.</p>

          <Link to="/" className="shop-button">
            Continue Shopping
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="cart-container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <p>{totalItems} items</p>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Total Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="summary-row total">
              <span>Total Price</span>
              <span>₹{totalPrice.toLocaleString()}</span>
            </div>

            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Cart;
