import React from "react";
import { LOGO } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    
  const navigate = useNavigate()

  const user = useSelector(store => store.user)
 
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")  
      })
      .catch((error) => {
        navigate("/error") 
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && <div className="flex">
        <img className="h-10 w-10 mx-auto md:mx-0" alt="usericon" src={user?.photoURL} />
        <button onClick={handleSignOut} className="font-bold text-white">
          (Sign Out)
        </button>
      </div>}
    </div>
  );
};

export default Header;
