import React from 'react'
import './assets/css/bootstrap.min.css'
import './assets/css/magnific-popup.css'
import './assets/css/jquery-ui.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/owl.theme.default.min.css'
import './assets/css/aos.css'
import './assets/css/style.css'
import './assets/fonts/icomoon/style.css'
import './website.css'
import image1 from './assets/images/men.jpg'
import blog_1 from './assets/images/blog_1.jpg'
import children from './assets/images/children.jpg'
import cloth_1 from './assets/images/cloth_1.jpg'
import cloth_2 from './assets/images/cloth_2.jpg'
import cloth_3 from './assets/images/cloth_3.jpg'
import hero_2 from './assets/images/hero_1.jpg'
import shoe_1 from './assets/images/shoe_1.jpg'
import women from './assets/images/women.jpg'


const SliderComp = () => {
    return (
        <div>
            <div className="site-wrap">
                <div className="site-blocks-cover back-img">
                    <div className="container">
                        <div className="row align-items-start align-items-md-center justify-content-end">
                            <div className="col-md-5 text-center text-md-left pt-5 pt-md-0">
                                <h1 className="mb-2">Finding Your Perfect Shoes</h1>
                                <div className="intro-text text-center text-md-left">
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla. </p>
                                    <p>
                                        <a href="/Shop" className="btn btn-sm btn-primary">Shop Now</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Productdetail />
        </div>
    )
}

//-------------------------- next Componennt -------------------------

const Productdetail = () => {
    return (
        <div>
            <div className="site-wrap">
                <div className="site-section site-section-sm site-blocks-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" >
                                <div className="icon mr-4 align-self-start">
                                    <span className="icon-truck"></span>
                                </div>
                                <div className="text">
                                    <h2 className="text-uppercase">Free Shipping</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" >
                                <div className="icon mr-4 align-self-start">
                                    <span className="icon-refresh2"></span>
                                </div>
                                <div className="text">
                                    <h2 className="text-uppercase">Free Returns</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4"  >
                                <div className="icon mr-4 align-self-start">
                                    <span className="icon-help"></span>
                                </div>
                                <div className="text">
                                    <h2 className="text-uppercase">Customer Support</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Productimg />
        </div>
    )
}

//-------------------------- next Componennt -------------------------

const Productimg = () => {
    return (
        <div>
            <div className="site-wrap">
                <div className="site-section site-blocks-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" >
                                <a className="block-2-item" href="#">
                                    <figure className="image">
                                        <img src={women} alt="" className="img-fluid" />
                                    </figure>
                                    <div className="text">
                                        <span className="text-uppercase">Collections</span>
                                        <h3>Women</h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" >
                                <a className="block-2-item" href="#">
                                    <figure className="image">
                                        <img src={children} alt="" className="img-fluid" />
                                    </figure>
                                    <div className="text">
                                        <span className="text-uppercase">Collections</span>
                                        <h3>Children</h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
                                <a className="block-2-item" href="#">
                                    <figure className="image">
                                        <img src={image1} alt="" className="img-fluid" />
                                    </figure>
                                    <div className="text">
                                        <span className="text-uppercase">Collections</span>
                                        <h3>Men</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Producttext />
        </div>
    )
}

//-------------------------- next Componennt -------------------------

const Producttext = () => {
    return (
        <div>
            <div className="site-wrap">
                <div className="site-section block-3 site-blocks-2 bg-light">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-7 site-section-heading text-center pt-4">
                                <h2>Featured Products</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="nonloop-block-3 owl-carousel">
                                    <div className="item">
                                        <div className="block-4 text-center">
                                            <figure className="block-4-image">
                                                <img src={cloth_1} alt="Image placeholder" className="img-fluid" />
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><a href="#">Tank Top</a></h3>
                                                <p className="mb-0">Finding perfect t-shirt</p>
                                                <p className="text-primary font-weight-bold">$50</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="block-4 text-center">
                                            <figure className="block-4-image">
                                                <img src={shoe_1} alt="Image placeholder" className="img-fluid" />
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><a href="#">Corater</a></h3>
                                                <p className="mb-0">Finding perfect products</p>
                                                <p className="text-primary font-weight-bold">$50</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="block-4 text-center">
                                            <figure className="block-4-image">
                                                <img src={cloth_2} alt="Image placeholder" className="img-fluid" />
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><a href="#">Polo Shirt</a></h3>
                                                <p className="mb-0">Finding perfect products</p>
                                                <p className="text-primary font-weight-bold">$50</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="block-4 text-center">
                                            <figure className="block-4-image">
                                                <img src={cloth_3} alt="Image placeholder" className="img-fluid" />
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><a href="#">T-Shirt Mockup</a></h3>
                                                <p className="mb-0">Finding perfect products</p>
                                                <p className="text-primary font-weight-bold">$50</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="block-4 text-center">
                                            <figure className="block-4-image">
                                                <img src={shoe_1} alt="Image placeholder" className="img-fluid" />
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3><a href="#">Corater</a></h3>
                                                <p className="mb-0">Finding perfect products</p>
                                                <p className="text-primary font-weight-bold">$50</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Productsale />
        </div>
    )
}

//-------------------------- next Componennt -------------------------

const Productsale = () => {
    return (
        <div>
            <div className="site-wrap">
                <div className="site-section block-8">
                    <div className="container">
                        <div className="row justify-content-center  mb-5">
                            <div className="col-md-7 site-section-heading text-center pt-4">
                                <h2>Big Sale!</h2>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-12 col-lg-7 mb-5">
                                <a href="#"><img src={blog_1} alt="Image placeholder" className="img-fluid rounded" /></a>
                            </div>
                            <div className="col-md-12 col-lg-5 text-center pl-md-5">
                                <h2><a href="#">50% less in all items</a></h2>
                                <p className="post-meta mb-4">By <a href="#">Carl Smith</a> <span className="block-8-sep">&bullet;</span> September 3, 2018</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
                                <p><a href="#" className="btn btn-primary btn-sm">Shop Now</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

//-------------------------- next Componennt -------------------------

const Footer = () => {
    return (
        <div>
            <div className="site-wrap">
                <footer className="site-footer border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="footer-heading mb-4">Navigations</h3>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <ul className="list-unstyled">
                                            <li><a href="#">Sell online</a></li>
                                            <li><a href="#">Features</a></li>
                                            <li><a href="#">Shopping cart</a></li>
                                            <li><a href="#">Store builder</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <ul className="list-unstyled">
                                            <li><a href="#">Mobile commerce</a></li>
                                            <li><a href="#">Dropshipping</a></li>
                                            <li><a href="#">Website development</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <ul className="list-unstyled">
                                            <li><a href="#">Point of sale</a></li>
                                            <li><a href="#">Hardware</a></li>
                                            <li><a href="#">Software</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                                <h3 className="footer-heading mb-4">Promo</h3>
                                <a href="#" className="block-6">
                                    <img src={hero_2} alt="Image placeholder" className="img-fluid rounded mb-4" />
                                    <h3 className="font-weight-light  mb-0">Finding Your Perfect Shoes</h3>
                                    <p>Promo from  nuary 15 &mdash; 25, 2019</p>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="block-5 mb-5">
                                    <h3 className="footer-heading mb-4">Contact Info</h3>
                                    <ul className="list-unstyled">
                                        <li className="address">203 Fake St. Mountain View, San Francisco, California, USA</li>
                                        <li className="phone"><a href="tel://23923929210">+2 392 3929 210</a></li>
                                        <li className="email">emailaddress@domain.com</li>
                                    </ul>
                                </div>

                                <div className="block-7">
                                    <form action="#" method="post">
                                        <label className="footer-heading">Subscribe</label>
                                        <div className="form-group">
                                            <input type="text" className="form-control py-4" id="email_subscribe" placeholder="Email" />
                                            <input type="submit" className="btn btn-sm btn-primary" value="Send" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-5 mt-5 text-center">
                            <div className="col-md-12">
                                <p>
                                    All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" className="text-primary">Colorlib</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default SliderComp
