import React, { Component } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

function openWishlist() {
    document.getElementById("Wishlist").style.display = "block";
  }
  function openCart() {
    document.getElementById("Cart").style.display = "block";
  }
  function openSearch() {
    document.getElementById("Search").style.display = "block";
  }

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
          categories: [],
          order: [],
          wishlist: [],
          submenuCat: false,
          submenuOther: false,
          userAuthenticated: false,
        };
        this.handleCatHover = this.handleCatHover.bind(this);
        this.handleOtherHover = this.handleOtherHover.bind(this);
      }
    
      async componentDidMount() {
        let res = await axiosInstance.get(`/categories/`);
        let data = await res.data;
        this.setState({
          categories: data.categories,
        });
        let res1 = await axiosInstance.get(`/order-cart/`);
        if (res1.status !== 401) {
          this.setState({
            userAuthenticated: true,
          });
        }
        let data1 = await res1.data;
        if (Object.keys(data1.order).length !== 0) {
          this.setState({
            order: data1.order.items,
          });
        }
        let res2 = await axiosInstance.get(`/wishlist/`);
        let data2 = await res2.data;
        this.setState({
          wishlist: data2.wishlist,
        });
      }
    
      handleCatHover() {
        this.setState({
          submenuCat: !this.state.submenuCat,
        });
      }
    
      handleOtherHover() {
        this.setState({
          submenuOther: !this.state.submenuOther,
        });
      }
      
  render() {
    return (
      <React.Fragment>
        
        <header className="header__section header__transparent">
        <div className="header__topbar bg__primary">
           
        </div>
        <div className="main__header header__sticky">
            <div className="container">
                <div className="main__header--inner position__relative d-flex justify-content-between align-items-center">
                    <div className="offcanvas__header--menu__open ">
                        <Link className="offcanvas__header--menu__open--btn" to="#" data-offcanvas>
                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon offcanvas__header--menu__open--svg" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M80 160h352M80 256h352M80 352h352"/></svg>
                            <span className="visually-hidden">Offcanvas Menu Open</span>
                        </Link>
                    </div>
                    <div className="main__logo">
                        <h1 className="main__logo--title"><Link className="main__logo--link" to="/"><img className="main__logo--img" src="/assets/img/logo/logo.png" alt="logo-img"/></Link></h1>
                    </div>
                    <div className="header__search--widget d-none d-lg-block header__sticky--none">
                        <form className="d-flex header__search--form" action="#">
                            <div className="header__select--categories select">
                                <select className="header__select--inner">
                                    <option defaultValue="1">Select Categories</option>
                                    
                                </select>
                            </div>
                            <div className="header__search--box">
                                <label>
                                    <input className="header__search--input" placeholder="Search Product" type="text"/>
                                </label>
                                <button className="header__search--button bg__secondary text-white" type="submit">Search</button>
                            </div>
                        </form>
                    </div>
                    <div className="header__menu d-none d-lg-block header__sticky--block">
                        <nav className="header__menu--navigation">
                            <ul className="d-flex">
                                <li className="header__menu--items">
                                    <Link className="header__menu--link" to="/">Home 
                                        <svg className="menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41">
                                            <path  d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                                        </svg>
                                    </Link>
                                </li>
                                <li className="header__menu--items mega__menu--items">
                                    <Link className="header__menu--link" to="/shop">Shop 
                                        <svg className="menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41">
                                            <path  d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                                        </svg>
                                    </Link>
                                    <ul className="header__mega--menu d-flex">
                                        <li className="header__mega--menu__li">
                                           
                                           
                                        </li>
                                        <li className="header__mega--menu__li">
                                            <span className="header__mega--subtitle">Column one</span>
                                            <ul className="header__mega--sub__menu">
                                                <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="product-details">Product Details</Link></li>
                                                <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="product-video">Video Product</Link></li>
                        
                                                <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="product-left-sidebar">Product Left Sidebar</Link></li>
                                                
                                            </ul>
                                        </li>
                                        <li className="header__mega--menu__li">
                                            <span className="header__mega--subtitle">Column Three</span>
                                            <ul className="header__mega--sub__menu">
                                                <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="myaccount">My Account</Link></li>
                                                <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="my-account-2">My Account 2</Link></li>
                                                <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="404">404 Page</Link></li>
                                                <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="login">Login Page</Link></li>
                                                <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="faq">Faq Page</Link></li>
                                            </ul>
                                        </li>
                                        <li className="header__mega--menu__li">
                                            <span className="header__mega--subtitle">Column Three</span>
                                            <ul className="header__mega--sub__menu">
                                                <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="compare">Compare Pages</Link></li>
                                                <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="checkout">Checkout page</Link></li>
                                            
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="header__menu--items">
                                    <Link className="header__menu--link" to="blog">Blog 
                                        <svg className="menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41">
                                            <path  d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                                        </svg>
                                    </Link>
                                    
                                </li>
                                <li className="header__menu--items">
                                    <Link className="header__menu--link" to="#">Pages 
                                        <svg className="menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41">
                                            <path  d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                                        </svg>
                                    </Link>
                                    <ul className="header__sub--menu">
                                        <li className="header__sub--menu__items"><Link to="about" className="header__sub--menu__link">About Us</Link></li>
                                        <li className="header__sub--menu__items"><Link to="contact" className="header__sub--menu__link">Contact Us</Link></li>
                                        <li className="header__sub--menu__items"><Link to="cart" className="header__sub--menu__link">Cart Page</Link></li>
                                        <li className="header__sub--menu__items"><Link to="portfolio" className="header__sub--menu__link">Portfolio Page</Link></li>
                                        <li className="header__sub--menu__items"><Link to="wishlist" className="header__sub--menu__link">Wishlist Page</Link></li>
                                        <li className="header__sub--menu__items"><Link to="login" className="header__sub--menu__link">Login Page</Link></li>
                                        <li className="header__sub--menu__items"><Link to="404" className="header__sub--menu__link">Error Page</Link></li>
                                    </ul>
                                </li>
                                <li className="header__menu--items">
                                    <Link className="header__menu--link" to="contact">Contact </Link>  
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__account header__sticky--none">
                        <ul className="d-flex">
                            <li className="header__account--items d-none d-lg-block">
                                {this.state.userAuthenticated ? (
                                    <Link className="header__account--btn" to="/myaccount">
                                        <svg xmlns="http://www.w3.org/2000/svg"  width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
                                        <span className="visually-hidden">My account</span> 
                                    </Link>
                                    ) : (
                                    <Link className="header__account--btn" to="/login">
                                        <svg xmlns="http://www.w3.org/2000/svg"  width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
                                        <span className="visually-hidden">Login</span> 
                                    </Link>
                                )}
                            </li>
                            <li className="header__account--items  header__account--search__items mobile__d--block d-sm-2-none">
                                <Link className="header__account--btn search__open--btn" to="#" data-offcanvas>
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>
                                    <span className="visually-hidden">Search</span>  
                                </Link>
                            </li>
                            <li className="header__account--items">
                                <Link className="header__account--btn minicart__open--btn" to="cart" data-offcanvas>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.706" height="15.534" viewBox="0 0 14.706 13.534">
                                        <g  transform="translate(0 0)">
                                          <g >
                                            <path  data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="#fefefe"/>
                                            <path  data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="#fefefe"/>
                                            <path  data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="#fefefe"/>
                                          </g>
                                        </g>
                                    </svg>  
                                    <span className="items__count">3</span> 
                                </Link>
                            </li>
                            <li className="header__account--items d-none d-lg-block">
                                <Link className="header__account--btn" to="wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18.541" height="15.557" viewBox="0 0 18.541 15.557">
                                        <path  d="M71.775,135.51a5.153,5.153,0,0,1,1.267-1.524,4.986,4.986,0,0,1,6.584.358,4.728,4.728,0,0,1,1.174,4.914,10.458,10.458,0,0,1-2.132,3.808,22.591,22.591,0,0,1-5.4,4.558c-.445.282-.9.549-1.356.812a.306.306,0,0,1-.254.013,25.491,25.491,0,0,1-6.279-4.8,11.648,11.648,0,0,1-2.52-4.009,4.957,4.957,0,0,1,.028-3.787,4.629,4.629,0,0,1,3.744-2.863,4.782,4.782,0,0,1,5.086,2.447c.013.019.025.034.057.076Z" transform="translate(-62.498 -132.915)" fill="currentColor"/>
                                    </svg>
                                    <span className="items__count">3</span> 
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header__account header__sticky--block">
                        <ul className="d-flex">
                            <li className="header__account--items  header__account--search__items d-sm-2-none">
                                <Link className="header__account--btn search__open--btn" to="#" data-offcanvas>
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>
                                    <span className="visually-hidden">Search</span>  
                                </Link>
                            </li>
                            <li className="header__account--items d-none d-lg-block">
                                <Link className="header__account--btn" to="wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18.541" height="15.557" viewBox="0 0 18.541 15.557">
                                        <path  d="M71.775,135.51a5.153,5.153,0,0,1,1.267-1.524,4.986,4.986,0,0,1,6.584.358,4.728,4.728,0,0,1,1.174,4.914,10.458,10.458,0,0,1-2.132,3.808,22.591,22.591,0,0,1-5.4,4.558c-.445.282-.9.549-1.356.812a.306.306,0,0,1-.254.013,25.491,25.491,0,0,1-6.279-4.8,11.648,11.648,0,0,1-2.52-4.009,4.957,4.957,0,0,1,.028-3.787,4.629,4.629,0,0,1,3.744-2.863,4.782,4.782,0,0,1,5.086,2.447c.013.019.025.034.057.076Z" transform="translate(-62.498 -132.915)" fill="currentColor"/>
                                    </svg>
                                    <span className="items__count">3</span> 
                                </Link>
                            </li>
                            <li className="header__account--items d-none d-lg-block">
                                <Link className="header__account--btn" to="myaccount">
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
                                    <span className="visually-hidden">My account</span> 
                                </Link>
                            </li>
                            <li className="header__account--items">
                                <Link className="header__account--btn minicart__open--btn" to="#" data-offcanvas>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.706" height="15.534" viewBox="0 0 14.706 13.534">
                                        <g  transform="translate(0 0)">
                                          <g >
                                            <path  data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="#fefefe"/>
                                            <path  data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="#fefefe"/>
                                            <path  data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="#fefefe"/>
                                          </g>
                                        </g>
                                      </svg> 
                                    <span className="items__count">3</span> 
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="header__bottom bg__secondary">
            <div className="container">
                <div className="header__bottom--inner position__relative d-flex align-items-center">
                    <div className="categories__menu">
                       
                        <div className="dropdown__categories--menu">
                            <ul className="d-none d-lg-block">
                                <li className="categories__menu--items">
                                    <Link className="categories__menu--link" to="/">
                                        <svg className="categories__menu--svgicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><ellipse cx="256" cy="256" rx="267.57" ry="173.44" transform="rotate(-45 256 256.002)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M334.04 177.96L177.96 334.04M278.3 278.3l-44.6-44.6M322.89 233.7l-44.59-44.59M456.68 211.4L300.6 55.32M211.4 456.68L55.32 300.6M233.7 322.89l-44.59-44.59"/></svg> Fruits & Vegetables
                                    </Link>
                                </li>
                                <li className="categories__menu--items">
                                    <Link className="categories__menu--link" to="/"> 
                                        <svg className="categories__menu--svgicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 176v160M336 256H176"/></svg> Fresh Fruits 
                                        
                                        <svg className="categories__menu--right__arrow--icon" xmlns="http://www.w3.org/2000/svg" width="17.007" height="16.831" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg>
                                    </Link>
                                    <ul className="categories__submenu border-radius-10 d-flex justify-content-between">
                                        <li className="categories__submenu--items"><Link className="categories__submenu--items__text" to="/"><strong>Fresh Berries</strong></Link>
                                            <ul className="categories__submenu--child">
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Apple Juice </Link></li>
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Oil and Vinegar </Link></li>
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Bread and Juice </Link></li>
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">AFresh Seafood </Link></li>
                                            </ul>
                                        </li>
                                        <li className="categories__submenu--items"><Link className="categories__submenu--items__text" to="/"><strong>Orange Juice</strong></Link>
                                            <ul className="categories__submenu--child">
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Apple Juice </Link></li>
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Oil and Vinegar </Link></li>
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Bread and Juice </Link></li>
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">AFresh Seafood </Link></li>
                                            </ul>
                                        </li>
                                        <li className="categories__submenu--items"><Link className="categories__submenu--items__text" to="/"><strong>Fresh Nuts</strong></Link>
                                            <ul className="categories__submenu--child">
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Apple Juice </Link></li>
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Oil and Vinegar </Link></li>
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Bread and Juice </Link></li>
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">AFresh Seafood </Link></li>
                                            </ul>
                                        </li>
                                        <li className="categories__submenu--items"><Link className="categories__submenu--items__text" to="/"><strong>Laura Mercier</strong></Link>
                                            <ul className="categories__submenu--child">
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Apple Juice </Link></li>
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Oil and Vinegar </Link></li>
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Bread and Juice </Link></li>
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">AFresh Seafood </Link></li>
                                            </ul>
                                        </li>
                                    </ul>

                                </li>
                                <li className="categories__menu--items">
                                    <Link className="categories__menu--link" to="/">
                                        <svg className="categories__menu--svgicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M215.08 156.92c-4.89-24-10.77-56.27-10.77-73.23A51.36 51.36 0 01256 32h0c28.55 0 51.69 23.69 51.69 51.69 0 16.5-5.85 48.95-10.77 73.23M215.08 355.08c-4.91 24.06-10.77 56.16-10.77 73.23A51.36 51.36 0 00256 480h0c28.55 0 51.69-23.69 51.69-51.69 0-16.54-5.85-48.93-10.77-73.23M355.08 215.08c24.06-4.91 56.16-10.77 73.23-10.77A51.36 51.36 0 01480 256h0c0 28.55-23.69 51.69-51.69 51.69-16.5 0-48.95-5.85-73.23-10.77M156.92 215.07c-24-4.89-56.25-10.76-73.23-10.76A51.36 51.36 0 0032 256h0c0 28.55 23.69 51.69 51.69 51.69 16.5 0 48.95-5.85 73.23-10.77" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><path d="M296.92 156.92c13.55-20.48 32.3-47.25 44.37-59.31a51.35 51.35 0 0173.1 0h0c20.19 20.19 19.8 53.3 0 73.1-11.66 11.67-38.67 30.67-59.31 44.37M156.92 296.92c-20.48 13.55-47.25 32.3-59.31 44.37a51.35 51.35 0 000 73.1h0c20.19 20.19 53.3 19.8 73.1 0 11.67-11.66 30.67-38.67 44.37-59.31M355.08 296.92c20.48 13.55 47.25 32.3 59.31 44.37a51.35 51.35 0 010 73.1h0c-20.19 20.19-53.3 19.8-73.1 0-11.69-11.69-30.66-38.65-44.37-59.31M215.08 156.92c-13.53-20.43-32.38-47.32-44.37-59.31a51.35 51.35 0 00-73.1 0h0c-20.19 20.19-19.8 53.3 0 73.1 11.61 11.61 38.7 30.68 59.31 44.37" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><circle cx="256" cy="256" r="64" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/></svg> Vegetables
                                    </Link>
                                </li>
                                <li className="categories__menu--items">
                                    <Link className="categories__menu--link" to="/">
                                        <svg className="categories__menu--svgicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/></svg> Organics
                                        <svg className="categories__menu--right__arrow--icon" xmlns="http://www.w3.org/2000/svg" width="17.007" height="16.831" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg>
                                    </Link>
                                    <ul className="categories__submenu border-radius-10 d-flex justify-content-between">
                                        <li className="categories__submenu--items"><Link className="categories__submenu--items__text" to="/"><strong>Hot Offers</strong></Link>
                                            <ul className="categories__submenu--child">
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/"> AFresh Seafood</Link></li>
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Oil and Vinegar </Link></li>
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Bread and Juice </Link></li>
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/"> Apple Juice</Link></li>
                                            </ul>
                                        </li>
                                        <li className="categories__submenu--items"><Link className="categories__submenu--items__text" to="/"><strong>Fresh Meat</strong></Link>
                                            <ul className="categories__submenu--child">
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Apple Juice </Link></li>
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Oil and Vinegar </Link></li>
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Bread and Juice </Link></li>
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">AFresh Seafood </Link></li>
                                            </ul>
                                        </li>
                                        <li className="categories__submenu--items"><Link className="categories__submenu--items__text" to="/"><strong>Nature Food</strong></Link>
                                            <ul className="categories__submenu--child">
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Apple Juice </Link></li>
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Oil and Vinegar </Link></li>
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Bread and Juice </Link></li>
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">AFresh Seafood </Link></li>
                                            </ul>
                                        </li>
                                        <li className="categories__submenu--items"><Link className="categories__submenu--items__text" to="/"><strong>Laura Mercier</strong></Link>
                                            <ul className="categories__submenu--child">
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Apple Juice </Link></li>
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Oil and Vinegar </Link></li>
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Bread and Juice </Link></li>
                                                <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">AFresh Seafood </Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="categories__menu--items">
                                    <Link className="categories__menu--link" to="/"> 
                                        <svg className="categories__menu--svgicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><circle cx="256" cy="184" r="120" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><circle cx="344" cy="328" r="120" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><circle cx="168" cy="328" r="120" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/></svg> Beauty & Care
                                    </Link>
                                </li>
                                <li className="categories__menu--items">
                                    <Link className="categories__menu--link" to="/"> 
                                        <svg className="categories__menu--svgicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeWidth="32" strokeLinejoin="round" d="M240 152c-50.71 12.21-94.15 52.31-120.3 73.43a261.14 261.14 0 00-23.81-19.58C59.53 179.29 16 176 16 176s11.37 51.53 41.36 79.83C27.37 284.14 16 335.67 16 335.67s43.53-3.29 79.89-29.85a259.18 259.18 0 0023.61-19.41c26.1 21.14 69.74 61.34 120.5 73.59l-16 56c39.43-6.67 78.86-35.51 94.72-48.25C448 362 496 279 496 256c0-22-48-106-176.89-111.73C303.52 131.78 263.76 102.72 224 96z"/><circle cx="416" cy="239.99" r="16"/><path fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeMiterlimit="20" d="M378.37 356a199.22 199.22 0 010-200"/></svg> Fresh Fish
                                    </Link>
                                </li>
                                <li className="categories__menu--items">
                                    <Link className="categories__menu--link" to="/"> 
                                        <svg className="categories__menu--svgicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7 77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58zM173 253c86 81 175 129 292 147" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg> Nature
                                    </Link>
                                </li>
                                <li className="categories__menu--items">
                                    <Link className="categories__menu--link" to="/"> 
                                        <svg className="categories__menu--svgicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><circle cx="256" cy="184" r="120" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><circle cx="344" cy="328" r="120" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><circle cx="168" cy="328" r="120" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/></svg> Fresh Berries
                                    </Link>
                                </li>
                                <li className="categories__menu--items">
                                    <Link className="categories__menu--link" to="/"> 
                                        <svg className="categories__menu--svgicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M322 416c0 35.35-20.65 64-56 64H134c-35.35 0-56-28.65-56-64M336 336c17.67 0 32 17.91 32 40h0c0 22.09-14.33 40-32 40H64c-17.67 0-32-17.91-32-40h0c0-22.09 14.33-40 32-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><path d="M344 336H179.31a8 8 0 00-5.65 2.34l-26.83 26.83a4 4 0 01-5.66 0l-26.83-26.83a8 8 0 00-5.65-2.34H56a24 24 0 01-24-24h0a24 24 0 0124-24h288a24 24 0 0124 24h0a24 24 0 01-24 24zM64 276v-.22c0-55 45-83.78 100-83.78h72c55 0 100 29 100 84v-.22M241 112l7.44 63.97" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><path d="M256 480h139.31a32 32 0 0031.91-29.61L463 112" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 112l16-64 47-16"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M224 112h256"/></svg> Bread & Bakery
                                    </Link>
                                </li>
                            </ul>
                            <nav className="category__mobile--menu">
                                <ul className="category__mobile--menu_ul">
                                    <li className="categories__menu--items">
                                        <Link className="categories__menu--link" to="/">
                                            <svg className="categories__menu--svgicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><ellipse cx="256" cy="256" rx="267.57" ry="173.44" transform="rotate(-45 256 256.002)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M334.04 177.96L177.96 334.04M278.3 278.3l-44.6-44.6M322.89 233.7l-44.59-44.59M456.68 211.4L300.6 55.32M211.4 456.68L55.32 300.6M233.7 322.89l-44.59-44.59"/></svg> Fruits & Vegetables
                                        </Link>
                                    </li>
                                    <li className="categories__menu--items">
                                        <Link className="categories__menu--link" to="/"> 
                                            <svg className="categories__menu--svgicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 176v160M336 256H176"/></svg> Fresh Fruits 
                                        </Link>
                                        <ul className="category__sub--menu">
                                            <li className="categories__submenu--items"><Link className="categories__submenu--items__text" to="/">Fresh Berries</Link>
                                                <ul className="category__sub--menu">
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Apple Juice </Link></li>
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Oil and Vinegar </Link></li>
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Bread and Juice </Link></li>
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">AFresh Seafood </Link></li>
                                                </ul>
                                            </li>
                                            <li className="categories__submenu--items"><Link className="categories__submenu--items__text" to="/">Orange Juice</Link>
                                                <ul className="category__sub--menu">
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Apple Juice </Link></li>
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Oil and Vinegar </Link></li>
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Bread and Juice </Link></li>
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">AFresh Seafood </Link></li>
                                                </ul>
                                            </li>
                                            <li className="categories__submenu--items"><Link className="categories__submenu--items__text" to="/">Fresh Nuts</Link>
                                                <ul className="category__sub--menu">
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Apple Juice </Link></li>
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Oil and Vinegar </Link></li>
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Bread and Juice </Link></li>
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">AFresh Seafood </Link></li>
                                                </ul>
                                            </li>
                                            <li className="categories__submenu--items"><Link className="categories__submenu--items__text" to="/">Laura Mercier</Link>
                                                <ul className="category__sub--menu">
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Apple Juice </Link></li>
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Oil and Vinegar </Link></li>
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Bread and Juice </Link></li>
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">AFresh Seafood </Link></li>
                                                </ul>
                                            </li>
                                        </ul>
    
                                    </li>
                                    <li className="categories__menu--items">
                                        <Link className="categories__menu--link" to="/">
                                            <svg className="categories__menu--svgicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M215.08 156.92c-4.89-24-10.77-56.27-10.77-73.23A51.36 51.36 0 01256 32h0c28.55 0 51.69 23.69 51.69 51.69 0 16.5-5.85 48.95-10.77 73.23M215.08 355.08c-4.91 24.06-10.77 56.16-10.77 73.23A51.36 51.36 0 00256 480h0c28.55 0 51.69-23.69 51.69-51.69 0-16.54-5.85-48.93-10.77-73.23M355.08 215.08c24.06-4.91 56.16-10.77 73.23-10.77A51.36 51.36 0 01480 256h0c0 28.55-23.69 51.69-51.69 51.69-16.5 0-48.95-5.85-73.23-10.77M156.92 215.07c-24-4.89-56.25-10.76-73.23-10.76A51.36 51.36 0 0032 256h0c0 28.55 23.69 51.69 51.69 51.69 16.5 0 48.95-5.85 73.23-10.77" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><path d="M296.92 156.92c13.55-20.48 32.3-47.25 44.37-59.31a51.35 51.35 0 0173.1 0h0c20.19 20.19 19.8 53.3 0 73.1-11.66 11.67-38.67 30.67-59.31 44.37M156.92 296.92c-20.48 13.55-47.25 32.3-59.31 44.37a51.35 51.35 0 000 73.1h0c20.19 20.19 53.3 19.8 73.1 0 11.67-11.66 30.67-38.67 44.37-59.31M355.08 296.92c20.48 13.55 47.25 32.3 59.31 44.37a51.35 51.35 0 010 73.1h0c-20.19 20.19-53.3 19.8-73.1 0-11.69-11.69-30.66-38.65-44.37-59.31M215.08 156.92c-13.53-20.43-32.38-47.32-44.37-59.31a51.35 51.35 0 00-73.1 0h0c-20.19 20.19-19.8 53.3 0 73.1 11.61 11.61 38.7 30.68 59.31 44.37" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><circle cx="256" cy="256" r="64" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/></svg> Vegetables
                                        </Link>
                                    </li>
                                    <li className="categories__menu--items">
                                        <Link className="categories__menu--link" to="/">
                                            <svg className="categories__menu--svgicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/></svg> Organics
                                        </Link>
                                        <ul className="category__sub--menu">
                                            <li className="categories__submenu--items"><Link className="categories__submenu--items__text" to="/">Hot Offers</Link>
                                                <ul className="category__sub--menu">
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Apple Juice </Link></li>
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Oil and Vinegar </Link></li>
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Bread and Juice </Link></li>
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">AFresh Seafood </Link></li>
                                                </ul>
                                            </li>
                                            <li className="categories__submenu--items"><Link className="categories__submenu--items__text" to="/">Fresh Meat</Link>
                                                <ul className="category__sub--menu">
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Apple Juice </Link></li>
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Oil and Vinegar </Link></li>
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Bread and Juice </Link></li>
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">AFresh Seafood </Link></li>
                                                </ul>
                                            </li>
                                            <li className="categories__submenu--items"><Link className="categories__submenu--items__text" to="/">Nature Food</Link>
                                                <ul className="category__sub--menu">
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Apple Juice </Link></li>
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Oil and Vinegar </Link></li>
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Bread and Juice </Link></li>
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">AFresh Seafood </Link></li>
                                                </ul>
                                            </li>
                                            <li className="categories__submenu--items"><Link className="categories__submenu--items__text" to="/">Laura Mercier</Link>
                                                <ul className="category__sub--menu">
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Apple Juice </Link></li>
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Oil and Vinegar </Link></li>
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">Bread and Juice </Link></li>
                                                    <li className="categories__submenu--child__items"><Link className="categories__submenu--child__items--link" to="/">AFresh Seafood </Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="categories__menu--items">
                                        <Link className="categories__menu--link" to="/"> 
                                            <svg className="categories__menu--svgicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><circle cx="256" cy="184" r="120" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><circle cx="344" cy="328" r="120" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><circle cx="168" cy="328" r="120" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/></svg> Beauty & Care
                                        </Link>
                                    </li>
                                    <li className="categories__menu--items">
                                        <Link className="categories__menu--link" to="/"> 
                                            <svg className="categories__menu--svgicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeWidth="32" strokeLinejoin="round" d="M240 152c-50.71 12.21-94.15 52.31-120.3 73.43a261.14 261.14 0 00-23.81-19.58C59.53 179.29 16 176 16 176s11.37 51.53 41.36 79.83C27.37 284.14 16 335.67 16 335.67s43.53-3.29 79.89-29.85a259.18 259.18 0 0023.61-19.41c26.1 21.14 69.74 61.34 120.5 73.59l-16 56c39.43-6.67 78.86-35.51 94.72-48.25C448 362 496 279 496 256c0-22-48-106-176.89-111.73C303.52 131.78 263.76 102.72 224 96z"/><circle cx="416" cy="239.99" r="16"/><path fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeMiterlimit="20" d="M378.37 356a199.22 199.22 0 010-200"/></svg> Fresh Fish
                                        </Link>
                                    </li>
                                    <li className="categories__menu--items">
                                        <Link className="categories__menu--link" to="/"> 
                                            <svg className="categories__menu--svgicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7 77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58zM173 253c86 81 175 129 292 147" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg> Nature
                                        </Link>
                                    </li>
                                    <li className="categories__menu--items">
                                        <Link className="categories__menu--link" to="/"> 
                                            <svg className="categories__menu--svgicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><circle cx="256" cy="184" r="120" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><circle cx="344" cy="328" r="120" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><circle cx="168" cy="328" r="120" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/></svg> Fresh Berries
                                        </Link>
                                    </li>
                                    <li className="categories__menu--items">
                                        <Link className="categories__menu--link" to="/"> 
                                            <svg className="categories__menu--svgicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M322 416c0 35.35-20.65 64-56 64H134c-35.35 0-56-28.65-56-64M336 336c17.67 0 32 17.91 32 40h0c0 22.09-14.33 40-32 40H64c-17.67 0-32-17.91-32-40h0c0-22.09 14.33-40 32-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><path d="M344 336H179.31a8 8 0 00-5.65 2.34l-26.83 26.83a4 4 0 01-5.66 0l-26.83-26.83a8 8 0 00-5.65-2.34H56a24 24 0 01-24-24h0a24 24 0 0124-24h288a24 24 0 0124 24h0a24 24 0 01-24 24zM64 276v-.22c0-55 45-83.78 100-83.78h72c55 0 100 29 100 84v-.22M241 112l7.44 63.97" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><path d="M256 480h139.31a32 32 0 0031.91-29.61L463 112" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 112l16-64 47-16"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M224 112h256"/></svg> Bread & Bakery
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="header__right--area d-flex justify-content-between align-items-center">
                        <div className="header__menu">
                            <nav className="header__menu--navigation">
                                <ul className="d-flex">
                                    <li className="header__menu--items">
                                        <Link className="header__menu--link text-white" to="/">Home 
                                            
                                        </Link>
                                    </li>
                                    <li className="header__menu--items">
                                        <Link className="header__menu--link text-white" to="shop">Shop 
                                            
                                        </Link>
                                    </li>
                                    <li className="header__menu--items">
                                        <Link className="header__menu--link text-white" to="/">Categories
                                            <svg className="menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41">
                                                <path  d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                                            </svg>
                                        </Link>
                                        <ul className="header__sub--menu">
                                            <li className="header__sub--menu__items"><Link className="header__mega--sub__menu--title" to="/product">Product Details</Link></li>
                                            <li className="header__sub--menu__items"><Link className="header__mega--sub__menu--title" to="checkout">Checkout page</Link></li>
                                           
                                            <li className="header__sub--menu__items"><Link className="header__mega--sub__menu--title" to="/productgallery">Product Gallery</Link></li>
                                        </ul>
                                 
                                    </li>
                                    <li className="header__menu--items">
                                        <Link className="header__menu--link text-white" to="blog">Blog 
                                            
                                        </Link>
                              
                                    </li>
                                    <li className="header__menu--items">
                                        <Link className="header__menu--link text-white" to="#">Pages 
                                            <svg className="menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41">
                                                <path  d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                                            </svg>
                                        </Link>
                                        <ul className="header__sub--menu">
                                            <li className="header__sub--menu__items"><Link to="about" className="header__sub--menu__link">About Us</Link></li>
                                           
                                            <li className="header__sub--menu__items"><Link to="cart" className="header__sub--menu__link">Cart Page</Link></li>
                                           
                                            <li className="header__sub--menu__items"><Link to="wishlist" className="header__sub--menu__link">Wishlist Page</Link></li>
                                            <li className="header__sub--menu__items"><Link to="login" className="header__sub--menu__link">Login Page</Link></li>
                                            
                                        </ul>
                                    </li>
                                    <li className="header__menu--items">
                                        <Link className="header__menu--link text-white" to="contact">Contact </Link>  
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header__right--info d-flex align-items-center">
                            <div className="account__currency">
                               
                                
                                
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>

 
        <div className="offcanvas__header">
            <div className="offcanvas__inner">
                <div className="offcanvas__logo">
                    <Link className="offcanvas__logo_link" to="/">
                        <img src="/assets/img/logo/logo12.png" alt="Grocee Logo" width="158" height="36"/>
                    </Link>
                    <button className="offcanvas__close--btn" data-offcanvas>close</button>
                </div>
                <nav className="offcanvas__menu">
                    <ul className="offcanvas__menu_ul">
                        <li className="offcanvas__menu_li">
                            <Link className="offcanvas__menu_item" to="/">Home</Link>
                            
                        </li>
                        <li className="offcanvas__menu_li">
                            <Link className="offcanvas__menu_item" to="/">Shop</Link>
                            <ul className="offcanvas__sub_menu">
                                <li className="offcanvas__sub_menu_li">
                                    <Link to="#" className="offcanvas__sub_menu_item">Column One</Link>
                                    <ul className="offcanvas__sub_menu">
                                        <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/">Shop Left Sidebar</Link></li>
                                        <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="shop-right-sidebar">Shop Right Sidebar</Link></li>
                                        <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="shop-grid">Shop Grid</Link></li>
                                        <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="shop-grid-list">Shop Grid List</Link></li>
                                        <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="shop-list">Shop List</Link></li>
                                    </ul>
                                </li>
                                <li className="offcanvas__sub_menu_li">
                                    <Link to="#" className="offcanvas__sub_menu_item">Column Two</Link>
                                    <ul className="offcanvas__sub_menu">
                                        <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="product-details">Product Details</Link></li>
                                        <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="product-video">Video Product</Link></li>
                                        <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="product-details">Variable Product</Link></li>
                                        <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="product-left-sidebar">Product Left Sidebar</Link></li>
                                        <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="product-gallery">Product Gallery</Link></li>
                                    </ul>
                                </li>
                                <li className="offcanvas__sub_menu_li">
                                    <Link to="#" className="offcanvas__sub_menu_item">Column Three</Link>
                                    <ul className="offcanvas__sub_menu">
                                        <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="my-account">My Account</Link></li>
                                        <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="my-account-2">My Account 2</Link></li>
                                        <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="404">404 Page</Link></li>
                                        <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="login">Login Page</Link></li>
                                        <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="faq">Faq Page</Link></li>
                                    </ul>
                                </li>
                                <li className="offcanvas__sub_menu_li">
                                    <Link to="#" className="offcanvas__sub_menu_item">Column Three</Link>
                                    <ul className="offcanvas__sub_menu">
                                        <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="compare">Compare Pages</Link></li>
                                        <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="checkout">Checkout page</Link></li>
                                        <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="checkout-2">Checkout Style 2</Link></li>
                                        <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="checkout-3">Checkout Style 3</Link></li>
                                        <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="checkout-4">Checkout Style 4</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="offcanvas__menu_li">
                            <Link className="offcanvas__menu_item" to="blog">Blog</Link>
                            <ul className="offcanvas__sub_menu">
                                <li className="offcanvas__sub_menu_li"><Link to="blog" className="offcanvas__sub_menu_item">Blog Grid</Link></li>
                                <li className="offcanvas__sub_menu_li"><Link to="blog-details" className="offcanvas__sub_menu_item">Blog Details</Link></li>
                                <li className="offcanvas__sub_menu_li"><Link to="blog-left-sidebar" className="offcanvas__sub_menu_item">Blog Left Sidebar</Link></li>
                                <li className="offcanvas__sub_menu_li"><Link to="blog-right-sidebar" className="offcanvas__sub_menu_item">Blog Right Sidebar</Link></li>
                            </ul>
                        </li>
                        <li className="offcanvas__menu_li">
                            <Link className="offcanvas__menu_item" to="#">Pages</Link>
                            <ul className="offcanvas__sub_menu">
                                <li className="offcanvas__sub_menu_li"><Link to="about" className="offcanvas__sub_menu_item">About Us</Link></li>
                                <li className="offcanvas__sub_menu_li"><Link to="contact" className="offcanvas__sub_menu_item">Contact Us</Link></li>
                                <li className="offcanvas__sub_menu_li"><Link to="cart" className="offcanvas__sub_menu_item">Cart Page</Link></li>
                                <li className="offcanvas__sub_menu_li"><Link to="portfolio" className="offcanvas__sub_menu_item">Portfolio Page</Link></li>
                                <li className="offcanvas__sub_menu_li"><Link to="wishlist" className="offcanvas__sub_menu_item">Wishlist Page</Link></li>
                                <li className="offcanvas__sub_menu_li"><Link to="login" className="offcanvas__sub_menu_item">Login Page</Link></li>
                                <li className="offcanvas__sub_menu_li"><Link to="404" className="offcanvas__sub_menu_item">Error Page</Link></li>
                            </ul>
                        </li>
                        <li className="offcanvas__menu_li"><Link className="offcanvas__menu_item" to="about">About</Link></li>
                        <li className="offcanvas__menu_li"><Link className="offcanvas__menu_item" to="contact">Contact</Link></li>
                    </ul>
                    <div className="offcanvas__account--items">
                        <Link className="offcanvas__account--items__btn d-flex align-items-center" to="login">
                            <span className="offcanvas__account--items__icon"> 
                                <svg xmlns="http://www.w3.org/2000/svg"  width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg> 
                            </span>
                            <span className="offcanvas__account--items__label">Login / Register</span>
                        </Link>
                    </div>
                    <div className="offcanvas__account--currency">
                        <Link className="offcanvas__account--currency__menu text-black" to="#">
                            <img src="/assets/img/icon/usd-icon.png" alt="currency"/>
                            <span>USD</span> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="9.797" height="6.05" viewBox="0 0 9.797 6.05">
                                <path  d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                            </svg>
                        </Link>
                        <div className="offcanvas__account--currency__submenu">
                       
                        </div>
                    </div>
                </nav>
            </div>
        </div>
       
        <div className="offcanvas__stikcy--toolbar">
            <ul className="d-flex justify-content-between">
                <li className="offcanvas__stikcy--toolbar__list">
                    <Link className="offcanvas__stikcy--toolbar__btn" to="/">
                    <span className="offcanvas__stikcy--toolbar__icon"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="21.51" height="21.443" viewBox="0 0 22 17"><path fill="currentColor" d="M20.9141 7.93359c.1406.11719.2109.26953.2109.45703 0 .14063-.0469.25782-.1406.35157l-.3516.42187c-.1172.14063-.2578.21094-.4219.21094-.1406 0-.2578-.04688-.3515-.14062l-.9844-.77344V15c0 .3047-.1172.5625-.3516.7734-.2109.2344-.4687.3516-.7734.3516h-4.5c-.3047 0-.5742-.1172-.8086-.3516-.2109-.2109-.3164-.4687-.3164-.7734v-3.6562h-2.25V15c0 .3047-.11719.5625-.35156.7734-.21094.2344-.46875.3516-.77344.3516h-4.5c-.30469 0-.57422-.1172-.80859-.3516-.21094-.2109-.31641-.4687-.31641-.7734V8.46094l-.94922.77344c-.11719.09374-.24609.14062-.38672.14062-.16406 0-.30468-.07031-.42187-.21094l-.35157-.42187C.921875 8.625.875 8.50781.875 8.39062c0-.1875.070312-.33984.21094-.45703L9.73438.832031C10.1094.527344 10.5312.375 11 .375s.8906.152344 1.2656.457031l8.6485 7.101559zm-3.7266 6.50391V7.05469L11 1.99219l-6.1875 5.0625v7.38281h3.375v-3.6563c0-.3046.10547-.5624.31641-.7734.23437-.23436.5039-.35155.80859-.35155h3.375c.3047 0 .5625.11719.7734.35155.2344.211.3516.4688.3516.7734v3.6563h3.375z"></path></svg>
                        </span>
                        <span className="offcanvas__stikcy--toolbar__label">Home</span>
                    </Link>
                </li>
                <li className="offcanvas__stikcy--toolbar__list">
                    <Link className="offcanvas__stikcy--toolbar__btn" to="/">
                    <span className="offcanvas__stikcy--toolbar__icon"> 
                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="18.51" height="17.443" viewBox="0 0 448 512"><path d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-16 48v152H248V80zm-200 0v152H48V80zM48 432V280h152v152zm200 0V280h152v152z"></path></svg>
                        </span>
                    <span className="offcanvas__stikcy--toolbar__label">Shop</span>
                    </Link>
                </li>
                <li className="offcanvas__stikcy--toolbar__list ">
                    <Link className="offcanvas__stikcy--toolbar__btn search__open--btn" to="#" data-offcanvas>
                        <span className="offcanvas__stikcy--toolbar__icon"> 
                            <svg xmlns="http://www.w3.org/2000/svg"  width="22.51" height="20.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>   
                        </span>
                    <span className="offcanvas__stikcy--toolbar__label">Search</span>
                    </Link>
                </li>
                <li className="offcanvas__stikcy--toolbar__list">
                    <Link className="offcanvas__stikcy--toolbar__btn minicart__open--btn" to="#" data-offcanvas>
                        <span className="offcanvas__stikcy--toolbar__icon"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.51" height="15.443" viewBox="0 0 18.51 15.443">
                            <path  d="M79.963,138.379l-13.358,0-.56-1.927a.871.871,0,0,0-.6-.592l-1.961-.529a.91.91,0,0,0-.226-.03.864.864,0,0,0-.226,1.7l1.491.4,3.026,10.919a1.277,1.277,0,1,0,1.844,1.144.358.358,0,0,0,0-.049h6.163c0,.017,0,.034,0,.049a1.277,1.277,0,1,0,1.434-1.267c-1.531-.247-7.783-.55-7.783-.55l-.205-.8h7.8a.9.9,0,0,0,.863-.651l1.688-5.943h.62a.936.936,0,1,0,0-1.872Zm-9.934,6.474H68.568c-.04,0-.1.008-.125-.085-.034-.118-.082-.283-.082-.283l-1.146-4.037a.061.061,0,0,1,.011-.057.064.064,0,0,1,.053-.025h1.777a.064.064,0,0,1,.063.051l.969,4.34,0,.013a.058.058,0,0,1,0,.019A.063.063,0,0,1,70.03,144.853Zm3.731-4.41-.789,4.359a.066.066,0,0,1-.063.051h-1.1a.064.064,0,0,1-.063-.051l-.789-4.357a.064.064,0,0,1,.013-.055.07.07,0,0,1,.051-.025H73.7a.06.06,0,0,1,.051.025A.064.064,0,0,1,73.76,140.443Zm3.737,0L76.26,144.8a.068.068,0,0,1-.063.049H74.684a.063.063,0,0,1-.051-.025.064.064,0,0,1-.013-.055l.973-4.357a.066.066,0,0,1,.063-.051h1.777a.071.071,0,0,1,.053.025A.076.076,0,0,1,77.5,140.448Z" transform="translate(-62.393 -135.3)" fill="currentColor"/>
                            </svg> 
                        </span>
                        <span className="offcanvas__stikcy--toolbar__label">Cart</span>
                        <span className="items__count">3</span> 
                    </Link>
                </li>
                <li className="offcanvas__stikcy--toolbar__list">
                    <Link className="offcanvas__stikcy--toolbar__btn" to="wishlist">
                        <span className="offcanvas__stikcy--toolbar__icon"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.541" height="15.557" viewBox="0 0 18.541 15.557">
                            <path  d="M71.775,135.51a5.153,5.153,0,0,1,1.267-1.524,4.986,4.986,0,0,1,6.584.358,4.728,4.728,0,0,1,1.174,4.914,10.458,10.458,0,0,1-2.132,3.808,22.591,22.591,0,0,1-5.4,4.558c-.445.282-.9.549-1.356.812a.306.306,0,0,1-.254.013,25.491,25.491,0,0,1-6.279-4.8,11.648,11.648,0,0,1-2.52-4.009,4.957,4.957,0,0,1,.028-3.787,4.629,4.629,0,0,1,3.744-2.863,4.782,4.782,0,0,1,5.086,2.447c.013.019.025.034.057.076Z" transform="translate(-62.498 -132.915)" fill="currentColor"/>
                            </svg> 
                        </span>
                        <span className="offcanvas__stikcy--toolbar__label">Wishlist</span>
                        <span className="items__count">3</span> 
                    </Link>
                </li>
            </ul>
        </div>
  

       
        <div className="offCanvas__minicart">
            <div className="minicart__header ">
                <div className="minicart__header--top d-flex justify-content-between align-items-center">
                    <h3 className="minicart__title"> Shopping Cart</h3>
                    <button className="minicart__close--btn" aria-label="minicart close btn" data-offcanvas>
                        <svg className="minicart__close--icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"/></svg>
                    </button>
                </div>
                <p className="minicart__header--desc">The organic foods products are limited</p>
            </div>
            <div className="minicart__product">
                <div className="minicart__product--items d-flex">
                    <div className="minicart__thumb">
                        <Link to="product-details"><img src="/assets/img/product/product1.png" alt="prduct-img"/></Link>
                    </div>
                    <div className="minicart__text">
                        <h4 className="minicart__subtitle"><Link to="product-details">The is Garden Vegetable.</Link></h4>
                        <span className="color__variant"><b>Color:</b> Beige</span>
                        <div className="minicart__price">
                            <span className="current__price">$125.00</span>
                            <span className="old__price">$140.00</span>
                        </div>
                        <div className="minicart__text--footer d-flex align-items-center">
                            <div className="quantity__box minicart__quantity">
                                <button type="button" className="quantity__value decrease" aria-label="quantity value" value="Decrease Value">-</button>
                                <label>
                                    <input type="number" className="quantity__number" defaultValue="1" data-counter />
                                </label>
                                <button type="button" className="quantity__value increase" aria-label="quantity value" value="Increase Value">+</button>
                            </div>
                            <button className="minicart__product--remove" type="button">Remove</button>
                        </div>
                    </div>
                </div>
                <div className="minicart__product--items d-flex">
                    <div className="minicart__thumb">
                        <Link to="product-details"><img src="/assets/img/product/product2.png" alt="prduct-img"/></Link>
                    </div>
                    <div className="minicart__text">
                        <h4 className="minicart__subtitle"><Link to="product-details">Fresh Tomatoe is organic.</Link></h4>
                        <span className="color__variant"><b>Color:</b> Green</span>
                        <div className="minicart__price">
                            <span className="current__price">$115.00</span>
                            <span className="old__price">$130.00</span>
                        </div>
                        <div className="minicart__text--footer d-flex align-items-center">
                            <div className="quantity__box minicart__quantity">
                                <button type="button" className="quantity__value decrease" aria-label="quantity value" value="Decrease Value">-</button>
                                <label>
                                    <input type="number" className="quantity__number" defaultValue="1" data-counter />
                                </label>
                                <button type="button" className="quantity__value increase" aria-label="quantity value" value="Increase Value">+</button>
                            </div>
                            <button className="minicart__product--remove" type="button">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="minicart__amount">
                <div className="minicart__amount_list d-flex justify-content-between">
                    <span>Sub Total:</span>
                    <span><b>$240.00</b></span>
                </div>
                <div className="minicart__amount_list d-flex justify-content-between">
                    <span>Total:</span>
                    <span><b>$240.00</b></span>
                </div>
            </div>
            <div className="minicart__conditions text-center">
                <input className="minicart__conditions--input" id="accept" type="checkbox"/>
                <label className="minicart__conditions--label" htmlFor="accept">I agree with the <Link className="minicart__conditions--link" to="privacy-policy">Privacy Policy</Link></label>
            </div>
            <div className="minicart__button d-flex justify-content-center">
                <Link className="btn minicart__button--link" to="cart">View cart</Link>
                <Link className="btn minicart__button--link" to="checkout">Checkout</Link>
            </div>
        </div>

        {/* <!-- Start serch box area --> */}
        <div className="predictive__search--box ">
            <div className="predictive__search--box__inner">
                <h2 className="predictive__search--title">Search Products</h2>
                <form className="predictive__search--form" action="#">
                    <label>
                        <input className="predictive__search--input" placeholder="Search Here" type="text"/>
                    </label>
                    <button className="predictive__search--button" aria-label="search button"><svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="30.51" height="25.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>  </button>
                </form>
            </div>
            <button className="predictive__search--close__btn" aria-label="search close" data-offcanvas>
                <svg className="predictive__search--close__icon" xmlns="http://www.w3.org/2000/svg" width="40.51" height="30.443"  viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"/></svg>
            </button>
        </div>
        
    </header>
        
      </React.Fragment>
    );
  }
}
