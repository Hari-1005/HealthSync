import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='bg-primary flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20'>
        {/* first-section */}
        <div className='md:w-1/2 text-center md:text-start text-white flex flex-col justify-center items-start gap-4 py-10 md:py-[9vw] md:mb-[-30px] m-auto'>
            <p className='text-3xl md:text-4xl lg:text-[3.5vw] font-semibold text-white leading-tight md:leading-tight '>Book Appointment <br className='hidden md:block'/>With Trusted Doctors</p>
            <div className='flex flex-col md:flex-row items-center gap-3 text-sm font-light'>
                <img className='w-28' src={assets.group_profiles} alt="group-profiles" />
                <p>Simply browse through our extensive list of trusted doctors, <br className='hidden md:block'/>
                schedule your appointment hassle-free.</p>
            </div>
            <a className='bg-white flex items-center gap-2 text-gray-600 text-sm px-8 py-3 rounded-full m-auto md:m-0 hover:scale-105 transition-all duration-300 mt-3' href="#specality">Book appointment <img src={assets.arrow_icon} alt="arrow-icon" className='w-3' /></a>
        </div>

        {/* secound-section */}
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="header-logo" />
        </div>
    </div>
  )
}

export default Header