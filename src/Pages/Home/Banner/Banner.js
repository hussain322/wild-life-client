import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner flex items-center">
      <div className="w-3/4 mx-auto">
        <h1 className="text-4xl text-white font-bold lg:text-6xl">
          Capture Every Moment <br /> In The Wild World
        </h1>
        <br />
        <p className="text-white">
          Wildlife photography is a genre of photography concerned with
          documenting various forms of wildlife in their natural habitat. As
          well as requiring photography skills, wildlife photographers may need
          field craft skills
        </p>
      </div>
    </div>
  );
};

export default Banner;
