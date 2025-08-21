import type { LoginFormPropsTypes } from "../types/form.props.types";
import { Link } from "react-router-dom";

const LoginForm = ({
  formData,
  errors,
  handleChange,
  handleLogin,
}: LoginFormPropsTypes) => {
  return (
    <div className="w-3/4 p-5 mx-auto mt-5 h-lvh">
      <div className="h-[600px] flex justify-center">
        <form
          onSubmit={handleLogin}
          className="w-[500px] flex flex-col gap-y-5"
        >
          <h1 className="text-slate-900 text-3xl font-bold my-4">
            Welcome back
          </h1>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-slate-800 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="h-10 border border-gray-300 rounded px-2"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1"> 🚫 {errors.email}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-slate-800 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              className="h-10 border border-gray-300 rounded px-2"
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1"> 🚫 {errors.password}</p>
            )}
          </div>

          <div>
            <button className="bg-slate-950 text-white w-full px-3 py-2 rounded-lg hover:opacity-60 transition">
              Login
            </button>

            <p className="mt-6 text-center text-gray-600">
              Dont have an account?{" "}
              <span className="text-slate-900 font-medium">
                <Link to={"/register"} className="ms-1 hover:underline">
                  Sign up for free
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
