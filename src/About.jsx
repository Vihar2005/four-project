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
import blog_1 from './assets/images/blog_1.jpg'
import hero_2 from './assets/images/hero_1.jpg'
import person_1 from './assets/images/person_1.jpg'
import person_2 from './assets/images/person_2.jpg'
import person_3 from './assets/images/person_3.jpg'
import person_4 from './assets/images/person_4.jpg'

const About = () => {
  return (
    <div>

      <div className="site-section border-bottom" >
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <div className="block-16">
                <figure>
                  <img src={blog_1} alt="Image placeholder" className="img-fluid rounded" />
                  {/* <a href="https://vimeo.com/channels/staffpicks/93951774" className="play-button popup-vimeo"><span className="ion-md-play"></span></a> */}

                </figure>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">


              <div className="site-section-heading pt-3 mb-4">
                <h2 className="text-black">How We Started</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repellat, dicta at laboriosam, nemo exercitationem itaque eveniet architecto cumque, deleniti commodi molestias repellendus quos sequi hic fugiat asperiores illum. Atque, in, fuga excepturi corrupti error corporis aliquam unde nostrum quas.</p>
              <p>Accusantium dolor ratione maiores est deleniti nihil? Dignissimos est, sunt nulla illum autem in, quibusdam cumque recusandae, laudantium minima repellendus.</p>

            </div>
          </div>
        </div>
      </div>
    <Teammem />
    </div>
  )
}
const Teammem = () => {
  return (
    <div>
      <div className="site-section border-bottom" >
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 site-section-heading text-center pt-4">
              <h2>The Team</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">

              <div className="block-38 text-center">
                <div className="block-38-img">
                  <div className="block-38-header">
                    <img src={person_1} alt="Image placeholder" className="mb-4" />
                    <h3 className="block-38-heading h4">Elizabeth Graham</h3>
                    <p className="block-38-subheading">CEO/Co-Founder</p>
                  </div>
                  <div className="block-38-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="block-38 text-center">
                <div className="block-38-img">
                  <div className="block-38-header">
                    <img src={person_2} alt="Image placeholder" className="mb-4" />
                    <h3 className="block-38-heading h4">Jennifer Greive</h3>
                    <p className="block-38-subheading">Co-Founder</p>
                  </div>
                  <div className="block-38-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="block-38 text-center">
                <div className="block-38-img">
                  <div className="block-38-header">
                    <img src={person_3} alt="Image placeholder" className="mb-4" />
                    <h3 className="block-38-heading h4">Patrick Marx</h3>
                    <p className="block-38-subheading">Marketing</p>
                  </div>
                  <div className="block-38-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="block-38 text-center">
                <div className="block-38-img">
                  <div className="block-38-header">
                    <img src={person_4} alt="Image placeholder" className="mb-4" />
                    <h3 className="block-38-heading h4">Mike Coolbert</h3>
                    <p className="block-38-subheading">Sales Manager</p>
                  </div>
                  <div className="block-38-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Detailproduct />
    </div>
  )
}
const Detailproduct = () => {
  return (
    <div>
      <div className="site-section site-section-sm site-blocks-1 border-0" >
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
            <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" >
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
      <Productfooter />
    </div>
  )
}
const Productfooter = () => {
  return (
    <div>
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
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                {/* Copyright &copy;<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear());</script>  */}
                All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" className="text-primary">Colorlib</a>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              </p>
            </div>

          </div>
        </div>
      </footer>
    </div>
  )
}

export default About
