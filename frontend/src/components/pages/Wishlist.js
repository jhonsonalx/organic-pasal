import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Header from "../base/Header";
import Footer from "../base/Footer";
import Model from "../base/Model";
import axiosInstance from "../api/axiosInstance";
import { baseURL } from "../api/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Wishlist extends Component {
    constructor() {
        super();
        this.state = {
          order: [],
          wishlist: [],
          order_subtotal: 0,
        };
        this.handleWishlistSubmit = this.handleWishlistSubmit.bind(this);
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
      
  async handleWishlistSubmit(item_slug) {
    try {
      let res = await axiosInstance.get(`/remove-from-wishlist/${item_slug}/`);
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
                   
                        <h2  className="cart__title mb-40">Wishlist</h2>
                        <div  className="cart__table">
                            <table  className="cart__table--inner">
                                <thead  className="cart__table--header">
                                    <tr  className="cart__table--header__items">
                                        <th  className="cart__table--header__list">#</th>
                                        <th  className="cart__table--header__list">Product</th>
                                        <th  className="cart__table--header__list">Price</th>
                                        <th  className="cart__table--header__list text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody  className="cart__table--body">
                                    {this.state.wishlist?.map((item) => {
                                        return (    
                                            <tr  className="cart__table--body__items">
                                                <td  className="cart__table--body__list">
                                                    <div  className="cart__product d-flex align-items-center">
                                                        <div  className="cart__thumbnail">
                                                            <Link to={`/product/${item.product.slug}`}><img  className="border-radius-5"  src={`${baseURL}${item.product.image}`} alt={item.product.name}/></Link>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div  className="cart__content">
                                                        <h3  className="cart__content--title h4"><Link to={`/product/${item.product.slug}`}>{item.product.name}</Link></h3>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div  className="cart__content">
                                                        {item.product.price}
                                                    </div>
                                                </td>
                                                <td>
                                                    <button onClick={() => this.handleWishlistSubmit(item.product.slug)} className="cart__remove--btn">
                                                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="16px" height="16px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                        
                                </tbody>
                            </table> 
                            <div  className="continue__shopping d-flex justify-content-between">
                                <Link className="continue__shopping--link" to="/">Continue shopping</Link>
                                <Link className="continue__shopping--clear" to="/shop">View All Products</Link>
                            </div>
                        </div> 
                   
                </div>
            </div>     
        </section>
       
        <ToastContainer/>

     
       


    </main>




      </div>
      <Footer/>
      <Model/>


      </React.Fragment>
    )
  }
}

