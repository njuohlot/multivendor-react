import React from 'react'
import { cart, categories, wishlist } from '../data';
const Header = () => {
  return (
    <>
      <div className="revel-header-mobile-sidebar side-info">
        <div className="revel-header-mobile-sidebar-inner">
          <div className="revel-header-mobile-sidebar-top  text-center pb-35">
            <div className="revel-header-mobile-sidebar-close-btn side-info-close">
              <button>
                <span>CLOSE</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path
                    id="close"
                    d="M4.216,23.784a.714.714,0,0,0,1.011,0l8.779-8.778,8.782,8.778A.715.715,0,0,0,23.8,22.774L15.017,14,23.8,5.214A.715.715,0,0,0,22.785,4.2l-8.779,8.782L5.223,4.207A.714.714,0,0,0,4.216,5.214L13,14,4.216,22.777a.714.714,0,0,0,0,1.007Z"
                    transform="translate(-4.008 -3.994)"
                    fill="#777"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="revel-header-mobile-sidebar-logo pb-50">
            <a href="/">
              <img
                src="../../revelwp.codebasket.net/wp-content/themes/revel/assets/images/logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="revel-header-mobile-sidebar-menu-nav">
            <div className="revel-mobile-menu"></div>
          </div>
        </div>
      </div>
      <div className="overlay"></div>

      <div className="header-cart-wrap" id="headerCartWrap">
        <div className="cart-list">
          <div className="title">
            <h3>Shopping Cart</h3>
            <button className="cart-close">
              <i className="fa-regular fa-xmark"></i>
            </button>
          </div>
          <ul>
            {cart.map((item, key) => (
              <>
                <li key={item.id}>
                  <a href={`/product/details/${item.id}`}>
                    <div className="part-img">
                      <img src={item.image} alt="Image" />
                    </div>
                    <div className="part-txt">
                      <span className="name">{item.name}</span>
                      <span>
                        1 <i className="fa-regular fa-xmark"></i> $
                        {item.newPrice}.00
                      </span>
                    </div>
                  </a>
                  <button className="delete-btn">
                    <i className="fa-regular fa-trash-can"></i>
                  </button>
                </li>
              </>
            ))}
          </ul>
          <div className="total">
            <p>
              Subtotal: <span>$15:00</span>
            </p>
          </div>
          <div className="btn-box">
            <a href="/cart" className="def-btn">
              View Cart
            </a>
            <a href="#" className="def-btn">
              Checkout
            </a>
          </div>
        </div>
      </div>

      <div className="header-cart-wrap" id="headerWishWrap">
        <div className="cart-list">
          <div className="title">
            <h3>Wish List</h3>
            <button className="wish-close">
              <i className="fa-regular fa-xmark"></i>
            </button>
          </div>
          <ul>
            {wishlist.map((item, key) => (
              <>
                <li key={item.id}>
                  <a href={`/product/details/${item.id}`}>
                    <div className="part-img">
                      <img src={item.image} alt="Image" />
                    </div>
                    <div className="part-txt">
                      <span className="name">{item.name}</span>
                      <span>
                        1 <i className="fa-regular fa-xmark"></i> $
                        {item.newPrice}.00
                      </span>
                    </div>
                  </a>
                  <button className="delete-btn">
                    <i className="fa-regular fa-trash-can"></i>
                  </button>
                </li>
              </>
            ))}
          </ul>
          <div className="total">
            <p>
              Subtotal: <span>$15:00</span>
            </p>
          </div>
          <div className="btn-box">
            <a href="/wishlist" className="def-btn">
              View Wish List
            </a>
          </div>
        </div>
      </div>

      <div className="header header-inner">
        <div className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 col-xl-7 col-lg-7">
                <ul className="top-header-link d-lg-flex d-none">
                  <li>
                    <span>SHOP & SAVE UP TO 45% OFF!</span>
                  </li>
                  <li>
                    <span className="mr-5px">Call Us:</span>
                    <a href="tel:+237 659 107 885"> +237 659 107 885</a>
                  </li>
                  <li>
                    <a href="/">Sell On TopShop </a>
                  </li>
                </ul>
              </div>
              <div className="col-xxl-6 col-xl-5 col-lg-5">
                <ul className="top-header-link justify-content-lg-end justify-content-center">
                  <li>
                    <a href="#">Track my order</a>
                  </li>
                  <li>
                    <select name="currency" id="currency" className="select">
                      <option value="USD">Dollar (USD)</option>
                    </select>
                  </li>
                  <li>
                    <div className="select-language">
                      <div className="language">
                        <div className="select-lang">
                          <div
                            id="aw"
                            data-input-name="country"
                            data-selected-country="UK"
                            data-scrollable-height="250px"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-header">
          <div className="container">
            <div className="category-list-2">
              <ul>
                <li className="category-item ">
                  <a href="#">
                    <div className="icon">
                      <span>
                        <i className="fa-thin fa-user-tie-hair-long"></i>
                      </span>
                    </div>
                    <span>Women's Fashion</span>
                  </a>
                </li>
                <li className="category-item">
                  <a href="#">
                    <div className="icon">
                      <span>
                        <i className="fa-thin fa-user-tie-hair"></i>
                      </span>
                    </div>
                    <span>Men's Fashion</span>
                  </a>
                </li>
                <li className="category-item">
                  <a href="#">
                    <div className="icon">
                      <span>
                        <i className="fa-thin fa-camera"></i>
                      </span>
                    </div>
                    <span>Photography</span>
                  </a>
                </li>
                <li className="category-item">
                  <a href="#">
                    <div className="icon">
                      <span>
                        <i className="fa-thin fa-watch-smart"></i>
                      </span>
                    </div>
                    <span>Watches & Accessories</span>
                  </a>
                </li>
                <li className="category-item">
                  <a href="#">
                    <div className="icon">
                      <span>
                        <i className="fa-thin fa-tv-retro"></i>
                      </span>
                    </div>
                    <span>TV & Home Appliances</span>
                  </a>
                </li>
                <li className="category-item">
                  <a href="#">
                    <div className="icon">
                      <span>
                        <i className="fa-thin fa-backpack"></i>
                      </span>
                    </div>
                    <span>Bags & Shoes</span>
                  </a>
                </li>
                <li className="category-item">
                  <a href="#">
                    <div className="icon">
                      <span>
                        <i className="fa-thin fa-teddy-bear"></i>
                      </span>
                    </div>
                    <span>Toys , Kids & Babies</span>
                  </a>
                </li>
                <li className="category-item">
                  <a href="#">
                    <div className="icon">
                      <span>
                        <i className="fa-thin fa-headphones-simple"></i>
                      </span>
                    </div>
                    <span>Mobile Phone</span>
                  </a>
                </li>
                <li className="category-item">
                  <a href="#">
                    <div className="icon">
                      <span>
                        <i className="fa-thin fa-baseball-bat-ball"></i>
                      </span>
                    </div>
                    <span>Sports & Outdoor</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="row align-items-center">
              <div className="col-xxl-2 col-lg-3 col-6">
                <div className="logo-wrap">
                  <div className="logo">
                    <a href="/">
                      <img src="assets/images/logo.png" alt="logo" />
                    </a>
                  </div>
                  <button className="category-list-btn d-lg-block d-none">
                    <i className="fa-light fa-bars"></i>
                  </button>
                </div>
              </div>
              <div className="col-xxl-9 col-lg-7 d-lg-block d-none">
                <nav className="navbar navbar-expand-lg">
                  <div className="container-fluid">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <nav id="revel-mobile-menu" className="revel-mobile-menu">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                          <li className="nav-item dropdown">
                            <a className="nav-link" href="/">
                              Home
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/about">
                              About
                            </a>
                          </li>
                          <li className="nav-item dropdown">
                            <a className="nav-link" href="/shop">
                              Shop
                            </a>
                          </li>
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              id="pageDropdown"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              PAGES
                            </a>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="pageDropdown"
                            >
                              <li>
                                <a className="dropdown-item" href="/account">
                                  Account
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="/cart">
                                  Cart
                                </a>
                              </li>
                              
                              <li>
                                <a className="dropdown-item" href="/faq">
                                  FAQ
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="/wishlist">
                                  Wishlist
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="/register">
                                  Register
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item dropdown">
                            <a className="nav-link" href="/blog">
                              Blog
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/contact">
                              Contact
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-xxl-1 col-lg-2 col-6">
                <ul className="bottom-header-right d-flex align-items-center justify-content-end">
                  <li className="header-cart-options">
                   
                    <a role="button" className="wish-list-btn">
                      <i className="fa-light fa-heart"></i>
                      <span className="quantity">02</span>
                    </a>
                    <a role="button" className="cart-list-btn">
                      <i className="fa-light fa-cart-shopping"></i>
                      <span className="quantity">03</span>
                    </a>
                    <a href="#" className="side-toggle d-none">
                      <i className="fal fa-bars"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu d-lg-none d-block">
        <div className="mobile-category-list">
          <button className="mobile-menu-close-btn">
            <i className="fa-solid fa-xmark-large"></i>
          </button>
          <ul className="category-nav">
            <li className="title">All Categories</li>
            <li className="category-item">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-user-tie-hair-long"></i>
                  </span>
                </div>
                <span>Women's Fashion</span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-user-tie-hair"></i>
                  </span>
                </div>
                <span>Men's Fashion</span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-camera"></i>
                  </span>
                </div>
                <span>Photography</span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-watch-smart"></i>
                  </span>
                </div>
                <span>Watches & Accessories</span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-tv-retro"></i>
                  </span>
                </div>
                <span>TV & Home Appliances</span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-backpack"></i>
                  </span>
                </div>
                <span>Bags & Shoes</span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-teddy-bear"></i>
                  </span>
                </div>
                <span>Toys , Kids & Babies</span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-baseball-bat-ball"></i>
                  </span>
                </div>
                <span>Sports & Outdoor</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="m-main-menu">
          <button className="mobile-menu-close-btn">
            <i className="fa-solid fa-xmark-large"></i>
          </button>
          <ul className="menu-bar">
            <li className="logo">
              <span>Epay-Market</span>
            </li>
            <li className="nav-item dropdown">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/account" className="nav-link">
                Account
              </a>
            </li>
            <li className="nav-item">
              <a href="/register" className="nav-link">
                Login / Register
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/shop" className="nav-link">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a href="/faq" className="nav-link">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a href="/blog" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="/cart" className="dropdown-item">
                    Cart
                  </a>
                </li>
                
                <li>
                  <a href="/wishlist" className="dropdown-item">
                    Wishlist Page
                  </a>
                </li>
                <li>
                  <a href="/register" className="dropdown-item">
                    Register
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <ul className="mobile-nav">
          <li>
            <a
              role="button"
              data-target="mobile-category-list"
              className="m-nav-link"
            >
              <i className="fa-light fa-grid-2"></i>
            </a>
          </li>
          <li>
            <a href="/cart" className="m-nav-link">
              <i className="fa-light fa-cart-shopping"></i>
            </a>
          </li>
          <li>
            <a href="/" className="center">
              <i className="fa-light fa-house"></i>
            </a>
          </li>
          <li>
            <a href="/account" className="m-nav-link">
              <i className="fa-light fa-user-large"></i>
            </a>
          </li>
          <li>
            <a role="button" data-target="m-main-menu" className="m-nav-link">
              <i className="fa-light fa-ellipsis-stroke"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header