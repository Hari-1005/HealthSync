import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col my-6">
      <p className="text-lg font-medium text-gray-600">My Appointments</p>
      <hr className="my-3" />
      <div className="flex flex-col gap-3">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            className="flex flex-col sm:flex-row gap-3 justify-between border-b pb-4 mb-4 sm:mb-0"
            key={index}
          >
            <div className="flex gap-4 text-xs sm:text-sm text-gray-500">
              <img
                className="max-w-36 bg-indigo-100 rounded"
                src={item.image}
                alt=""
              />
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </p>
                  <p>{item.speciality}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Address:</p>
                  <p>{item?.address?.line1}</p>
                  <p>{item?.address?.line2}</p>
                </div>
                <p>
                  <span className="text-gray-700 font-medium">
                    DATE & TIME:{" "}
                  </span>
                  25, JULY, 2024 | 8:30 PM
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 justify-end text-sm text-gray-500">
              <button className="px-6 py-2 border border-gray-300 rounded hover:bg-primary hover:text-white transistion-all duration-300">
                Pay Online
              </button>
              <button className="px-6 py-2 border border-gray-300 rounded hover:bg-red-600 hover:text-white transistion-all duration-300">
                Cancel appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
