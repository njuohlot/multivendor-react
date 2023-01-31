import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Features from "../components/Features";
const About = () => {
  return (
    <div>
      <Header />
      <div class="product-quick-view-panel">
        <div class="img">
          <img
            class="quick-view-image"
            src="assets/images/index.html"
            alt="image"
          />
        </div>
      </div>
      <div class="banner banner-inner">
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-6 col-md-9 col-8">
              <div class="breadcrumb-txt">
                <h1>About Us</h1>
                <ul>
                  <li>
                    <a href="index.html">
                      <i class="fa-regular fa-house"></i>
                    </a>
                  </li>
                  <li>/</li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 col-md-3 col-4">
              <div class="part-img">
                <img src="assets/images/breadcrumb-img.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about pt-120 pb-60">
        <div class="container">
          <div class="main-img">
            <img src="assets/images/about-img.jpg" alt="Image" />
          </div>
          <div class="main-txt">
            <div class="row justify-content-center">
              <div class="col-xxl-6 col-xl-7">
                <h2 class="about-page-title text-center">
                  Life is Hard Enough Already. Let us Make it a Much More
                  Easier.​
                </h2>
              </div>
            </div>
            <div class="why-choose">
              <div class="row g-4 justify-content-between">
                <div class="col-xl-6 col-lg-7">
                  <div class="part-txt">
                    <h2 class="part-title">Why Choose Us?</h2>
                    <div class="accordion" id="accordionExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                          <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            How do I become an author?
                            <span>
                              <i class="fa-regular fa-minus"></i>
                            </span>
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          class="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <p>
                              The graphical control element accordion is a
                              vertically stacked list of items, such as labels
                              or thumbnails. Each item can be "expanded" or
                              "stretched" to reveal the content associated with
                              that item.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Is my license transferable?
                            <span>
                              <i class="fa-regular fa-plus"></i>
                            </span>
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <p>
                              The graphical control element accordion is a
                              vertically stacked list of items, such as labels
                              or thumbnails. Each item can be "expanded" or
                              "stretched" to reveal the content associated with
                              that item.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            What do you mean by item and end product?
                            <span>
                              <i class="fa-regular fa-plus"></i>
                            </span>
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <p>
                              The graphical control element accordion is a
                              vertically stacked list of items, such as labels
                              or thumbnails. Each item can be "expanded" or
                              "stretched" to reveal the content associated with
                              that item.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Am I allowed to modify the item that I purchased?
                            <span>
                              <i class="fa-regular fa-plus"></i>
                            </span>
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <p>
                              The graphical control element accordion is a
                              vertically stacked list of items, such as labels
                              or thumbnails. Each item can be "expanded" or
                              "stretched" to reveal the content associated with
                              that item.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-5">
                  <div class="video-area">
                    <a
                      href="#"
                      class="js-modal-btn"
                      data-video-id="uoIW4M_MeU8"
                    >
                      <i class="flaticon-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="team pt-60 pb-120">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xxl-6 col-xl-7 col-lg-8">
              <h2 class="about-page-title text-center">Meet Our Team</h2>
            </div>
          </div>
          <div class="row g-lg-4 g-3">
            <div class="col-md-3 col-6">
              <div class="single-card">
                <div class="part-img">
                  <img src="assets/images/team-1.jpg" alt="Image" />
                </div>
                <div class="part-txt">
                  <h3>Md Saidul</h3>
                  <p>Executive</p>
                </div>
                <div class="social">
                  <a href="#">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <div class="single-card">
                <div class="part-img">
                  <img src="assets/images/team-2.jpg" alt="Image" />
                </div>
                <div class="part-txt">
                  <h3>Mike Dooley</h3>
                  <p>Chief Executive</p>
                </div>
                <div class="social">
                  <a href="#">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <div class="single-card">
                <div class="part-img">
                  <img src="assets/images/team-3.jpg" alt="Image" />
                </div>
                <div class="part-txt">
                  <h3>Alextina Jimiey</h3>
                  <p>Manager</p>
                </div>
                <div class="social">
                  <a href="#">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <div class="single-card">
                <div class="part-img">
                  <img src="assets/images/team-4.jpg" alt="Image" />
                </div>
                <div class="part-txt">
                  <h3>Caitlin Murphy</h3>
                  <p>Executive</p>
                </div>
                <div class="social">
                  <a href="#">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Footer />
    </div>
  );
};

export default About;
