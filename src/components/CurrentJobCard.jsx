import React from 'react'

const CurrentJobCard = ({job}) => {

  return (
    <>
        <div className="bg-white shadow-md rounded-lg p-6 w-64 h-64 space-y-1.5 mt-10 mb-10">
            <div className='flex justify-between'>
                <div className={`text-sm font-semibold px-3 py-1 rounded-full inline-block ${job.job_type === "Internship" ? "text-green-600 bg-green-100" :job.job_type === "Full-Time" ? "text-red-600 bg-red-100" : "text-blue-600 bg-blue-100"}`}>
                    {job.job_type.toUpperCase()}
                </div>
                <div className='text-sm font-semibold px-3 py-1 rounded-full inline-block'>{job.job_mode}</div>
            </div>

            <h4 className="text-lg font-semibold text-gray-800 text-center mt-4">{job.title}</h4>
            <h3 className="text-lg font-semibold text-gray-800 text-center mt-4">{job.company}</h3>
            <h3 className="text-lg font-semibold text-gray-800 text-center mt-4">{job.experience}</h3>
            <p className="text-gray-600 text-center text-sm"> {job.location}</p>
            <button className="mt-4 border text-black py-2 px-4 rounded-full w-full hover:bg-blue-600 hover:text-white">{job.action}</button>
        </div>
    </>
  )
}

export default CurrentJobCard