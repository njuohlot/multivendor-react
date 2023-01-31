import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";
import { posts } from "../data";
import { products } from "../data";
import { categories } from "../data";
const Home = () => {
  return (
    <div>
      <div className="product-quick-view-panel">
        <div className="img">
          <img
            className="quick-view-image"
            src="assets/images/index.html"
            alt="image"
          />
        </div>
      </div>
      {/** -----------------------Navigation----------------------------- */}
      <Nav />
      {/** -----------------------Home page slider----------------------------- */}
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-2 category-col"></div>
            <div className="col-xl-6 col-lg-8">
              <div className="slider-area">
                <div className="slide-1">
                  <div className="banner-txt">
                    <h6>Fashion</h6>
                    <h1>New Women</h1>
                    <p>The 10 Best Fashion Collection 2021</p>
                    <a href="/shop" className="def-btn">
                      buy now
                    </a>
                  </div>
                </div>
                <div className="slide-2">
                  <div className="banner-txt">
                    <h6>Fashion</h6>
                    <h1>New Women</h1>
                    <p>The 10 Best Fashion Collection 2021</p>

                    <a href="/shop" className="def-btn">
                      buy now
                    </a>
                  </div>
                </div>
                <div className="slide-3">
                  <div className="banner-txt">
                    <h6>Fashion</h6>
                    <h1>New Women</h1>
                    <p>The 10 Best Fashion Collection 2021</p>

                    <a href="/shop" className="def-btn">
                      buy now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/** -----------------------Best selling Products----------------------------- */}
            <div className="col-xl-3 col-lg-4">
              <div className="sidebar-area">
                <div className="best-selling-panel">
                  <div className="panel-header">
                    <h4>Best Selling</h4>
                  </div>
                  <div className="panel-body">
                    <div className="product-slider-1">
                      {products
                        .filter((item) => item.id > 8)
                        .map((value, key) => (
                          <>
                            <div
                              className="single-product-slider"
                              key={value.id}
                            >
                              <div className="part-img">
                                <a href={`/product/details/${value.id}`}>
                                  <img src={value.image} alt="Product" />
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
                                <h4 className="product-name">
                                  <a href={`/product/details/${value.id}`}>
                                    {value.name}
                                  </a>
                                </h4>
                                <p className="price">
                                  ${value.newPrice}{" "}
                                  <span>${value.oldPrice}</span>
                                </p>
                              </div>
                            </div>
                          </>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** -----------------------popular Categories----------------------------- */}
      <div className="popular-categories">
        <div className="container">
          <div className="panel">
            <div className="panel-header">
              <div className="row align-items-center g-lg-4 g-1">
                <div className="col-lg-6 col-9">
                  <h2 className="title">Explore Popular Categories</h2>
                </div>
                <div className="col-lg-6 col-3">
                  <div className="text-end">
                    <a href="/all_categories" className="explore-section">
                      View more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-body">
              <div className="custom-row">
                {categories.map((item, key) => (
                  <>
                    <div className="custom-col" key={item.id}>
                      <div className="category-card">
                        <div className="part-img">
                          <a href={`/shop_by_cat/${item.id}`}>
                            <img src={item.image} alt="Image" />
                          </a>
                        </div>
                        <div className="part-txt">
                          <h3>
                            <a href={`/shop_by_cat/${item.id}`}>
                              {item.tittle}
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hot-deal-banner">
        <div className="container">
          <div className="bg">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner-txt">
                  <h2>
                    <span>Hot deal</span> this week
                  </h2>
                  <p>Up to 30% off</p>
                  <div id="hotDealCountdown" className="countdown"></div>
                  <a href="/shop" className="def-btn">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**--------------------------- featured products ---------------------- */}
      <div className="featured-product py-25">
        <div className="container">
          <div className="panel">
            <div className="panel-header">
              <div className="row">
                <div className="col-8">
                  <h2 className="title">Featured products</h2>
                </div>
                <div className="col-4">
                  <div className="text-end">
                    <a href="/shop" className="explore-section">
                      View more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-body">
              <div className="product-custom-row">
                {products
                  .filter((item) => item.isFeatured === true)
                  .map((value, key) => (
                    <>
                      <div className="custom-col" key={value.id}>
                        <div className="single-product-card">
                          <div className="part-img">
                            {value.discount ? (
                              <span className="off-tag">
                                -{value.discount}%
                              </span>
                            ) : (
                              ""
                            )}
                            <a href={`/product/details/${value.id}`}>
                              <img src={value.image} alt="Product" />
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
                                    href={`/product/details/${value.id}`}
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
                              <a href={`/product/details/${value.id}`}>
                                {value.name}
                              </a>
                            </h4>
                            <p className="price">
                              <span>{value.newPrice}</span>
                              {value.oldPrice}
                            </p>
                            <div className="star">
                              <i className="fa-solid fa-star-sharp rated"></i>
                              <i className="fa-solid fa-star-sharp rated"></i>
                              <i className="fa-solid fa-star-sharp rated"></i>
                              <i className="fa-solid fa-star-sharp rated"></i>
                              <i className="fa-solid fa-star-sharp"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="special-offer">
        <div className="container">
          <div className="row g-lg-4 g-md-3 g-4 justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="single-offer">
                <a href="/shop">
                  <img src="assets/images/special-offer-1.png" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="single-offer">
                <a href="/shop">
                  <img src="assets/images/special-offer-2.png" alt="Image" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-10">
              <div className="single-offer">
                <a href="/shopl">
                  <img src="assets/images/special-offer-3.png" alt="Image" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="season-sale py-25">
        <div className="container">
          <div className="row g-lg-4 g-md-3">
            <div className="col-xl-3 col-md-4 d-md-block d-none">
              <div className="panel pb-0">
                <div className="season-sale-box">
                  <div className="part-txt">
                    <p>Season Sale!</p>
                    <h3>New Arrivals</h3>
                    <a href="/shop">Shop Now</a>
                  </div>
                  <div className="part-img">
                    <img src="assets/images/season-sale-1.png" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-4">
              <div className="season-sale-box season-sale-box-2">
                <div className="part-txt">
                  <p>Season Sale!</p>
                  <h3>Mesh Shoes Womens</h3>
                  <a href="/shop" className="outline">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 d-md-block d-none">
              <div className="panel pt-0">
                <div className="season-sale-box">
                  <div className="part-img">
                    <img src="assets/images/season-sale-3.png" alt="Image" />
                  </div>
                  <div className="part-txt">
                    <p>Get up to 20% off</p>
                    <h3>Winter Wear Mean</h3>
                    <a href="/shop" className="outline">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="best-seller py-25">
        <div className="container">
          <div className="panel">
            <div className="panel-header">
              <div className="row">
                <div className="col-8">
                  <h2 className="title">Best Sellers</h2>
                </div>
                <div className="col-4">
                  <div className="text-end">
                    <a href="#" className="explore-section">
                      View more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-body">
              <div className="row g-3">
                <div className="col-xl-3 col-lg-4 col-6">
                  <div className="single-box">
                    <div className="part-img">
                      <a href="#">
                        <img
                          src="assets/images/best-seller-1.png"
                          alt="Image"
                        />
                      </a>
                    </div>
                    <div className="part-txt">
                      <a href="#" className="title">
                        Vantech VP-153C Camera
                      </a>
                      <div className="star">
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp"></i>
                        <span>(0)</span>
                      </div>
                      <a href="/shop" className="part-btn">
                        Visit Store
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-6">
                  <div className="single-box">
                    <div className="part-img">
                      <a href="#">
                        <img
                          src="assets/images/best-seller-2.png"
                          alt="Image"
                        />
                      </a>
                    </div>
                    <div className="part-txt">
                      <a href="#" className="title">
                        Vantech VP-153C Camera
                      </a>
                      <div className="star">
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp"></i>
                        <span>(0)</span>
                      </div>
                      <a href="#" className="part-btn">
                        Visit Store
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-6">
                  <div className="single-box">
                    <div className="part-img">
                      <a href="#">
                        <img
                          src="assets/images/best-seller-3.png"
                          alt="Image"
                        />
                      </a>
                    </div>
                    <div className="part-txt">
                      <a href="#" className="title">
                        Vantech VP-153C Camera
                      </a>
                      <div className="star">
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp"></i>
                        <span>(0)</span>
                      </div>
                      <a href="#" className="part-btn">
                        Visit Store
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-6">
                  <div className="single-box">
                    <div className="part-img">
                      <a href="#">
                        <img
                          src="assets/images/best-seller-4.png"
                          alt="Image"
                        />
                      </a>
                    </div>
                    <div className="part-txt">
                      <a href="#" className="title">
                        Vantech VP-153C Camera
                      </a>
                      <div className="star">
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp"></i>
                        <span>(0)</span>
                      </div>
                      <a href="#" className="part-btn">
                        Visit Store
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 d-md-block d-none">
                  <div className="single-box">
                    <div className="part-img">
                      <a href="#">
                        <img
                          src="assets/images/best-seller-5.png"
                          alt="Image"
                        />
                      </a>
                    </div>
                    <div className="part-txt">
                      <a href="#" className="title">
                        Vantech VP-153C Camera
                      </a>
                      <div className="star">
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp"></i>
                        <span>(0)</span>
                      </div>
                      <a href="#" className="part-btn">
                        Visit Store
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 d-md-block d-none">
                  <div className="single-box">
                    <div className="part-img">
                      <a href="#">
                        <img
                          src="assets/images/best-seller-6.png"
                          alt="Image"
                        />
                      </a>
                    </div>
                    <div className="part-txt">
                      <a href="#" className="title">
                        Vantech VP-153C Camera
                      </a>
                      <div className="star">
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp"></i>
                        <span>(0)</span>
                      </div>
                      <a href="#" className="part-btn">
                        Visit Store
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 d-md-block d-none">
                  <div className="single-box">
                    <div className="part-img">
                      <a href="#">
                        <img
                          src="assets/images/best-seller-7.png"
                          alt="Image"
                        />
                      </a>
                    </div>
                    <div className="part-txt">
                      <a href="#" className="title">
                        Vantech VP-153C Camera
                      </a>
                      <div className="star">
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp"></i>
                        <span>(0)</span>
                      </div>
                      <a href="#" className="part-btn">
                        Visit Store
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 d-md-block d-none">
                  <div className="single-box">
                    <div className="part-img">
                      <a href="#">
                        <img
                          src="assets/images/best-seller-8.png"
                          alt="Image"
                        />
                      </a>
                    </div>
                    <div className="part-txt">
                      <a href="#" className="title">
                        Vantech VP-153C Camera
                      </a>
                      <div className="star">
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp rated"></i>
                        <i className="fa-solid fa-star-sharp"></i>
                        <span>(0)</span>
                      </div>
                      <a href="#" className="part-btn">
                        Visit Store
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-brand py-25">
        <div className="container">
          <div className="panel">
            <div className="panel-header">
              <div className="row">
                <div className="col-lg-6">
                  <h2 className="title">Top Brands</h2>
                </div>
              </div>
            </div>
            <div className="panel-body">
              <div className="row g-lg-3 g-2">
                <div className="col-md-2 col-sm-3 col-4">
                  <div className="logo-box">
                    <img src="assets/images/brand-1.png" alt="brand" />
                  </div>
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <div className="logo-box">
                    <img src="assets/images/brand-2.png" alt="brand" />
                  </div>
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <div className="logo-box">
                    <img src="assets/images/brand-3.png" alt="brand" />
                  </div>
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <div className="logo-box">
                    <img src="assets/images/brand-4.png" alt="brand" />
                  </div>
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <div className="logo-box">
                    <img src="assets/images/brand-5.png" alt="brand" />
                  </div>
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <div className="logo-box">
                    <img src="assets/images/brand-6.png" alt="brand" />
                  </div>
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <div className="logo-box">
                    <img src="assets/images/brand-7.png" alt="brand" />
                  </div>
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <div className="logo-box">
                    <img src="assets/images/brand-8.png" alt="brand" />
                  </div>
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <div className="logo-box">
                    <img src="assets/images/brand-9.png" alt="brand" />
                  </div>
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <div className="logo-box">
                    <img src="assets/images/brand-10.png" alt="brand" />
                  </div>
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <div className="logo-box">
                    <img src="assets/images/brand-11.png" alt="brand" />
                  </div>
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <div className="logo-box">
                    <img src="assets/images/brand-12.png" alt="brand" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <div className="subscribe py-25">
        <div className="container">
          <div className="bg">
            <div className="heading text-center">
              <h2>Subscribe Our Newsletter</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <form className="form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email Here..."
                  />
                  <button type="submit" className="def-btn">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog pt-25 pb-50">
        <div className="container">
          <div className="panel panel-2">
            <div className="heading text-center">
              <h2>Latest Blog</h2>
            </div>
            <div className="blog-slider">
              {posts
                .filter((value) => value.id < 5)
                .map((item, key) => (
                  <>
                    <div className="single-blog" key={item.id}>
                      <div className="part-img">
                        <img src={item.image} alt="Image" />
                      </div>
                      <div className="part-txt">
                        <div className="tag-n-date">
                          <span>Shoping</span> <span>/</span>{" "}
                          <span>{item.date}</span>
                        </div>
                        <h3>
                          <a href={`/blog/details/${item.id}`}>{item.tittle}</a>
                        </h3>
                        <p>{item.desc}</p>
                        <a href="blog-details.html" className="continue">
                          <span>
                            <i className="fa-light fa-arrow-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
