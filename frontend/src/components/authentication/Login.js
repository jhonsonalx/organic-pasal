import React, { Component } from 'react'
import Header from "../base/Header";
import Footer from "../base/Footer";
import Model from "../base/Model";
import { Link } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      r_email: "",
      r_password: "",
      c_password: "",
      order: [],
      wishlist: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
  }

  async componentDidMount() {
    let res1 = await axiosInstance.get(`/order-cart/`);
    let data1 = await res1.data;
    this.setState({
      order: data1.order,
    });
    let res2 = await axiosInstance.get(`/wishlist/`);
    let data2 = await res2.data;
    this.setState({
      wishlist: data2.wishlist,
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      let res = await axiosInstance.post(`/login/`, {
        email: this.state.email,
        password: this.state.password,
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
      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);
      this.setState({
        email: "",
        password: "",
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

  async handleSubmitRegister(event) {
    event.preventDefault();
    try {
      let res = await axiosInstance.post(`/register/`, {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.r_email,
        password: this.state.r_password,
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
        first_name: "",
        last_name: "",
        r_email: "",
        r_password: "",
        c_password: "",
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
                    <h1 className="breadcrumb__content--title text-white mb-25">Account</h1>
                    <ul className="breadcrumb__content--menu d-flex justify-content-center">
                      <li className="breadcrumb__content--menu__items"><Link className="text-white" to="index">Home</Link></li>
                      <li className="breadcrumb__content--menu__items"><span className="text-white">Account</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Start login section  --> */}
          <div className="login__section section--padding mb-80">
            <div className="container">
              <div className="login__section--inner">
                <div className="row row-cols-md-2 row-cols-1">
                  <form method="post" onSubmit={this.handleSubmit}>
                    <div className="col">
                      <div className="account__login">
                        <div className="account__login--header mb-25">
                          <h2 className="account__login--header__title h3 mb-10">Login</h2>
                          <p className="account__login--header__desc">Login if you are a returning customer.</p>
                        </div>
                        <div className="account__login--inner">
                          <label>
                            <input className="account__login--input" placeholder="Email Address" type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
                          </label>
                          <label>
                            <input className="account__login--input" placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                          </label>
                          <div className="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center">
                            <div className="account__login--remember position__relative">
                              <input className="checkout__checkbox--input" id="check1" type="checkbox" />
                              <span className="checkout__checkbox--checkmark"></span>
                              <label className="checkout__checkbox--label login__remember--label" for="check1">
                                Remember me</label>
                            </div>
                            <button className="account__login--forgot" type="submit">Forgot Your Password?</button>
                          </div>
                          <button className="account__login--btn btn" type="submit">Login</button>
                          <div className="account__login--divide">
                            <span className="account__login--divide__text">OR</span>
                          </div>
                          <div className="account__social d-flex justify-content-center mb-15">
                            <Link className="account__social--link facebook" target="_blank" to="https://www.facebook.com/">Facebook</Link>
                            <Link className="account__social--link google" target="_blank" to="https://www.google.com/">Google</Link>
                            <Link className="account__social--link twitter" target="_blank" to="https://twitter.com/">Twitter</Link>
                          </div>
                          {/* <p className="account__login--signup__text">Don't Have an Account? <button type="submit">Sign up now</button></p> */}
                        </div>
                      </div>
                    </div>
                  </form>

                  <form method="post" onSubmit={this.handleSubmitRegister}>
                    <div className="col">
                      <div className="account__login register">
                        <div className="account__login--header mb-25">
                          <h2 className="account__login--header__title h3 mb-10">Create an Account</h2>
                          <p className="account__login--header__desc">Register here if you are a new customer</p>
                        </div>
                        <div className="account__login--inner">
                          <label>
                            <input className="account__login--input" placeholder="First Name" type="text" name="first_name" value={this.state.first_name} onChange={this.handleInputChange} />
                          </label>
                          <label>
                            <input className="account__login--input" placeholder="Last Name" type="text" name="last_name" value={this.state.last_name} onChange={this.handleInputChange} />
                          </label>
                          <label>
                            <input className="account__login--input" placeholder="Email Address" type="email" name="r_email" value={this.state.r_email} onChange={this.handleInputChange} />
                          </label>
                          <label>
                            <input className="account__login--input" placeholder="Password" type="password" name="r_password" value={this.state.r_password} onChange={this.handleInputChange} />
                          </label>
                          <label>
                            <input className="account__login--input" placeholder="Confirm Password" type="password" name="c_password" value={this.state.c_password} onChange={this.handleInputChange} />
                          </label>
                          <button className="account__login--btn btn mb-10" type="submit">Submit & Register</button>
                          <div className="account__login--remember position__relative">
                            <input className="checkout__checkbox--input" id="check2" type="checkbox" />
                            <span className="checkout__checkbox--checkmark"></span>
                            <label className="checkout__checkbox--label login__remember--label" for="check2">
                              I have read and agree to the terms & conditions</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>





        </main>
        <Footer />
        <Model />

      </React.Fragment>
    )
  }
}

