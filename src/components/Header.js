import React from "react";
import imgae from "../image1.png";
import Signup from "./Signup";

export default function Header() {
  return (
    <div className="flex justify-evenly items-center  h-screen">
      <div className="flex justify-center items-center flex-col max-md:hidden">
        <p className="text-[#FF6F61] text-[3rem] font-semibold max-lg:text-[2.5rem]">
          connect Locally... Engage Globally...
        </p>
        <p className="text-[3rem] font-bold mb-[2.5rem] max-lg:text-[2.5rem]">
          Your Community, Reimagined
        </p>
        <img
          className="mb-[5rem] max-lg:w-[50rem] max-[1064px]:mb-[0rem] max-lg:mb-[9rem]"
          src={imgae}
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <Signup />
        <div className="text-[#6F7B86] text-[1.5rem] text-center max-lg:text-[1rem]">
          <p>Protected by Google's reCAPTCHA.</p>
          <p>
            BY signing up, you agree to TribeSpace's{" "}
            <span className="underline underline-offset-4">terms</span> &
            <span className="underline underline-offset-4 ">
              {" "}
              privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
