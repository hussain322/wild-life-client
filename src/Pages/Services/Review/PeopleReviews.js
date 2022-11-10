import React, { useContext, useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AuthContext } from "../../../Contexts/AuthProvider";

const PeopleReviews = ({ _id }) => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://wild-life-server.vercel.app/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="mt-20 min-h-screen">
      <h3 className="text-xl font-semibold text-gray-500 text-center">
        REVIEWS
      </h3>
      <h1 className="text-3xl lg:text-5xl font-semibold text-center py-2">
        Loved by photographers everywhere
      </h1>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-10">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="text-center border p-10 rounded-lg hover:shadow-lg duration-[.3s]"
          >
            <p className="flex justify-center items-center">
              <FaStar className="ml-2 text-yellow-500 text-2xl" />
              <FaStar className="ml-2 text-yellow-500 text-2xl" />
              <FaStar className="ml-2 text-yellow-500 text-2xl" />
              <FaStar className="ml-2 text-yellow-500 text-2xl" />
              <FaStarHalfAlt className="text-yellow-500 ml-2 text-2xl" />
              <p className="font-semibold ml-2 text-2xl">{review.ratings}</p>
            </p>
            <div className="text-xl font-semibold py-2">
              <i>"{review.message}"</i>
            </div>
            <h2 className="text-lg font-bold flex justify-center">
              Author:
              <img src={review.image} alt="" className="w-10 rounded-full" />
              {review.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleReviews;
