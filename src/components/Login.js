import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { validateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const dispatch = useDispatch();
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
      //* sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("The user is: ", user);
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              seterrorMessage(errorCode + " - " + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      //* login
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("The user is: ", user);
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
      <div className="">
        <img
          src={BACKGROUND_IMG_URL}
          alt="background"
          className="absolute object-cover w-full h-full"
        ></img>
      </div>
      <div className="w-full md:w-3/12 my-44 mx-auto right-0 left-0 absolute">
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
