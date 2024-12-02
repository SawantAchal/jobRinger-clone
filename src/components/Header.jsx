import React from 'react'
import header from '../assets/header.png'
import { FaPen } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { LuCircleDot } from "react-icons/lu";

const Header = () => {

  return (
    <>
      <header className='flex flex-col lg:flex-row lg:float-end justify-between  mt-28 lg:mt-[12rem] gap-10 lg:gap-56 p-4'>
        <div className='mt-14'>
          <div>
            <h1 className='text-3xl lg:text-5xl font-medium'>Searching <span className='text-blue-500'>for a job?</span></h1>
            <h1 className='text-3xl lg:text-5xl font-medium pt-3 lg:pt-5'>Find the job that fit your life</h1>
          </div>
          <div className='bg-white flex  flex-wrap lg:flex-nowrap justify-between mt-7 items-center p-3 shadow-md rounded-md'>
            <section className='flex items-center gap-2 w-full lg:w-auto pl-2 mb-3 lg:mb-0'>
              <FaPen className='text-green-300'/>
              <input type='text' placeholder='Search Job Now' className='outline-none flex-grow lg:w-48' />
            </section>
            <section className='flex items-center gap-2 w-full lg:w-auto mb-3 lg:mb-0'>
              <IoLocationSharp className='text-green-300'/>
              <input type='text' placeholder='Location' className='outline-none flex-grow lg:w-48' />
              <LuCircleDot className='text-gray-500 hover:text-blue-400'/>
            </section>
            <button className='bg-blue-400 text-white p-2 lg:p-4 rounded-md w-full lg:w-auto'>FIND JOBS</button>
          </div>
          {/* <div className='mt-4'>
            <p className=''>Featured <br/> Employers</p>
            <div>
            </div>
          </div> */}
        </div>
        <div className='hidden lg:block'>
          <img src={header} alt='home image' />
        </div>
      </header>
    </>
  )
}

export default Header