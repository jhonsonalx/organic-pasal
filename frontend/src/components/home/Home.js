import React, { Component } from "react";
import Header from "../base/Header";
import Footer from "../base/Footer";
import Model from "../base/Model";
import { Link } from "react-router-dom";
import axiosInstance, { baseURL } from "../../api/axiosInstance";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            all_popular_items: [],
            all_recommended_items: [],
            blogs: [],
            order: [],
            order_subtotal: 0,
            wishlist: [],
        };
    }

    async componentDidMount() {
        let res = await axiosInstance.get(`/`);
        let data = await res.data;
        this.setState({
            all_popular_items: data.all_popular_items,
            all_recommended_items: data.all_recommended_items,
            blogs: data.blogs,
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

                <Header />

                <div>

                    <main className="main__content_wrapper">
                        {/* <!-- Start slider section --> */}
                        <section className="hero__slider--section">
                            <div className="hero__slider--inner hero__slider--activation swiper">
                                <div className="hero__slider--wrapper swiper-wrapper">
                                    <div className="swiper-slide ">
                                        <div className="hero__slider--items bg__gray--color">
                                            <div className="container slider__items--container">
                                                <div className="hero__slider--items__inner">
                                                    <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 align-items-center">
                                                        <div className="col">
                                                            <div className="slider__content slider__content--padding__left">
                                                                <span className="slider__content--subtitle text__secondary">Eat clean and green</span>
                                                                <h2 className="slider__content--maintitle h1">Natural is <span className="text__secondary">always</span> <br />
                                                                    Healthy</h2>
                                                                <p className="slider__content--desc">The more you love your health, more you eat organic. No medicine can heal you better than organic food does</p>
                                                                <Link className="btn slider__btn" to="shop">Shop Now </Link>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="hero__slider--layer">
                                                                <img className="slider__layer--img " src="assets/img/slider/photo2.jpg" alt="slider-img" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide ">
                                        <div className="hero__slider--items bg__gray--color">
                                            <div className="container slider__items--container">
                                                <div className="hero__slider--items__inner">
                                                    <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 align-items-center">
                                                        <div className="col">
                                                            <div className="slider__content slider__content--padding__left">
                                                                <span className="slider__content--subtitle text__secondary">Eat clean and green</span>
                                                                <h2 className="slider__content--maintitle h1">Natural is <span className="text__secondary">always</span> <br />
                                                                    Healthy</h2>
                                                                <p className="slider__content--desc">The more you love your health, more you eat organic. No medicine can heal you better than organic food does</p>
                                                                <Link className="btn slider__btn" to="shop">Shop Now </Link>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="hero__slider--layer home1__slider--layer2">
                                                                <img className="slider__layer--img  home1__slider--layer2__img" src="assets/img/slider/home1-slider2-layer.png" alt="slider-img" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide ">
                                        <div className="hero__slider--items bg__gray--color">
                                            <div className="container slider__items--container">
                                                <div className="hero__slider--items__inner">
                                                    <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 align-items-center">
                                                        <div className="col">
                                                            <div className="slider__content slider__content--padding__left">
                                                                <span className="slider__content--subtitle text__secondary">Eat clean and green</span>
                                                                <h2 className="slider__content--maintitle h1">Natural is <span className="text__secondary">always</span> <br />
                                                                    Healthy</h2>
                                                                <p className="slider__content--desc">The more you love your health, more you eat organic. No medicine can heal you better than organic food does</p>
                                                                <Link className="btn slider__btn" to="shop">Shop Now </Link>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="hero__slider--layer">
                                                                <img className="slider__layer--img " src="assets/img/slider/home1-slider3-layer.png" alt="slider-img" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider__pagination swiper-pagination"></div><br />
                            </div>


                        </section>


                        {/* <!-- Start product section --> */}
                        <section className="product__section section--padding pt-0">
                            <div className="container">
                                <div className="section__heading text-center mb-25">
                                    <span className="section__heading--subtitle">Recently added our store</span>
                                    <h2 className="section__heading--maintitle">Trending Products</h2>
                                </div>
                                <ul className="product__tab--one product__tab--btn d-flex justify-content-center mb-35">
                                    <li className="product__tab--btn__list active" data-toggle="tab" data-target="#product_all">All</li>

                                    <li className="product__tab--btn__list" data-toggle="tab" data-target="#product_fruits">Fruits </li>

                                    <li className="product__tab--btn__list" data-toggle="tab" data-target="#product_vegetable">Vegetable </li>
                                </ul>
                                <div className="tab_content">
                                    <div id="product_all" className="tab_pane active show">
                                        <div className="product__section--inner">
                                            <div className="row row-cols-lg-4 row-cols-md-3 row-cols-2 mb--n28">

                                                
                                            {popular_items?.map((item) => {
                                                return (
                                                <div className="col md-28">
                                                    <div className="product__items ">
                                                        <div className="product__items--thumbnail">
                                                            <Link className="product__items--link" to="product-details">
                                                                <img className="product__items--img product__primary--img" src={item.image} alt="product-img" />

                                                            </Link>
                                                            <div className="product__badge">
                                                                <span className="product__badge--items sale">Sale</span>
                                                            </div>
                                                            <ul className="product__items--action">
                                                                <li className="product__items--action__list">
                                                                    <Link className="product__items--action__btn" to="wishlist">
                                                                        <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /></svg>
                                                                        <span className="visually-hidden">Wishlist</span>
                                                                    </Link>
                                                                </li>
                                                                <li className="product__items--action__list">

                                                                </li>
                                                                <li className="product__items--action__list">

                                                                </li>
                                                            </ul>
                                                        </div>



                                                        <div className="product__items--content text-center">
                                                            <Link className="add__to--cart__btn" to="cart">+ Add to cart </Link>
                                                            <h3 className="product__items--content__title h4"> <Link to="product-details">{item.name} </Link></h3>
                                                            <div className="product__items--price">
                                                                <span className="current__price">Rs.{item.price}</span>
                                                                {/* <span className="old__price">RS40.00</span> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                );
                                            })}


                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </section>

                        {/* <!-- Start deals banner section --> */}
                        <section className="deals__banner--section banner__bg">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-5 col-md-5 deals__baner--col">
                                        <div className="deals__banner--content">
                                            <h3 className="deals__banner--content__subtitle text__secondary">Our country Nepal has more villages than towns. Most of the people are farmers. They depend on agriculture which is the backbone of the country and agriculture supplies people with the daily needs. Unless Nepal can develop agricultural sectors, the upliftment of the country is impossible. !</h3>
                                            <h2 className="deals__banner--content__maintitle">Agricultural in nepal
                                            </h2>
                                            <p className="deals__banner--content__desc">   Agricultural sectors provide us with many things. Firstly, we can get our food from agriculture. We can get fresh crops, vegetables, fruits, etc. from our farms. But in our country Nepal, development in agricultural has not been given a high priority. It is seen that most of the farmers applying traditional methods of farming. It is because most of the farmers in our country are not well-trained and educated. By following such useless traditional methods, they cannot have good and high production as expected. Some of the farmers who are trained, skilled apply modern methods of farming and get more benefits. The facilities of irrigation, modern-fertilizers, improved seeds and safe storage are not sufficient We realize that the solutions to these problems have been applied; that's why these problems can be solved in future. Agriculture feeds us supplying with daily needs. </p>
                                            <div className="deals__banner--countdown d-flex" data-countdown="Sep 30, 2022 00:00:00"></div>

                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-7 deals__baner--col">
                                        <div className="banner__items text-right">
                                            <Link className="banner__items--thumbnail display-block" to="shop"><img className="banner__items--thumbnail__img display-block" src="assets/img/banner/agr1.jpg" alt="banner-layer-img" /> </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* <!-- Start banner section --> */}
                        <section className="banner__section section--padding pt-0">
                            <div className="container">
                                <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1 mb--n30">
                                    <div className="col mb-30">
                                        <div className="banner__items position__relative">
                                            <Link className="banner__items--thumbnail display-block" to="shop"><img className="banner__items--thumbnail__img display-block" src="assets/img/banner/banner1.png" alt="banner-img" />
                                                <div className="banner__items--content">
                                                    <h2 className="banner__items--content__title text__secondary">Organic FRUITS</h2>
                                                    <p className="banner__items--content__desc text-white">Shop our selection of organic fresh vegetables in a discounted price 10% off.</p>
                                                    <span className="btn banner__items--content__btn">Shop Now</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col mb-30">
                                        <div className="banner__items position__relative">
                                            <Link className="banner__items--thumbnail display-block" to="shop"><img className="banner__items--thumbnail__img display-block" src="assets/img/banner/banner2.png" alt="banner-img" />
                                                <div className="banner__items--content">
                                                    <h2 className="banner__items--content__title text__secondary">Organic Food</h2>
                                                    <p className="banner__items--content__desc text-black">Shop our selection of organic fresh vegetables in a discounted price 10% off.</p>
                                                    <span className="btn banner__items--content__btn">Shop Now</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* <!-- Start blog section --> */}
                        <section className="blog__section section--padding">
                            <div className="container blog__section--container">
                                <div className="section__heading text-center mb-40">
                                    <span className="section__heading--subtitle">Our recent articles about Organic</span>
                                    <h2 className="section__heading--maintitle">Our Blog Posts</h2>
                                </div>
                                <div className="blog__section--inner blog__swiper--activation swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slided col-4" style={{ marginLeft: "10px", marginRight: "10px" }}>
                                            <div className="blog__items">
                                                <div className="blog__items--thumbnail">
                                                    <Link className="blog__items--link" to="blog-details"><img className="blog__items--img" src="assets/img/blog/nepali4.jpg" alt="blog-img" /> </Link>
                                                </div>
                                                <div className="blog__items--content">
                                                    <div className="blog__items--meta">
                                                        <ul className="d-flex">
                                                            <li className="blog__items--meta__list">
                                                                <svg className="blog__items--meta__icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                                                    <path d="M74.705,129.154a6.088,6.088,0,0,0,1.085-5.056,6.167,6.167,0,0,0-2.539-3.839,6.608,6.608,0,0,0-4.958-1.207,6.475,6.475,0,0,0-4.356,2.53,6.056,6.056,0,0,0-1.174,5.154,14.881,14.881,0,0,1,.442,2.339,5.759,5.759,0,0,1-.494,2.849c-.065.136-.139.266-.213.4.029.012.043.022.055.02a6.859,6.859,0,0,0,3.154-1.268.223.223,0,0,1,.281-.043,6.72,6.72,0,0,0,4.658.7,6.475,6.475,0,0,0,4.058-2.585Zm2.717,4.572a2.756,2.756,0,0,1-.261-.425,4.205,4.205,0,0,1-.1-2.971,4.6,4.6,0,0,0-.139-3.087c-.113-.278-.267-.534-.427-.851-.031.134-.046.191-.057.25a6.593,6.593,0,0,1-.849,2.323,7.164,7.164,0,0,1-4.994,3.5c-.367.071-.741.095-1.119.142a.19.19,0,0,0,.036.055c.094.071.185.144.285.2a4.856,4.856,0,0,0,4.87.278.261.261,0,0,1,.23,0,4.912,4.912,0,0,0,1.725.752,2.973,2.973,0,0,0,.72.081C77.531,133.97,77.541,133.895,77.423,133.726Z" transform="translate(-62.5 -118.975)" fill="currentColor" />
                                                                </svg>
                                                                <span className="blog__items--meta__text">19 Comments</span>
                                                            </li>
                                                            <li className="blog__items--meta__list">
                                                                <svg className="blog__items--meta__icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                                                    <path d="M75.809,63.836c0-.221,0-.429,0-.639a.915.915,0,0,0-.656-.869.959.959,0,0,0-1.057.321.97.97,0,0,0-.2.619v.559a.163.163,0,0,1-.164.161H72.716a.162.162,0,0,1-.164-.161c0-.192,0-.377,0-.564a.959.959,0,0,0-1.918-.06c-.005.206,0,.413,0,.62a.163.163,0,0,1-.164.161H69.428a.162.162,0,0,1-.164-.161,5.7,5.7,0,0,0-.009-.768.849.849,0,0,0-.627-.725.93.93,0,0,0-.942.185.952.952,0,0,0-.329.79c0,.175,0,.35,0,.533A.163.163,0,0,1,67.2,64H64.363a.162.162,0,0,0-.164.161V77.113a.163.163,0,0,0,.164.161H79.036a.162.162,0,0,0,.164-.161V64.158A.163.163,0,0,0,79.036,64H75.972A.161.161,0,0,1,75.809,63.836ZM68.7,76.636h-3.68a.162.162,0,0,1-.164-.161V73.913a.163.163,0,0,1,.164-.161H68.7a.162.162,0,0,1,.164.161v2.561A.162.162,0,0,1,68.7,76.636Zm0-3.543H65.018a.162.162,0,0,1-.164-.161V70.224a.163.163,0,0,1,.164-.161H68.7a.162.162,0,0,1,.164.161v2.708A.163.163,0,0,1,68.7,73.093Zm0-3.685H65.018a.162.162,0,0,1-.164-.161v-2.6a.163.163,0,0,1,.164-.161H68.7a.162.162,0,0,1,.164.161v2.6A.162.162,0,0,1,68.7,69.408Zm4.9,7.23H69.71a.162.162,0,0,1-.164-.161V73.921a.163.163,0,0,1,.164-.161H73.6a.162.162,0,0,1,.164.161v2.557A.16.16,0,0,1,73.6,76.638Zm.172-3.632c0,.05-.077.089-.169.089h-3.9a.162.162,0,0,1-.164-.161v-2.71c0-.089.043-.163.093-.166l.093-.005c1.282,0,2.563,0,3.844,0,.155,0,.208.034.207.2-.007.89,0,1.783-.005,2.672A.747.747,0,0,1,73.776,73.006Zm.005-3.694c0,.05-.074.091-.164.091H69.707a.162.162,0,0,1-.164-.161V66.636c0-.089.043-.161.1-.161h.1c1.282,0,2.563,0,3.844,0,.155,0,.207.036.2.2-.007.852,0,1.7,0,2.552v.091Zm.823.756h3.772a.162.162,0,0,1,.164.161v2.706a.163.163,0,0,1-.164.161H74.6a.162.162,0,0,1-.164-.161V70.227A.162.162,0,0,1,74.6,70.068Zm3.773,6.568H74.6a.162.162,0,0,1-.164-.161V73.918a.163.163,0,0,1,.164-.161h3.773a.162.162,0,0,1,.164.161v2.557A.158.158,0,0,1,78.377,76.636Zm0-7.233H74.6a.162.162,0,0,1-.164-.161V66.648a.163.163,0,0,1,.164-.161h3.773a.162.162,0,0,1,.164.161v2.593A.159.159,0,0,1,78.377,69.4Z" transform="translate(-64.2 -62.274)" fill="currentColor" />
                                                                </svg>
                                                                <span className="blog__items--meta__text">10 Feb 2022</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <h3 className="blog__items--title"> <Link to="blog-details">Aypi Non Habent Claritatemnon Insitam </Link></h3>
                                                    <p className="blog__items--desc">It is a long established fact that a reader will be  by the readable content of a page when looking at.  </p>
                                                    <Link className="blog__items--readmore" to="blog-details">Read more <svg className="blog__items--readmore__icon" xmlns="http://www.w3.org/2000/svg" width="6.2" height="6.2" viewBox="0 0 6.2 6.2">
                                                        <path d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z" transform="translate(-4 -4)" fill="currentColor" />
                                                    </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide col-4" style={{ marginLeft: "10px", marginRight: "10px" }}>
                                            <div className="blog__items">
                                                <div className="blog__items--thumbnail">
                                                    <Link className="blog__items--link" to="blog-details"><img className="blog__items--img" src="assets/img/blog/blog2.png" alt="blog-img" /> </Link>
                                                </div>
                                                <div className="blog__items--content">
                                                    <div className="blog__items--meta">
                                                        <ul className="d-flex">
                                                            <li className="blog__items--meta__list">
                                                                <svg className="blog__items--meta__icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                                                    <path d="M74.705,129.154a6.088,6.088,0,0,0,1.085-5.056,6.167,6.167,0,0,0-2.539-3.839,6.608,6.608,0,0,0-4.958-1.207,6.475,6.475,0,0,0-4.356,2.53,6.056,6.056,0,0,0-1.174,5.154,14.881,14.881,0,0,1,.442,2.339,5.759,5.759,0,0,1-.494,2.849c-.065.136-.139.266-.213.4.029.012.043.022.055.02a6.859,6.859,0,0,0,3.154-1.268.223.223,0,0,1,.281-.043,6.72,6.72,0,0,0,4.658.7,6.475,6.475,0,0,0,4.058-2.585Zm2.717,4.572a2.756,2.756,0,0,1-.261-.425,4.205,4.205,0,0,1-.1-2.971,4.6,4.6,0,0,0-.139-3.087c-.113-.278-.267-.534-.427-.851-.031.134-.046.191-.057.25a6.593,6.593,0,0,1-.849,2.323,7.164,7.164,0,0,1-4.994,3.5c-.367.071-.741.095-1.119.142a.19.19,0,0,0,.036.055c.094.071.185.144.285.2a4.856,4.856,0,0,0,4.87.278.261.261,0,0,1,.23,0,4.912,4.912,0,0,0,1.725.752,2.973,2.973,0,0,0,.72.081C77.531,133.97,77.541,133.895,77.423,133.726Z" transform="translate(-62.5 -118.975)" fill="currentColor" />
                                                                </svg>
                                                                <span className="blog__items--meta__text">19 Comments</span>
                                                            </li>
                                                            <li className="blog__items--meta__list">
                                                                <svg className="blog__items--meta__icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                                                    <path d="M75.809,63.836c0-.221,0-.429,0-.639a.915.915,0,0,0-.656-.869.959.959,0,0,0-1.057.321.97.97,0,0,0-.2.619v.559a.163.163,0,0,1-.164.161H72.716a.162.162,0,0,1-.164-.161c0-.192,0-.377,0-.564a.959.959,0,0,0-1.918-.06c-.005.206,0,.413,0,.62a.163.163,0,0,1-.164.161H69.428a.162.162,0,0,1-.164-.161,5.7,5.7,0,0,0-.009-.768.849.849,0,0,0-.627-.725.93.93,0,0,0-.942.185.952.952,0,0,0-.329.79c0,.175,0,.35,0,.533A.163.163,0,0,1,67.2,64H64.363a.162.162,0,0,0-.164.161V77.113a.163.163,0,0,0,.164.161H79.036a.162.162,0,0,0,.164-.161V64.158A.163.163,0,0,0,79.036,64H75.972A.161.161,0,0,1,75.809,63.836ZM68.7,76.636h-3.68a.162.162,0,0,1-.164-.161V73.913a.163.163,0,0,1,.164-.161H68.7a.162.162,0,0,1,.164.161v2.561A.162.162,0,0,1,68.7,76.636Zm0-3.543H65.018a.162.162,0,0,1-.164-.161V70.224a.163.163,0,0,1,.164-.161H68.7a.162.162,0,0,1,.164.161v2.708A.163.163,0,0,1,68.7,73.093Zm0-3.685H65.018a.162.162,0,0,1-.164-.161v-2.6a.163.163,0,0,1,.164-.161H68.7a.162.162,0,0,1,.164.161v2.6A.162.162,0,0,1,68.7,69.408Zm4.9,7.23H69.71a.162.162,0,0,1-.164-.161V73.921a.163.163,0,0,1,.164-.161H73.6a.162.162,0,0,1,.164.161v2.557A.16.16,0,0,1,73.6,76.638Zm.172-3.632c0,.05-.077.089-.169.089h-3.9a.162.162,0,0,1-.164-.161v-2.71c0-.089.043-.163.093-.166l.093-.005c1.282,0,2.563,0,3.844,0,.155,0,.208.034.207.2-.007.89,0,1.783-.005,2.672A.747.747,0,0,1,73.776,73.006Zm.005-3.694c0,.05-.074.091-.164.091H69.707a.162.162,0,0,1-.164-.161V66.636c0-.089.043-.161.1-.161h.1c1.282,0,2.563,0,3.844,0,.155,0,.207.036.2.2-.007.852,0,1.7,0,2.552v.091Zm.823.756h3.772a.162.162,0,0,1,.164.161v2.706a.163.163,0,0,1-.164.161H74.6a.162.162,0,0,1-.164-.161V70.227A.162.162,0,0,1,74.6,70.068Zm3.773,6.568H74.6a.162.162,0,0,1-.164-.161V73.918a.163.163,0,0,1,.164-.161h3.773a.162.162,0,0,1,.164.161v2.557A.158.158,0,0,1,78.377,76.636Zm0-7.233H74.6a.162.162,0,0,1-.164-.161V66.648a.163.163,0,0,1,.164-.161h3.773a.162.162,0,0,1,.164.161v2.593A.159.159,0,0,1,78.377,69.4Z" transform="translate(-64.2 -62.274)" fill="currentColor" />
                                                                </svg>
                                                                <span className="blog__items--meta__text">10 Feb 2022</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <h3 className="blog__items--title"> <Link to="blog-details">Lorem ipsum dolor sit amet are consecte. </Link></h3>
                                                    <p className="blog__items--desc">It is a long established fact that a reader will be  by the readable content of a page when looking at.  </p>
                                                    <Link className="blog__items--readmore" to="blog-details">Read more <svg className="blog__items--readmore__icon" xmlns="http://www.w3.org/2000/svg" width="6.2" height="6.2" viewBox="0 0 6.2 6.2">
                                                        <path d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z" transform="translate(-4 -4)" fill="currentColor" />
                                                    </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide col-4" style={{ marginLeft: "10px", marginRight: "10px" }}>
                                            <div className="blog__items">
                                                <div className="blog__items--thumbnail">
                                                    <Link className="blog__items--link" to="blog-details"><img className="blog__items--img" src="assets/img/blog/blog3.png" alt="blog-img" /> </Link>
                                                </div>
                                                <div className="blog__items--content">
                                                    <div className="blog__items--meta">
                                                        <ul className="d-flex">
                                                            <li className="blog__items--meta__list">
                                                                <svg className="blog__items--meta__icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                                                    <path d="M74.705,129.154a6.088,6.088,0,0,0,1.085-5.056,6.167,6.167,0,0,0-2.539-3.839,6.608,6.608,0,0,0-4.958-1.207,6.475,6.475,0,0,0-4.356,2.53,6.056,6.056,0,0,0-1.174,5.154,14.881,14.881,0,0,1,.442,2.339,5.759,5.759,0,0,1-.494,2.849c-.065.136-.139.266-.213.4.029.012.043.022.055.02a6.859,6.859,0,0,0,3.154-1.268.223.223,0,0,1,.281-.043,6.72,6.72,0,0,0,4.658.7,6.475,6.475,0,0,0,4.058-2.585Zm2.717,4.572a2.756,2.756,0,0,1-.261-.425,4.205,4.205,0,0,1-.1-2.971,4.6,4.6,0,0,0-.139-3.087c-.113-.278-.267-.534-.427-.851-.031.134-.046.191-.057.25a6.593,6.593,0,0,1-.849,2.323,7.164,7.164,0,0,1-4.994,3.5c-.367.071-.741.095-1.119.142a.19.19,0,0,0,.036.055c.094.071.185.144.285.2a4.856,4.856,0,0,0,4.87.278.261.261,0,0,1,.23,0,4.912,4.912,0,0,0,1.725.752,2.973,2.973,0,0,0,.72.081C77.531,133.97,77.541,133.895,77.423,133.726Z" transform="translate(-62.5 -118.975)" fill="currentColor" />
                                                                </svg>
                                                                <span className="blog__items--meta__text">19 Comments</span>
                                                            </li>
                                                            <li className="blog__items--meta__list">
                                                                <svg className="blog__items--meta__icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                                                    <path d="M75.809,63.836c0-.221,0-.429,0-.639a.915.915,0,0,0-.656-.869.959.959,0,0,0-1.057.321.97.97,0,0,0-.2.619v.559a.163.163,0,0,1-.164.161H72.716a.162.162,0,0,1-.164-.161c0-.192,0-.377,0-.564a.959.959,0,0,0-1.918-.06c-.005.206,0,.413,0,.62a.163.163,0,0,1-.164.161H69.428a.162.162,0,0,1-.164-.161,5.7,5.7,0,0,0-.009-.768.849.849,0,0,0-.627-.725.93.93,0,0,0-.942.185.952.952,0,0,0-.329.79c0,.175,0,.35,0,.533A.163.163,0,0,1,67.2,64H64.363a.162.162,0,0,0-.164.161V77.113a.163.163,0,0,0,.164.161H79.036a.162.162,0,0,0,.164-.161V64.158A.163.163,0,0,0,79.036,64H75.972A.161.161,0,0,1,75.809,63.836ZM68.7,76.636h-3.68a.162.162,0,0,1-.164-.161V73.913a.163.163,0,0,1,.164-.161H68.7a.162.162,0,0,1,.164.161v2.561A.162.162,0,0,1,68.7,76.636Zm0-3.543H65.018a.162.162,0,0,1-.164-.161V70.224a.163.163,0,0,1,.164-.161H68.7a.162.162,0,0,1,.164.161v2.708A.163.163,0,0,1,68.7,73.093Zm0-3.685H65.018a.162.162,0,0,1-.164-.161v-2.6a.163.163,0,0,1,.164-.161H68.7a.162.162,0,0,1,.164.161v2.6A.162.162,0,0,1,68.7,69.408Zm4.9,7.23H69.71a.162.162,0,0,1-.164-.161V73.921a.163.163,0,0,1,.164-.161H73.6a.162.162,0,0,1,.164.161v2.557A.16.16,0,0,1,73.6,76.638Zm.172-3.632c0,.05-.077.089-.169.089h-3.9a.162.162,0,0,1-.164-.161v-2.71c0-.089.043-.163.093-.166l.093-.005c1.282,0,2.563,0,3.844,0,.155,0,.208.034.207.2-.007.89,0,1.783-.005,2.672A.747.747,0,0,1,73.776,73.006Zm.005-3.694c0,.05-.074.091-.164.091H69.707a.162.162,0,0,1-.164-.161V66.636c0-.089.043-.161.1-.161h.1c1.282,0,2.563,0,3.844,0,.155,0,.207.036.2.2-.007.852,0,1.7,0,2.552v.091Zm.823.756h3.772a.162.162,0,0,1,.164.161v2.706a.163.163,0,0,1-.164.161H74.6a.162.162,0,0,1-.164-.161V70.227A.162.162,0,0,1,74.6,70.068Zm3.773,6.568H74.6a.162.162,0,0,1-.164-.161V73.918a.163.163,0,0,1,.164-.161h3.773a.162.162,0,0,1,.164.161v2.557A.158.158,0,0,1,78.377,76.636Zm0-7.233H74.6a.162.162,0,0,1-.164-.161V66.648a.163.163,0,0,1,.164-.161h3.773a.162.162,0,0,1,.164.161v2.593A.159.159,0,0,1,78.377,69.4Z" transform="translate(-64.2 -62.274)" fill="currentColor" />
                                                                </svg>
                                                                <span className="blog__items--meta__text">10 Feb 2022</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <h3 className="blog__items--title"> <Link to="blog-details">Ratione nobis the are delectus in impedit? </Link></h3>
                                                    <p className="blog__items--desc">It is a long established fact that a reader will be  by the readable content of a page when looking at.  </p>
                                                    <Link className="blog__items--readmore" to="blog-details">Read more <svg className="blog__items--readmore__icon" xmlns="http://www.w3.org/2000/svg" width="6.2" height="6.2" viewBox="0 0 6.2 6.2">
                                                        <path d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z" transform="translate(-4 -4)" fill="currentColor" />
                                                    </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper__nav--btn swiper-button-next"></div>
                                    <div className="swiper__nav--btn swiper-button-prev"></div>
                                </div>
                            </div>
                        </section>


                    </main>

                </div>

                <Footer />
                <Model />

            </React.Fragment>
        );
    }
}
