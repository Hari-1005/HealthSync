import React from 'react'

const WelcomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] w-full">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to Admin Page</h1>
      <p className="text-lg mt-4 text-neutral-600">Here you can manage all the doctors, view their profiles, and book appointments.</p>
    </div>
  )
}

export default WelcomePage