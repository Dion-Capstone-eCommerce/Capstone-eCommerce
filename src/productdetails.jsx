import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "./products";
import { ShopContext } from "./context/shop-context";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, cartItems } = useContext(ShopContext); // Access addToCart from ShopContext
  const cartItemAmount = cartItems[product.id] || 0;

  useEffect(() => {
    // Fetch the product details based on the ID from the URL
    const foundProduct = PRODUCTS.find((p) => p.id === parseInt(id));

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // Handle the case where the product is not found (e.g., show an error message)
      setProduct(null);
    }
  }, [id]);

  if (!product) {
    // Handle the case where the product is not found
    return <div>Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart(product.id); // Add the selected product to the cart
  };

  return (
    <div>
      <img src={product.image} alt={product.title} />
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <button className="addToCartBttn" onClick={() => addToCart(product.id)}>
            <b>Add to Cart</b> {cartItemAmount > 0 && <> ({cartItemAmount})</>}
          </button>
    </div>
  );
};

export default ProductDetails;
