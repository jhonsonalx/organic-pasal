import React, { Component } from 'react'
import Header from "../base/Header";
import Footer from "../base/Footer";
import Model from "../base/Model";
import { Link } from "react-router-dom";

export default class Shop extends Component {
    constructor() {
        super();
        this.state = {
          items: [],
          order: [],
          wishlist: [],
          order_subtotal: 0,
        };
      }
    
      async componentDidMount() {
        let res = await axiosInstance.get(`/shop/`);
        let data = await res.data;
        this.setState({
          items: data.items,
        });
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
         <main className="main__content_wrapper">
        
        {/* <!-- Start breadcrumb section --> */}
        <section className="breadcrumb__section breadcrumb__bg">
            <div className="container">
                <div className="row row-cols-1">
                    <div className="col">
                        <div className="breadcrumb__content text-center">
                            <h1 className="breadcrumb__content--title text-white mb-25">Shop Grid</h1>
                            <ul className="breadcrumb__content--menu d-flex justify-content-center">
                                <li className="breadcrumb__content--menu__items"><Link className="text-white" to="index">Home</Link></li>
                                <li className="breadcrumb__content--menu__items"><span className="text-white">Shop Grid</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* <!-- Start shop section --> */}
        <section className="shop__section section--padding">
            <div className="container">

                <div className="shop__header bg__gray--color d-flex align-items-center justify-content-between mb-30">
                
                    <div className="product__view--mode d-flex align-items-center">
                        <div className="product__view--mode__list product__short--by align-items-center d-none d-lg-flex">
                            <label className="product__view--label">Prev Page :</label>
                            <div className="select shop__header--select">
                                <select className="product__view--select">
                                    <option selected value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4 </option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                        <div className="product__view--mode__list product__short--by align-items-center d-none d-lg-flex">
                            <label className="product__view--label">Sort By :</label>
                            <div className="select shop__header--select">
                                <select className="product__view--select">
                                    <option selected value="1">Sort by latest</option>
                                    <option value="2">Sort by popularity</option>
                                    <option value="3">Sort by newness</option>
                                    <option value="4">Sort by  rating </option>
                                </select>
                            </div>
                        </div>
                        <div className="product__view--mode__list">
                            <div className="product__tab--one product__grid--column__buttons d-flex justify-content-center">
                               
                            </div>
                        </div>
                    </div>
                    <p className="product__showing--count">Showing 1–9 of 10 results</p>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="shop__product--wrapper">
                            <div className="tab_content">
                                <div id="product_grid" className="tab_pane active show">
                                    <div className="product__section--inner product__section--style3__inner">
                                        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 mb--n30">
                                            <div className="col mb-30">
                                                <div className="product__items product__items2">
                                                    <div className="product__items--thumbnail">
                                                        <Link className="product__items--link" to="product-details">
                                                            <img className="product__items--img product__primary--img" src="assets/img/product/bhindi.jpg" alt="product-img"/>
                                                        </Link>
                                                        <div className="product__badge">
                                                            <span className="product__badge--items sale">Sale</span>
                                                        </div>
                                                        <ul className="product__items--action">
                                                            <li className="product__items--action__list">
                                                                <Link className="product__items--action__btn" to="wishlist">
                                                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                                                                    <span className="visually-hidden">Wishlist</span>
                                                                </Link>
                                                            </li>
                                                            <li className="product__items--action__list">
                                                              
                                                            </li>
                                                        
                                                        </ul>
                                                    </div>
                                                    <div className="product__items--content product__items2--content text-center">
                                                        <Link className="add__to--cart__btn" to="cart">+ Add to cart</Link>
                                                        <h3 className="product__items--content__title h4"><Link to="product-details"></Link></h3>
                                                        <div className="product__items--price">
                                                            <span className="current__price">RS39.00</span>
                                                            <span className="old__price">RS59.00</span>
                                                        </div>
                                                        <div className="product__items--rating d-flex justify-content-center align-items-center">
                                                            <ul className="d-flex">
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                        <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                                        </svg>
                                                                    </span>
                                                                </li>
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                        <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                                        </svg>
                                                                    </span>
                                                                </li>
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                        <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                                        </svg>
                                                                    </span>
                                                                </li>
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                        <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"/>
                                                                        </svg>
                                                                    </span>
                                                                </li>
                                                                <li className="product__items--rating__list">
                                                                    <span className="product__items--rating__icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.105" height="9.732" viewBox="0 0 10.105 9.732">
                                                                            <path  data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="#c7c5c2"/>
                                                                        </svg> 
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                            <span className="product__items--rating__count--number">(24)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination__area bg__gray--color">
                                <nav className="pagination justify-content-center">
                                    <ul className="pagination__wrapper d-flex align-items-center justify-content-center">
                                        <li className="pagination__list">
                                            <Link to="shop" className="pagination__item--arrow  link ">
                                                <svg xmlns="http://www.w3.org/2000/svg"  width="22.51" height="20.443" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"/></svg>
                                                <span className="visually-hidden">page left arrow</span>
                                            </Link>
                                        </li>
                                        <li className="pagination__list"><span className="pagination__item pagination__item--current">1</span></li>
                                        <li className="pagination__list"><Link to="shop" className="pagination__item link">2</Link></li>
                                        <li className="pagination__list"><Link to="shop" className="pagination__item link">3</Link></li>
                                        <li className="pagination__list"><Link to="shop" className="pagination__item link">4</Link></li>
                                        <li className="pagination__list">
                                            <Link to="shop" className="pagination__item--arrow  link ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100"/></svg>
                                                <span className="visually-hidden">page right arrow</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
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
