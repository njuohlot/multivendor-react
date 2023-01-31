import React from 'react'

const features = () => {
  return (
    <div>
      <div className="features" id="feature">
        <div className="container">
          <div className="panel panel-shadow px-0">
            <div className="custom-row">
              <div className="custom-col">
                <div className="single-feature">
                  <div className="part-icon">
                    <span>
                      <i className="flaticon-money-saving"></i>
                    </span>
                  </div>
                  <div className="part-txt">
                    <h4>Free Delivery</h4>
                    <p>For all order over $500</p>
                  </div>
                </div>
              </div>
              <div className="custom-col">
                <div className="single-feature">
                  <div className="part-icon">
                    <span>
                      <i className="flaticon-dollar"></i>
                    </span>
                  </div>
                  <div className="part-txt">
                    <h4>30 Days Return</h4>
                    <p>If goods have Problems</p>
                  </div>
                </div>
              </div>
              <div className="custom-col">
                <div className="single-feature">
                  <div className="part-icon">
                    <span>
                      <i className="flaticon-credit-card"></i>
                    </span>
                  </div>
                  <div className="part-txt">
                    <h4>Secure Payment</h4>
                    <p>100% secure payment</p>
                  </div>
                </div>
              </div>
              <div className="custom-col">
                <div className="single-feature">
                  <div className="part-icon">
                    <span>
                      <i className="flaticon-call-center"></i>
                    </span>
                  </div>
                  <div className="part-txt">
                    <h4>24/7 Support</h4>
                    <p>Dedicated support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default features