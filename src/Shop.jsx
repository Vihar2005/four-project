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
import './Shop.css'
import image1 from './assets/images/men.jpg'
import children from './assets/images/children.jpg'
import hero_2 from './assets/images/hero_1.jpg'
import women from './assets/images/women.jpg'
import { useState } from 'react'
import { useEffect } from 'react'

import axios from 'axios';

const Shop = () => {
  const [data, setData] = useState([])
  const [selectedItems, setSelectedItems] = useState([]);
  const [CatData,setCatData] = useState([])

  useEffect(() => {
    const fetchData = () => {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
          setData(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }
    fetchData();

    axios.get('https://fakestoreapi.com/products/categories')
      .then((res) => {
        setCatData(res.data)
      })
      .catch((err) => console.log(err))

  }, [])
  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedItems(data.map(i => i.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (event, id) => {
    if (event.target.checked) {
      setSelectedItems([...selectedItems, id]);
    } else {
      setSelectedItems(selectedItems.filter(iId => iId !== id));
    }
  };

  const isAllSelected = selectedItems.length === data.length;

  const ShowAll = (e) => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log(err))
  }
  const Electronics = (e) => {
    axios.get('https://fakestoreapi.com/products/category/electronics')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log(err))
  }
  const Jewelery = (e) => {
    axios.get('https://fakestoreapi.com/products/category/jewelery')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log(err))
  }
  const MenClothing = (e) => {
    axios.get("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log(err))
  }
  const WomenClothing = (e) => {
    axios.get("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log(err))
  }



  return (
    <div>
      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-9 order-2">


              <div className="row">
                <div className="col-md-12 mb-5">
                  <div className="float-md-left mb-4"><h2 className="text-black h5 asd"><button onClick={ShowAll}>Shop All</button></h2></div>
                  <div className="d-flex">
                    <div className="dropdown mr-1 ml-md-auto">
                      <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuOffset">
                        Latest
                      </button>

                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuReference">Reference</button>
                    </div>
                  </div>
                </div>
              </div>


              <div><input type="checkbox" onChange={handleSelectAll} checked={isAllSelected} />Select All</div>
              <div className="row mb-5 ">
                {
                  data && data.map((i) => {
                    return (
                      <div className="col-sm-6 col-lg-4 mb-4 fourbox">
                        <div className="block-4 text-center border">
                          <div>
                            <div key={data.id}>
                              <input type="checkbox" checked={selectedItems.includes(i.id)} onChange={(event) => handleSelectItem(event, i.id)} />
                            </div>
                          </div>

                          <figure className="block-4-image">
                            <a href="shop-single.html"><img src={i.image} alt="Image placeholder" className="img-fluid" /></a>
                          </figure>
                          <div className="block-4-text p-4">
                            <p className="mb-0">title : {i.title}</p>
                            <p className="text-primary font-weight-bold">price : {i.price}</p>
                            <p>category : {i.category}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>




              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="site-block-27">
                    <ul>
                      <li><a href="#">&lt;</a></li>
                      <li className="active"><span>1</span></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li><a href="#">&gt;</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 order-1 mb-5 mb-md-0">
              <div className="border p-4 rounded mb-4">
                <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
                <ul className="list-unstyled mb-0">
                  <li className="mb-1"><a href="#" className="d-flex"><span className='asd'><button onClick={Electronics}>electronics</button></span> <span className="text-black ml-auto">(2,220)</span></a></li>
                  <li className="mb-1"><a href="#" className="d-flex"><span className='asd'><button onClick={Jewelery}>jewelery</button></span> <span className="text-black ml-auto">(2,550)</span></a></li>
                  <li className="mb-1"><a href="#" className="d-flex"><span className='asd'><button onClick={MenClothing}>men's clothing</button></span> <span className="text-black ml-auto">(2,124)</span></a></li>
                  <li className="mb-1"><a href="#" className="d-flex"><span className='asd'><button onClick={WomenClothing}>women's clothing</button></span> <span className="text-black ml-auto">(2,004)</span></a></li>
                </ul>
              </div>

              <div className="border p-4 rounded mb-4">
                <div className="mb-4">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
                  <div id="slider-range" className="border-primary"></div>
                  <input type="text" name="text" id="amount" className="form-control border-0 pl-0 bg-white" disabled="" />
                </div>

                <div className="mb-4">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">Size</h3>
                  <label className="d-flex">
                    <input type="checkbox" id="s_sm" className="mr-2 mt-1" /> <span className="text-black">Small (2,319)</span>
                  </label>
                  <label className="d-flex">
                    <input type="checkbox" id="s_md" className="mr-2 mt-1" /> <span className="text-black">Medium (1,282)</span>
                  </label>
                  <label className="d-flex">
                    <input type="checkbox" id="s_lg" className="mr-2 mt-1" /> <span className="text-black">Large (1,392)</span>
                  </label>
                </div>

                <div className="mb-4">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">Color</h3>
                  <a href="#" className="d-flex color-item align-items-center" >
                    <span className="bg-danger color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Red (2,429)</span>
                  </a>
                  <a href="#" className="d-flex color-item align-items-center" >
                    <span className="bg-success color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Green (2,298)</span>
                  </a>
                  <a href="#" className="d-flex color-item align-items-center" >
                    <span className="bg-info color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Blue (1,075)</span>
                  </a>
                  <a href="#" className="d-flex color-item align-items-center" >
                    <span className="bg-primary color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Purple (1,075)</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Productshop />
    </div >
  )
}

const Productshop = () => {
  return (
    <div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="site-section site-blocks-2">
                <div className="row justify-content-center text-center mb-5">
                  <div className="col-md-7 site-section-heading pt-4">
                    <h2>Categories</h2>
                  </div>
                </div>
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
                  <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
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
                {/* Copyright &copy;<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear());</script> */}
                All rights reserved | This template is made with <i className="icon-heart"></i> by <a href="https://colorlib.com" target="_blank" className="text-primary">Colorlib</a>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              </p>
            </div>
          </div>
        </div>
      </footer >
    </div>
  )
}

export default Shop
