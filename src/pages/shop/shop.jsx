import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from './product'

export const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>My Shop</h1>
            </div>
            <div className="products"> {PRODUCTS.map((product) => {
                return <Product data={product} key={product.id} />;
            })}
            </div>
        </div>
    );
};
