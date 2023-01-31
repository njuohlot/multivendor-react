import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="main-footer">
        <div className="container">
          <div className="custom-row">
            <div className="custom-col-2">
              <div className="footer-about">
                <div className="footer-logo">
                  <h6>TopShopt</h6>
                </div>
                <p>Online E-ccommerce Solution</p>
                <ul>
                  <li>
                    <div className="icon">
                      <span>
                        <i className="flaticon-map"></i>
                      </span>
                    </div>
                    <div className="txt">
                      <span>Yaounde Post Ft Centre Cameroon</span>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span>
                        <i className="flaticon-email"></i>
                      </span>
                    </div>
                    <div className="txt">
                      <a href="#">njuohlottimngum@gmail.com</a>
                      <a href="#">TopShop@example.com</a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span>
                        <i className="flaticon-telephone"></i>
                      </span>
                    </div>
                    <div className="txt">
                      <a href="#">+237 698 859 688</a>
                      <a href="#">+237 659 107 885</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="custom-col-2">
              <div className="link-wrap">
                <div className="footer-link">
                  <h3 className="footer-title">Information</h3>
                  <ul>
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/contact">Contact Us</a>
                    </li>
                    <li>
                      <a href="/blog">Blogs</a>
                    </li>
                    <li>
                      <a href="#">Terms Of Use</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policies</a>
                    </li>
                    <li>
                      <a href="/faq">FAQ</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-link">
                  <h3 className="footer-title">Information</h3>
                  <ul>
                    <li>
                      <a href="/cart">My Order</a>
                    </li>
                    <li>
                      <a href="/wishlist">Wishlist</a>
                    </li>
                    <li>
                      <a href="/account">My Credit</a>
                    </li>
                    <li>
                      <a href="/register">Login</a>
                    </li>
                    <li>
                      <a href="/account">Personal Info</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="custom-col">
              <div className="footer-subscribe">
                <h3 className="footer-title">Subscribe</h3>

                <form>
                  <input type="email" name="email" placeholder="Your Email" />
                  <button type="submit">
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </form>
                <div className="btn-box">
                  <a href="#">
                    <img src="assets/images/play-store.png" alt="Play Store" />
                  </a>
                  <a href="#">
                    <img src="assets/images/app-store.png" alt="App Store" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>&copy; Copyright Epay-Market All Right Reserved</p>
            </div>
            <div className="col-md-6">
              <div className="part-img d-flex justify-content-md-end justify-content-center">
                <img src="assets/images/payment-gateway.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer