import React from "react";
import logo from '../img/Insta-heart.jpg'

const follow = () => {
  return (
    <div class="jumbotron bg-white">
      <h3 class="display-4 text-center font-weight-bold mb-5">
        <img src={logo} width="100" height="100" />
        Follow our blog for updated content
      </h3>
      <p class="lead text-center w-responsive mx-auto mb-0 font-weight-bold">
        We are always on our feet, searching for projects and people in need to
        make their lives better.
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
  );
};

export default follow;
