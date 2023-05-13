import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <section className="lg:pt-20 lg:pb-20 pt-10 pb-10">
      <div class="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md ">
        <div class="flex justify-center mx-auto">
          <h2 className='text-xl font-bold text-gray-800'>Create an Account</h2>
        </div>

        <form class="mt-6">
          <div>
            <label for="username" class="block text-sm text-gray-800 ">
              Full Name
            </label>
            <input
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg    focus:border-orange-400  focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div>
            <label for="username" class="block text-sm text-gray-800 ">
              Email
            </label>
            <input
              type="email"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg    focus:border-orange-400  focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div class="mt-4">
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm text-gray-800 ">
                Password
              </label>
            </div>

            <input
              type="password"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg    focus:border-orange-400  focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div class="mt-6">
            <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Sign In
            </button>
          </div>
        </form>
        <div class="flex items-center justify-center py-4 text-center bg-gray-50 ">
          <span class="text-sm text-gray-600 ">Already have an account? </span>

          <Link
            to="/login"
            href="#"
            class="mx-2 text-sm font-bold text-orange-500 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Registration