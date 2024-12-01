import React from 'react'

const JobCard = ({job}) => {

  return (
    <>
        <div className="bg-white shadow-md rounded-lg p-6 w-64 h-72 space-y-3 mt-10 mb-10">
            <div className={`text-sm font-semibold px-3 py-1 rounded-full inline-block ${job.type === "Internship" ? "text-green-600 bg-green-100" :job.type === "Full-Time" ? "text-red-600 bg-red-100" : "text-blue-600 bg-blue-100"}`}>
                {job.type.toUpperCase()}
            </div>
            <div className='flex justify-center'>
                <img src={job.image_url} alt={`${job.title} Logo`} className="h-16 w-16" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center mt-4">{job.title}</h3>
            <p className="text-gray-600 text-center text-sm"> {job.location}</p>
            <button className="mt-4 border text-black py-2 px-4 rounded-full w-full hover:bg-blue-600 hover:text-white">{job.action}</button>
        </div>
    </>
  )
}

export default JobCard