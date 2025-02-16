import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='mt-10 flex flex-col items-center gap-5'>
          <p className='text-2xl text-gray-500 text-center'>CONTACT <span className='font-semibold text-gray-700'>US</span></p>
    
          <div className='my-9 flex flex-col md:flex-row gap-10 text-sm text-gray-600'>
            <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="about-image" />
            <div className='flex flex-col justify-center items-start gap-6'>
              <p className='text-lg font-semibold text-gray-600'>OUR OFFICE</p>
              <p className='text-gray-500'>00000 Willms Station <br />
              Suite 000, Washington, USA</p>
              <p className='text-gray-500'>Tel: (000) 000-0000 <br />
              Email: hariteja.in@gmail.com</p>
              <p className='text-lg font-semibold text-gray-600'>CAREERS AT PRESCRIPTO</p>
              <p className='text-gray-500'>Learn more about our teams and job openings.</p>
              <button className='text-sm border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300'>Explore jobs</button>
            </div>
          </div>
        </div>
  )
}

export default Contact