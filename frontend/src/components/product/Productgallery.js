import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Header from "../base/Header";
import Footer from "../base/Footer";
import Model from "../base/Model";


export default class Productgallery extends Component {
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
                            <h1  className="breadcrumb__content--title text-white mb-25">Product Gallery</h1>
                            <ul  className="breadcrumb__content--menu d-flex justify-content-center">
                                <li  className="breadcrumb__content--menu__items"><Link className="text-white" to="index.html">Home</Link ></li>
                                <li  className="breadcrumb__content--menu__items"><span  className="text-white">Product Gallery</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
 

        {/*<!-- Start product details section -->*/}
        <section  className="product__details--section section--padding">
            <div  className="container">
                <div  className="row row-cols-lg-2 row-cols-md-2 row-cols-1">
                    <div  className="col">
                        <div  className="product__details--gallery">
                            <div  className="row row-cols-2">
                                <div  className="col mb-28">
                                    <img  className="display-block" src="assets/img/product/bhindi.jpg" alt="product gallery img"/>
                                </div>
                                
                            </div>
                        </div>
                    </div>   
                    <div  className="col">
                        <div  className="product__details--info">
                            <form action="#">
                                <h2  className="product__details--info__title mb-15">BHINDI</h2>
                                <div  className="product__details--info__price mb-15">
                                    <span  className="current__price">RS58.00</span>
                                    <span  className="old__price">RS68.00</span>
                                </div>
                                <div  className="product__items--rating d-flex align-items-center mb-15">
                                    <ul  className="d-flex">
                                        <li  className="product__items--rating__list">
                                            <span  className="product__items--rating__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.105" height="14.732" viewBox="0 0 10.105 9.732">
                                                <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </li>
                                        <li  className="product__items--rating__list">
                                            <span  className="product__items--rating__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.105" height="14.732" viewBox="0 0 10.105 9.732">
                                                <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </li>
                                        <li  className="product__items--rating__list">
                                            <span  className="product__items--rating__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.105" height="14.732" viewBox="0 0 10.105 9.732">
                                                <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </li>
                                        <li  className="product__items--rating__list">
                                            <span  className="product__items--rating__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.105" height="14.732" viewBox="0 0 10.105 9.732">
                                                <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </li>
                                        <li  className="product__items--rating__list">
                                            <span  className="product__items--rating__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.105" height="14.732" viewBox="0 0 10.105 9.732">
                                                    <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="#c7c5c2"/>
                                                </svg> 
                                            </span>
                                        </li>
                                    </ul>
                                    <span  className="product__items--rating__count--number">(24)</span>
                                </div>
                                <p  className="product__details--info__desc mb-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut numquam ullam is recusandae laborum explicabo id sequi quisquam, ab sunt deleniti quidem ea animi facilis quod nostrum odit! Repellendus voluptas suscipit cum harum dolor sciunt.</p>
                                <div  className="product__variant">
                                    <div  className="product__variant--list mb-10">
                                        <fieldset  className="variant__input--fieldset">
                                            <legend  className="product__variant--title mb-8">Color :</legend>
                                            <div  className="variant__color d-flex">
                                                <div  className="variant__color--list">
                                                    <input id="color-red1" name="color" type="radio" defaultChecked/>
                                                    <label  className="variant__color--value red" htmlFor="color-red1" title="Red"><img  className="variant__color--value__img" src="assets/img/product/product1.png" alt="variant-color-img"/></label>
                                                </div>
                                                <div  className="variant__color--list">
                                                    <input id="color-red2" name="color" type="radio"/>
                                                    <label  className="variant__color--value red" htmlFor="color-red2" title="Black"><img  className="variant__color--value__img" src="assets/img/product/product2.png" alt="variant-color-img"/></label>
                                                </div>
                                                <div  className="variant__color--list">
                                                    <input id="color-red3" name="color" type="radio"/>
                                                    <label  className="variant__color--value red" htmlFor="color-red3" title="Pink"><img  className="variant__color--value__img" src="assets/img/product/product3.png" alt="variant-color-img"/></label>
                                                </div>
                                                <div  className="variant__color--list">
                                                    <input id="color-red4" name="color" type="radio"/>
                                                    <label  className="variant__color--value red" htmlFor="color-red4" title="Orange"><img  className="variant__color--value__img" src="assets/img/product/product4.png" alt="variant-color-img"/></label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div  className="product__variant--list mb-20">
                                        <fieldset  className="variant__input--fieldset">
                                            <legend  className="product__variant--title mb-8">Weight :</legend>
                                            <ul  className="variant__size d-flex">
                                                <li  className="variant__size--list">
                                                    <input id="weight1" name="weight" type="radio" defaultChecked/>
                                                    <label  className="variant__size--value red" htmlFor="weight1">5 kg</label>
                                                </li>
                                                <li  className="variant__size--list">
                                                    <input id="weight2" name="weight" type="radio"/>
                                                    <label  className="variant__size--value red" htmlFor="weight2">3 kg</label>
                                                </li>
                                                <li  className="variant__size--list">
                                                    <input id="weight3" name="weight" type="radio"/>
                                                    <label  className="variant__size--value red" htmlFor="weight3">2 kg</label>
                                                </li>
                                            </ul>
                                        </fieldset>
                                    </div>
                                    <div  className="product__variant--list quantity d-flex align-items-center mb-20">
                                        <div  className="quantity__box">
                                            <button type="button"  className="quantity__value quickview__value--quantity decrease" aria-label="quantity value" value="Decrease Value">-</button>
                                            <label>
                                                <input type="number"  className="quantity__number quickview__value--number" defaultValue="1" data-counter />
                                            </label>
                                            <button type="button"  className="quantity__value quickview__value--quantity increase" aria-label="quantity value" value="Increase Value">+</button>
                                        </div>
                                        <button  className="btn quickview__cart--btn" type="submit">Add To Cart</button>  
                                    </div>
                                    <div  className="product__variant--list mb-15">
                                        <Link className="variant__wishlist--icon mb-15" to="wishlist.html" title="Add to wishlist">
                                            <svg  className="quickview__variant--wishlist__svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                            Add to Wishlist
                                        </Link >
                                        <button  className="variant__buy--now__btn btn" type="submit">Buy it now</button>
                                    </div>
                                    <div  className="product__variant--list mb-15">
                                        <div  className="product__details--info__meta">
                                            <p  className="product__details--info__meta--list"><strong>Barcode:</strong>  <span> 565461</span> </p>
                                            <p  className="product__details--info__meta--list"><strong>Sky:</strong>  <span>4420</span> </p>
                                            <p  className="product__details--info__meta--list"><strong>Vendor:</strong>  <span>Belo</span> </p>
                                            <p  className="product__details--info__meta--list"><strong>Type:</strong>  <span>Foods</span> </p>
                                        </div>
                                    </div>
                                </div>
                                <div  className="quickview__social d-flex align-items-center mb-15">
                                    <label  className="quickview__social--title">Social Share:</label>
                                    <ul  className="quickview__social--wrapper mt-0 d-flex">
                                        <li  className="quickview__social--list">
                                            <Link className="quickview__social--icon" target="_blank" to="https://www.facebook.com/">
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="7.667" height="16.524" viewBox="0 0 7.667 16.524">
                                                    <path  data-name="Path 237" d="M967.495,353.678h-2.3v8.253h-3.437v-8.253H960.13V350.77h1.624v-1.888a4.087,4.087,0,0,1,.264-1.492,2.9,2.9,0,0,1,1.039-1.379,3.626,3.626,0,0,1,2.153-.6l2.549.019v2.833h-1.851a.732.732,0,0,0-.472.151.8.8,0,0,0-.246.642v1.719H967.8Z" transform="translate(-960.13 -345.407)" fill="currentColor"/>
                                                </svg>
                                                <span  className="visually-hidden">Facebook</span>
                                            </Link >
                                        </li>
                                        <li  className="quickview__social--list">
                                            <Link className="quickview__social--icon" target="_blank" to="https://twitter.com/">
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="16.489" height="13.384" viewBox="0 0 16.489 13.384">
                                                    <path  data-name="Path 303" d="M966.025,1144.2v.433a9.783,9.783,0,0,1-.621,3.388,10.1,10.1,0,0,1-1.845,3.087,9.153,9.153,0,0,1-3.012,2.259,9.825,9.825,0,0,1-4.122.866,9.632,9.632,0,0,1-2.748-.4,9.346,9.346,0,0,1-2.447-1.11q.4.038.809.038a6.723,6.723,0,0,0,2.24-.376,7.022,7.022,0,0,0,1.958-1.054,3.379,3.379,0,0,1-1.958-.687,3.259,3.259,0,0,1-1.186-1.666,3.364,3.364,0,0,0,.621.056,3.488,3.488,0,0,0,.885-.113,3.267,3.267,0,0,1-1.374-.631,3.356,3.356,0,0,1-.969-1.186,3.524,3.524,0,0,1-.367-1.5v-.057a3.172,3.172,0,0,0,1.544.433,3.407,3.407,0,0,1-1.1-1.214,3.308,3.308,0,0,1-.4-1.609,3.362,3.362,0,0,1,.452-1.694,9.652,9.652,0,0,0,6.964,3.538,3.911,3.911,0,0,1-.075-.772,3.293,3.293,0,0,1,.452-1.694,3.409,3.409,0,0,1,1.233-1.233,3.257,3.257,0,0,1,1.685-.461,3.351,3.351,0,0,1,2.466,1.073,6.572,6.572,0,0,0,2.146-.828,3.272,3.272,0,0,1-.574,1.083,3.477,3.477,0,0,1-.913.8,6.869,6.869,0,0,0,1.958-.546A7.074,7.074,0,0,1,966.025,1144.2Z" transform="translate(-951.23 -1140.849)" fill="currentColor"/>
                                                </svg>
                                                <span  className="visually-hidden">Twitter</span>
                                            </Link >
                                        </li>
                                        <li  className="quickview__social--list">
                                            <Link className="quickview__social--icon" target="_blank" to="https://www.instagram.com/">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17.497" height="17.492" viewBox="0 0 19.497 19.492">
                                                    <path  data-name="Icon awesome-instagram" d="M9.747,6.24a5,5,0,1,0,5,5A4.99,4.99,0,0,0,9.747,6.24Zm0,8.247A3.249,3.249,0,1,1,13,11.238a3.255,3.255,0,0,1-3.249,3.249Zm6.368-8.451A1.166,1.166,0,1,1,14.949,4.87,1.163,1.163,0,0,1,16.115,6.036Zm3.31,1.183A5.769,5.769,0,0,0,17.85,3.135,5.807,5.807,0,0,0,13.766,1.56c-1.609-.091-6.433-.091-8.042,0A5.8,5.8,0,0,0,1.64,3.13,5.788,5.788,0,0,0,.065,7.215c-.091,1.609-.091,6.433,0,8.042A5.769,5.769,0,0,0,1.64,19.341a5.814,5.814,0,0,0,4.084,1.575c1.609.091,6.433.091,8.042,0a5.769,5.769,0,0,0,4.084-1.575,5.807,5.807,0,0,0,1.575-4.084c.091-1.609.091-6.429,0-8.038Zm-2.079,9.765a3.289,3.289,0,0,1-1.853,1.853c-1.283.509-4.328.391-5.746.391S5.28,19.341,4,18.837a3.289,3.289,0,0,1-1.853-1.853c-.509-1.283-.391-4.328-.391-5.746s-.113-4.467.391-5.746A3.289,3.289,0,0,1,4,3.639c1.283-.509,4.328-.391,5.746-.391s4.467-.113,5.746.391a3.289,3.289,0,0,1,1.853,1.853c.509,1.283.391,4.328.391,5.746S17.855,15.705,17.346,16.984Z" transform="translate(0.004 -1.492)" fill="currentColor"></path>
                                                </svg>
                                                <span  className="visually-hidden">Instagram</span>
                                            </Link >
                                        </li>
                                        <li  className="quickview__social--list">
                                            <Link className="quickview__social--icon" target="_blank" to="https://www.youtube.com/">
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="16.49" height="11.582" viewBox="0 0 16.49 11.582">
                                                    <path  data-name="Path 321" d="M967.759,1365.592q0,1.377-.019,1.717-.076,1.114-.151,1.622a3.981,3.981,0,0,1-.245.925,1.847,1.847,0,0,1-.453.717,2.171,2.171,0,0,1-1.151.6q-3.585.265-7.641.189-2.377-.038-3.387-.085a11.337,11.337,0,0,1-1.5-.142,2.206,2.206,0,0,1-1.113-.585,2.562,2.562,0,0,1-.528-1.037,3.523,3.523,0,0,1-.141-.585c-.032-.2-.06-.5-.085-.906a38.894,38.894,0,0,1,0-4.867l.113-.925a4.382,4.382,0,0,1,.208-.906,2.069,2.069,0,0,1,.491-.755,2.409,2.409,0,0,1,1.113-.566,19.2,19.2,0,0,1,2.292-.151q1.82-.056,3.953-.056t3.952.066q1.821.067,2.311.142a2.3,2.3,0,0,1,.726.283,1.865,1.865,0,0,1,.557.49,3.425,3.425,0,0,1,.434,1.019,5.72,5.72,0,0,1,.189,1.075q0,.095.057,1C967.752,1364.1,967.759,1364.677,967.759,1365.592Zm-7.6.925q1.49-.754,2.113-1.094l-4.434-2.339v4.66Q958.609,1367.311,960.156,1366.517Z" transform="translate(-951.269 -1359.8)" fill="currentColor"/>
                                                </svg>
                                                <span  className="visually-hidden">Youtube</span>
                                            </Link >
                                        </li>
                                    </ul>
                                </div>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

    
      
        
       {/*<!-- Start product section -->*/}
       <section  className="product__section product__section--style3 section--padding">
        <div  className="container product3__section--container">
            <div  className="section__heading3 text-center mb-40">
                <h2  className="section__heading3--maintitle">You may also like</h2>
            </div>
            <div  className="product__section--inner product3__section--inner__padding product__section--style3__inner product__swiper--activation swiper">
                <div  className="swiper-wrapper">
                    <div  className="swiper-slide col-4" style={{marginLeft: "10px", marginRight: "10px"}}>
                        <div  className="product__items product__items2">
                            <div  className="product__items--thumbnail">
                                <Link className="product__items--link" to="product-details.html">
                                    <img  className="product__items--img product__primary--img" src="assets/img/product/product7.png" alt="product-img"/>
                                    
                                </Link >
                                <div  className="product__badge">
                                    <span  className="product__badge--items sale">Sale</span>
                                </div>
                                <ul  className="product__items--action">
                                    <li  className="product__items--action__list">
                                        <Link className="product__items--action__btn" to="wishlist.html">
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
                            <div  className="product__items--content product__items2--content text-center">
                                <Link className="add__to--cart__btn" to="cart.html">+ Add to cart</Link >
                                <h3  className="product__items--content__title h4"><Link to="product-details.html">Green-surface</Link ></h3>
                                <div  className="product__items--price">
                                    <span  className="current__price">RS38.00</span>
                                    <span  className="old__price">RS40.00</span>
                                </div>
                                <div  className="product__items--rating d-flex justify-content-center align-items-center">
                                    <ul  className="d-flex">
                                        <li  className="product__items--rating__list">
                                            <span  className="product__items--rating__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </li>
                                        <li  className="product__items--rating__list">
                                            <span  className="product__items--rating__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </li>
                                        <li  className="product__items--rating__list">
                                            <span  className="product__items--rating__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </li>
                                        <li  className="product__items--rating__list">
                                            <span  className="product__items--rating__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </li>
                                        <li  className="product__items--rating__list">
                                            <span  className="product__items--rating__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                    <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="#c7c5c2"/>
                                                </svg> 
                                            </span>
                                        </li>
                                    </ul>
                                    <span  className="product__items--rating__count--number">(24)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="swiper-slide col-4" style={{marginLeft: "10px", marginRight: "10px"}}>
                        <div  className="product__items product__items2">
                            <div  className="product__items--thumbnail">
                                <Link className="product__items--link" to="product-details.html">
                                    <img  className="product__items--img product__primary--img" src="assets/img/product/product2.png" alt="product-img"/>
                                    
                                </Link >
                                <div  className="product__badge">
                                    <span  className="product__badge--items sale">Sale</span>
                                </div>
                                <ul  className="product__items--action">
                                    <li  className="product__items--action__list">
                                        <Link className="product__items--action__btn" to="wishlist.html">
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
                            <div  className="product__items--content product__items2--content text-center">
                                <Link className="add__to--cart__btn" to="cart.html">+ Add to cart</Link >
                                <h3  className="product__items--content__title h4"><Link to="product-details.html">Red-tomato-isolated</Link ></h3>
                                <div  className="product__items--price">
                                    <span  className="current__price">$52.00</span>
                                    <span  className="old__price">$62.00</span>
                                </div>
                                <div  className="product__items--rating d-flex justify-content-center align-items-center">
                                    <ul  className="d-flex">
                                        <li  className="product__items--rating__list">
                                            <span  className="product__items--rating__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </li>
                                        <li  className="product__items--rating__list">
                                            <span  className="product__items--rating__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </li>
                                        <li  className="product__items--rating__list">
                                            <span  className="product__items--rating__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </li>
                                        <li  className="product__items--rating__list">
                                            <span  className="product__items--rating__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </li>
                                        <li  className="product__items--rating__list">
                                            <span  className="product__items--rating__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                    <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="#c7c5c2"/>
                                                </svg> 
                                            </span>
                                        </li>
                                    </ul>
                                    <span  className="product__items--rating__count--number">(24)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="swiper-slide col-4" style={{marginLeft: "10px", marginRight: "10px"}}>
                        <div  className="product__items product__items2">
                            <div  className="product__items--thumbnail">
                                <Link className="product__items--link" to="product-details.html">
                                    <img  className="product__items--img product__primary--img" src="assets/img/product/product1.png" alt="product-img"/>
                                    
                                </Link >
                                <div  className="product__badge">
                                    <span  className="product__badge--items sale">Sale</span>
                                </div>
                                <ul  className="product__items--action">
                                    <li  className="product__items--action__list">
                                        <Link className="product__items--action__btn" to="wishlist.html">
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
                            <div  className="product__items--content product__items2--content text-center">
                                <Link className="add__to--cart__btn" to="cart.html">+ Add to cart</Link >
                                <h3  className="product__items--content__title h4"><Link to="product-details.html">Vegetable-healthy</Link ></h3>
                                <div  className="product__items--price">
                                    <span  className="current__price">RS39.00</span>
                                    <span  className="old__price">RS59.00</span>
                                </div>
                                <div  className="product__items--rating d-flex justify-content-center align-items-center">
                                    <ul  className="d-flex">
                                        <li  className="product__items--rating__list">
                                            <span  className="product__items--rating__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </li>
                                        <li  className="product__items--rating__list">
                                            <span  className="product__items--rating__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </li>
                                        <li  className="product__items--rating__list">
                                            <span  className="product__items--rating__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </li>
                                        <li  className="product__items--rating__list">
                                            <span  className="product__items--rating__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </li>
                                        <li  className="product__items--rating__list">
                                            <span  className="product__items--rating__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                    <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="#c7c5c2"/>
                                                </svg> 
                                            </span>
                                        </li>
                                    </ul>
                                    <span  className="product__items--rating__count--number">(24)</span>
                                </div>
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
