import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
      <p className="text-2xl mt-4 text-gray-600">Page Not Found</p>
      <p className="mt-2 text-gray-500">The page you are looking for does not exist.</p>

      <a
        href="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go Home
      </a>
    </div>
  );
};

export default NotFound;
