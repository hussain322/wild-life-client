import React, { useContext, useState } from "react";
import "./Login.css";
import googleIcon from "../../../assets/icons/1534129544.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import toast from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";
import useTitle from "../../../Hooks/useTitle";

const Login = () => {
  const [error, setError] = useState("");
  const { login, googleLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  useTitle("Login");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully Login!");
        form.reset();
        setError("");
        navigate(from, { replace: true });

        const currentUser = {
          email: user.email,
        };
        //get jwt token
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            //set local storage
            localStorage.setItem("wild-life-token", data.token);
          });
      })
      .catch((err) => {
        setError(err.code.slice(5));
      });
  };

  //google login
  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((res) => {
        toast.success("Successfully Logged in!");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.code.slice(5)));
  };

  return (
    <div className="login-container">
      <div className="w-5/6 md:w-1/2 lg:w-[35%] mx-auto pt-20">
        <form onSubmit={handleSubmit} className="pt-10 form-container p-10">
          <h1 className="text-4xl font-bold text-white text-center">Login</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
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
              <p className="label-text-alt link link-hover text-white hover:text-green-700">
                Forgot password?
              </p>
            </label>
            <p className="text-red-500">{error}</p>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-600"
            >
              Login
            </button>
          </div>
          <div className="text-white pt-4">
            Doesn't have account yet?
            <Link to="/signup" className="font-semibold ml-2">
              Sign Up
            </Link>
          </div>
          <p className="text-white text-center pt-2">or</p>
        </form>
        <div onClick={handleGoogleLogin} className="pt-4 text-center">
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
