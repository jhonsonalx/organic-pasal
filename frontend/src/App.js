import React from "react";
import { Switch, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Home from "./components/home/Home";
import About from "./components/other/About";
import Contact from "./components/other/Contact";
import Cart from "./components/pages/Cart";
import Wishlist from "./components/pages/Wishlist";
import Product from "./components/product/Product-details";
import Productgallery from "./components/product/Productgallery";

import Blog from "./components/blog/Blog";
import Shop from "./components/shop/Shop";
import Login from "./components/authentication/Login";
import Myaccount from "./components/authentication/Myaccount";



export default function App() {
  return (
    <React.Fragment>
      <Switch>
        {/* Main Pages */}
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/cart">
          <Cart />
        </Route>

        <Route exact path="/wishlist">
          <Wishlist/>
        </Route>

        <Route exact path="/contact">
          <Contact/>
        </Route>

        <Route exact path="/product">
          <Product/>
        </Route>

         <Route exact path="/checkout">
           <Checkout/>
         </Route>

         <Route exact path="/productgallery">
           <Productgallery/>
         </Route>

       

         <Route exact path="/blog">
            <Blog/>
         </Route>

        <Route exact path="/shop">
          <Shop/>
        </Route>

        <Route exact path="/login">
          <Login/>
        </Route>

        <Route exact path="/myaccount">
          <Myaccount/>
        </Route>




           
      </Switch>
    </React.Fragment>
  );
}

