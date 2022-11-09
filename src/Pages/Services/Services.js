import React from "react";
import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const Services = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div className="my-10">
      <h1 className="font-bold text-5xl text-center">My Services</h1>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
