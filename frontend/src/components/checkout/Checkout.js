import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Header from "../base/Header";
import Footer from "../base/Footer";
import Model from "../base/Model";
import axiosInstance, {baseURL} from "../api/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default class Checkout extends Component {
    constructor() {
        super();
        this.state = {
          full_name: "",
          phone_number: "",
          street_address: "",
          apartment_address: "",
          default: "false",
          use_default: "false",
          order: {},
          subtotal: 0,
          total: 0,
          wishlist: [],
          address: {},
          order_subtotal: 0,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.useDefaultAddress = this.useDefaultAddress.bind(this);
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
        let res3 = await axiosInstance.get(`/addresses/`);
        let data3 = await res3.data;
        for (var i = 0; i < data3.addresses.length; i++) {
          if (data3.addresses[i].default === true) {
            this.setState({
              address: data3.addresses[i],
            });
          }
        }
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        if (name === "default") {
          if (this.state.default === "false") {
            this.setState({
              default: "true",
            });
          } else {
            this.setState({
              default: "false",
            });
          }
        } else {
          this.setState({
            [name]: value,
          });
        }
      }
    
      async handleSubmit(event) {
        event.preventDefault();
        if (this.state.use_default === "false") {
          try {
            let res = await axiosInstance.post(`/addresses/`, {
              full_name: this.state.full_name,
              phone_number: this.state.phone_number,
              street_address: this.state.street_address,
              apartment_address: this.state.apartment_address,
              default: this.state.default,
            });
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
            this.setState({
              full_name: "",
              phone_number: "",
              street_address: "",
              apartment_address: "",
              default: "false",
              address: res.data.address,
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
        }
    
        try {
          let res1 = await axiosInstance.post(`/checkout/`, {
            address: this.state.address,
          });
          toast.success(res1.data.message, {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            theme: "colored",
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
          });
          window.location = "/";
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
      }
    
      useDefaultAddress() {
        if (document.getElementById("hideable_shipping_form").style.display === "none") {
          this.setState({
            use_default: "false",
          });
          document.getElementById("hideable_shipping_form").style.display = "block";
          document.getElementsByName("full_name")[0].required = true;
          document.getElementsByName("phone_number")[0].required = true;
          document.getElementsByName("street_address")[0].required = true;
          document.getElementsByName("city")[0].required = true;
        } else {
          this.setState({
            use_default: "true",
          });
          document.getElementById("hideable_shipping_form").style.display = "none";
          document.getElementsByName("full_name")[0].required = false;
          document.getElementsByName("phone_number")[0].required = false;
          document.getElementsByName("street_address")[0].required = false;
          document.getElementsByName("city")[0].required = false;
        }
      }
  render() {
    return (
      <React.Fragment>

          <Header/>
          <div className="checkout__page--area">
        <div className="container">
            <div className="checkout__page--inner d-flex">
                <div className="main checkout__mian">
                    <main className="main__content_wrapper section--padding pt-0">
                        <form method="post" onSubmit={this.handleSubmit}>
                            <div className="checkout__content--step section__shipping--address">
                                <div className="section__header mb-25">
                                    <h2 className="section__header--title h3">Shipping address</h2>
                                </div>
                                <div className="section__shipping--address__content">
                                    <div className="row">
                                        <div className="col-12 mb-12">
                                            <div className="checkout__input--list ">
                                                <label>
                                                    <input className="checkout__input--field border-radius-5" 
                                  placeholder="Full Name"
                                  name="full_name"
                                  required
                                  data-error="Name is required."
                                  value={this.state.full_name}
                                  onChange={this.handleInputChange}/>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12 mb-12">
                                            <div className="checkout__input--list">
                                                <label>
                                                    <input className="checkout__input--field border-radius-5"
                                  placeholder="Mobile Number"
                                  name="phone_number"
                                  required="required"
                                  data-error="Phone number is required."
                                  value={this.state.phone_number}
                                  onChange={this.handleInputChange}/>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12 mb-12">
                                            <div className="checkout__input--list">
                                                <label>
                                                    <input className="checkout__input--field border-radius-5" 
                                  placeholder="Address 1"
                                  name="street_address"
                                  required="required"
                                  data-error="Address is required."
                                  value={this.state.street_address}
                                  onChange={this.handleInputChange}/>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12 mb-12">
                                            <div className="checkout__input--list">
                                                <label>
                                                    <input className="checkout__input--field border-radius-5"
                                  placeholder="Address 2"
                                  name="apartment_address"
                                  value={this.state.apartment_address}
                                  onChange={this.handleInputChange}/>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout__checkbox">
                                        <input className="checkout__checkbox--input" id="check2" type="checkbox"/>
                                        <span className="checkout__checkbox--checkmark"></span>
                                        <label className="checkout__checkbox--label" htmlFor="check2">
                                            Save this information for next time</label>
                                    </div>
                                </div>
                            </div>
                            <div className="checkout__content--step__footer d-flex align-items-center">
                                <button className="continue__shipping--btn btn border-radius-5" type="submit">Place Order</button>
                                <Link className="previous__link--content" to="cart.html">Return to cart</Link>
                            </div>
                        </form>
                    </main>
                   
                </div>
                <aside className="checkout__sidebar sidebar">
                    <div className="cart__table checkout__product--table">
                        <table className="cart__table--inner">
                            <tbody className="cart__table--body">

                              {this.state.order.items?.map((item) => {
                                return (
                                  <tr className="cart__table--body__items">
                                      <td className="cart__table--body__list">
                                          <div className="product__image two  d-flex align-items-center">
                                              <div className="product__thumbnail border-radius-5">
                                                  <Link to={`/product/${item.item.slug}`}><img className="border-radius-5" src={`${baseURL}${item.item.image}`} alt={item.item.name}/></Link>
                                                  <span className="product__thumbnail--quantity">1</span>
                                              </div>
                                              <div className="product__description">
                                                  <h3 className="product__description--name h4"><Link to="/">{item.item.name}</Link></h3>
                                              </div>
                                          </div>
                                      </td>
                                      <td className="cart__table--body__list">
                                          <span className="cart__price">Rs.{item.item.price * item.quantity}</span>
                                      </td>
                                  </tr>
                                );
                              })}
                                
                            </tbody>
                        </table> 
                    </div>
                    <div className="checkout__total">
                        <table className="checkout__total--table">
                            <tbody className="checkout__total--body">
                                <tr className="checkout__total--items">
                                    <td className="checkout__total--title text-left">Subtotal </td>
                                    <td className="checkout__total--amount text-right">Rs.{this.state.subtotal}</td>
                                </tr>
                                <tr className="checkout__total--items">
                                    <td className="checkout__total--title text-left">Shipping</td>
                                    <td className="checkout__total--calculated__text text-right">Free</td>
                                </tr>
                            </tbody>
                            <tfoot className="checkout__total--footer">
                                <tr className="checkout__total--footer__items">
                                    <td className="checkout__total--footer__title checkout__total--footer__list text-left">Total </td>
                                    <td className="checkout__total--footer__amount checkout__total--footer__list text-right">Rs.{this.state.total}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </aside>
            </div>
        </div>
    </div>
    <ToastContainer/>
    
            <Footer/>
            <Model/>


          </React.Fragment>
    )
  }
}
