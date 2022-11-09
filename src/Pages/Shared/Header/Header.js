import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../../assets/icons/logo.png";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="shadow-lg">
      <div className="navbar w-[90%] mx-auto bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/">Services</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/myReviews">My Reviews</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="normal-case text-xl flex">
            <img src={logo} alt="" className="w-16" />
            <div>
              <span className="text-green-700 font-semibold">WildLife</span>
              <p className="text-sm p-0">
                <small className="-tracking-tighter">photography</small>
              </p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-semibold">
            <li>
              <NavLink to="/" className=" py-2 px-4">
                Home
              </NavLink>
            </li>
            <li className="mx-4">
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/myReviews">My Reviews</NavLink>
            </li>
            <li>
              <Link>{user?.displayName}</Link>
            </li>
            <li>
              <Link>
                <img src={user?.photoURL} alt="" className="w-8 rounded-full" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <Link
              onClick={handleLogOut}
              to="/login"
              className="bg-green-600 py-2 px-4 rounded-lg font-semibold text-white hover:bg-green-700"
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="bg-green-600 py-2 px-4 rounded-lg font-semibold text-white hover:bg-green-700"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
