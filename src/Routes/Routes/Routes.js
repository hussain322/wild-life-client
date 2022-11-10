import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login.js/Login/Login";
import SignUp from "../../Pages/Login.js/SignUp/SignUp";
import MyReview from "../../Pages/MyReview/MyReview";
import Update from "../../Pages/MyReview/Update";
import AddService from "../../Pages/Services/AddService";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch("https://wild-life-server.vercel.app/services"),
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(`https://wild-life-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`https://wild-life-server.vercel.app/reviews/${params.id}`),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
