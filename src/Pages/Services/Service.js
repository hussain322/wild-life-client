import React from "react";

const Service = ({ service }) => {
  const { title, img, description } = service;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 100)}...</p>
        <div className="card-actions justify-end">
          <button className="bg-green-600 py-3 px-6 rounded-lg font-semibold text-lg text-white hover:bg-green-800 duration-[.3s]">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
