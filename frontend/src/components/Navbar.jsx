import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const {token, setToken, userData} = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(false);
  }

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo"
        className="w-44 cursor-pointer"
      />
      <ul className="hidden md:flex items-center font-semibold gap-5">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={userData.image} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="bg-stone-100 min-w-48 rounded p-4 flex flex-col gap-2">
                <p
                  onClick={() => navigate("my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={logout}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary rounded-full py-3 px-8 font-light hidden md:block text-white"
          >
            Create Account
          </button>
        )}
        {!showMenu && (
          <img
            onClick={() => setShowMenu(true)}
            className="w-6 md:hidden"
            src={assets.menu_icon}
            alt="menu-icon"
          />
        )}

        {/* -----mobile menu----- */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "hidden"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex justify-between items-center px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
              className="w-7"
            />
          </div>
          <ul className="flex flex-col gap-5 items-center text-lg font-medium mt-4">
            <NavLink to={"/"} onClick={() => setShowMenu(false)}>
              <p className="px-4 py-2 rounded">HOME</p>
            </NavLink>
            <NavLink to={"/doctors"} onClick={() => setShowMenu(false)}>
              <p className="px-4 py-2 rounded">ALL DOCTORS</p>
            </NavLink>
            <NavLink to={"/about"} onClick={() => setShowMenu(false)}>
              <p className="px-4 py-2 rounded">ABOUT</p>
            </NavLink>
            <NavLink to={"/contact"} onClick={() => setShowMenu(false)}>
              <p className="px-4 py-2 rounded">CONTACT</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
