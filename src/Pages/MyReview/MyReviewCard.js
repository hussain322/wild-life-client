import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyReviewCard = ({ review, handleDelete }) => {
  const { _id, message, name, serviceName } = review;
  const { user } = useContext(AuthContext);

  return (
    <div className="text-center border p-10 rounded-lg hover:shadow-lg duration-[.3s]">
      <h1 className="text-xl font-semibold py-2">
        Service Name: {serviceName}
      </h1>
      <div className="flex justify-center items-center">
        <FaStar className="ml-2 text-yellow-500 text-2xl" />
        <FaStar className="ml-2 text-yellow-500 text-2xl" />
        <FaStar className="ml-2 text-yellow-500 text-2xl" />
        <FaStar className="ml-2 text-yellow-500 text-2xl" />
        <FaStarHalfAlt className="text-yellow-500 ml-2 text-2xl" />
        <p className="font-semibold ml-2 text-2xl">{review.ratings}</p>
      </div>
      <div className="text-xl font-semibold py-2">
        <i>"{message}"</i>
      </div>
      <h2 className="text-lg font-bold flex justify-center">
        Author:
        <img src={user?.photoURL} alt="" className="w-6 rounded-full mx-6" />
        {name}
      </h2>
      <div className="mt-6">
        <Link to={`/update/${_id}`}>
          <button className="btn btn-primary btn-outline px-6 mr-4">
            edit
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-danger btn-outline px-6"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default MyReviewCard;
