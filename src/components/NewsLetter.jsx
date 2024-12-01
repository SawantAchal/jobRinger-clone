import React from 'react'
import { MdOutlineEmail } from "react-icons/md";

const NewsLetter = () => {
  return (
    <>
        <div className='h-96 bg-[#8fffcb] flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col space-y-6'>
                <h1 className='text-5xl text-white font-semibold'>Get Latest News</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className='border-8 border-zinc-300 rounded-full w-[40rem]'>
                    <div className='bg-white rounded-full  flex justify-between p-1'>
                        <div className='flex gap-4 items-center pl-3'>
                            <MdOutlineEmail className='text-green-400 text-2xl'/>
                            <input type='email' placeholder='Enter your Email...' className='outline-none'/>
                        </div>
                        <button className='bg-green-400 text-white p-4 rounded-full w-48'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewsLetter