import { Link, useParams } from "react-router-dom";
import products from "../data/products.json";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product Not Found</h2>
        <Link to="/">Back to Products</Link>
      </div>
    );
  }

  return (
    <>
      <header className="navbar">
        <Link to="/" className="logo">
          ShopEase
        </Link>

        <Link to="/cart" className="cart-link">
          🛒 Cart
        </Link>
      </header>

      <main className="details-container">
        <Link to="/" className="back-link">
          ← Back to Products
        </Link>

        <div className="product-details">
          <div className="details-image-container">
            <img
              src={product.image}
              alt={product.name}
              className="details-image"
            />
          </div>

          <div className="details-info">
            <span className="product-category">{product.category}</span>

            <h1>{product.name}</h1>

            <div className="details-rating">⭐ {product.rating} / 5</div>

            <h2 className="details-price">₹{product.price}</h2>

            <p className="details-description">{product.description}</p>

            <button
              className="details-add-button"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProductDetails;
