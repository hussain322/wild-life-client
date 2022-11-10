import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import Service from "./Service";

const Services = () => {
  const services = useLoaderData();
  useTitle("Services");
  const { loading } = useContext(AuthContext);

  return (
    <>
      {loading ? (
        <div className="min-h-screen flex justify-center items-center">
          <button className="btn loading">loading</button>
        </div>
      ) : (
        <div className="my-10">
          <h1 className="font-bold text-5xl text-center">My Services</h1>
          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
            {services.map((service) => (
              <Service key={service._id} service={service} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
