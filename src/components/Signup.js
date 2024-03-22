import React from "react";
import logo from "../logo.png";

export default function Signup() {
  return (
    <div className="flex flex-col">
      <div className="bg-[#ffffff61] py-[4rem] px-[6rem] border border-solid border-[#D9DCDF] rounded-[2rem] mb-[3rem] max-lg:px-[3rem] max-md:px-[6rem]">
        <div className="flex items-center justify-start">
          <img src={logo} alt="" />
          <p className="font-semibold text-[3rem] ml-[1rem] max-lg:text-[2.5rem]">
            TribeSpace
          </p>
        </div>
        <p className="font-semibold text-[3rem] mt-[3rem] max-lg:text-[2.5rem]">
          Lets get started,
        </p>
        <p className="text-[#78848E] text-[1.4rem] mt-[1rem] max-lg:text-[1.2rem]">
          Create your account & Explore TribeSpace
        </p>
        <div className="flex flex-col mt-[3rem]">
          <label className="text-[1.3rem] text-[#79848E] mb-[0.5rem]">
            Enter your email
          </label>
          <input
            type="text"
            placeholder="name@example.com"
            className="border border-solid outline-none p-[1rem] rounded-[0.5rem] text-[1.3rem]"
          />
        </div>
        <button className="flex justify-center items-center mt-[2rem] w-full bg-[#FF6F61] text-[#ffffff] text-[1.2rem] rounded-[0.5rem] p-[1rem]">
          Signup for free
        </button>
        <p className="text-[1.5rem] mt-[4rem] mb-[1rem] max-lg:text-[1.2rem]">
          New to <span className="font-semibold"> TribeSpace? </span>
          <span className="ml-[1rem] text-[#7F9AE8] font-semibold">Signup</span>
        </p>
      </div>
    </div>
  );
}
