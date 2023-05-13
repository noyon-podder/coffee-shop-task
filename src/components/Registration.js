import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthProvider';

const Registration = () => {

  //user information
  const { createUser, logInWithGoogle } = useContext(AuthContext);

  const handleRegisterUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const displayName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;

    // const userInformation={fullName, email, password}

    //new user created
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        form.reset();
        toast.success("User Created Successfully!!")
      })
      .catch((error) => {
        
        console.log(error.message);
        // ..
      });
  }

  const handleGoogleLogin = () => {
    logInWithGoogle()
    .then(res => {
      const user = res.user;
      console.log(user)
    })
    .catch(error => {
      console.error(error)
    })
  }

  return (
    <section className="lg:pt-20 lg:pb-20 pt-10 pb-10">
      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md ">
        <div className="flex justify-center mx-auto">
          <h2 className="text-xl font-bold text-gray-800">Create an Account</h2>
        </div>

        <form className="mt-6" onSubmit={handleRegisterUser}>
          <div>
            <label className="block text-sm text-gray-800 ">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg    focus:border-orange-400  focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-800 ">Email</label>
            <input
              type="email"
              name="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg    focus:border-orange-400  focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label className="block text-sm text-gray-800 ">Password</label>
            </div>

            <input
              type="password"
              name="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg    focus:border-orange-400  focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-400 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Sign In
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
          <span className="text-sm text-gray-600 ">
            Already have an account?{" "}
          </span>

          <Link
            to="/login"
            href="#"
            className="mx-2 text-sm font-bold text-orange-500 hover:underline"
          >
            Login
          </Link>
        </div>
        <div class="flex items-center justify-between my-2">
          <span class="w-1/5 border-b  lg:w-1/5"></span>

          <Link
            class="text-xs text-center text-gray-500 uppercase  hover:underline"
          >
            or login with Social Media
          </Link>

          <span class="w-1/5 border-b  lg:w-1/5"></span>
        </div>
        <button
          onClick={handleGoogleLogin}
          type="button"
          class="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-orange-400 rounded-lg hover:bg-orange-500 focus:bg-orange-400 focus:outline-none"
        >
          <svg class="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
          </svg>

          <span class="hidden mx-2 sm:inline">Sign in with Google</span>
        </button>
      </div>
    </section>
  );
}

export default Registration