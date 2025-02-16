import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CartedProduct from "../components/CartedProduct";
import OrderSummary from "../components/OrderSummary";
// import Feth 
import imagePhone from "../assets/images/image-phone.png";

import useProductStore from "../Store/ProductStore";


import "../styles/cart.css"

// const cart = [
//   {
//     name : "redmi note 11 pro",
//     price : 45000,
//     image : imagePhone,
//     quantity : 1
//   },
//   { 
//     name : "redmi case",
//     price : 25000,
//     image : imagePhone,
//     quantity : 1
//   },
// ]


export default function Cart (){
     const {cart  , clearCart} = useProductStore();

     return (
          <main className="cart">
               <NavBar></NavBar>
               <section className="cart-summary-container">
                    <h1 className="heading">Cart</h1>
                    <ul className="cart-summary-layout">
                         <li>Product</li>
                         <li>Quantity</li>
                         <li>Subtotal</li>
                    </ul>
                    <div className="carted-product-container">
                         {cart.map((product) => (
                              <CartedProduct key={product.name} product={product} />
                         ))}
                    </div>
                    <button type="button" onClick={() => clearCart()}>Clear Cart</button>
               </section>
               <section className="order-summary-wrapper">
                    <OrderSummary ></OrderSummary>
               </section>
               <Footer></Footer>
          </main>
     )
}