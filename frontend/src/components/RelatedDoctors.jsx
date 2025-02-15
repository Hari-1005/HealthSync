import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({docId,speciality}) => {
    const navigate = useNavigate()
    const {doctors} = useContext(AppContext);
    const [relData, setRelData] = useState([]);

    useEffect(()=>{
        const doctorsData = doctors.filter(doc => doc.speciality === speciality && doc._id != docId)
        setRelData(doctorsData)
    },[docId,doctors,speciality])
  return (
    <div className="flex flex-col items-center py-8 mt-7">
      <h1 className="text-3xl font-medium">Related Doctors</h1>
      <p className="text-sm font-light py-5 text-center">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="flex flex-wrap justify-center gap-5 py-8">
        {relData.slice(0, 10).map((item, index) => (
          <div
            onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}}
            key={index}
            className="border border-blue-200 rounded-xl w-40 md:w-56 hover:translate-y-[-10px] transition-all duration-500 cursor-pointer"
          >
            <img
              src={item.image}
              className="bg-blue-50 rounded-t-xl"
              alt="doctor image"
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
  )
}

export default RelatedDoctors