import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Header from "../base/Header";
import Footer from "../base/Footer";
import Model from "../base/Model";
import axiosInstance, { baseURL } from "../api/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Cart extends Component {
    constructor() {
        super();
        this.state = {
            order: {},
            subtotal: 0,
            total: 0,
            wishlist: [],
            order_subtotal: 0,
        };
        this.handleCartSubmit = this.handleCartSubmit.bind(this);
    }

    async componentDidMount() {
        let res1 = await axiosInstance.get(`/order-cart/`);
        let data1 = await res1.data;
        this.setState({
            order: data1.order,
            subtotal: data1.subtotal,
            total: data1.total,
            order_subtotal: data1.subtotal,
        });
        let res2 = await axiosInstance.get(`/wishlist/`);
        let data2 = await res2.data;
        this.setState({
            wishlist: data2.wishlist,
        });
    }
    
  async handleCartSubmit(item_slug) {
    try {
      let res = await axiosInstance.post(`/remove-from-cart/${item_slug}/`);
      toast.success(res.data.message, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    } catch (err) {
      if (err.response.data.message !== undefined) {
        toast.error(err.response.data.message, {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          theme: "colored",
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      } else {
        toast.error(err.message, {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          theme: "colored",
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      }
    }
    let res2 = await axiosInstance.get(`/order-cart/`);
    let data2 = await res2.data;
    this.setState({
      order: data2.order,
      subtotal: data2.subtotal,
      total: data2.total,
      order_subtotal: data2.subtotal,
    });
  }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div>
                    <main className="main__content_wrapper">

                        {/*<!-- Start breadcrumb section -->*/}
                        <section className="breadcrumb__section breadcrumb__bg">
                            <div className="container">
                                <div className="row row-cols-1">
                                    <div className="col">
                                        <div className="breadcrumb__content text-center">
                                            <h1 className="breadcrumb__content--title text-white mb-25">Shopping Cart</h1>
                                            <ul className="breadcrumb__content--menu d-flex justify-content-center">
                                                <li className="breadcrumb__content--menu__items"><Link className="text-white" Link="/">Home</Link ></li>
                                                <li className="breadcrumb__content--menu__items"><span className="text-white">Shopping Cart</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/*<!-- cart section start -->*/}
                        <section className="cart__section section--padding">
                            <div className="container-fluid">
                                <div className="cart__section--inner">
                                    <form action="#">
                                        <h2 className="cart__title mb-40">Shopping Cart</h2>
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="cart__table">
                                                    <table className="cart__table--inner">
                                                        <thead className="cart__table--header">
                                                            <tr className="cart__table--header__items">
                                                                <th className="cart__table--header__list">Product</th>
                                                                <th className="cart__table--header__list">Price</th>
                                                                <th className="cart__table--header__list">Quantity</th>
                                                                <th className="cart__table--header__list">Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="cart__table--body">
                                                            
                                                            {this.state.order.items?.map((item) => {
                                                                return (
                                                                    <tr className="cart__table--body__items">
                                                                        <td className="cart__table--body__list">
                                                                            <div className="cart__product d-flex align-items-center">
                                                                                <button onClick={() => this.handleCartSubmit(item.item.slug)} className="cart__remove--btn">
                                                                                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="16px" height="16px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg>
                                                                                </button>
                                                                                <div className="cart__thumbnail">
                                                                                    <Link to={`/product/${item.item.slug}`}><img className="border-radius-5" src={`${baseURL}${item.item.image}`} alt={item.item.name} /></Link >
                                                                                </div>
                                                                                <div className="cart__content">
                                                                                    <h3 className="cart__content--title h4"><Link to={`/product/${item.item.slug}`}>{item.item.name}</Link ></h3>
                                                                                    <span className="cart__content--variant">WEIGHT: {item.quantity} Kg</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="cart__table--body__list">
                                                                            <span className="cart__price">Rs.{item.item.price}</span>
                                                                        </td>
                                                                        <td className="cart__table--body__list">
                                                                            <span className="cart__price">{item.quantity}</span>
                                                                        </td>
                                                                        <td className="cart__table--body__list">
                                                                            <span className="cart__price end">Rs.{item.item.price * item.quantity}</span>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            })}

                                                        </tbody>
                                                    </table>
                                                    <div className="continue__shopping d-flex justify-content-between">
                                                        <button className="continue__shopping--clear" type="button"></button>
                                                        <Link className="continue__shopping--clear" Link="shop.html">Continue shopping</Link >
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="cart__summary border-radius-10">
                                                    <div className="coupon__code mb-30">
                                                        <h3 className="coupon__code--title">TOTAL</h3>

                                                    </div>

                                                    <div className="cart__summary--total mb-20">
                                                        <table className="cart__summary--total__table">
                                                            <tbody>
                                                                <tr className="cart__summary--total__list">
                                                                    <td className="cart__summary--total__title text-left">SUBTOTAL</td>
                                                                    <td className="cart__summary--amount text-right">Rs.{this.state.subtotal}</td>
                                                                </tr>
                                                                <tr className="cart__summary--total__list">
                                                                    <td className="cart__summary--total__title text-left">GRAND TOTAL</td>
                                                                    <td className="cart__summary--amount text-right">Rs.{this.state.total}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="cart__summary--footer">
                                                        <p className="cart__summary--footer__desc">Shipping & taxes calculated at checkout</p>
                                                        <ul className="d-flex justify-content-between">
                                                            {/* <li><button className="cart__summary--footer__btn btn cart" type="submit">Update Cart</button></li> */}
                                                            <li><Link className="cart__summary--footer__btn btn checkout" to="/checkout">Checkout</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                        <ToastContainer/>



                    </main>
                </div>
                <Footer />
                <Model />
            </React.Fragment>
        )
    }
}
