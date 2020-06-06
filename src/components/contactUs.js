import React, { Fragment } from "react";

const contactUs = () => {
  return (
    <section id="contact-us">
      <div class="container ">
        <h1 class="text-center">Contact Us</h1>
        <p class="text-center">
          <strong>
            We would be delighted to help you out with any query you have
            regarding our organisation.<strong></strong>
          </strong>
        </p>
        <br />
        <br />
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <textarea
                id="form_message"
                name="message"
                class="form-control"
                placeholder="Message "
                rows="4"
                required="required"
                data-error="Please, leave us a message."
              ></textarea>
              <div class="help-block with-errors"></div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="form-group">
              <input
                id="form_name"
                type="text"
                name="name"
                class="form-control"
                placeholder="Email Address"
                required="required"
                data-error="Firstname is required."
              />
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <input
                id="form_lastname"
                type="text"
                name="surname"
                class="form-control"
                placeholder=" Full Name"
                required="required"
                data-error="Lastname is required."
              />
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <input
                id="form_name"
                type="text"
                name="name"
                class="form-control"
                placeholder="Phone Number"
                required="required"
                data-error="Firstname is required."
              />
              <div class="help-block with-errors"></div>
            </div>
          </div>
        </div>
        <div className="mb-2 text-center">
          <button type="button" class="btn btn-success btn-lg">
            Send{" "}
          </button>
        </div>
        <br /> <br />
      </div>
    </section>
  );
};

export default contactUs;
