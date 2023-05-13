import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
  const {userSignInWithEmail} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/";

  const handleLoginForm =  e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;


    console.log({email, password})

    userSignInWithEmail(email, password)
    .then(res => {
      const user = res.user;
      console.log(user);
      form.reset();
        navigate(from, { replace: true });
    })
    .catch(error => {
      console.log(error.message)
    }) 
  }
  return (
    <section className="lg:pt-20 lg:pb-20 pt-10 pb-10">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md ">
        <div className="px-6 py-4">
          <h3 className="mt-3 text-xl font-bold text-gray-800 text-center">
            Welcome Back
          </h3>

          <p className="mt-1 text-center text-gray-500">Login or create account</p>

          <form onSubmit={handleLoginForm}>
            <div className="w-full mt-4">
              <input
              name="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg    focus:border-orange-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-orange-300"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>

            <div className="w-full mt-4">
              <input
              name= "password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg    focus:border-orange-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-orange-300"
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <Link href="#" className="text-sm text-gray-600  hover:text-gray-500">
                Forget Password?
              </Link>

              <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
          <span className="text-sm text-gray-600 ">Don't have an account? </span>

          <Link
            to="/registration"
            href="#"
            className="mx-2 text-sm font-bold text-orange-500 hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login