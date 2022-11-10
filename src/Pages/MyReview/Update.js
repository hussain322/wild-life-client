import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const Update = () => {
  useTitle("Update Reviews");
  const storeReview = useLoaderData();
  const [review, setReview] = useState(storeReview);

  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    console.log(review);

    fetch(`http://localhost:5000/reviews/${storeReview._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Updated Successfully");
        }
      });
  };

  const handleOnChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newReview = { ...review };
    newReview[field] = value;
    setReview(newReview);
  };

  return (
    <div className="w-1/2 mx-auto min-h-screen mt-20">
      <h1>Please update : {storeReview.message}</h1>
      <form onSubmit={handleUpdateSubmit}>
        <label>
          <p className="my-2">
            <small>Ratings</small>
          </p>
          <input
            type="text"
            onChange={handleOnChange}
            defaultValue={storeReview.ratings}
            name="ratings"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </label>
        <div className="mt-6">
          <textarea
            onChange={handleOnChange}
            defaultValue={storeReview.message}
            className="textarea textarea-bordered h-24 w-full"
            name="message"
            placeholder="Bio"
          ></textarea>
        </div>
        <div className="mt-6">
          <button className="btn btn-primary btn-outline px-6">Update</button>
        </div>
      </form>
    </div>
  );
};

export default Update;
