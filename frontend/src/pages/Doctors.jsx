import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { doctors } = useContext(AppContext);
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState(doctors);
  const [specialityData, setSpecialityData] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  const specialityFilter = () => {
    const map = new Map();
    setSpecialityData(
      doctors.filter(
        (item) => !map.has(item["speciality"]) && map.set(item["speciality"])
      )
    );
  };
  useEffect(() => {
    applyFilter();
    specialityFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <button onClick={()=> setShowFilter(prev => !prev)} className={`${showFilter ? 'bg-primary text-white' : ''} w-20 py-1 px-3 border border-neutral-300 rounded text-sm sm:hidden`}>
            Filters
          </button>
          {/* <p className="sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hidden sm:flex">General physician</p>
        <p className="sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hidden sm:flex">Gynecologist</p>
        <p className="sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hidden sm:flex">Dermatologist</p>
        <p className="sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hidden sm:flex">Pediatricians</p>
        <p className="sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hidden sm:flex">Neurologist</p>
        <p className="sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hidden sm:flex">Gastroenterologist</p> */}
          {specialityData.map((doc, index) => (
            <p
              key={index}
              onClick={() =>
                speciality === doc.speciality
                  ? navigate("/doctors")
                  : navigate(`/doctors/${doc.speciality}`)
              }
              className={`${!showFilter && 'hidden'} w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 text-nowrap border border-gray-300 rounded cursor-pointer sm:flex ${
                speciality === doc.speciality ? "bg-indigo-200 text-black" : ""
              }`}
            >
              {doc.speciality}
            </p>
          ))}
        </div>

        <div className="w-full flex flex-wrap sm:grid sm:grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}}
              key={index}
              className="border mx-auto border-blue-200 rounded-xl w-40 sm:w-96 md:w-56 hover:translate-y-[-10px] transition-all duration-500 cursor-pointer"
            >
              <img
                src={item.image}
                className="bg-blue-50 rounded-t-xl h-40 sm:h-96 md:h-56"
                alt=""
              />
              <div className="p-4 flex-grow-0">
                <div className="flex items-center gap-2 text-xs sm:text-base">
                  <p className="h-2 w-2 rounded-full bg-green-500"></p>
                  <p className="text-green-500">Available</p>
                </div>
                <p className="text-sm sm:text-lg text-gray-900 font-medium">{item.name}</p>
                <p className="text-xs sm:text-sm text-gray-500">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
