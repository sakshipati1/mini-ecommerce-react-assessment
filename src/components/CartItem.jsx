import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />

      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p>{item.category}</p>
        <strong>₹{item.price}</strong>
      </div>

      <div className="quantity-controls">
        <button onClick={() => decreaseQuantity(item.id)}>−</button>

        <span>{item.quantity}</span>

        <button onClick={() => increaseQuantity(item.id)}>+</button>
      </div>

      <button className="remove-button" onClick={() => removeFromCart(item.id)}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
