import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Header from "../base/Header";
import Footer from "../base/Footer";
import Model from "../base/Model";

export default class About extends Component {
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
      <main className="main__content_wrapper">
        
        {/*<!-- Start breadcrumb section -->*/}
        <section className="breadcrumb__section breadcrumb__bg">
            <div className="container">
                <div className="row row-cols-1">
                    <div className="col">
                        <div className="breadcrumb__content text-center">
                            <h1 className="breadcrumb__content--title text-white mb-25">About Us</h1>
                            <ul className="breadcrumb__content--menu d-flex justify-content-center">
                                <li className="breadcrumb__content--menu__items"><Link className="text-white" to="index.html">Home</Link></li>
                                <li className="breadcrumb__content--menu__items"><span className="text-white">About Us</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/*<!-- Start about section -->*/}
        <section className="about__section section--padding mb-95">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about__thumb d-flex">
                            <div className="about__thumb--items">
                                <img className="about__thumb--img border-radius-5 display-block" src="assets/img/other/nepALI.jpg" alt="about-thumb"/>
                            </div>
                            <div className="about__thumb--items position__relative">
                                <img className="about__thumb--img border-radius-5 display-block" src="assets/img/other/nepalih6.jpg" alt="about-thumb"/>
                            
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about__content">
                            <span className="about__content--subtitle text__secondary mb-20"> Why Choose us</span>
                            <h2 className="about__content--maintitle mb-25">We do not buy from the open market & traders.</h2>
                            <p className="about__content--desc mb-20">Agriculture sector engages around 66% of the total population in Nepal. It contributes one-third of the nation's GDP with significant contribution to national economy. It creates a diverse array of jobs and employment from farming to small-scale enterprises.</p>
                            <p className="about__content--desc mb-25">According to the International Labour Organisation, agriculture provides livelihoods for 68 percent of Nepal's population, accounting for 34 percent of the GDP. Nevertheless, Nepal struggles to produce an adequate supply of food for its citizens.

Farmers have limited access to improved seeds, new technologies, and market opportunities. Declining agricultural production has depressed rural economies and increased widespread hunger and urban migration. Thirty-six percent of Nepali children under the age of 5 years suffer from chronic malnutrition, or stunting, which causes debilitating effects such as blindness, brain damage, and infectious diseases, which can result in lifetime damage.

To address these challenges, USAID—under the U.S. Government’s Feed the Future Initiative—works with the Government of Nepal and local development partners to increase agricultural productivity, facilitate access to markets, and improve nutrition by enhancing both the production and consumption of more nutritious foods.

Over the past five years, the Feed the Future Initiative has helped an estimated one million Nepalis increase their incomes through improved agricultural productivity and enhanced nutrition. As a result, poverty dropped by 36 percent between 2013 and 2015, stunting decreased from 49 percent to 36 percent from 2006 to 2016, and average farmer sales increased from $250 per year to an estimated $700 per year in the 24 south-western and central districts where these programs operate.

Under the U.S. Government’s new Global Food Security Strategy, USAID will continue to work with Nepal—one of 12 focus countries worldwide—to scale up successful approaches to improve food security and nutrition.</p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        
        {/*<!-- Start counterup banner section -->*/}
        <div className="counterup__banner--section counterup__banner__bg2" id="funfactId">
            <div className="container">
                <div className="row row-cols-1 align-items-center">
                    <div className="col">
                        <div className="counterup__banner--inner position__relative d-flex align-items-center justify-content-between">
                            <div className="counterup__banner--items text-center">
                                <h2 className="counterup__banner--items__text text-white">YEARS OF <br/>
                                    FOUNDATION</h2>
                                <span className="counterup__banner--items__number js-counter text-white" data-count="50">0</span>
                            </div>
                            <div className="counterup__banner--items text-center">
                                <h2 className="counterup__banner--items__text text-white">SKILLED TEAM <br/>
                                    MEMBERS </h2>
                                <span className="counterup__banner--items__number js-counter text-white" data-count="100">0</span>
                            </div>
                            <div className="counterup__banner--items text-center">
                                <h2 className="counterup__banner--items__text text-white">HAPPY <br/>
                                    CUSTOMERS</h2>
                                <span className="counterup__banner--items__number js-counter text-white" data-count="80">0</span>
                            </div>
                            <div className="counterup__banner--items text-center">
                                <h2 className="counterup__banner--items__text text-white">MONTHLY <br/>
                                    ORDERS</h2>
                                <span className="counterup__banner--items__number js-counter text-white" data-count="70">0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       

     
        

       
       
        </main>



      </div>
      <Footer/>
      <Model/>
      </React.Fragment>
    )
  }
}
