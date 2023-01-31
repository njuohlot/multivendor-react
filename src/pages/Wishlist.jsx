import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Features from "../components/Features";
import { wishlist } from '../data';
const Whishlist = () => {
  return (
    <div>
      <Header />
      <div className="banner banner-inner">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-9 col-8">
              <div className="breadcrumb-txt">
                <h1>Wishlist Page</h1>
                <ul>
                  <li>
                    <a href="index.html">
                      <i className="fa-regular fa-house"></i>
                    </a>
                  </li>
                  <li>/</li>
                  <li>Wishlist</li>
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

      <div className="wishlist py-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="revel-table">
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishlist.map((item, key) => (
                        <>
                          <tr key={item.id}>
                            <td>
                              <div className="product-img">
                                <img
                                  src={item.image}
                                  alt="Image"
                                />
                              </div>
                            </td>
                            <td>
                              <a
                                href="shop-details.html"
                                className="product-name"
                              >
                                {item.name}
                              </a>
                            </td>
                            <td>
                              <span className="price-txt">
                                $<span className="main-price">{item.newPrice}.00</span>
                              </span>
                            </td>
                            <td>
                              <div className="product-count cart-product-count">
                                <div className="quantity rapper-quantity">
                                  <input
                                    type="number"
                                    min="1"
                                    max="100"
                                    step="1"
                                    value="1"
                                    readonly
                                  />
                                  <div className="quantity-nav">
                                    <div className="quantity-button quantity-down">
                                      <i className="fa-solid fa-minus"></i>
                                    </div>
                                    <div className="quantity-button quantity-up">
                                      <i className="fa-solid fa-plus"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="price-txt">
                                $<span className="total-price">460.00</span>
                              </span>
                            </td>
                            <td>
                              <button className="cart-delete">
                                <i className="fa-light fa-trash-can"></i>
                              </button>
                            </td>
                          </tr>
                        </>
                      ))}

                    </tbody>
                  </table>
                </div>
              </div>
              <a href="/shop" className="def-btn btn-border">
                CONTINUE SHOPPING
              </a>
            </div>
          </div>
        </div>
      </div>

      <Features />

      <Footer />
    </div>
  );
}

export default Whishlist;