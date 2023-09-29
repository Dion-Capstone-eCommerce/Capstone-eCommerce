import React, { useState } from 'react';
import { PRODUCTS } from './products'; // Import your product data

function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClick = (productId) => {
    if (selectedProduct === productId) {
      // Clicking on the same product again should hide its description
      setSelectedProduct(null);
    } else {
      setSelectedProduct(productId);
    }
  };

  return (
    <div>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <button onClick={() => handleClick(product.id)}>
              {product.title} - ${product.price}
            </button>
            {selectedProduct === product.id && (
              <div>{product.description}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;