import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import PeopleReviews from "./Review/PeopleReviews";
import ReviewForm from "./Review/ReviewForm";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { title, img, ratings, description, price, category } = service;
  useTitle("Service Details");
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[90%] mx-auto my-14">
        <div>
          <PhotoProvider>
            <PhotoView src={img}>
              <img
                src={img}
                alt="Shoes"
                style={{ objectFit: "cover" }}
                className="w-full rounded-lg"
              />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div>
          <h1 className="text-4xl font-bold">{title}</h1>
          <br />
          <p>{description}</p>
          <br />
          <p className="flex items-center">
            <strong>Ratings: {ratings} </strong>
            <FaStar className="ml-2 text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStarHalfAlt className="text-yellow-500" />
          </p>
          <p className="text-xl font-semibold py-2">Price: ${price}</p>
          <p>Category: {category}</p>
        </div>
      </div>

      <PeopleReviews />
      <ReviewForm service={service} />
    </div>
  );
};

export default ServiceDetails;
