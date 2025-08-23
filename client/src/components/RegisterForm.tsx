import type { RegisterFormPropsTypes } from "../types/form.props.types";
import { Link } from "react-router-dom";

const RegisterForm = ({
  formData,
  errors,
  handleChange,
  handleRegister,
}: RegisterFormPropsTypes) => {
  return (
    <div className="w-3/4 p-5 mx-auto mt-5 h-lvh">
      <div className="h-[600px] flex justify-center">
        <form
          onSubmit={handleRegister}
          className="w-[500px] flex flex-col gap-y-5"
        >
          <h1 className="text-slate-900 text-3xl font-bold my-4">
            Create a new account
          </h1>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-slate-800 font-semibold">
              Name
            </label>
            <input
              required
              type="name"
              id="name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="h-10 border border-gray-300 rounded px-2"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1"> 🚫 {errors.name}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-slate-800 font-semibold">
              Email
            </label>
            <input
              required
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
              required
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

          <div className="flex flex-col">
            <label
              htmlFor="confirmPassword"
              className="text-slate-800 font-semibold"
            >
              Confirm Password
            </label>
            <input
              required
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleChange}
              value={formData.confirmPassword}
              className="h-10 border border-gray-300 rounded px-2"
            />
            {errors.confirmPassword && (
              <p className="text-red-600 text-sm mt-1">
                🚫 {errors.confirmPassword}
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="bg-slate-950 text-white w-full px-3 py-2 rounded-lg hover:opacity-60 transition"
            >
              Register
            </button>

            <p className="mt-6 text-center text-gray-600">
              Already have an account?
              <span className="text-slate-900 font-medium">
                <Link to={"/"} className="ms-2 hover:underline">
                  Login
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
