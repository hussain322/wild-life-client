import React from "react";
import { Link } from "react-router-dom";
import googleIcon from "../../../assets/icons/1534129544.svg";

const SignUp = () => {
  return (
    <div className="login-container">
      <div className="w-5/6 md:w-1/2 lg:w-[35%] mx-auto pt-10">
        <form className="pt-10 form-container p-10">
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
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-600">
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
