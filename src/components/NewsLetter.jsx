import React from 'react'
import { MdOutlineEmail } from "react-icons/md";

const NewsLetter = () => {
  return (
    <>
        <div className='h-96 bg-[#8fffcb] flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col space-y-6 text-center'>
                <h1 className='text-3xl lg:text-5xl text-white font-semibold'>Get Latest News</h1>
                <p className="text-sm lg:text-base text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className="w-full lg:w-[40rem]">
                    <div className="bg-white rounded-full shadow-md flex items-center justify-between px-4 py-2 gap-4">
                        <div className="flex items-center gap-2 flex-grow">
                            <MdOutlineEmail className="text-green-400 text-2xl" />
                                <input type="email" placeholder="Enter your Email..." className="outline-none text-gray-700 w-full text-sm lg:text-base"/>
                        </div>
                        <button className="bg-green-400 text-white px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-semibold hover:bg-green-500 transition duration-200">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewsLetter