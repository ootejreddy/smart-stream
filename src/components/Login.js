import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header></Header>
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/0d96eb6d-c491-4ffe-a317-6da60879080a/US-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
          className="absolute"
        ></img>
      </div>
      <div className="w-3/12 my-44 mx-auto right-0 left-0 absolute">
        <form className="p-12 bg-slate-900 bg-opacity-90">
          <h1 className="font-bold text-white text-4xl py-4">
            {isSignInForm ? "Sign Up" : "Sign in"}
          </h1>
          {isSignInForm && (
            <input
              type="text"
              className="my-4 p-2 w-full bg-slate-700 text-white rounded-lg"
              placeholder="Full name"
            ></input>
          )}
          <input
            type="text"
            className="my-4 p-2 w-full bg-slate-700 text-white rounded-lg"
            placeholder="email address"
          ></input>
          <input
            type="password"
            className="my-4 p-2 w-full bg-slate-700 text-white rounded-lg"
            placeholder="password"
          ></input>
          <button className="p-4 my-6 bg-red-600 rounded-md w-full text-white">
            {isSignInForm ? "Sign In" : "Login"}
          </button>
          <p
            className="text-white text-l cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "Already Registered? Login Now"
              : "new to smart-stream? Sign Up Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
