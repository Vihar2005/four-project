import React from 'react'
import './assets/fonts/icomoon/style.css'
import './assets/css/bootstrap.min.css'
import './assets/css/magnific-popup.css'
import './assets/css/jquery-ui.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/owl.theme.default.min.css'
import './assets/css/aos.css'
import './assets/css/style.css'
import hero_2 from './assets/images/hero_1.jpg'

const Cart = () => {
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
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-total">Total</th>
                                            <th className="product-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="product-thumbnail">
                                                <img src="images/cloth_1.jpg" alt="Image" className="img-fluid" />
                                            </td>
                                            <td className="product-name">
                                                <h2 className="h5 text-black">Top Up T-Shirt</h2>
                                            </td>
                                            <td>$49.00</td>
                                            <td>
                                                <div className="input-group mb-3" style={{ maxWidth: "120px" }}>
                                                    <div className="input-group-prepend">
                                                        <button className="btn btn-outline-primary js-btn-minus" type="button">&minus;</button>
                                                    </div>
                                                    <input type="text" className="form-control text-center" placeholder="" />
                                                    {/* value="1" */}
                                                    <div className="input-group-append">
                                                        <button className="btn btn-outline-primary js-btn-plus" type="button">+</button>
                                                    </div>
                                                </div>

                                            </td>
                                            <td>$49.00</td>
                                            <td><a href="#" className="btn btn-primary btn-sm">X</a></td>
                                        </tr>
                                        <tr>
                                            <td className="product-thumbnail">
                                                <img src="images/cloth_2.jpg" alt="Image" className="img-fluid" />
                                            </td>
                                            <td className="product-name">
                                                <h2 className="h5 text-black">Polo Shirt</h2>
                                            </td>
                                            <td>$49.00</td>
                                            <td>
                                                <div className="input-group mb-3" style={{ maxWidth: "120px" }}>
                                                    <div className="input-group-prepend">
                                                        <button className="btn btn-outline-primary js-btn-minus" type="button">&minus;</button>
                                                    </div>
                                                    <input type="text" className="form-control text-center" placeholder="" />
                                                    {/* value="1" */}
                                                    <div className="input-group-append">
                                                        <button className="btn btn-outline-primary js-btn-plus" type="button">+</button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>$49.00</td>
                                            <td><a href="#" className="btn btn-primary btn-sm">X</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Secondcomp />
        </div>
    )
}

const Secondcomp = () => {
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
                                <label className="text-black h4" >Coupon</label>
                                {/* for="coupon" */}
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
                                        <strong className="text-black">$230.00</strong>
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


const Footercomp = () =>{
    return(
        <footer class="site-footer border-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="row">
              <div class="col-md-12">
                <h3 class="footer-heading mb-4">Navigations</h3>
              </div>
              <div class="col-md-6 col-lg-4">
                <ul class="list-unstyled">
                  <li><a href="#">Sell online</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Shopping cart</a></li>
                  <li><a href="#">Store builder</a></li>
                </ul>
              </div>
              <div class="col-md-6 col-lg-4">
                <ul class="list-unstyled">
                  <li><a href="#">Mobile commerce</a></li>
                  <li><a href="#">Dropshipping</a></li>
                  <li><a href="#">Website development</a></li>
                </ul>
              </div>
              <div class="col-md-6 col-lg-4">
                <ul class="list-unstyled">
                  <li><a href="#">Point of sale</a></li>
                  <li><a href="#">Hardware</a></li>
                  <li><a href="#">Software</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
            <h3 class="footer-heading mb-4">Promo</h3>
            <a href="#" class="block-6">
              <img src={hero_2} alt="Image placeholder" class="img-fluid rounded mb-4"/>
              <h3 class="font-weight-light  mb-0">Finding Your Perfect Shoes</h3>
              <p>Promo from  nuary 15 &mdash; 25, 2019</p>
            </a>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="block-5 mb-5">
              <h3 class="footer-heading mb-4">Contact Info</h3>
              <ul class="list-unstyled">
                <li class="address">203 Fake St. Mountain View, San Francisco, California, USA</li>
                <li class="phone"><a href="tel://23923929210">+2 392 3929 210</a></li>
                <li class="email">emailaddress@domain.com</li>
              </ul>
            </div>

            <div class="block-7">
              <form action="#" method="post">
                <label for="email_subscribe" class="footer-heading">Subscribe</label>
                <div class="form-group">
                  <input type="text" class="form-control py-4" id="email_subscribe" placeholder="Email"/>
                  <input type="submit" class="btn btn-sm btn-primary" value="Send"/>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="row pt-5 mt-5 text-center">
          <div class="col-md-12">
            <p>
            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
            {/* Copyright &copy;<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear());</script> */}
             All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" class="text-primary">Colorlib</a>
            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
            </p>
          </div>
          
        </div>
      </div>
    </footer>
    )
}

export default Cart
