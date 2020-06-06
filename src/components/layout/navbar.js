import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "../../App.css";

const navbar = () => {
  return (
    <section id = 'fistp'>

    <nav id="navbar">
<nav class="navbar navbar-expand-lg  navbar fixed-top navbar-dark bg-dark bg-transparent navbar-fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#">Trust</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto  ">
        <li class="nav-item active">
          <a class="nav-link" id = "nav-word" href="#about_us_section">About Us
                <span class="sr-only">(current)</span>
              </a>
        </li>
        <li class="nav-item">
          <a  id = "nav-word" class="nav-link" href="#">Our works    </a>
        </li>
        <li class="nav-item">
          <a  id = "nav-word" class="nav-link" href="#">Donate   </a>
        </li>
        <li class="nav-item">
          <a  id = "nav-word"class="nav-link" href="#">Contact Us   </a>
        </li>
      </ul>
    </div>
  </div>
</nav></nav>

    <br/>
    <br/><br/><br/> <br/><br/><br/><br/><br/>
<div  class="container text-center">
    <div  class = " jumbotron jumbotron-fluid  bg-transparent" >
        <h1  id = "mid-font" class="display-2"  >"No one has ever become poor by giving"</h1>
        <p id = "mid-font"  class= "">~ Anne Frank</p>

                <p id = "landing_subcontent" > <dt>Join us in spreading love and kindness to the deserving and help us to make an <br/> impact in our surrounding.</dt></p>
     <hr />
      </div>
 </div>
<br/>



</section>
  );
};

export default navbar;
