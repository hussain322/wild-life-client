import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <section className="flex justify-center items-center h-screen p-16 bg-gradient-to-r from-green-500 text-gray-900">
      <div className="max-w-md text-center">
        <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
          {error && (
            <div>
              <h1 className="text-xl font-bold">{error.status}</h1>
              <p className="text-red-500 text-3xl">
                {error.statusText || error.message}
              </p>
            </div>
          )}
        </h2>
        <p className="text-2xl font-semibold md:text-3xl mb-8">
          Sorry, we couldn't find this page.
        </p>
        <Link
          to="/"
          className="px-8 py-3 font-semibold rounded bg-blue-500 text-gray-200"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
