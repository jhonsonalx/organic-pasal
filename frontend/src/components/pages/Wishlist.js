import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Header from "../base/Header";
import Footer from "../base/Footer";
import Model from "../base/Model";

export default class Wishlist extends Component {
    constructor() {
        super();
        this.state = {
          order: [],
          wishlist: [],
          order_subtotal: 0,
        };
      }
    
      async componentDidMount() {
        let res1 = await axiosInstance.get(`/order-cart/`);
        let data1 = await res1.data;
        this.setState({
          order: data1.order,
          order_subtotal: data1.subtotal,
        });
        let res2 = await axiosInstance.get(`/wishlist/`);
        let data2 = await res2.data;
        this.setState({
          wishlist: data2.wishlist,
        });
      }
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
                            <h1  className="breadcrumb__content--title text-white mb-25">Wishlist</h1>
                            <ul  className="breadcrumb__content--menu d-flex justify-content-center">
                                <li  className="breadcrumb__content--menu__items"><Link className="text-white" to="/">Home</Link></li>
                                <li  className="breadcrumb__content--menu__items"><span  className="text-white">Wishlist</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       

        {/*<!-- cart section start -->*/}
        <section  className="cart__section section--padding">
            <div  className="container">
                <div  className="cart__section--inner">
                    <form action="#"> 
                        <h2  className="cart__title mb-40">Wishlist</h2>
                        <div  className="cart__table">
                            <table  className="cart__table--inner">
                                <thead  className="cart__table--header">
                                    <tr  className="cart__table--header__items">
                                        <th  className="cart__table--header__list">Product</th>
                                        <th  className="cart__table--header__list">Price</th>
                                        <th  className="cart__table--header__list text-center">STOCK STATUS</th>
                                        <th  className="cart__table--header__list text-right">ADD TO CART</th>
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
                                                    <Link to="/"><img  className="border-radius-5" src="assets/img/product/bhindi.jpg" alt="cart-product"/></Link>
                                                </div>
                                                <div  className="cart__content">
                                                    <h3  className="cart__content--title h4"><Link to ="/">BHINDI</Link></h3>
                                                    <span  className="cart__content--variant">COLOR: Blue</span>
                                                    <span  className="cart__content--variant">WEIGHT: 2 Kg</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td  className="cart__table--body__list">
                                            <span  className="cart__price">RS65.00</span>
                                        </td>
                                        <td  className="cart__table--body__list text-center">
                                            <span  className="in__stock text__secondary">in stock</span>
                                        </td>
                                        <td  className="cart__table--body__list text-right">
                                            <Link className="wishlist__cart--btn btn" to="cart.html">Add To Cart</Link>
                                        </td>
                                    </tr>
                                    <tr  className="cart__table--body__items">
                                        <td  className="cart__table--body__list">
                                            <div  className="cart__product d-flex align-items-center">
                                                <button  className="cart__remove--btn" aria-label="search button" type="button">
                                                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="16px" height="16px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg>
                                                </button>
                                                <div  className="cart__thumbnail">
                                                    <Link to="/"><img  className="border-radius-5" src="assets/img/product/Pili.jpg" alt="cart-product"/></Link>
                                                </div>
                                                <div  className="cart__content">
                                                    <h3  className="cart__content--title h4"><Link to="/">RATO KURSANI</Link></h3>
                                                    <span  className="cart__content--variant">COLOR: Blue</span>
                                                    <span  className="cart__content--variant">WEIGHT: 2 Kg</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td  className="cart__table--body__list">
                                            <span  className="cart__price">RS65.00</span>
                                        </td>
                                        <td  className="cart__table--body__list text-center">
                                            <span  className="in__stock text__secondary">in stock</span>
                                        </td>
                                        <td  className="cart__table--body__list text-right">
                                            <Link className="wishlist__cart--btn btn" to="cart.html">Add To Cart</Link>
                                        </td>
                                    </tr>
                                    <tr  className="cart__table--body__items">
                                        <td  className="cart__table--body__list">
                                            <div  className="cart__product d-flex align-items-center">
                                                <button  className="cart__remove--btn" aria-label="search button" type="button">
                                                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="16px" height="16px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg>
                                                </button>
                                                <div  className="cart__thumbnail">
                                                    <Link to="/"><img  className="border-radius-5" src="assets/img/product/cauli.jpg" alt="cart-product"/></Link>
                                                </div>
                                                <div  className="cart__content">
                                                    <h3  className="cart__content--title h4"><Link to="/">CAULIFLOWER</Link></h3>
                                                    <span  className="cart__content--variant">COLOR: Blue</span>
                                                    <span  className="cart__content--variant">WEIGHT: 2 Kg</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td  className="cart__table--body__list">
                                            <span  className="cart__price">RS65.00</span>
                                        </td>
                                        <td  className="cart__table--body__list text-center">
                                            <span  className="in__stock text__secondary">in stock</span>
                                        </td>
                                        <td  className="cart__table--body__list text-right">
                                            <Link className="wishlist__cart--btn btn" to="cart.html">Add To Cart</Link>
                                        </td>
                                    </tr>
                                    <tr  className="cart__table--body__items">
                                        <td  className="cart__table--body__list">
                                            <div  className="cart__product d-flex align-items-center">
                                                <button  className="cart__remove--btn" aria-label="search button" type="button">
                                                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="16px" height="16px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg>
                                                </button>
                                                <div  className="cart__thumbnail">
                                                    <Link to="/"><img  className="border-radius-5" src="assets/img/product/gghh.jpg" alt="cart-product"/></Link>
                                                </div>
                                                <div  className="cart__content">
                                                    <h3  className="cart__content--title h4"><Link to="/">BHENTA</Link></h3>
                                                    <span  className="cart__content--variant">COLOR: Blue</span>
                                                    <span  className="cart__content--variant">WEIGHT: 2 Kg</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td  className="cart__table--body__list">
                                            <span  className="cart__price">RS65.00</span>
                                        </td>
                                        <td  className="cart__table--body__list text-center">
                                            <span  className="in__stock text__secondary">in stock</span>
                                        </td>
                                        <td  className="cart__table--body__list text-right">
                                            <Link className="wishlist__cart--btn btn" to="cart.html">Add To Cart</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table> 
                            <div  className="continue__shopping d-flex justify-content-between">
                                <Link className="continue__shopping--link" to="/">Continue shopping</Link>
                                <Link className="continue__shopping--clear" to="shop.html">View All Products</Link>
                            </div>
                        </div> 
                    </form> 
                </div>
            </div>     
        </section>
       

        {/*<!-- Start product section -->*/}
        <section  className="product__section product__section--style3 section--padding pt-0">
            <div  className="container">
                <div  className="section__heading3 mb-40">
                    <h2  className="section__heading3--maintitle">New Products</h2>
                </div>
                <div  className="product__section--inner product3__section--inner__padding product__section--style3__inner product__swiper--activation swiper">
                    <div  className="swiper-wrapper">
                        <div  className="swiper-slide">
                            <div  className="product__items product__items2">
                                <div  className="product__items--thumbnail">
                                    <Link className="product__items--link" to="/">
                                        <img  className="product__items--img product__primary--img" src="assets/img/product/naspati.JPG" alt="product-img"/>
                                        
                                   </Link>
                                    <div  className="product__badge">
                                        <span  className="product__badge--items sale">Sale</span>
                                    </div>
                                    <ul  className="product__items--action">
                                        <li  className="product__items--action__list">
                                            <Link className="product__items--action__btn" to="wishlist.html">
                                                <svg  className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                                <span  className="visually-hidden">Wishlist</span> 
                                           </Link>
                                        </li>
                                        <li  className="product__items--action__list">
                                            
                                        </li>
                                        <li  className="product__items--action__list">
                                            
                                        </li>
                                    </ul>
                                </div>
                                <div  className="product__items--content product__items2--content text-center">
                                    <Link className="add__to--cart__btn" to="cart.html">+ Add to cart</Link>
                                    <h3  className="product__items--content__title h4"><Link to="/">NASPATI</Link></h3>
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
                        <div  className="swiper-slide">
                            <div  className="product__items product__items2">
                                <div  className="product__items--thumbnail">
                                    <Link className="product__items--link" to="/">
                                        <img  className="product__items--img product__primary--img" src="assets/img/product/product2.png" alt="product-img"/>
                                        <img  className="product__items--img product__secondary--img" src="assets/img/product/product1.png" alt="product-img"/>
                                   </Link>
                                    <div  className="product__badge">
                                        <span  className="product__badge--items sale">Sale</span>
                                    </div>
                                    <ul  className="product__items--action">
                                        <li  className="product__items--action__list">
                                            <Link className="product__items--action__btn" to="wishlist.html">
                                                <svg  className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                                <span  className="visually-hidden">Wishlist</span> 
                                           </Link>
                                        </li>
                                        <li  className="product__items--action__list">
                                            <Link className="product__items--action__btn" data-open="modal1" to="javascript:void(0)">
                                                <svg  className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>
                                                <span  className="visually-hidden">Quick View</span>   
                                           </Link>
                                        </li>
                                        <li  className="product__items--action__list">
                                            <Link className="product__items--action__btn" to="compare.html">
                                                <svg  className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M400 304l48 48-48 48M400 112l48 48-48 48M64 352h85.19a80 80 0 0066.56-35.62L256 256"/><path d="M64 160h85.19a80 80 0 0166.56 35.62l80.5 120.76A80 80 0 00362.81 352H416M416 160h-53.19a80 80 0 00-66.56 35.62L288 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                                <span  className="visually-hidden">Compare</span>    
                                           </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div  className="product__items--content product__items2--content text-center">
                                    <Link className="add__to--cart__btn" to="cart.html">+ Add to cart</Link>
                                    <h3  className="product__items--content__title h4"><Link to="/">Red-tomato-isolated</Link></h3>
                                    <div  className="product__items--price">
                                        <span  className="current__price">RS52.00</span>
                                        <span  className="old__price">RS62.00</span>
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
                        <div  className="swiper-slide">
                            <div  className="product__items product__items2">
                                <div  className="product__items--thumbnail">
                                    <Link className="product__items--link" to="/">
                                        <img  className="product__items--img product__primary--img" src="assets/img/product/product1.png" alt="product-img"/>
                                        <img  className="product__items--img product__secondary--img" src="assets/img/product/product2.png" alt="product-img"/>
                                   </Link>
                                    <div  className="product__badge">
                                        <span  className="product__badge--items sale">Sale</span>
                                    </div>
                                    <ul  className="product__items--action">
                                        <li  className="product__items--action__list">
                                            <Link className="product__items--action__btn" to="wishlist.html">
                                                <svg  className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                                <span  className="visually-hidden">Wishlist</span> 
                                           </Link>
                                        </li>
                                        <li  className="product__items--action__list">
                                            <Link className="product__items--action__btn" data-open="modal1" to="javascript:void(0)">
                                                <svg  className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>
                                                <span  className="visually-hidden">Quick View</span>   
                                           </Link>
                                        </li>
                                        <li  className="product__items--action__list">
                                            <Link className="product__items--action__btn" to="compare.html">
                                                <svg  className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M400 304l48 48-48 48M400 112l48 48-48 48M64 352h85.19a80 80 0 0066.56-35.62L256 256"/><path d="M64 160h85.19a80 80 0 0166.56 35.62l80.5 120.76A80 80 0 00362.81 352H416M416 160h-53.19a80 80 0 00-66.56 35.62L288 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                                <span  className="visually-hidden">Compare</span>    
                                           </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div  className="product__items--content product__items2--content text-center">
                                    <Link className="add__to--cart__btn" to="cart.html">+ Add to cart</Link>
                                    <h3  className="product__items--content__title h4"><Link to="/">Vegetable-healthy</Link></h3>
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
                        <div  className="swiper-slide">
                            <div  className="product__items product__items2">
                                <div  className="product__items--thumbnail">
                                    <Link className="product__items--link" to="/">
                                        <img  className="product__items--img product__primary--img" src="assets/img/product/product3.png" alt="product-img"/>
                                        <img  className="product__items--img product__secondary--img" src="assets/img/product/product4.png" alt="product-img"/>
                                   </Link>
                                    <div  className="product__badge">
                                        <span  className="product__badge--items sale">Sale</span>
                                    </div>
                                    <ul  className="product__items--action">
                                        <li  className="product__items--action__list">
                                            <Link className="product__items--action__btn" to="wishlist.html">
                                                <svg  className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                                <span  className="visually-hidden">Wishlist</span> 
                                           </Link>
                                        </li>
                                        <li  className="product__items--action__list">
                                            <Link className="product__items--action__btn" data-open="modal1" to="javascript:void(0)">
                                                <svg  className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>
                                                <span  className="visually-hidden">Quick View</span>   
                                           </Link>
                                        </li>
                                        <li  className="product__items--action__list">
                                            <Link className="product__items--action__btn" to="compare.html">
                                                <svg  className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M400 304l48 48-48 48M400 112l48 48-48 48M64 352h85.19a80 80 0 0066.56-35.62L256 256"/><path d="M64 160h85.19a80 80 0 0166.56 35.62l80.5 120.76A80 80 0 00362.81 352H416M416 160h-53.19a80 80 0 00-66.56 35.62L288 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                                <span  className="visually-hidden">Compare</span>    
                                           </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div  className="product__items--content product__items2--content text-center">
                                    <Link className="add__to--cart__btn" to="cart.html">+ Add to cart</Link>
                                    <h3  className="product__items--content__title h4"><Link to="/">Fresh-whole-fish</Link></h3>
                                    <div  className="product__items--price">
                                        <span  className="current__price">RS42.00</span>
                                        <span  className="old__price">RS48.00</span>
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
                        <div  className="swiper-slide">
                            <div  className="product__items product__items2">
                                <div  className="product__items--thumbnail">
                                    <Link className="product__items--link" to="/">
                                        <img  className="product__items--img product__primary--img" src="assets/img/product/product5.png" alt="product-img"/>
                                        <img  className="product__items--img product__secondary--img" src="assets/img/product/product6.png" alt="product-img"/>
                                   </Link>
                                    <div  className="product__badge">
                                        <span  className="product__badge--items sale">Sale</span>
                                    </div>
                                    <ul  className="product__items--action">
                                        <li  className="product__items--action__list">
                                            <Link className="product__items--action__btn" to="wishlist.html">
                                                <svg  className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                                <span  className="visually-hidden">Wishlist</span> 
                                           </Link>
                                        </li>
                                        <li  className="product__items--action__list">
                                            <Link className="product__items--action__btn" data-open="modal1" to="javascript:void(0)">
                                                <svg  className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>
                                                <span  className="visually-hidden">Quick View</span>   
                                           </Link>
                                        </li>
                                        <li  className="product__items--action__list">
                                            <Link className="product__items--action__btn" to="compare.html">
                                                <svg  className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M400 304l48 48-48 48M400 112l48 48-48 48M64 352h85.19a80 80 0 0066.56-35.62L256 256"/><path d="M64 160h85.19a80 80 0 0166.56 35.62l80.5 120.76A80 80 0 00362.81 352H416M416 160h-53.19a80 80 0 00-66.56 35.62L288 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                                <span  className="visually-hidden">Compare</span>    
                                           </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div  className="product__items--content product__items2--content text-center">
                                    <Link className="add__to--cart__btn" to="cart.html">+ Add to cart</Link>
                                    <h3  className="product__items--content__title h4"><Link to="/">Chili-pepper</Link></h3>
                                    <div  className="product__items--price">
                                        <span  className="current__price">RS38.00</span>
                                        <span  className="old__price">RS44.00</span>
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
                        <div  className="swiper-slide">
                            <div  className="product__items product__items2">
                                <div  className="product__items--thumbnail">
                                    <Link className="product__items--link" to="/">
                                        <img  className="product__items--img product__primary--img" src="assets/img/product/product7.png" alt="product-img"/>
                                        <img  className="product__items--img product__secondary--img" src="assets/img/product/product8.png" alt="product-img"/>
                                   </Link>
                                    <div  className="product__badge">
                                        <span  className="product__badge--items sale">Sale</span>
                                    </div>
                                    <ul  className="product__items--action">
                                        <li  className="product__items--action__list">
                                            <Link className="product__items--action__btn" to="wishlist.html">
                                                <svg  className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                                <span  className="visually-hidden">Wishlist</span> 
                                           </Link>
                                        </li>
                                        <li  className="product__items--action__list">
                                            <Link className="product__items--action__btn" data-open="modal1" to="javascript:void(0)">
                                                <svg  className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>
                                                <span  className="visually-hidden">Quick View</span>   
                                           </Link>
                                        </li>
                                        <li  className="product__items--action__list">
                                            <Link className="product__items--action__btn" to="compare.html">
                                                <svg  className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M400 304l48 48-48 48M400 112l48 48-48 48M64 352h85.19a80 80 0 0066.56-35.62L256 256"/><path d="M64 160h85.19a80 80 0 0166.56 35.62l80.5 120.76A80 80 0 00362.81 352H416M416 160h-53.19a80 80 0 00-66.56 35.62L288 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                                <span  className="visually-hidden">Compare</span>    
                                           </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div  className="product__items--content product__items2--content text-center">
                                    <Link className="add__to--cart__btn" to="cart.html">+ Add to cart</Link>
                                    <h3  className="product__items--content__title h4"><Link to="/">Green-surface</Link></h3>
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
                        <div  className="swiper-slide">
                            <div  className="product__items product__items2">
                                <div  className="product__items--thumbnail">
                                    <Link className="product__items--link" to="/">
                                        <img  className="product__items--img product__primary--img" src="assets/img/product/product2.png" alt="product-img"/>
                                        <img  className="product__items--img product__secondary--img" src="assets/img/product/product1.png" alt="product-img"/>
                                   </Link>
                                    <div  className="product__badge">
                                        <span  className="product__badge--items sale">Sale</span>
                                    </div>
                                    <ul  className="product__items--action">
                                        <li  className="product__items--action__list">
                                            <Link className="product__items--action__btn" to="wishlist.html">
                                                <svg  className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                                <span  className="visually-hidden">Wishlist</span> 
                                           </Link>
                                        </li>
                                        <li  className="product__items--action__list">
                                            <Link className="product__items--action__btn" data-open="modal1" to="javascript:void(0)">
                                                <svg  className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>
                                                <span  className="visually-hidden">Quick View</span>   
                                           </Link>
                                        </li>
                                        <li  className="product__items--action__list">
                                            <Link className="product__items--action__btn" to="compare.html">
                                                <svg  className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M400 304l48 48-48 48M400 112l48 48-48 48M64 352h85.19a80 80 0 0066.56-35.62L256 256"/><path d="M64 160h85.19a80 80 0 0166.56 35.62l80.5 120.76A80 80 0 00362.81 352H416M416 160h-53.19a80 80 0 00-66.56 35.62L288 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                                <span  className="visually-hidden">Compare</span>    
                                           </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div  className="product__items--content product__items2--content text-center">
                                    <Link className="add__to--cart__btn" to="cart.html">+ Add to cart</Link>
                                    <h3  className="product__items--content__title h4"><Link to="/">Red-tomato-isolated</Link></h3>
                                    <div  className="product__items--price">
                                        <span  className="current__price">RS52.00</span>
                                        <span  className="old__price">RS62.00</span>
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

