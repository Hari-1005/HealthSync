import React from 'react'
import Header from '../components/Header'
import SpecalityMenu from '../components/SpecalityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <SpecalityMenu/>
      <TopDoctors/>
      <Banner/>
    </div>
  )
}

export default Home