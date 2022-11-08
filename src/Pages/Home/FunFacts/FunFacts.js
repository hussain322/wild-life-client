import React from "react";
import { FaHeart } from "react-icons/fa";
import { FiCheckCircle, FiStar } from "react-icons/fi";
import { AiOutlineFieldTime } from "react-icons/ai";

const FunFacts = () => {
  return (
    <div className="my-20 w-[90%] mx-auto">
      <h1 className="text-5xl font-bold text-center">Fun Facts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-4">
        <div className="text-center border p-10 rounded-lg hover:shadow-lg duration-[.3s]">
          <button>
            <FaHeart className="text-2xl text-red-500" />
          </button>
          <h4 className="text-2xl font-semibold py-2">Happy Clients</h4>
          <h2 className="text-5xl font-bold">800+</h2>
        </div>

        <div className="text-center border p-10 rounded-lg hover:shadow-lg duration-[.3s]">
          <button>
            <FiCheckCircle className="text-2xl text-green-600" />
          </button>
          <h4 className="text-2xl font-semibold py-2">Project Completed</h4>
          <h2 className="text-5xl font-bold">1200+</h2>
        </div>

        <div className="text-center border p-10 rounded-lg hover:shadow-lg duration-[.3s]">
          <button>
            <FiStar className="text-2xl text-yellow-500" />
          </button>
          <h4 className="text-2xl font-semibold py-2">Awards Won</h4>
          <h2 className="text-5xl font-bold">67+</h2>
        </div>

        <div className="text-center border p-10 rounded-lg hover:shadow-lg duration-[.3s]">
          <button>
            <AiOutlineFieldTime className="text-2xl text-blue-600" />
          </button>
          <h4 className="text-2xl font-semibold py-2">Years of Experience</h4>
          <h2 className="text-5xl font-bold">10+</h2>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
