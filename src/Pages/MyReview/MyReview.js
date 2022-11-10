import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import MyReviewCard from "./MyReviewCard";

const MyReview = () => {
  useTitle("My Reviews");
  const [reviews, setReviews] = useState([]);
  const { user, loading, logOut } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://wild-life-server.vercel.app/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("wild-life-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
        }
        return res.json();
      })
      .then((data) => setReviews(data));
  }, [user?.email]);

  //Handle Delete
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this review"
    );
    if (proceed) {
      fetch(`https://wild-life-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Deleted successfully");
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <button className="btn loading">loading</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {reviews.length === 0 ? (
        <h2 className="text-3xl text-center my-20">No review were added</h2>
      ) : (
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-80 gap-10">
          {reviews.map((review) => (
            <MyReviewCard
              key={review._id}
              review={review}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReview;
