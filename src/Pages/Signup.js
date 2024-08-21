import React from "react";
import GoogleLogin from "../Components/GoogleLogin";
import Clogo from '../Assets/Clogo.svg'

const SignUp = () => {
  return (
    <div className="bg-[#25262b] h-[100vh] flex flex-col">
      
      <div className="w-full h-16 flex justify-center items-center border-b border-gray-700">
        <img src={Clogo} alt=""/>
      </div>
      <div className="flex justify-center items-center flex-grow">
        <GoogleLogin/>
      </div>
      <div className="w-full h-8 flex justify-center items-center border-t border-gray-700 bg-[#25262b]">
        <p className="text-gray-600 font-sans">&copy; 2024 Reachinbox, All rights reserved</p>
      </div>
    </div>
  );
};

export default SignUp;