import React, { useState } from "react";
import { assets } from "../assets/assets";

const Myprofile = () => {
  const [userData, setUserData] = useState({
    name: "hariteja",
    image: assets.profile_pic,
    email: "hariteja.in@gmail.com",
    phone: "+00 123 456",
    address: {
      line1: "57th cross windmill",
      line2: "circle chruch road london",
    },
    gender: "Male",
    dob: "2000-10-10",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="flex flex-col max-w-lg gap-3 text-sm p-2">
      <div>
        <label htmlFor="profile-img" className="relative">
          <img
            className={`w-32 cursor-pointer rounded-full border-2 border-gray-200 p-1`}
            src={userData.image}
            alt="profile-image"
          />
          {isEdit && <i class="fa-solid fa-pen text-indigo-400 absolute left-28 bottom-0.5 text-lg"></i>}
        </label>
        {isEdit && <input id="profile-img" type="file" className="hidden" />}
      </div>

      <div className="flex flex-col gap-2 text-gray-700">
        {isEdit ? (
          <input
            className="text-2xl font-medium bg-gray-200 p-1"
            type="text"
            value={userData.name}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        ) : (
          <h1 className="text-2xl font-medium p-1">{userData.name}</h1>
        )}
        <hr className="border-none h-[1px] bg-zinc-400" />
        <div>
          <p className="underline underline-offset-2">CONTACT INFORMATION</p>
          <div className="grid grid-cols-[1fr_2fr] mt-2 gap-1">
            <p>Email id :</p>
            <p className="text-blue-500">{userData.email}</p>
            <p>Phone :</p>
            {isEdit ? (
              <input
                className="bg-gray-200 p-1 max-w-52 outline-none"
                type="text"
                value={userData.phone}
                placeholder="enter your number"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            ) : (
              <p className="text-blue-500 p-1">{userData.phone}</p>
            )}
            <p>Address :</p>
            {isEdit ? (
              <p>
                <input
                  className="bg-gray-200 p-1 mb-0.5 outline-none"
                  type="text"
                  placeholder="address line 1"
                  value={userData?.address?.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                />
                <br />
                <input
                  className="bg-gray-200 p-1 outline-none"
                  type="text"
                  value={userData?.address?.line2}
                  placeholder="address line 2"
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                />
              </p>
            ) : (
              <p>
                <p>{userData?.address?.line1}</p>
                <p>{userData?.address?.line2}</p>
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1 mt-2">
          <p className="underline underline-offset-2">BASIC INFORMATION</p>
          <div className="grid grid-cols-[1fr_2fr] mt-2 gap-2">
            <p>Gender :</p>
            {isEdit ? (
              <select
                className="max-w-20 bg-gray-200"
                value={userData.gender}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
            <p>DOB :</p>
            {isEdit ? (
              <input
                className="max-w-28 bg-gray-200"
                type="date"
                value={userData.date}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
              />
            ) : (
              <p>{userData.dob}</p>
            )}
          </div>
        </div>
      </div>

      <div className="my-4">
        {isEdit ? (
          <button
            onClick={() => setIsEdit(false)}
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-150"
          >
            Save information
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-150"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Myprofile;
