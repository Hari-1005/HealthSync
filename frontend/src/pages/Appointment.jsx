import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState({});
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    // ----------getting current date------
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      //---getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate()+i)

      // ---setting endtime of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0)

      // settings hours
      if(today.getDate() === currentDate.getDate()){
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      }else{
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = []

      while(currentDate < endTime){
        let formattedTime = currentDate.toLocaleTimeString([],{hour : '2-digit', minute: '2-digit'})

        //add slot to array
        timeSlots.push({
          dateTime: new Date(currentDate),
          time : formattedTime
        })

        //increment current time by 30mins
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots(prev => ([...prev, timeSlots]))
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [docId, doctors]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  return (
    docInfo && (
      <div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt="doctor-image"
            />
          </div>

          <div className="flex-1 border border-gray-400 p-8 py-7 bg-white rounded-lg mx-3 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-3xl font-medium text-gray-700">
              {docInfo.name}
              <img
                className="w-5"
                src={assets.verified_icon}
                alt="verified-icon"
              />
            </p>
            <div className="flex items-center gap-2 text-gray-600 mt-1">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="border border-gray-400 px-2 py-0.5 text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            <div className="mt-3">
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900">
                About
                <img className="w-3" src={assets.info_icon} alt="info-icon" />
              </p>
              <p className="text-sm mt-1 text-gray-500 max-w-2xl">
                {docInfo.about}
              </p>
            </div>
            <p className="mt-4 text-gray-500 font-medium">
              Appointment fee:{" "}
              <span className="text-gray-600">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* --------Booking Slots--------- */}
        <div className="sm:ml-72 sm:pl-5 mt-14 sm:mt-8 font-medium text-center sm:text-start text-gray-600">
          <p className="text-lg sm:text-base">Booking slots</p>
          <div className="flex items-center gap-3 mt-4 w-full overflow-x-auto">
          {
            docSlots.length && docSlots.map((item,index)=> item[0]&&(
              <div onClick={()=>setSlotIndex(index)} className={`py-6 min-w-16 text-center rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-300'}`} key={index}>
                <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                <p>{item[0] && item[0].dateTime.getDate()}</p>
              </div>
            ))
          }
          </div>

          <div className="mt-4 flex gap-3 items-center text-sm font-normal overflow-x-scroll">
            {
              docSlots.length && docSlots[slotIndex].map((item,index)=>(
                <p onClick={()=>setSlotTime(item.time)} className={`py-2 px-5 flex-shrink-0 rounded-full text-center cursor-pointer ${item.time === slotTime ? "bg-primary text-white" : "text-gray-500 border border-gray-400"}`} key={index}>{item.time.toLowerCase()}</p>
              ))
            }
          </div>
          <button className="bg-primary text-sm font-light text-white my-6 py-3 px-20 rounded-full">Book an appointment</button>
        </div>
        <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
      </div>
    )
  );
};

export default Appointment;
