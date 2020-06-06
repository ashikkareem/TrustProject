import React from "react";

const donate = () => {
  return (
    <div class="d-md-flex h-md-100 align-items-right">
      <div class="col-md-7 p-0 bg-indigo h-md-100">
        <div class="text-black d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
          <div class="logoarea pt-5 pb-5">
            <h3 class="display-4 text-right mb-5 font-weight-light">
              <i className="fas fa-gift" />
              <strong>Donate</strong> to us
            </h3>
            <p class="display-5 text-left font-weight-light">
              You can support our efforts through any of the following options
              that are available at the moment.
            </p>

            <li class="text-left">
              <p>
                <i class="fas fa-university"></i>
                <strong>Online BanKing</strong>
              </p>
              <p>
                Following is the account information to which you may transfer
                the amount you wish to
              </p>
              <p>***information***</p>
            </li>
            <li class="text-left">
              <p>
                <i class="fas fa-mobile-alt"></i>
                <strong>Web Maintenance</strong>
              </p>
              <p>
                Following is the UPI ID to which you may transfer the amount you
                wish to
              </p>
              <p>***Number***</p>
            </li>
          </div>
        </div>
      </div>

      <div class="col-md-5 p-0 bg-white h-md-100 loginarea ">
        <div class="d-md-flex align-items-center h-md-100 p-5 justify-content-center fixed-top position-relative img-fluid"></div>
      </div>
    </div>
  );
};

export default donate;
