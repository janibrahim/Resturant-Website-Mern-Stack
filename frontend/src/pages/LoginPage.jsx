import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ added for navigation

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 transition-all duration-700 ease-in-out px-5 pt-14">
      {/* Restaurant Welcome Box */}
      <div className="mb-10 text-center animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black drop-shadow-sm">
          🍽️ Welcome to{" "}
          <span className="text-pink-600 animate-pulse">Ibrahii Restaurant</span>
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Enjoy your favorite meals — please login or sign up to continue
        </p>
      </div>

      {/* Login / Signup Box */}
      <div
        className="bg-white rounded-2xl p-8 w-full max-w-md text-black shadow-lg hover:shadow-pink-200 transition-all duration-500 ease-in-out transform hover:-translate-y-1"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-pink-600 transition-all duration-500">
          {isSignup ? "Create Your Account" : "Welcome Back!"}
        </h2>

        <form className="space-y-4">
          {/* Email */}
          <div className="transition-all duration-300">
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-pink-50 border border-pink-200 focus:border-pink-400 outline-none placeholder-gray-400 transition-all duration-300"
            />
          </div>

          {/* Password */}
          <div className="transition-all duration-300">
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-md bg-pink-50 border border-pink-200 focus:border-pink-400 outline-none placeholder-gray-400 transition-all duration-300"
            />
          </div>

          {/* Confirm Password (only for signup) */}
          {isSignup && (
            <div className="transition-all duration-300">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Re-enter password"
                className="w-full px-4 py-2 rounded-md bg-pink-50 border border-pink-200 focus:border-pink-400 outline-none placeholder-gray-400 transition-all duration-300"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-pink-500 text-white hover:bg-pink-600 rounded-md font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        {/* Switch between Login & Signup */}
        <p className="text-center text-sm mt-6 text-gray-700">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsSignup(false)}
                className="text-pink-600 font-medium hover:underline transition-all duration-300"
              >
                Login
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => setIsSignup(true)}
                className="text-pink-600 font-medium hover:underline transition-all duration-300"
              >
                Sign Up
              </button>
            </>
          )}
        </p>

        {/* ✅ Go to Home Button */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="inline-block px-6 py-2 bg-gray-100 text-pink-600 font-semibold rounded-md shadow-sm hover:bg-pink-100 transition-all duration-300"
          >
            ⬅ Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
