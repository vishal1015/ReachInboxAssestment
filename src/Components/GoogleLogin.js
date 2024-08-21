import React from "react";
import { FcGoogle } from "react-icons/fc";
import {Link} from 'react-router-dom'


const GoogleLogin = () => {
    
  return (
    <div className="border border-gray-700 w-[460px] rounded-xl h-[312px] flex flex-col items-center text-white bg-gray-850">
      <div className=" flex flex-col py-6 justify-center items-center">
        <h3 className="text-xl pb-4 font-sans">Create a new account</h3>
        <Link
          to={
            "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reach-inbox-assestment.vercel.app/home"
          }
        >
          <button className="border border-gray-500 py-3 px-20 flex justify-center items-center text-base rounded-md">
            <FcGoogle className="text-2xl font-sans" />{" "}
            <span className="ml-2 font-sans">Sign Up with Google</span>
          </button>
        </Link>
      </div>
      <div className="pt-7">
        <Link>
          <button className="bg-gradient-to-r from-blue-500 rounded to-blue-800 text-white w-48 py-3 px-6 font-sans">
            Create an Account
          </button>
        </Link>
      </div>
      <div className="flex pt-7 pb-5">
        <p className="text-gray-600 font-sans">Already have an account?</p>
        <span className="ml-1 text-gray-300 font-sans">Sign In</span>
      </div>
    </div>
  );
};

export default GoogleLogin;
