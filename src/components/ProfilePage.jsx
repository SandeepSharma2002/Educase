import React from "react";
import { IoCameraSharp } from "react-icons/io5";

export const ProfilePage = () => {
  return (
    <div div className="min-h-screen">
      <h3 className="p-4 bg-[#fff] font-semibold">Account Settings</h3>
      <div className=" mx-auto max-w-sm border-b-2 border-dashed border-[#d1d5db] p-4 space-y-4">
        <div className="flex">
          <div className="relative">
          <img
            className="block h-20 rounded-full"
            src="https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4"
            alt=""
            />
            <IoCameraSharp className="absolute bottom-1 right-0 p-1 bg-purple-1 text-[#fff] text-2xl rounded-full" />
            </div>
            
          <div className="ml-4">
            <div className="mb-4 space-y-1">
              <p className="text-lg font-bold leading-tight">John Menon</p>
              <p className="text-sm leading-tight text-gray-400 font-medium">
                John@gmail.com
              </p>
            </div>
          </div>
        </div>
        <p  className="mb-4 text-black-2 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate est corrupti minus expedita. Odio omnis, molestias in placeat non commodi nisi.</p>
      </div>
    </div>
  );
};
