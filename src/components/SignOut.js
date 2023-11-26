import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { RxExit } from "react-icons/rx";
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
    <div className=" bg-black font-bold text-center w-[150px]  h-25 p-2 absolute text-white  mt-5 mr-4  z-100">
      <ul className=" flex flex-col ">
        <li className=" flex items-center">
          <img
            className=" w-10"
            src="https://i.pinimg.com/474x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg"
            alt=""
          />
          #user1
        </li>
        <li className=" flex items-center mt-2">
          <img
            className="w-10 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzX964_gPlEufqBULUj6qIQBt1faFugD-LKQ"
            alt=""
          />
          #user2
        </li>
      </ul>
      <h1 className=" my-2 border-t-2" onClick={handleSignOut}>
        Sign out
        <RxExit className="inline-block" />
      </h1>
    </div>
  );
};

export default SignOut;
