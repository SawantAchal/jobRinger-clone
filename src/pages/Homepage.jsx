import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BrowseJob from '../components/BrowseJob'
import NewsLetter from '../components/NewsLetter'
import CurrentJob from '../components/CurrentJob'

const Homepage = () => {
  return (
    <>
      <div className='bg-[#CEFFE8] h-screen'>
        <Navbar/>
        <Header/>
      </div>
      <BrowseJob/>
      <CurrentJob/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default Homepage