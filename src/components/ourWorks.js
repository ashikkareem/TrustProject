import React from "react";
import Slider from "react-slick";



const ourWorks = () => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    indicators: true,
  };
  return (
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
  );
};

export default ourWorks;
