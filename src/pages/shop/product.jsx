import React, { useState, useContext } from "react";
import { ShopContext } from '../../context/shop-context';
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
    const [showDescription, setShowDescription] = useState(false);
    const { addToCart, cartItems } = useContext(ShopContext);
    let navigate= useNavigate()
    
    const toggleDescription = () => {
      setShowDescription(!showDescription);
    };
  
    const cartItemAmount = cartItems[product.id] || 0;
  
    return (
      <div className="product">
        <img src={product.image} alt={product.title} />
        <div className="description">
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          {/* <button onClick={toggleDescription}>
            {showDescription ? "Hide Description" : "Show Description"}
          </button> */}
          {showDescription && <p>{product.description}</p>}
          <button className="addToCartBttn" onClick={() => addToCart(product.id)}>
            <b>Add to Cart</b> {cartItemAmount > 0 && <> ({cartItemAmount})</>}
          </button>
        </div>
        <button className="details-button" onClick={()=> navigate(`/productdetails/${product.id}`)}><b>Details</b></button>
      </div>
    );
  };



export default Product;
