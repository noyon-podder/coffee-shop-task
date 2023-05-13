import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="lg:pt-20 lg:pb-20 pt-10 pb-10">
      <div class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md ">
        <div class="px-6 py-4">
          <h3 class="mt-3 text-xl font-bold text-gray-800 text-center">
            Welcome Back
          </h3>

          <p class="mt-1 text-center text-gray-500">Login or create account</p>

          <form>
            <div class="w-full mt-4">
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg    focus:border-orange-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-orange-300"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>

            <div class="w-full mt-4">
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg    focus:border-orange-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-orange-300"
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>

            <div class="flex items-center justify-between mt-4">
              <Link href="#" class="text-sm text-gray-600  hover:text-gray-500">
                Forget Password?
              </Link>

              <button class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
          </form>
        </div>

        <div class="flex items-center justify-center py-4 text-center bg-gray-50 ">
          <span class="text-sm text-gray-600 ">Don't have an account? </span>

          <Link
            to="/registration"
            href="#"
            class="mx-2 text-sm font-bold text-orange-500 hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login