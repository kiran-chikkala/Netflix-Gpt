import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
const SignOut = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className=" bg-black font-bold text-center w-[150px]  h-24 absolute text-white  mt-5 mr-4  z-100  ">
      <ul>
        <li>#user1</li>
        <li>#user2</li>
      </ul>
      <h1 className=" my-2 border-t-2" onClick={handleSignOut}>
        Sign out
      </h1>
    </div>
  );
};

export default SignOut;
