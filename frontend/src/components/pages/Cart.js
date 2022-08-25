import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Header from "../base/Header";
import Footer from "../base/Footer";
import Model from "../base/Model";

export default class Cart extends Component {
  render() {
    return (
        <React.Fragment>
             <Header/>
      <div>
      <main  className="main__content_wrapper">
        
        {/*<!-- Start breadcrumb section -->*/}
        <section  className="breadcrumb__section breadcrumb__bg">
            <div  className="container">
                <div  className="row row-cols-1">
                    <div  className="col">
                        <div  className="breadcrumb__content text-center">
                            <h1  className="breadcrumb__content--title text-white mb-25">Shopping Cart</h1>
                            <ul  className="breadcrumb__content--menu d-flex justify-content-center">
                                <li  className="breadcrumb__content--menu__items"><Link className="text-white" Link ="/">Home</Link ></li>
                                <li  className="breadcrumb__content--menu__items"><span  className="text-white">Shopping Cart</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       

        {/*<!-- cart section start -->*/}
        <section  className="cart__section section--padding">
            <div  className="container-fluid">
                <div  className="cart__section--inner">
                    <form action="#"> 
                        <h2  className="cart__title mb-40">Shopping Cart</h2>
                        <div  className="row">
                            <div  className="col-lg-8">
                                <div  className="cart__table">
                                    <table  className="cart__table--inner">
                                        <thead  className="cart__table--header">
                                            <tr  className="cart__table--header__items">
                                                <th  className="cart__table--header__list">Product</th>
                                                <th  className="cart__table--header__list">Price</th>
                                                <th  className="cart__table--header__list">Quantity</th>
                                                <th  className="cart__table--header__list">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody  className="cart__table--body">
                                            <tr  className="cart__table--body__items">
                                                <td  className="cart__table--body__list">
                                                    <div  className="cart__product d-flex align-items-center">
                                                        <button  className="cart__remove--btn" aria-label="search button" type="button">
                                                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="16px" height="16px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg>
                                                        </button>
                                                        <div  className="cart__thumbnail">
                                                            <Link to="/"><img  className="border-radius-5" src="assets/img/product/Pili.jpg" alt="cart-product"/></Link >
                                                        </div>
                                                        <div  className="cart__content">
                                                            <h3  className="cart__content--title h4"><Link to="/">RATO KURSANI</Link ></h3>
                                                            <span  className="cart__content--variant">COLOR: Blue</span>
                                                            <span  className="cart__content--variant">WEIGHT: 2 Kg</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td  className="cart__table--body__list">
                                                    <span  className="cart__price">RS65.00</span>
                                                </td>
                                                <td  className="cart__table--body__list">
                                                    <div  className="quantity__box">
                                                        <button type="button"  className="quantity__value quickview__value--quantity decrease" aria-label="quantity value" value="Decrease Value">-</button>
                                                        <label>
                                                            <input type="number"  className="quantity__number quickview__value--number" defaultValue="1" data-counter />
                                                        </label>
                                                        <button type="button"  className="quantity__value quickview__value--quantity increase" aria-label="quantity value" value="Increase Value">+</button>
                                                    </div>
                                                </td>
                                                <td  className="cart__table--body__list">
                                                    <span  className="cart__price end">RS130.00</span>
                                                </td>
                                            </tr>
                                            <tr  className="cart__table--body__items">
                                                <td  className="cart__table--body__list">
                                                    <div  className="cart__product d-flex align-items-center">
                                                        <button  className="cart__remove--btn" aria-label="search button" type="button">
                                                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="16px" height="16px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg>
                                                        </button>
                                                        <div  className="cart__thumbnail">
                                                            <Link to="/"><img  className="border-radius-5" src="assets/img/product/naspati.JPG" alt="cart-product"/></Link >
                                                        </div>
                                                        <div  className="cart__content">
                                                            <h3  className="cart__content--title h4"><Link to="/">NASPATI</Link ></h3>
                                                            <span  className="cart__content--variant">COLOR: Blue</span>
                                                            <span  className="cart__content--variant">WEIGHT: 2 Kg</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td  className="cart__table--body__list">
                                                    <span  className="cart__price">RS65.00</span>
                                                </td>
                                                <td  className="cart__table--body__list">
                                                    <div  className="quantity__box">
                                                        <button type="button"  className="quantity__value quickview__value--quantity decrease" aria-label="quantity value" value="Decrease Value">-</button>
                                                        <label>
                                                            <input type="number"  className="quantity__number quickview__value--number" defaultValue="1" data-counter />
                                                        </label>
                                                        <button type="button"  className="quantity__value quickview__value--quantity increase" aria-label="quantity value" value="Increase Value">+</button>
                                                    </div>
                                                </td>
                                                <td  className="cart__table--body__list">
                                                    <span  className="cart__price end">RS130.00</span>
                                                </td>
                                            </tr>
                                            <tr  className="cart__table--body__items">
                                                <td  className="cart__table--body__list">
                                                    <div  className="cart__product d-flex align-items-center">
                                                        <button  className="cart__remove--btn" aria-label="search button" type="button">
                                                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="16px" height="16px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg>
                                                        </button>
                                                        <div  className="cart__thumbnail">
                                                            <Link to="/"><img  className="border-radius-5" src="assets/img/product/gghh.jpg" alt="cart-product"/></Link >
                                                        </div>
                                                        <div  className="cart__content">
                                                            <h3  className="cart__content--title h4"><Link to="/">BHENTA</Link ></h3>
                                                            <span  className="cart__content--variant">COLOR: Blue</span>
                                                            <span  className="cart__content--variant">WEIGHT: 2 Kg</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td  className="cart__table--body__list">
                                                    <span  className="cart__price">RS65.00</span>
                                                </td>
                                                <td  className="cart__table--body__list">
                                                    <div  className="quantity__box">
                                                        <button type="button"  className="quantity__value quickview__value--quantity decrease" aria-label="quantity value" value="Decrease Value">-</button>
                                                        <label>
                                                            <input type="number"  className="quantity__number quickview__value--number" defaultValue="1" data-counter />
                                                        </label>
                                                        <button type="button"  className="quantity__value quickview__value--quantity increase" aria-label="quantity value" value="Increase Value">+</button>
                                                    </div>
                                                </td>
                                                <td  className="cart__table--body__list">
                                                    <span  className="cart__price end">RS130.00</span>
                                                </td>
                                            </tr>
                                            <tr  className="cart__table--body__items">
                                                <td  className="cart__table--body__list">
                                                    <div  className="cart__product d-flex align-items-center">
                                                        <button  className="cart__remove--btn" aria-label="search button" type="button">
                                                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="16px" height="16px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg>
                                                        </button>
                                                        <div  className="cart__thumbnail">
                                                            <Link to="/"><img  className="border-radius-5" src="assets/img/product/cauli.jpg" alt="cart-product"/></Link >
                                                        </div>
                                                        <div  className="cart__content">
                                                            <h3  className="cart__content--title h4"><Link to ="product-details.html">CAULIFLOWER</Link ></h3>
                                                            <span  className="cart__content--variant">COLOR: Blue</span>
                                                            <span  className="cart__content--variant">WEIGHT: 2 Kg</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td  className="cart__table--body__list">
                                                    <span  className="cart__price">RS65.00</span>
                                                </td>
                                                <td  className="cart__table--body__list">
                                                    <div  className="quantity__box">
                                                        <button type="button"  className="quantity__value quickview__value--quantity decrease" aria-label="quantity value" value="Decrease Value">-</button>
                                                        <label>
                                                            <input type="number"  className="quantity__number quickview__value--number" defaultValue="1" data-counter />
                                                        </label>
                                                        <button type="button"  className="quantity__value quickview__value--quantity increase" aria-label="quantity value" value="Increase Value">+</button>
                                                    </div>
                                                </td>
                                                <td  className="cart__table--body__list">
                                                    <span  className="cart__price end">RS130.00</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table> 
                                    <div  className="continue__shopping d-flex justify-content-between">
                                        <Link className="continue__shopping--link" Link ="shop.html">Continue shopping</Link >
                                        <button  className="continue__shopping--clear" type="submit">Clear Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div  className="col-lg-4">
                                <div  className="cart__summary border-radius-10">
                                    <div  className="coupon__code mb-30">
                                        <h3  className="coupon__code--title">TOTAL</h3>
                                        
                                    </div>
                                   
                                    <div  className="cart__summary--total mb-20">
                                        <table  className="cart__summary--total__table">
                                            <tbody>
                                                <tr  className="cart__summary--total__list">
                                                    <td  className="cart__summary--total__title text-left">SUBTOTAL</td>
                                                    <td  className="cart__summary--amount text-right">RS860.00</td>
                                                </tr>
                                                <tr  className="cart__summary--total__list">
                                                    <td  className="cart__summary--total__title text-left">GRAND TOTAL</td>
                                                    <td  className="cart__summary--amount text-right">RS860.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div  className="cart__summary--footer">
                                        <p  className="cart__summary--footer__desc">Shipping & taxes calculated at checkout</p>
                                        <ul  className="d-flex justify-content-between">
                                            <li><button  className="cart__summary--footer__btn btn cart" type="submit">Update Cart</button></li>
                                            <li><Link className="cart__summary--footer__btn btn checkout" Link ="checkout.html">Check Out</Link ></li>
                                        </ul>
                                    </div>
                                </div> 
                            </div>
                        </div> 
                    </form> 
                </div>
            </div>     
        </section>
       

        {/*<!-- Start product section -->*/}
        <section  className="product__section product__section--style3 section--padding pt-0">
            <div  className="container-fluid">
                <div  className="section__heading3 mb-40">
                    <h2  className="section__heading3--maintitle">New Products</h2>
                </div>
                <div  className="product__section--inner product3__section--inner__padding product__section--style3__inner product__column6--activation swiper">
                    <div  className="">
                        <div  className="">
                            <div  className="product__items product__items2">
                                <div  className="product__items--thumbnail">
                                    <Link className="product__items--link" Link ="product-details.html">
                                        <img  className="product__items--img product__primary--img" src="assets/img/product/bhindi.jpg" alt="product-img"/>
                                        
                                    </Link >
                                    <div  className="product__badge">
                                        <span  className="product__badge--items sale">Sale</span>
                                    </div>
                                    <ul  className="product__items--action">
                                        <li  className="product__items--action__list">
                                            <Link className="product__items--action__btn" Link ="wishlist.html">
                                                <svg  className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                                <span  className="visually-hidden">Wishlist</span> 
                                            </Link >
                                        </li>
                                        <li  className="product__items--action__list">
                                            
                                        </li>
                                        <li  className="product__items--action__list">
                                            
                                        </li>
                                    </ul>
                                </div>
                                
                        
                        
                 
                      
                  
                       
                               
                            </div>
                        </div>
                    </div>
                    <div  className="swiper__nav--btn swiper-button-next"></div>
                    <div  className="swiper__nav--btn swiper-button-prev"></div>
                </div>
            </div>
        </section>
        

      
        

    </main>
      </div>
        <Footer/>
        <Model/>
      </React.Fragment>
    )
  }
}
