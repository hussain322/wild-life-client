import React from "react";
import "./Login.css";
import googleIcon from "../../../assets/icons/1534129544.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <div className="w-3/4 md:w-1/2 lg:w-[35%] mx-auto pt-20">
        <h1 className="text-4xl font-bold text-white text-center">
          Welcome to Login
        </h1>
        <form className="pt-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <p className="label-text-alt link link-hover text-white hover:text-green-700">
                Forgot password?
              </p>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green-600 hover:bg-green-700">
              Login
            </button>
          </div>
        </form>
        <div className="text-white pt-4">
          Doesn't have account yet?
          <Link to="/signup" className="font-semibold ml-2">
            Sign Up
          </Link>
        </div>
        <p className="text-white text-center pt-2">or</p>
        <div className="pt-4 text-center">
          <button className="btn btn-primary">
            <img src={googleIcon} alt="" className="w-5 mr-4" />
            sign in with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
