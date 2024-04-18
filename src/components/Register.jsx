// SignUp.js
import React from 'react';
import logoImg from '../assets/logo.png'; 
const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-center relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
      <div className="absolute top-6 left-6">
        <img src={logoImg} alt="Logo" className="w-16 h-16 md:w-24 md:h-24 filter drop-shadow-lg" />
      </div>

      <div className="max-w-md w-full px-8 py-10 rounded-lg shadow-lg bg-gray-900 bg-opacity-90 relative z-10">
        <div className="mb-8 flex items-center">
          <div className="mr-4">
            <img src={logoImg} alt="Logo" className="w-16 h-16 md:w-24 md:h-24 filter drop-shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl text-white font-bold mb-2">Create an Account</h2>
            <h2 className="text-4xl text-purple-400 font-bold mb-4">Get Started!</h2>
          </div>
        </div>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              id="fullname"
              className="w-full rounded-full py-3 px-4 bg-transparent border border-white border-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
              placeholder="Full Name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              className="w-full rounded-full py-3 px-4 bg-transparent border border-white border-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
              placeholder="Email Address"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              className="w-full rounded-full py-3 px-4 bg-transparent border border-white border-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
              placeholder="Password"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="confirmPassword"
              className="w-full rounded-full py-3 px-4 bg-transparent border border-white border-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agreement"
              className="mr-2 h-4 w-4 text-purple-600 focus:ring-purple-400"
            />
            <label htmlFor="agreement" className="text-gray-300">
              I agree to the <a href="#" className="text-purple-300 hover:text-purple-500 hover:underline transition duration-300">Terms and Conditions</a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center text-white">
          <p>
            Already have an account?{' '}
            <a
              href="/"
              className="text-purple-300 hover:text-purple-500 hover:underline transition duration-300"
            >
              Log in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
