import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  useEffect(()=>
  {
    if(email.length > 10 && password.length > 3)
    setDisable(false);
  },[email, password])

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full min-h-screen p-4 pt-8 gap-2"
    >
      {loggedIn && <Navigate to={"/profile"}/>}
      <h1 className="text-2xl font-bold">
        Signin to your <br /> PopX account
      </h1>
      <p className="mb-4 text-black-1 font-medium">
        Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
      </p>
      <div className="relative mb-6" data-te-input-wrapper-init>
        <input
          type="email"
          className="block min-h-[auto] w-full rounded border-2 border-[#d1d5db] bg-main-colour px-3 py-1 leading-[2.15] outline-none transition-all duration-200 placeholder:text-sm"
          id="Email"
          placeholder="Enter email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label
          for="Email"
          className="pointer-events-none text-sm font-semibold bg-main-colour pl-1 pr-2 absolute left-2 top-[2px] mb-0 max-w-[90%] origin-[0_0] truncate leading-[2.15] text-purple-1 transition-all -translate-y-[1.15rem]"
        >
          Email address
        </label>
      </div>

      <div className="relative mb-6" data-te-input-wrapper-init>
        <input
          type="password"
          className="block min-h-[auto] w-full rounded border-2 border-[#d1d5db] bg-main-colour px-3 py-1 leading-[2.15] outline-none transition-all duration-200 placeholder:text-sm"
          id="Password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label
          for="Password"
          className="pointer-events-none text-sm font-semibold bg-main-colour pl-1 pr-2 absolute left-2 top-[2px] mb-0 max-w-[90%] origin-[0_0] truncate leading-[2.15] text-purple-1 transition-all -translate-y-[1.15rem]"
        >
          Password
        </label>
      </div>
      <button
        type="submit"
        className={`font-semibold py-3 w-full  text-[#fff] rounded-md text-center ${disable ? "bg-[#d1d5db] pointer-events-none":"bg-purple-1"}`}
      >
        Login
      </button>
    </form>
  );
};
