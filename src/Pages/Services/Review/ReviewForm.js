import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";

const ReviewForm = ({ service }) => {
  const { _id, title, price } = service;
  const { user } = useContext(AuthContext);
  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName || "unregistered";
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const ratings = form.ratings.value;
    const message = form.message.value;
    console.log(name, email, phone, ratings, message);

    const review = {
      service: _id,
      serviceName: title,
      ratings,
      message,
      name,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review added successfully");
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-[90%] lg:w-3/4 mx-auto my-20">
      <form onSubmit={handleReview}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              defaultValue={user?.email}
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Phone</span>
            </label>
            <input
              type="number"
              name="phone"
              placeholder="Your Phone"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Ratings</span>
            </label>
            <input
              type="number"
              name="ratings"
              placeholder="out of 5"
              className="input input-bordered"
            />
          </div>
        </div>
        <textarea
          className="textarea textarea-bordered h-40 mt-6 w-full"
          name="message"
          placeholder="Your Message"
        ></textarea>
        <div className="mt-4 text-center">
          <button type="submit" className="btn btn-primary px-10">
            your review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
