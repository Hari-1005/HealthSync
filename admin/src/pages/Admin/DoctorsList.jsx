import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/AdminContext";

const DoctorsList = () => {
  const { aToken, doctors, getAllDoctors, changeAvailability } = useContext(AdminContext);
  
    useEffect(() => {
      if (aToken) {
        getAllDoctors();
      }
    }, [aToken]);
  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll">
      <h1 className="text-lg font-medium">All Doctors</h1>
      <div className="flex flex-wrap w-full gap-4 gap-y-6 pt-4">
        {doctors.map((item, index) => (
          <div
            key={index}
            className="border border-blue-200 rounded-xl max-w-40 cursor-pointer overflow-hidden group"
            title={`${item.name} - ${item.speciality}`}
          >
            <img
              src={item.image}
              className="bg-blue-50 group-hover:bg-indigo-400 h-40"
              alt=""
            />
            <div className="p-4 flex-grow-0">
              <p className="text-sm text-neutral-800 font-medium">
                {item.name}
              </p>
              <p className="text-xs text-zinc-600">{item.speciality}</p>

              <div className="flex items-center gap-2 text-sm mt-1">
                <input type="checkbox" className="cursor-pointer" onChange={() => changeAvailability(item._id)} checked={item.available} title="click to change doctor availability"/>

                <p className={item.available ? "text-green-500" : "text-red-500  "}>{item.available ? "Available" : "unavailable"}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorsList