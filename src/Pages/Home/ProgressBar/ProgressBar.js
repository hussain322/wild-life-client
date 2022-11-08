import React from "react";
import "./ProgressBar.css";
import photographer from "../../../assets/photographer.png";

function ProgressBar() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto">
      <div>
        <img src={photographer} alt="" className="w-3/4" />
      </div>
      <div className="container">
        <h1 className="text-5xl font-semibold py-4">
          Build a moment with one snap shoot
        </h1>

        <div className="skill-box">
          <span className="title">Animal Photography</span>
          <div className="skill-bar">
            <span className="skill-per">
              <span className="tooltip">95%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Nature Photography</span>
          <div className="skill-bar">
            <span className="skill-per nature">
              <span className="tooltip">80%</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">Human Photography</span>
          <div className="skill-bar">
            <span className="skill-per human">
              <span className="tooltip">75%</span>
            </span>
          </div>
        </div>
        <div>
          <button className="bg-green-600 text-white py-3 px-6 rounded-md uppercase font-semibold">
            read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
