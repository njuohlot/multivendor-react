import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Features from "../components/Features";
import {products} from '../data'
const Shop = () => {
  return (
    <div>
      <Header />

      <div className="product-quick-view-panel">
        <div className="img">
          <img
            className="quick-view-image"
            src="assets/images/index.html"
            alt="image"
          />
        </div>
      </div>
      <div className="banner banner-inner">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-9 col-8">
              <div className="breadcrumb-txt">
                <h1>Shop Page</h1>
                <ul>
                  <li>
                    <a href="index.html">
                      <i className="fa-regular fa-house"></i>
                    </a>
                  </li>
                  <li>/</li>
                  <li>Shop</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-3 col-4">
              <div className="part-img">
                <img src="assets/images/breadcrumb-img.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shop-wrap py-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-3 col-lg-4 sidebar-col">
              <div className="shop-sidebar">
                <div className="sidebar-box">
                  <h3 className="sidebar-title">By Brands</h3>
                  <ul className="brand-filter" id="brandFilter">
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="brand1"
                        />
                        <label className="form-check-label" for="brand1">
                          <span className="name">Club JM</span>
                          <span>(90)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="brand2"
                        />
                        <label className="form-check-label" for="brand2">
                          <span className="name">EVANS21</span>
                          <span>(80)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="brand3"
                        />
                        <label className="form-check-label" for="brand3">
                          <span className="name">Espresso</span>
                          <span>(43)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="brand4"
                        />
                        <label className="form-check-label" for="brand4">
                          <span className="name">YOTIAN JAPAN</span>
                          <span>(97)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="brand5"
                        />
                        <label className="form-check-label" for="brand5">
                          <span className="name">ORCHID</span>
                          <span>(18)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="brand6"
                        />
                        <label className="form-check-label" for="brand6">
                          <span className="name">Pristik</span>
                          <span>(25)</span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-box">
                  <h3 className="sidebar-title">By Price</h3>
                  <div className="price-filter-wrap">
                    <div className="input-wrap">
                      <div className="input-group">
                        <span className="input-txt">$</span>
                        <input type="number" id="maxNumber" />
                      </div>
                      <div className="input-group">
                        <span className="input-txt">$</span>
                        <input type="number" id="minNumber" />
                      </div>
                    </div>
                    <div id="priceFilter" className="price-filter"></div>
                    <button id="filterPrice" className="def-btn">
                      Filter now
                    </button>
                  </div>
                </div>
                <div className="sidebar-box">
                  <h3 className="sidebar-title">Color</h3>
                  <ul className="brand-filter color-filter" id="colorFilter">
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="Black"
                        />
                        <label className="form-check-label" for="Black">
                          Black
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="Pink"
                        />
                        <label className="form-check-label" for="Pink">
                          Pink
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="White"
                        />
                        <label className="form-check-label" for="White">
                          White
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="Blue"
                        />
                        <label className="form-check-label" for="Blue">
                          Blue
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="Orange"
                        />
                        <label className="form-check-label" for="Orange">
                          Orange
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-box">
                  <div className="title-wrap">
                    <h3 className="sidebar-title">New Arrival</h3>
                    <div className="new-arrival-nav"></div>
                  </div>
                  <ul className="new-arrival-slider">
                    {products
                      .filter((value) => value.id < 5)
                      .map((item, key) => (
                        <>
                          <li key={item.id}>
                            <div className="part-img">
                              <a href={`/product/details/${item.id}`}>
                                <img src={item.image} alt="Image" />
                              </a>
                            </div>
                            <div className="part-txt">
                              <div className="star">
                                <i className="fa-solid fa-star-sharp rated"></i>
                                <i className="fa-solid fa-star-sharp rated"></i>
                                <i className="fa-solid fa-star-sharp rated"></i>
                                <i className="fa-solid fa-star-sharp rated"></i>
                                <i className="fa-solid fa-star-sharp"></i>
                              </div>
                              <a href="shop-details.html" className="title">
                                {item.name}
                              </a>
                              <p className="price">
                                ${item.newPrice} <span>${item.oldPrice}</span>
                              </p>
                            </div>
                          </li>
                        </>
                      ))}
                  </ul>
                </div>
                <div className="sidebar-new-arrival">
                  <div className="part-img">
                    <a href="/shop">
                      <img src="assets/images/new-arrival-4.jpg" alt="Image" />
                    </a>
                  </div>
                  <div className="part-txt">
                    <p>Season Sale!</p>
                    <h3>New Arrivals</h3>
                    <a href="/shop">45% Off</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="shop-top-bar">
                <div className="row align-items-center">
                  <div className="col-md-3 d-md-block d-none">
                    <h3 id="shopViewType">Shop Grid</h3>
                  </div>
                  <div className="col-md-9">
                    <div className="top-bar-right">
                      <select name="sorting" className="select">
                        <option value="0">Default Sorting</option>
                        <option value="1">Price (Low to heigh)</option>
                        <option value="2">Price (Heigh to low)</option>
                        <option value="3">Best match</option>
                        <option value="4">Relevance</option>
                      </select>
                      <div className="show-wrap">
                        <span>Show:</span>
                        <select name="show" className="select">
                          <option value="1">12</option>
                          <option value="2">16</option>
                          <option value="3">20</option>
                          <option value="4">24</option>
                        </select>
                      </div>
                      <div className="view-wrap">
                        <button className="active" id="gridView">
                          <i className="flaticon-apps"></i>
                        </button>
                        <button id="listView">
                          <i className="flaticon-menu"></i>
                        </button>
                      </div>
                      <div className="top-pagination">
                        <input
                          type="number"
                          name="current"
                          id="currentPage"
                          value="1"
                          min="1"
                        />
                        <span>of 3</span>
                        <button>
                          <i className="fa-solid fa-right-long"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-lg-4 g-3">
                {products.map((item, key) => (
                  <>
                    <div className="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6">
                      <div className="single-product-card">
                        <div className="part-img">
                          <a href={`/product/details/${item.id}`}>
                            <img
                              src={item.image}
                              alt="Product"
                            />
                          </a>
                          <div className="cart-option cart-option-bottom">
                            <ul>
                              <li>
                                <a role="button" className="add-to-cart">
                                  <i className="fa-light fa-cart-shopping"></i>
                                </a>
                              </li>
                              <li>
                                <a role="button" className="add-to-wish">
                                  <i className="fa-light fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a role="button" className="quick-view">
                                  <i className="fa-light fa-image"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href={`/product/details/${item.id}`}
                                  className="view-product"
                                >
                                  <i className="fa-light fa-eye"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="part-txt">
                          <h4 className="product-name">
                            <a href={`/product/details/${item.id}`}>
                              {item.name}
                            </a>
                          </h4>

                          <p className="price">
                            <span>${item.oldPrice}.00</span>${item.newPrice}.00
                          </p>
                          <div className="star">
                            <i className="fa-solid fa-star-sharp rated"></i>
                            <i className="fa-solid fa-star-sharp rated"></i>
                            <i className="fa-solid fa-star-sharp rated"></i>
                            <i className="fa-solid fa-star-sharp rated"></i>
                            <i className="fa-solid fa-star-sharp"></i>
                          </div>
                          <button className="add-to-cart-btn">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <div className="bottom-pagination d-flex justify-content-center">
                <ul>
                  <li>
                    <button>
                      <i className="fa-regular fa-angle-left"></i>
                    </button>
                  </li>
                  <li>
                    <button className="active">1</button>
                  </li>
                  <li>
                    <button>2</button>
                  </li>
                  <li>
                    <button>
                      <i className="fa-regular fa-angle-right"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Footer />
    </div>
  );
}

export default Shop