import React from "react";

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      className="product-card"
      onClick={() => onClick(product.id)}
      style={{ cursor: "pointer" }}
    >
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <p>{product.description}</p> {/* Add this line */}
    </div>
  );
};

export default ProductCard;
