import React from "react";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className="flex flex-col justify-end h-full min-h-screen p-4  pb-8 gap-2">
      <h1 className="text-2xl font-bold">Welcome to PopX</h1>
      <p className="mb-4 text-black-1 font-medium">
        Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
      </p>
      <Link to={"signUp"} className="text-sm font-semibold py-2 w-full bg-purple-1 text-[#fff] rounded-md text-center">
        Create Account
      </Link>
      <Link to={"login"} className="text-sm font-semibold py-2 w-full bg-purple-2 text-[#000] rounded-md text-center">
        Already Registered? Login
      </Link>
    </div>
  );
};
