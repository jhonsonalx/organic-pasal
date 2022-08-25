import React, { Component } from "react";
import Header from "../base/Header";
import Footer from "../base/Footer";
import Model from "../base/Model";
import { Link } from "react-router-dom";

export default class Blog extends Component {
    constructor() {
        super();
        this.state = {
          Blogs: [],
          order: [],
          wishlist: [],
          order_subtotal: 0,
        };
      }
    
      async componentDidMount() {
        let res = await axiosInstance.get(`/blogs/`);
        let data = await res.data;
        this.setState({
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
            <Header/>
            <div>
            <main className="main__content_wrapper">
        
        {/* <!-- Start breadcrumb section --> */}
        <section className="breadcrumb__section breadcrumb__bg">
            <div className="container">
                <div className="row row-cols-1">
                    <div className="col">
                        <div className="breadcrumb__content text-center">
                            <h1 className="breadcrumb__content--title text-white mb-25">Blog Details</h1>
                            <ul className="breadcrumb__content--menu d-flex justify-content-center">
                                <li className="breadcrumb__content--menu__items">< Link className="text-white"  to="index">Home </Link></li>
                                <li className="breadcrumb__content--menu__items"><span className="text-white">Blog Details</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       

        {/* <!-- Start blog details section --> */}
        <section className="blog__details--section section--padding">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xxl-9 col-xl-8 col-lg-8">
                        <div className="blog__details--wrapper">
                            <div className="entry__blog">
                                <div className="blog__post--header mb-30">
                                    <h2 className="post__header--title mb-15">NEPALI FARMER</h2>
                                      
                                </div>
                                <div className="blog__thumbnail mb-30">
                                    <img className="blog__thumbnail--img border-radius-10" src="assets/img/blog/nepalig5.jpg" alt="blog-img"/>
                                </div>
                                <div className="blog__details--content">
                                    <h3 className="blog__details--content__subtitle mb-25">ABOUT AGRICULTURE IN NEPAL</h3>
                                    <p className="blog__details--content__desc mb-20">In Nepal, the economy is dominated by agriculture. In the late 1980s, it was the livelihood for more than 90% of the population, although only approximately 20% of the total land area was cultivable, it accounted for, on average, about 60% of the GDP and approximately 75% of exports.[1] Since the formulation of the Fifth Five-Year Plan (1975–80), agriculture has been the highest priority because economic growth was dependent on both increasing the productivity of existing crops and diversifying the agricultural base for use as industrial inputs.</p>
                                    <p className="blog__details--content__desc mb-30"> According to the World Bank, agriculture is the main source of food, income, and employment for the majority.[2] It provides about 33% of the gross domestic product (GDP).[3]

In trying to increase agricultural production and diversify the agricultural base, the government focused on irrigation, the use of fertilizers and insecticides, the introduction of new implements and new seeds of high-yield varieties, and the provision of credit. The lack of distribution of these inputs, as well as problems in obtaining supplies, however, inhibited progress.[1] Although land reclamation and settlement were occurring in the Terai Region, environmental degradation and ecological imbalance resulting from deforestation also prevented progress.</p>
                                    <blockquote className="blockquote__content bg__gray--color mb-30">
                                        <p className="blockquote__content--desc">The production of crops fluctuated widely as a result of these factors as well as weather conditions. Although agricultural production grew at an average annual rate of 2.4 percent from 1974 to 1989, it did not keep pace with population growth, which increased at an average annual rate of 2.6 percent over the same period. Further, the annual average growth rate of food grain production was only 1.2 percent during the same period.

There were some successes. Fertile lands in the Terai Region and hardworking peasants in the Hill Region provided greater supplies of food staples (mostly rice and corn), increasing the daily caloric intake of the population locally to over 2,000 calories per capita in 1988 from about 1,900 per capita in 1965. Moreover, areas with access to irrigation facilities increased from approximately 6,200 hectares in 1956 to nearly 583,000 hectares by 1990.

Rice is the most important cereal crop. In 1966 total rice production amounted to a little more than 1 million tons; by 1989 more than 3 million tons were produced. Fluctuation in rice production was very common because of changes in rainfall; overall, however, rice production had increased following the introduction of new cultivation techniques as well as increases in cultivated land. By 1988 approximately 3.9 million hectares of land were under paddy cultivation. Many people in Nepal devote their lives to cultivating rice to survive. In 1966 approximately 500,000 tons of corn, the second major food crop, were produced. By 1989 corn production had increased to over 1 million tons.</p>
                                    </blockquote>
                                    <p className="blog__details--content__desc">Other food crops included wheat, millet, barley, and coffee, but their contribution to the agricultural sector was small.[1] Increased production of cash crops, used as input to new industries, dominated in the early 1970s. Sugarcane and tobacco also showed considerable increases in production from the 1970s to the 1980s. Potatoes and oilseed production had shown moderate growth since 1980. Medicinal herbs were grown in the north on the slopes of the Himalayas, but increases in production were limited by continued environmental degradation. According to government statistics, production of milk, meat, and fruit had improved but as of the late 1980s still had not reached a point where nutritionally balanced food was available to most people. Additionally, the increases in meat and milk production had not met the desired level of output as of 1989. Nepal has more than 50% of people engaged in agriculture. Food grains contributed 76 percent of total crop production in 1988–89. In 1989-90 despite poor weather conditions and a lack of agricultural inputs, particularly fertilizer, there was a production increase of 5 percent. In fact, severe weather fluctuations often affected production levels.[1] Some of the gains in production through the 1980s were due to increased productivity of the work force (about 7 percent over fifteen years); other gains were due to increased land use and favorable weather conditions. According to Statistical Information on Nepalese Agriculture (2008–2009) only 65.6% of people depends on agriculture and 21% of land is cultivated whereas 6.99% of land is uncultivated.</p>
                                </div>
                            </div>
                            <div className="blog__tags--social__media d-flex align-items-center justify-content-between">
                                <div className="blog__tags--media d-flex align-items-center">
                                   
                                    
                                </div>
                                <div className="blog__social--media d-flex align-items-center">
                                    <label className="blog__social--media__title">Social Share :</label>
                                    <ul className="d-flex">
                                        <li className="blog__social--media__list">
                                            < Link className="blog__social--media__link" target="_blank"  to="https://www.facebook.com/">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="7.667" height="16.524" viewBox="0 0 7.667 16.524">
                                                    <path data-name="Path 237" d="M967.495,353.678h-2.3v8.253h-3.437v-8.253H960.13V350.77h1.624v-1.888a4.087,4.087,0,0,1,.264-1.492,2.9,2.9,0,0,1,1.039-1.379,3.626,3.626,0,0,1,2.153-.6l2.549.019v2.833h-1.851a.732.732,0,0,0-.472.151.8.8,0,0,0-.246.642v1.719H967.8Z" transform="translate(-960.13 -345.407)" fill="currentColor"></path>
                                                </svg>
                                                <span className="visually-hidden">Facebook</span>
                                             </Link>
                                        </li>
                                        <li className="blog__social--media__list">
                                            < Link className="blog__social--media__link" target="_blank"  to="https://twitter.com/">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.489" height="13.384" viewBox="0 0 16.489 13.384">
                                                    <path data-name="Path 303" d="M966.025,1144.2v.433a9.783,9.783,0,0,1-.621,3.388,10.1,10.1,0,0,1-1.845,3.087,9.153,9.153,0,0,1-3.012,2.259,9.825,9.825,0,0,1-4.122.866,9.632,9.632,0,0,1-2.748-.4,9.346,9.346,0,0,1-2.447-1.11q.4.038.809.038a6.723,6.723,0,0,0,2.24-.376,7.022,7.022,0,0,0,1.958-1.054,3.379,3.379,0,0,1-1.958-.687,3.259,3.259,0,0,1-1.186-1.666,3.364,3.364,0,0,0,.621.056,3.488,3.488,0,0,0,.885-.113,3.267,3.267,0,0,1-1.374-.631,3.356,3.356,0,0,1-.969-1.186,3.524,3.524,0,0,1-.367-1.5v-.057a3.172,3.172,0,0,0,1.544.433,3.407,3.407,0,0,1-1.1-1.214,3.308,3.308,0,0,1-.4-1.609,3.362,3.362,0,0,1,.452-1.694,9.652,9.652,0,0,0,6.964,3.538,3.911,3.911,0,0,1-.075-.772,3.293,3.293,0,0,1,.452-1.694,3.409,3.409,0,0,1,1.233-1.233,3.257,3.257,0,0,1,1.685-.461,3.351,3.351,0,0,1,2.466,1.073,6.572,6.572,0,0,0,2.146-.828,3.272,3.272,0,0,1-.574,1.083,3.477,3.477,0,0,1-.913.8,6.869,6.869,0,0,0,1.958-.546A7.074,7.074,0,0,1,966.025,1144.2Z" transform="translate(-951.23 -1140.849)" fill="currentColor"></path>
                                                </svg>
                                                <span className="visually-hidden">Twitter</span>
                                             </Link>
                                        </li>
                                        <li className="blog__social--media__list">
                                            < Link className="blog__social--media__link" target="_blank"  to="https://www.instagram.com/">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17.497" height="17.492" viewBox="0 0 19.497 19.492">
                                                    <path  data-name="Icon awesome-instagram" d="M9.747,6.24a5,5,0,1,0,5,5A4.99,4.99,0,0,0,9.747,6.24Zm0,8.247A3.249,3.249,0,1,1,13,11.238a3.255,3.255,0,0,1-3.249,3.249Zm6.368-8.451A1.166,1.166,0,1,1,14.949,4.87,1.163,1.163,0,0,1,16.115,6.036Zm3.31,1.183A5.769,5.769,0,0,0,17.85,3.135,5.807,5.807,0,0,0,13.766,1.56c-1.609-.091-6.433-.091-8.042,0A5.8,5.8,0,0,0,1.64,3.13,5.788,5.788,0,0,0,.065,7.215c-.091,1.609-.091,6.433,0,8.042A5.769,5.769,0,0,0,1.64,19.341a5.814,5.814,0,0,0,4.084,1.575c1.609.091,6.433.091,8.042,0a5.769,5.769,0,0,0,4.084-1.575,5.807,5.807,0,0,0,1.575-4.084c.091-1.609.091-6.429,0-8.038Zm-2.079,9.765a3.289,3.289,0,0,1-1.853,1.853c-1.283.509-4.328.391-5.746.391S5.28,19.341,4,18.837a3.289,3.289,0,0,1-1.853-1.853c-.509-1.283-.391-4.328-.391-5.746s-.113-4.467.391-5.746A3.289,3.289,0,0,1,4,3.639c1.283-.509,4.328-.391,5.746-.391s4.467-.113,5.746.391a3.289,3.289,0,0,1,1.853,1.853c.509,1.283.391,4.328.391,5.746S17.855,15.705,17.346,16.984Z" transform="translate(0.004 -1.492)" fill="currentColor"></path>
                                                </svg>
                                                <span className="visually-hidden">Instagram</span>
                                             </Link>
                                        </li>
                                        <li className="blog__social--media__list">
                                            < Link className="blog__social--media__link" target="_blank"  to="https://www.youtube.com/">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.49" height="11.582" viewBox="0 0 16.49 11.582">
                                                    <path data-name="Path 321" d="M967.759,1365.592q0,1.377-.019,1.717-.076,1.114-.151,1.622a3.981,3.981,0,0,1-.245.925,1.847,1.847,0,0,1-.453.717,2.171,2.171,0,0,1-1.151.6q-3.585.265-7.641.189-2.377-.038-3.387-.085a11.337,11.337,0,0,1-1.5-.142,2.206,2.206,0,0,1-1.113-.585,2.562,2.562,0,0,1-.528-1.037,3.523,3.523,0,0,1-.141-.585c-.032-.2-.06-.5-.085-.906a38.894,38.894,0,0,1,0-4.867l.113-.925a4.382,4.382,0,0,1,.208-.906,2.069,2.069,0,0,1,.491-.755,2.409,2.409,0,0,1,1.113-.566,19.2,19.2,0,0,1,2.292-.151q1.82-.056,3.953-.056t3.952.066q1.821.067,2.311.142a2.3,2.3,0,0,1,.726.283,1.865,1.865,0,0,1,.557.49,3.425,3.425,0,0,1,.434,1.019,5.72,5.72,0,0,1,.189,1.075q0,.095.057,1C967.752,1364.1,967.759,1364.677,967.759,1365.592Zm-7.6.925q1.49-.754,2.113-1.094l-4.434-2.339v4.66Q958.609,1367.311,960.156,1366.517Z" transform="translate(-951.269 -1359.8)" fill="currentColor"></path>
                                                </svg>
                                                <span className="visually-hidden">Youtube</span>
                                             </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="related__post--area mb-50">
                                <div className="section__heading text-center mb-30">
                                    <span className="section__heading--subtitle"></span>
                                    <h2 className="section__heading--maintitle">Related Articles</h2>
                                </div>
                                <div className="row row-cols-md-2 row-cols-sm-2 row-cols-1 mb--n28">
                                    <div className="col mb-28">
                                        <div className="related__post--items">
                                            <div className="related__post--thumb border-radius-10 mb-20">
                                                < Link className="display-block"  to="blog-details"><img className="related__post--img display-block border-radius-10" src="assets/img/blog/nepali4.jpg" alt="related-post"/> </Link>
                                            </div>
                                            <div className="related__post--text">
                                                <h3 className="related__post--title mb-10">< Link className="related__post--title__link"  to="blog-details">Post With Gallery </Link></h3>
                                                <span className="related__post--deta">February 14, 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-28">
                                        <div className="related__post--items">
                                            <div className="related__post--thumb border-radius-10 mb-20">
                                                < Link className="display-block"  to="blog-details"><img className="related__post--img display-block border-radius-10" src="assets/img/blog/nepali9.jpg" alt="related-post"/> </Link>
                                            </div>
                                            <div className="related__post--text">
                                                <h3 className="related__post--title mb-10">< Link className="related__post--title__link"  to="blog-details">Post With Vedio </Link></h3>
                                                <span className="related__post--deta">February 14, 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="comment__box">
                                <div className="reviews__comment--area2 mb-50">
                                    <h2 className="reviews__comment--reply__title style2 h3 mb-25">Recent Comment</h2>
                                    <div className="reviews__comment--inner">
                                        <div className="reviews__comment--list d-flex">
                                            <div className="reviews__comment--thumb">
                                                <img src="assets/img/other/" alt="comment-thumb"/>
                                            </div>
                                            <div className="reviews__comment--content ">
                                                <div className="reviews__comment--top d-flex justify-content-between">
                                                    <div className="reviews__comment--top__left">
                                                        <h3 className="reviews__comment--content__title2 h4">suniel magar</h3>
                                                        <span className="reviews__comment--content__date2">February 14, 2022</span>
                                                    </div>
                                                    <button className="comment__reply--btn btn">Reply</button>
                                                </div>
                                                <p className="reviews__comment--content__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ex repellat officiis neque. Veniam, rem nesciunt. Assumenda distinctio, autem error repellat eveniet ratione dolor facilis accusantium amet pariatur, non eius!</p>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                                <div className="reviews__comment--reply__area">
                                    <form action="#">
                                        <h3 className="reviews__comment--reply__title mb-20">Leave A Comment</h3>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6 mb-20">
                                                <label>
                                                    <input className="reviews__comment--reply__input" placeholder="Your Name...." type="text"/>
                                                </label>
                                            </div>  
                                            <div className="col-lg-4 col-md-6 mb-20">
                                                <label>
                                                    <input className="reviews__comment--reply__input" placeholder="Your Email...." type="email"/>
                                                </label>
                                            </div> 
                                            <div className="col-lg-4 col-md-6 mb-20">
                                                <label>
                                                    <input className="reviews__comment--reply__input" placeholder="Your Website...." type="text"/>
                                                </label>
                                            </div> 
                                            <div className="col-12 mb-15">
                                                <textarea className="reviews__comment--reply__textarea" placeholder="Your Comments...." ></textarea>
                                            </div> 
                                             
                                        </div>
                                        <button className="btn text-white" data-hover="Submit" type="submit">SUBMIT</button>
                                    </form>   
                                </div> 
                            </div> 
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-4">
                        <div className="blog__sidebar--widget left widget__area">
                            <div className="single__widget widget__search widget__bg">
                                <h2 className="widget__title h3">Search Objects</h2>
                                <form className="widget__search--form" action="#">
                                    <label>
                                        <input className="widget__search--form__input" placeholder="Search..." type="text"/>
                                    </label>
                                    <button className="widget__search--form__btn" aria-label="search button">
                                        <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"></path></svg>
                                    </button>
                                </form>
                            </div>
                            
                            <div className="single__widget widget__bg">
                                <h2 className="widget__title h3">Post Article</h2>
                                <div className="product__grid--inner">
                                    <div className="product__grid--items d-flex align-items-center">
                                        <div className="product__grid--items--thumbnail">
                                            < Link className="product__items--link"  to="blog-details">
                                                <img className="product__grid--items__img product__primary--img" src="assets/img/product/bhindi.jpg" alt="product-img"/>
                                               
                                             </Link>
                                        </div>
                                        <div className="product__grid--items--content">
                                            <h3 className="product__grid--items--content__title h4"><Link to="blog-details">BHINDI</Link></h3>
                                            <span className="meta__deta">February 14, 2022</span>
                                        </div>
                                    </div>
                                    <div className="product__grid--items d-flex align-items-center">
                                        <div className="product__grid--items--thumbnail">
                                            < Link className="product__items--link"  to="blog-details">
                                                <img className="product__grid--items__img product__primary--img" src="assets/img/product/pili.jpg" alt="product-img"/>
                                               
                                             </Link>
                                        </div>
                                        <div className="product__grid--items--content">
                                            <h3 className="product__grid--items--content__title h4"><Link to="blog-details">RATO KURSANI</Link></h3>
                                            <span className="meta__deta">February 14, 2022</span>
                                        </div>
                                    </div>
                                    <div className="product__grid--items d-flex align-items-center">
                                        <div className="product__grid--items--thumbnail">
                                            < Link className="product__items--link"  to="blog-details">
                                                <img className="product__grid--items__img product__primary--img" src="assets/img/product/naspati.JPG" alt="product-img"/>
                                               
                                             </Link>
                                        </div>
                                        <div className="product__grid--items--content">
                                            <h3 className="product__grid--items--content__title h4"><Link to="blog-details">NASPATI</Link></h3>
                                            <span className="meta__deta">February 14, 2022</span>
                                        </div>
                                    </div>
                                </div>
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

