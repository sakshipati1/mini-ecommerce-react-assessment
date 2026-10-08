import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        ShopEase
      </Link>

      <Link to="/cart" className="cart-link">
        🛒 Cart
        <span className="cart-badge">{totalItems}</span>
      </Link>
    </nav>
  );
}

export default Navbar;
