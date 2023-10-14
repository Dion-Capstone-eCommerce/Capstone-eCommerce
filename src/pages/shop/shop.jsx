import React from "react";
import { PRODUCTS } from "../../products";
import Product from './product';
import './shop.css';
import Footer from '../../footer/footer';
import { useNavigate } from "react-router-dom";

export const Shop = () => {
    let navigate= useNavigate()
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Products</h1>
            </div>
            <div className="products">
                 {PRODUCTS.map((product) => (
                    <>
                    <Product key={product.id} product={product} />
           </> 
           ))}
            </div>
            <Footer />
        </div>
    );
};