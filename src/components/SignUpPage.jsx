import { useState } from "react";
import React from "react";
import { Navigate } from "react-router-dom";

export const SignUppage = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    companyName: "",
    isAgency: "no",
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full min-h-screen p-4 pt-8 gap-2"
    >
      {loggedIn && <Navigate to={"/profile"} />}
      <h1 className="text-2xl font-bold mb-4">
        Create your <br /> PopX account
      </h1>
      <div className="relative mb-4" data-te-input-wrapper-init>
        <input
          type="text"
          name="fullname"
          className="block min-h-[auto] w-full rounded border-2 border-[#d1d5db] bg-main-colour px-3 py-1 leading-[2.15] outline-none transition-all duration-200 placeholder:text-sm"
          id="fullname"
          value={formData.fullname}
          placeholder="Enter full name"
          onChange={(e) => handleChange(e)}
          required
        />
        <label
          htmlFor="fullname"
          className="pointer-events-none text-sm font-semibold bg-main-colour pl-1 pr-2 absolute left-2 top-[2px] mb-0 max-w-[90%] origin-[0_0] truncate leading-[2.15] text-purple-1 transition-all -translate-y-[1.15rem]"
        >
          Full Name <span className="text-[#dc2626] text-lg">*</span>
        </label>
      </div>
      <div className="relative mb-4" data-te-input-wrapper-init>
        <input
          type="number"
          name="phoneNumber"
          className="block min-h-[auto] w-full rounded border-2 border-[#d1d5db] bg-main-colour px-3 py-1 leading-[2.15] outline-none transition-all duration-200 placeholder:text-sm"
          id="phoneNumber"
          value={formData.phoneNumber}
          placeholder="Enter Phone number"
          onChange={(e) => handleChange(e)}
          required
        />
        <label
          htmlFor="phoneNumber"
          className="pointer-events-none text-sm font-semibold bg-main-colour pl-1 pr-2 absolute left-2 top-[2px] mb-0 max-w-[90%] origin-[0_0] truncate leading-[2.15] text-purple-1 transition-all -translate-y-[1.15rem]"
        >
          Phone Number <span className="text-[#dc2626] text-lg">*</span>
        </label>
      </div>
      <div className="relative mb-4" data-te-input-wrapper-init>
        <input
          type="email"
          name="email"
          className="block min-h-[auto] w-full rounded border-2 border-[#d1d5db] bg-main-colour px-3 py-1 leading-[2.15] outline-none transition-all duration-200 placeholder:text-sm"
          id="Email"
          value={formData.email}
          placeholder="Enter email address"
          onChange={(e) => handleChange(e)}
          required
        />
        <label
          htmlFor="Email"
          className="pointer-events-none text-sm font-semibold bg-main-colour pl-1 pr-2 absolute left-2 top-[2px] mb-0 max-w-[90%] origin-[0_0] truncate leading-[2.15] text-purple-1 transition-all -translate-y-[1.15rem]"
        >
          Email address <span className="text-[#dc2626] text-lg">*</span>
        </label>
      </div>
      <div className="relative mb-4" data-te-input-wrapper-init>
        <input
          type="password"
          name="password"
          value={formData.password}
          className="block min-h-[auto] w-full rounded border-2 border-[#d1d5db] bg-main-colour px-3 py-1 leading-[2.15] outline-none transition-all duration-200 placeholder:text-sm"
          id="Password"
          placeholder="Enter password"
          onChange={(e) => handleChange(e)}
          required
        />
        <label
          htmlFor="Password"
          className="pointer-events-none text-sm font-semibold bg-main-colour pl-1 pr-2 absolute left-2 top-[2px] mb-0 max-w-[90%] origin-[0_0] truncate leading-[2.15] text-purple-1 transition-all -translate-y-[1.15rem]"
        >
          Password <span className="text-[#dc2626] text-lg">*</span>
        </label>
      </div>
      <div className="relative mb-2" data-te-input-wrapper-init>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          className="block min-h-[auto] w-full rounded border-2 border-[#d1d5db] bg-main-colour px-3 py-1 leading-[2.15] outline-none transition-all duration-200 placeholder:text-sm"
          id="companyName"
          placeholder="Enter company name"
          onChange={(e) => handleChange(e)}
        />
        <label
          htmlFor="companyName"
          className="pointer-events-none text-sm font-semibold bg-main-colour pl-1 pr-2 absolute left-2 top-[2px] mb-0 max-w-[90%] origin-[0_0] truncate leading-[2.15] text-purple-1 transition-all -translate-y-[1.15rem]"
        >
          Company Name
        </label>
      </div>

      <div className="flex flex-col" data-te-input-wrapper-init>
        <label htmlFor="isAgency" className="text-sm mb-2">Are you an Agency?<span className="text-[#dc2626] text-lg">*</span></label>
        <div className="flex space-x-4 items-center">
          <label className="text-sm flex items-center">
            <input
              type="radio"
              name="isAgency"
              value="yes"
              className="mr-2 size-5 accent-purple-1"
              checked={formData.isAgency === "yes"}
              onChange={(e) => handleChange(e)}
            />
           <span>Yes</span>
          </label>
          <label className="text-sm flex items-center">
            <input
              type="radio"
              name="isAgency"
              value="no"
              className="mr-2 size-5 accent-purple-1"
              checked={formData.isAgency === "no"}
              onChange={(e) => handleChange(e)}
            />
            <span className="my-auto">No</span>
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="font-semibold py-3 w-full  text-[#fff] rounded-md text-center bg-purple-1 mt-auto"
      >
        Create Account
      </button>
    </form>
  );
};
