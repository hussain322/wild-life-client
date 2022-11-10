import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServicesLimitCard from "./ServicesLimitCard";

const ServiceLimit = () => {
  const [limitedService, setLimitedService] = useState([]);

  useEffect(() => {
    fetch("https://wild-life-server.vercel.app/services/limit")
      .then((res) => res.json())
      .then((data) => setLimitedService(data));
  }, [setLimitedService]);
  return (
    <div className="w-[90%] mx-auto my-20">
      <h1 className="text-5xl font-bold text-center my-20">My Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {limitedService.map((service) => (
          <ServicesLimitCard key={service._id} service={service} />
        ))}
      </div>
      <div className="mt-20 text-center">
        <Link to="/services">
          <button className="py-3 px-10 uppercase bg-green-600 border border-green-600 text-white font-semibold rounded-md">
            show all
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceLimit;
