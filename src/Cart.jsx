import React, { useContext, useState } from 'react'
import './assets/fonts/icomoon/style.css'
import './assets/css/bootstrap.min.css'
import './assets/css/magnific-popup.css'
import './assets/css/jquery-ui.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/owl.theme.default.min.css'
import './assets/css/aos.css'
import './assets/css/style.css'
import hero_2 from './assets/images/hero_1.jpg'
import { AddToCart, ContextCounter } from './App'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate();
    const { cart, setCart } = useContext(AddToCart);
    const { count, setCount } = useContext(ContextCounter);
    const [Quantity,setQuantity] = useState(1)
    const removetocart = (id)=>{
        setCart(cart.filter(item => item.id !== id));
        setCount(count-1)
    }
    const adddata = ()=>{
        setQuantity(Quantity+1);
        updateTotal();
    }
    const removedata = () =>{
        setQuantity(Quantity-1);
        updateTotal();
    }

    const updateTotal = () =>{
        let total = 0;
        cart.forEach(item =>{
            total += item.price * item.Quantity;
        });
        console.log(total);
    }


    return (
        <div>
            <div className="site-section">
                <div className="container">
                    <div className="row mb-5">
                        <form className="col-md-12" method="post">
                            <div className="site-blocks-table">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="product-thumbnail">Image</th>
                                            <th className="product-name">Product</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-price">Category</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-total">Total</th>
                                            <th className="product-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cart && cart.map((i) => {
                                                return (
                                                    <tr>
                                                        <td className="product-thumbnail">
                                                            <img src={i.image} alt="Image" className="img-fluid" />
                                                        </td>
                                                        <td className="product-name">
                                                            <h2 className="h5 text-black">{i.title}</h2>
                                                        </td>
                                                        <td>${i.price}</td>
                                                        <td>{i.category}</td>
                                                        <td>
                                                            <div className="input-group mb-3" style={{ maxWidth: "120px" }}>
                                                                <div className="input-group-prepend">
                                                                    <button className="btn btn-outline-primary js-btn-minus" type="button" onClick={removedata}>&minus;</button>
                                                                </div>
                                                                <input type="text" className="form-control text-center" placeholder="" value={Quantity} />
                                                                
                                                                <div className="input-group-append">
                                                                    <button className="btn btn-outline-primary js-btn-plus" type="button" onClick={adddata}>+</button>
                                                                </div>
                                                            </div>

                                                        </td>
                                                        <td>${i.price * Quantity}</td>
                                                        <td><input type="submit" value="X" className='btn btn-primary btn-sm' onClick={() => removetocart(i.id)}/></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Secondcomp price={cart.price}/>
        </div>
    )
}

const Secondcomp = (props) => {
    return (
        <div className="site-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row mb-5">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <button className="btn btn-primary btn-sm btn-block">Update Cart</button>
                            </div>
                            <div className="col-md-6">
                                <button className="btn btn-outline-primary btn-sm btn-block">Continue Shopping</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <label className="text-black h4" htmlFor='coupon'>Coupon</label>
                                <p>Enter your coupon code if you have one.</p>
                            </div>
                            <div className="col-md-8 mb-3 mb-md-0">
                                <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-primary btn-sm">Apply Coupon</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 pl-5">
                        <div className="row justify-content-end">
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-12 text-right border-bottom mb-5">
                                        <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <span className="text-black">Subtotal</span>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <strong className="text-black">{props.price}</strong>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-md-6">
                                        <span className="text-black">Total</span>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <strong className="text-black">$230.00</strong>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <button className="btn btn-primary btn-lg py-3 btn-block">Proceed To Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footercomp />
        </div>
    )
}


const Footercomp = () => {
    return (
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
                                <label htmlFor="email_subscribe" className="footer-heading">Subscribe</label>
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
                            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                            {/* Copyright &copy;<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear());</script> */}
                            All rights reserved | This template is made with <i className="icon-heart" ></i> by <a href="https://colorlib.com" target="_blank" className="text-primary">Colorlib</a>
                            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Cart
