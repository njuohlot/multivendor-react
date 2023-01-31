import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features'
const Faqs = () => {
  return (
    <div>
      <Header />
      <div className="banner banner-inner">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-9 col-8">
              <div className="breadcrumb-txt">
                <h1>Faq Page</h1>
                <ul>
                  <li>
                    <a href="index.html">
                      <i className="fa-regular fa-house"></i>
                    </a>
                  </li>
                  <li>/</li>
                  <li>Faq</li>
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
      <div className="faq py-120">
        <div className="container">
          <div className="heading text-center">
            <h2>How can we help?</h2>
          </div>
          <div className="accordion" id="faqAccordion">
            <div className="row">
              <div className="col-md-6">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span className="txt">
                        How To Make Website Easy Edit?
                      </span>
                      <span className="icon">
                        <i className="fa-regular fa-minus"></i>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        write your profissional text here and you can styling
                        and customi form style or advanced ta or check
                        documentation for more details write your profissional
                        text here and you can styling.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span className="txt">How To Make Auto Update?</span>
                      <span className="icon">
                        <i className="fa-regular fa-plus"></i>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        write your profissional text here and you can styling
                        and customi form style or advanced ta or check
                        documentation for more details write your profissional
                        text here and you can styling.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span className="txt">How Many Month Items Update?</span>
                      <span className="icon">
                        <i className="fa-regular fa-plus"></i>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        write your profissional text here and you can styling
                        and customi form style or advanced ta or check
                        documentation for more details write your profissional
                        text here and you can styling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <span className="txt">
                        Can I Pay The Money With Paypal?
                      </span>
                      <span className="icon">
                        <i className="fa-regular fa-plus"></i>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        write your profissional text here and you can styling
                        and customi form style or advanced ta or check
                        documentation for more details write your profissional
                        text here and you can styling.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <span className="txt">Where To Get Contact Support?</span>
                      <span className="icon">
                        <i className="fa-regular fa-plus"></i>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        write your profissional text here and you can styling
                        and customi form style or advanced ta or check
                        documentation for more details write your profissional
                        text here and you can styling.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      <span className="txt">
                        Doughs Vegan or Vegetarian Friendly?
                      </span>
                      <span className="icon">
                        <i className="fa-regular fa-plus"></i>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        write your profissional text here and you can styling
                        and customi form style or advanced ta or check
                        documentation for more details write your profissional
                        text here and you can styling.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSeven">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      <span className="txt">
                        Are Missing on a Restaurant Page?
                      </span>
                      <span className="icon">
                        <i className="fa-regular fa-plus"></i>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        write your profissional text here and you can styling
                        and customi form style or advanced ta or check
                        documentation for more details write your profissional
                        text here and you can styling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <Features />
      <Footer />
    </div>
  );
}

export default Faqs