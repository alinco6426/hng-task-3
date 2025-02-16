import Header from "../components/Header";
import Product from "../components/Product";
import Footer from "../components/Footer";
import React, { useEffect } from 'react';
import useProductStore from '../Store/ProductStore';
import { useNavigate } from 'react-router-dom';

import imagePhone from "../assets/images/image-phone.png";
import imageHeadphone from "../assets/images/image-headphone.png";
import imageEarphone from "../assets/images/image-earphone.png";
import imageEarbud from "../assets/images/image-earbud.png";
import imageMouse from "../assets/images/image-mouse.png";

// import R

import "../styles/home.css";







// const products = [
//   {
//     name : "noise-cancellation wireless earbuds",
//     price : 350000,
//     image : imageEarphone,
//     new : true
//   },
//   {
//     name : "vision pro",
//     price : 45000,
//     image : imageEarbud,
//     new : true
//   },
//   {
//     name : "redmi note 11 pro",
//     price : 45000,
//     image : imagePhone,
//     new : true
//   },
//   {
//     name : "redmi case",
//     price : 25000,
//     image : imagePhone,
//     new : false
//   },
//   {
//     name : "vision mouse",
//     price : 18000,
//     image : imageMouse,
//     new : false
//   },
//   {
//     name : "vision headphone",
//     price : 45000,
//     image : imageHeadphone,
//     new : false
//   }
// ]

export default function Home(){
  const { products, fetchProducts, error ,currentPage ,  fetchNextPage , fetchPreviousPage} = useProductStore();
  const navigate = useNavigate()

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]); 


const newArrivals = products.filter(product => {
    return product.new === true; 
})
return(
<main className="home">
     <Header></Header>
  
     <div className="products-container-wrapper">
          <h1>Explore Our Products</h1>
        <section className="products-container">
         {products.map((product) => (
           <Product key={product.name} product={product}/>
         ))}
        </section>
        <section className="control-button-container">
          <button type='button' onClick={() => fetchPreviousPage()}>previous page</button>
          <p>{currentPage}</p>
          <button type='button' onClick={() => fetchNextPage()}>next page</button>
        </section>
     </div>

     <div className="new-arrival-container-wrapper">
          <h1>New Arrrivals</h1>
          <section className="new-arrival-container">
            {newArrivals.map((product) => (
             <Product key={product.name} product={product}/>
           ))}
          </section>
     </div>

     {/* <Cart /> */}


     <Footer></Footer>
</main>
)
}