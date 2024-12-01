import React from 'react'
import JobCard from './JobCard'
import jobCardData from '../assets/jobCardData'

const BrowseJob = () => {
  return (
    <>
        <div className='mt-10 mb-5'>
            <h1 className='font-bold text-5xl text-center'>Browse <span className='text-blue-500'>Hot Jobs</span></h1>
            <p className='text-gray-500 text-center pt-2'>Browse 200+ top jobs in your local city.</p>
            <div className="container mx-auto px-4 flex justify-center">
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        jobCardData.map((job , index) => (
                            <JobCard key={index} job={job}/>
                        ))
                    }
                </section>
            </div>
        </div>
    </>
  )
}

export default BrowseJob