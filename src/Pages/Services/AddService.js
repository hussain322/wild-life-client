import React from "react";
import toast from "react-hot-toast";
import useTitle from "../../Hooks/useTitle";

const AddService = () => {
  useTitle("Add Service");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const price = form.price.value;
    const category = form.category.value;
    const ratings = form.ratings.value;
    const description = form.description.value;
    const img = form.image.value;

    const serviceInfo = {
      title,
      createdTime: new Date().toISOString(),
      price,
      ratings,
      category,
      description,
      img,
    };
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Added a new service");
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-[90%] lg:w-3/4 mx-auto my-20">
      <h1 className="text-5xl text-center font-bold my-10">
        Add a new service
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Name</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Service Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Ratings</span>
            </label>
            <input
              type="text"
              name="ratings"
              placeholder="Ratings"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <textarea
          className="textarea textarea-bordered h-40 mt-6 w-full"
          name="description"
          placeholder="Description"
        ></textarea>
        <div className="mt-4 text-center">
          <button type="submit" className="btn btn-primary px-10">
            Add a service
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
