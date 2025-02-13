import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecalityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800'>
        <h1 className='text-3xl font-medium'>Find by Speciality</h1>
        <p className='sm:w-1/3 text-sm text-center'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        <div className='flex md:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {specialityData.map((item,index)=>(
                <Link onClick={()=>scrollX(0,0)} to={`doctors/${item.speciality}`} key={index} className='flex flex-col justify-center items-center flex-shrink-0 text-sm cursor-pointer hover:-translate-y-2.5 transition-all duration-500'>
                    <img className='w-16 sm:w-24 mb-2' src={item.image} alt={item.speciality} />
                    <p>{item.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecalityMenu