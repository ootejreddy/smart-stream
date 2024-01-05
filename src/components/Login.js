import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { validateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(email.current.value);
    // console.log(password.current.value);
    const errorMessage = validateData(
      email.current.value,
      password.current.value
    );
    // console.log("The error message is: ", errorMessage);
    seterrorMessage(errorMessage);
    if (errorMessage) return;
    //sign in, sign up
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("The user is: ", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("The user is: ", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
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
        <form
          className="p-12 bg-slate-900 bg-opacity-90"
          // onSubmit={handleFormSubmit}
        >
          <h1 className="font-bold text-white text-4xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              className="my-4 p-2 w-full bg-slate-700 text-white rounded-lg"
              placeholder="Full name"
              required
            ></input>
          )}
          <input
            ref={email}
            type="text"
            className="my-4 p-2 w-full bg-slate-700 text-white rounded-lg"
            placeholder="email address"
            required
          ></input>
          <input
            ref={password}
            type="password"
            className="my-4 p-2 w-full bg-slate-700 text-white rounded-lg"
            placeholder="password"
            required
          ></input>
          <p className="text-red-600 ">{errorMessage}</p>
          <button
            className="p-4 my-6 bg-red-600 rounded-md w-full text-white"
            type="button"
            onClick={handleFormSubmit}
          >
            {isSignInForm ? "Sign Up" : "Login"}
          </button>
          <p
            className="text-white text-l cursor-pointer"
            onClick={toggleSignInForm}
          >
            {!isSignInForm
              ? "Already Registered? Login Now"
              : "new to smart-stream? Sign Up Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
