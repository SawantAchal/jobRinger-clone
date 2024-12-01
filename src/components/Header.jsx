import React from 'react'
import header from '../assets/header.png'
import { FaPen } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { LuCircleDot } from "react-icons/lu";

const Header = () => {

  return (
    <>
      <header className='flex float-end justify-between mt-[12rem] gap-56'>
        <div className='mt-14'>
          <div>
            <h1 className='text-5xl font-medium'>Searching <span className='text-blue-500'>for a job?</span></h1>
            <h1 className='text-5xl font-medium pt-5'>Find the job that fit your life</h1>
          </div>
          <div className='bg-white flex justify-between mt-7 items-center p-1'>
            <section className='flex items-center gap-2 pl-2'>
              <FaPen className='text-green-300'/>
              <input type='text' placeholder='Search Job Now' className='outline-none' />
            </section>
            <section className='flex items-center gap-2'>
              <IoLocationSharp className='text-green-300'/>
              <input type='text' placeholder='Location' className='outline-none' />
              <LuCircleDot className='text-gray-500 hover:text-blue-400'/>
            </section>
            <button className='bg-blue-400 p-4 text-white'>FIND JOBS</button>
          </div>
          <div className='mt-4'>
            <p className=''>Featured <br/> Employers</p>
            <div>
            </div>
          </div>
        </div>
        <div>
          <img src={header} alt='home image' />
        </div>
      </header>
    </>
  )
}

export default Header