import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import googleIcon from "../../../assets/icons/1534129544.svg";
import { AuthContext } from "../../../Contexts/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      setError("Your password must be 6 character or long");
    }

    // Create User
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("login Successful");
        form.reset();
        setError("");
        handleUpdateUserProfile(name, photoURL);
      })
      .catch((err) => {
        setError(err.code.slice(5));
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then((result) => {
        alert("profile updated successfully");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login-container">
      <div className="w-5/6 md:w-1/2 lg:w-[35%] mx-auto pt-10">
        <form onSubmit={handleSubmit} className="pt-10 form-container p-10">
          <h1 className="text-4xl font-bold text-white text-center">Sign Up</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="PhotoURL"
              name="photoURL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <p className="label-text-alt link link-hover text-white">
                <input type="checkbox" name="" id="" className="mr-2" />
                Accept Terms And Conditions
              </p>
            </label>
            <p className="text-red-500">{error}</p>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-600"
            >
              Sign Up
            </button>
          </div>
          <div className="text-white pt-4">
            Already Have an Account?
            <Link to="/login" className="font-semibold ml-2">
              Login
            </Link>
          </div>
          <p className="text-white text-center pt-2">or</p>
          <div className="pt-4 text-center">
            <button className="btn btn-primary">
              <img src={googleIcon} alt="" className="w-5 mr-4" />
              sign in with google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
