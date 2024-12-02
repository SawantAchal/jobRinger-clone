import React from 'react'
import currentJobData from '../assets/currentJobData'
import CurrentJobCard from './CurrentJobCard'

const CurrentJob = () => {
  return (
    <>
        <div className='mt-10 mb-5 bg-green-300 p-3'>
            <h1 className='font-bold text-5xl text-center text-white'>Current <span className='text-blue-500'>Hot Jobs</span></h1>
            <div className="container mx-auto px-4 flex justify-center">
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
                    {
                        currentJobData.map((job , index) => (
                            <CurrentJobCard key={index} job={job}/>
                        ))
                    }
                </section>
            </div>
        </div>
    </>
  )
}

export default CurrentJob