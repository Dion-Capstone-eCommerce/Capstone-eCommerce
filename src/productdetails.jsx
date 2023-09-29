import React from "react"
import Product from "./pages/shop/product";
// import { PRODUCTS } from "../../products";
// import Product from './product';
// import './shop.css';
// 
import { PRODUCTS } from "./products";
import Footer from "./footer/footer";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Productdetails = (props) => {
    const [product, setProduct] = useState({})
    let {id} = useParams()
    // for (let i=0; i<PRODUCTS.length;i++){
    //     if (PRODUCTS[i].id==id){
    //         setProduct(PRODUCTS[i])
    //     }
    // }
    console.log(id)
    console.log(PRODUCTS)
    console.log(product)
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>My Shop</h1>
            </div>
            <div className="products">
                 {PRODUCTS.map((product) => (
                    product.id== id ?   <Product key={product.id} product={product} /> : null

            ))}
            </div>
            <Footer />
        </div>
    );
};

export default Productdetails;
