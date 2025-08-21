import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-[300px] w-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>

      {/* Regardless of the routes if we are authenticated we will redirected to /homepage if not / */}
      <Link
        to="/homepage"
        className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go back home
      </Link>
    </div>
  );
};

export default ErrorPage;
