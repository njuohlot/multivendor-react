import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Features from "../components/Features";
const Register = () => {
  return (
    <>
      <div>
        <Header />

        <div className="banner banner-inner">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 col-md-9 col-8">
                <div className="breadcrumb-txt">
                  <h1>Register Page</h1>
                  <ul>
                    <li>
                      <a href="index.html">
                        <i className="fa-regular fa-house"></i>
                      </a>
                    </li>
                    <li>/</li>
                    <li>Register</li>
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
      </div>
      <div className="register py-120">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-xl-5 col-md-6">
              <div className="login-area">
                <h2>Log in your Account</h2>
                <p>
                  There are no enrollment fees or shipping quotas. Simp vide
                  your contact information, create a user ID and word.
                </p>
                <form className="login-form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Username or Email Address"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                  />
                  <button className="def-btn btn-border">Login</button>
                </form>
                <span className="devider">or</span>
                <div className="social-login-box">
                  <button className="def-btn btn-fb">
                    Login with your facebook
                  </button>
                  <button className="def-btn btn-gl">
                    Login with your google+
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="author-area">
                <h2>Become an Author</h2>
                <p>
                  There are no enrollment fees or shipping quotas. Simp vide
                  your contact information, create a user ID and word.
                </p>
                <form className="login-form">
                  <input type="text" name="name" placeholder="Full Name" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Username or Email Address"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                  />
                  <div className="form-check">
                    <input
                      className="form-check-input shipping-check"
                      type="checkbox"
                      name="shippingMode"
                      id="agreeToTerm"
                    />
                    <span className="sub-input">
                      <i className="fa-regular fa-check"></i>
                    </span>
                    <label className="form-check-label" for="agreeToTerm">
                      Agree to the <a href="#">Terms and Conditions</a>
                    </label>
                  </div>
                  <button className="def-btn btn-border">Register</button>
                </form>
                <span className="devider">or</span>
                <div className="social-login-box">
                  <button className="def-btn btn-fb">
                    Sign Up with your facebook
                  </button>
                  <button className="def-btn btn-gl">
                    Sign Up with your google+
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Features />

        <Footer />
      </div>
    </>
  );
};

export default Register;
