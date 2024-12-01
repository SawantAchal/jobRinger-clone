import React from 'react'
import logo from '../assets/logonew.svg'
import { FaRegUser } from "react-icons/fa";
import { PiSuitcaseSimpleLight } from "react-icons/pi";

const Navbar = () => {
  return (
    <>
      <nav className='flex justify-around items-center p-4'>
        <div className='flex items-center gap-10'>
          <section>
            <img src={logo} alt='logo' className='w-40'/>
          </section>
          <section className='flex gap-5 items-center'>
            <p>Jobs</p>
            <p>Active Employers</p>
            <p>Pricing</p>
          </section>
        </div>
        <section className='flex items-center gap-10'>
          <section className='flex items-center gap-2'>
            <FaRegUser/>
            Login
          </section>
          <section className='flex items-center gap-2 bg-blue-400 p-2 text-white rounded-sm'>
            <PiSuitcaseSimpleLight/>
            Register
          </section>
        </section>
      </nav>
    </>
  )
}

export default Navbar