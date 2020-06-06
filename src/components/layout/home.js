import React, { Fragment } from "react";
import Slider from "react-slick";
import logo from "../../img/Insta-heart.jpg";

const home = () => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    indicators: true,
  };
  return (
    <Fragment>
      <section id="fistp">
        <nav id="navbar">
          <nav class="navbar navbar-expand-lg  navbar fixed-top navbar-dark bg-dark bg-transparent navbar-fixed-top">
            <div class="container">
              <a class="navbar-brand" href="#">
                Trust
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto  ">
                  <li class="nav-item active">
                    <a class="nav-link" id="nav-word" href="#about_us_section">
                      About Us
                      <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a id="nav-word" class="nav-link" href="#">
                      Our works{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a id="nav-word" class="nav-link" href="#">
                      Donate{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a id="nav-word" class="nav-link" href="#">
                      Contact Us{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </nav>
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br />
        <br />
        <div class="container text-center">
          <div class=" jumbotron jumbotron-fluid  bg-transparent">
            <h1 id="mid-font" class="display-2">
              "No one has ever become poor by giving"
            </h1>
            <p id="mid-font" class="">
              ~ Anne Frank
            </p>

            <p id="landing_subcontent">
              {" "}
              <dt>
                Join us in spreading love and kindness to the deserving and help
                us to make an <br /> impact in our surrounding.
              </dt>
            </p>
            <hr />
          </div>
        </div>
        <br />
      </section>
      <div id="about_us_section">
        <br />

        <div id="about" class="container">
          About Us
        </div>

        <div id=" about_us" class="container text-md-center">
          <strong class="text-center">
            We believe that the world is an amazing place because of the
            extravagant people who make it a memorable experience for each one
            of us. We believe in providing equal opportunity to everyone.
          </strong>
        </div>
        <br />
        <br />
        <br />
        <div id="about_content" class="jumbotron  bg-transparent">
          <strong>content for 'about us' section</strong>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <hr />

      <div class="container-fluid">
        <div class="col-lg-12 mx-auto mb-5">
          <h3 class="display-5 text-center font-weight-light">
            <strong>Our Efforts </strong>to make this world a better place
          </h3>
          <p class="text-center w-responsive mx-auto mb-10 font-weight-light">
            He who has never denied himself for the sake of giving, has but
            glanced at the joys of charity.
          </p>
        </div>

        <div class="col-lg-12  mx-auto text-center mb-5">
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>

        <div className="mb-2 text-center center_div">
          <button type="button" class="btn btn-primary btn-lg">
            Click to see more{" "}
          </button>
        </div>
      </div>
      <hr></hr>

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
                  Following is the UPI ID to which you may transfer the amount
                  you wish to
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

      <div class="jumbotron bg-white">
        <h3 class="display-4 text-center font-weight-bold mb-5">
          <img src={logo} width="100" height="100" />
          Follow our blog for updated content
        </h3>
        <p class="lead text-center w-responsive mx-auto mb-0 font-weight-bold">
          We are always on our feet, searching for projects and people in need
          to make their lives better.
        </p>
        <p class="lead text-center w-responsive mx-auto mb-5 font-weight-bold">
          We keep you updated on our active projects for which your support is
          extremely beneficial.
        </p>

        <div class="row justify-content-center">
          <button type="submit" class="btn btn-primary">
            Check our blog
          </button>
        </div>
      </div>

      <hr></hr>

      <footer>
        <div class="container-fluid padding">
          <div class="row text-center padding">
            <div class="col-12 social padding">
              <a href="#" class="lead font-weight-bold">
                <i class="fab fa-facebook"></i>@trustname
              </a>
              <a href="#" class="lead font-weight-bold">
                <i class="fab fa-twitter"></i>@trustname
              </a>
              <a href="#" class="lead font-weight-bold">
                <i class="fab fa-instagram"></i>@trustname
              </a>
            </div>
          </div>
          <hr width="30%"></hr>
        </div>
        <div class="container-fluid padding">
          <div class="row text-cente ">
            <div class="col-md-4 mx-auto foo">
              <p class="lead text-center w-responsive mx-auto mb-0 font-weight-light">
                Tamil Nadu, INDIA
              </p>
              <p class="lead text-center w-responsive mx-auto mb-0 font-weight-light">
                &copy; **Name of the trust**
              </p>
            </div>
          </div>
        </div>
      </footer>
      <br></br>
      <br></br>
      <br></br>
    </Fragment>
  );
};

export default home;
