import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const MyReviewCard = ({ review }) => {
  const { message, name } = review;
  return (
    <div className="text-center border p-10 rounded-lg hover:shadow-lg duration-[.3s]">
      <p className="flex justify-center">
        <FaStar className="ml-2 text-yellow-500 text-2xl" />
        <FaStar className="ml-2 text-yellow-500 text-2xl" />
        <FaStar className="ml-2 text-yellow-500 text-2xl" />
        <FaStar className="ml-2 text-yellow-500 text-2xl" />
        <FaStarHalfAlt className="text-yellow-500 ml-2 text-2xl" />
      </p>
      <i className="text-xl font-semibold py-2">"{message}"</i>
      <h2 className="text-lg font-bold">Author: {name}</h2>
    </div>
  );
};

export default MyReviewCard;
