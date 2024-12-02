import React, { useState } from 'react';
import logo from '../assets/logonew.svg';
import { FaRegUser } from "react-icons/fa";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className='flex lg:justify-around justify-between items-center p-4'>
        <div className='flex items-center'>
          <img src={logo} alt='logo' className='w-40' />
        </div>
        <div className='lg:hidden' onClick={toggleMenu}>
          {isMenuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </div>
        <div  className={`flex-col lg:flex-row lg:flex items-center lg:gap-20 gap-5  absolute lg:relative top-16 lg:top-auto left-0 w-full lg:w-auto  lg:bg-transparent p-5 lg:p-0 transition-all duration-300 ease-in-out ${ isMenuOpen ? 'flex' : 'hidden' }`}>
          <section className='flex flex-col lg:flex-row gap-5 items-center lg:gap-10'>
            <p>Jobs</p>
            <p>Active Employers</p>
            <p>Pricing</p>
          </section>
          <div className='flex flex-col lg:flex-row items-center gap-5 mt-5 lg:mt-0'>
            <section className='flex items-center gap-2'>
              <FaRegUser />
              Job Seeker Login
            </section>
            <section className='flex items-center gap-2 bg-blue-400 p-2 text-white rounded-sm'>
              <PiSuitcaseSimpleLight />
              Employee Login
            </section>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
