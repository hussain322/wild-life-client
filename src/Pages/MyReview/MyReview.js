import React, { useContext, useEffect, useState } from "react";
import { FaHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthProvider";
import MyReviewCard from "./MyReviewCard";

const MyReview = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);
  return (
    <div>
      {reviews.length === 0 ? (
        <h2 className="text-3xl text-center my-20">No review were added</h2>
      ) : (
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-80 gap-10">
          {reviews.map((review) => (
            <MyReviewCard key={review._id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReview;
