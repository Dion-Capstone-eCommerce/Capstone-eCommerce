import React, { useContext } from "react";

const ProductDetail = ({ product }) => {
    if (!product) {
      // Handle the case where the product is not found (optional)
      return <div>Product not found.</div>;
    }
  
    const { title, price, category, description } = product;
  
    return (
      <div>
        <h2>{title}</h2>
        <p>Category: {category}</p>
        <p>Price: ${price}</p>
        <p>Description: {description}</p>
      </div>
    );
  };
  
  export default ProductDetail;