import React, { useContext } from "react";
import { ShopContext } from '../../context/shop-context';
// import "./product.js";

export const Product = (props) => {
    const { id, title, price, category, description, image } = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id]
    
    return ( 
     <div className="product">
        <img src={image} />
        <div className="description">
            <p>
                <b>{title}</b>
                </p>
            <p> ${price}</p>
        </div>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
             Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </button>
    </div>
    );
};