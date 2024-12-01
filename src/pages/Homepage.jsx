import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BrowseJob from '../components/BrowseJob'

const Homepage = () => {
  return (
    <>
      <div className='bg-[#CEFFE8] h-screen'>
        <Navbar/>
        <Header/>
      </div>
      <BrowseJob/>
      <Footer/>
    </>
  )
}

export default Homepage