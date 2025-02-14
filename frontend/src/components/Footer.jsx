import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 my-10 mt-40 test-sm">
        <div>
          <img src={assets.logo} alt="logo" className="w-40 mb-5" />
          <p className="w-full md:w-80 lg:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+0 00-000-000</li>
            <li>healthsync@gmail.com</li>
          </ul>
        </div>
      </div>

      {/*----- Copy Right------*/}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024 @ Smashdown.dev - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
