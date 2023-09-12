import React from "react";
import {  } from "";
// import "./product.js";

export const Product = (props) => {
    const { id, title, price, category, description, image } = props.data;
    
    return ( 
     <div className="product">
        <img src={image} />
        <div className="description">
            <p>
                <b>{title}</b>
                </p>
            <p> ${price}</p>
        </div>
        <button className="addToCartBttn"> Add to Cart</button>
    </div>
    );
};