import React, { Component } from 'react'
import Header from "../base/Header";
import Footer from "../base/Footer";
import Model from "../base/Model";
import { Link } from "react-router-dom";
import axiosInstance, { baseURL } from "../api/axiosInstance";
import dateFormat from "dateformat";

export default class Myaccount extends Component {
    constructor() {
        super();
        this.state = {
            order: [],
            wishlist: [],
            orders: [],
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
        let res3 = await axiosInstance.get(`/orders/`);
        let data3 = await res3.data;
        this.setState({
            orders: data3.orders,
        });
    }

    render() {
        return (
            <React.Fragment>
                <Header />

                <main className="main__content_wrapper">

                    {/* <!-- Start breadcrumb section --> */}
                    <section className="breadcrumb__section breadcrumb__bg">
                        <div className="container">
                            <div className="row row-cols-1">
                                <div className="col">
                                    <div className="breadcrumb__content text-center">
                                        <h1 className="breadcrumb__content--title text-white mb-25">My Account</h1>
                                        <ul className="breadcrumb__content--menu d-flex justify-content-center">
                                            <li className="breadcrumb__content--menu__items"><Link className="text-white" to="index">Home</Link></li>
                                            <li className="breadcrumb__content--menu__items"><span className="text-white">My Account</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- my account section start --> */}
                    <section className="my__account--section section--padding">
                        <div className="container">

                            <p className="account__welcome--text">Hello, User welcome to your dashboard!</p>
                            <div className="my__account--section__inner border-radius-10 d-flex">
                                <div className="account__left--sidebar">
                                    <h2 className="account__content--title h3 mb-20">My Profile</h2>
                                    <ul className="account__menu">
                                        <li className="account__menu--list active"><Link to="my-account">Dashboard</Link></li>
                                        <li className="account__menu--list"><Link to="my-account-2">Addresses</Link></li>
                                        <li className="account__menu--list"><Link to="wishlist">Wishlist</Link></li>
                                        <li className="account__menu--list"><Link to="login">Log Out</Link></li>
                                    </ul>
                                </div>
                                <div className="account__wrapper">
                                    <div className="account__content">
                                        <h2 className="account__content--title h3 mb-20">Orde History</h2>
                                        <div className="account__table--area">
                                            <table className="account__table">
                                                <thead className="account__table--header">
                                                    <tr className="account__table--header__child">
                                                        <th className="account__table--header__child--items">Order</th>
                                                        <th className="account__table--header__child--items">Date</th>
                                                        <th className="account__table--header__child--items">Payment Status</th>
                                                        <th className="account__table--header__child--items">Fulfillment Status</th>
                                                        <th className="account__table--header__child--items">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="account__table--body mobile__none">

                                                    {this.state.orders?.map((order) => {
                                                        return (
                                                            <tr className="account__table--body__child">
                                                                <td className="account__table--body__child--items">#{order.ref_code}</td>
                                                                <td className="account__table--body__child--items">
                                                                    {dateFormat(
                                                                        order.ordered_date,
                                                                        "mmmm dS, yyyy"
                                                                    )}    
                                                                </td>
                                                                <td className="account__table--body__child--items">Cash on Delivery</td>
                                                                <td className="account__table--body__child--items">
                                                                {order.status == 0 ? (
                                                                    <span className="ft-medium small rounded px-3 py-1 text-warning bg-light-warning">
                                                                        Pending
                                                                    </span>
                                                                    ) : order.status == 1 ? (
                                                                    <span className="ft-medium small rounded px-3 py-1 text-warning bg-light-warning">
                                                                        Processing
                                                                    </span>
                                                                    ) : order.status == 2 ? (
                                                                    <span className="ft-medium small rounded px-3 py-1 text-success bg-light-success">
                                                                        Being Delivered
                                                                    </span>
                                                                    ) : order.status == 3 ? (
                                                                    <span className="ft-medium small rounded px-3 py-1 text-success bg-light-success">
                                                                        Received
                                                                    </span>
                                                                    ) : (
                                                                    <span className="ft-medium small rounded px-3 py-1 text-danger bg-light-danger">
                                                                        Canceled
                                                                    </span>
                                                                    )}
                                                                </td>
                                                                <td className="account__table--body__child--items">Rs.{order.total_price}</td>
                                                            </tr>
                                                        );
                                                    })}

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>





                </main>
                <Footer />
                <Model />
            </React.Fragment>
        )
    }
}
