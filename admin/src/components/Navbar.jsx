import React, { useContext} from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const navigate = useNavigate();

  const logout = () => {
    navigate('/')
    aToken && setAToken("");
    aToken && localStorage.removeItem('atoken');
  }

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 bg-white border-b border-gray-200">
      <div className="flex items-center gap-2 text-xs">
        <img onClick={() => navigate('/')} src={assets.admin_logo} alt="" className="w-36 sm:w-40 cursor-pointer" />
        <p className="border border-gray-500 rounded-full px-2.5 py-0.5 text-gray-600">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button onClick={logout} className="bg-primary text-white text-sm py-2 px-10 rounded-full cursor-pointer" title="logout">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
