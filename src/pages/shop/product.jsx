import React from "react";
// import "./product.js";

export const Product = (props) => {
    const { id, title, price, catergory, description, image } = props.data;
    
    return ( 
     <div className="product">
        <img src={image} />
        <div className="description">
            <p>
                <b>{title}</b>
                </p>
            <p> ${price}</p>
        </div>
    </div>
    );
};