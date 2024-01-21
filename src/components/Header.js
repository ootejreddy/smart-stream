import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGPTSearch } from "../utils/gptSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gptSearch.showGPTSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptClick = () => {
    dispatch(toggleGPTSearch());
  };

  const handleLangChange = (event) => {
    dispatch(changeLanguage(event.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //* unsubscribe when my component unmounts.
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo"></img>
      {user && (
        <div className="flex p-2">
          {showGPTSearch && (
            <select
              className="p-3 mt-5 mb-2 mr-2 rounded-lg bg-gray-600 text-white"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="bg-blue-600 rounded-lg px-4 text-white h-12 mt-5 mx-2 font-semibold hover:opacity-80"
            onClick={handleGptClick}
          >
            {showGPTSearch ? "Homepage" : "GPT Search"}
          </button>
          <div className="w-12 h-12 mr-2 mx-2 mt-5">
            <img
              className=""
              class="profile-icon"
              src={user?.photoURL}
              alt=""
            ></img>
          </div>

          <button
            className="bg-red-500 rounded-lg m-2 h-12 mt-5 pl-4 pr-4 font-semibold hover:opacity-80"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
