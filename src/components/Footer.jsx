import React from 'react'
import instagram from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import youtube from '../assets/youtube.png'
import telegram from '../assets/telegram.png'
import app from '../assets/app.jpeg'


const Footer = () => {
  return (
    <>
        <footer className='mt-4'>
            <section className='flex justify-center gap-16 text-center font-semibold mt-4 mb-4'>
                <section>
                    <p>Jobs Posted</p>
                    <p className='text-blue-500'>31179</p>
                </section>
                <section>
                    <p>Jobs Filled</p>
                    <p className='text-blue-500'>15153</p>
                </section>
                <section>
                    <p>Employers</p>
                    <p className='text-blue-500'>19967</p>
                </section>
                <section>
                    <p>Active Users</p>
                    <p className='text-blue-500'>1295358</p>
                </section>
            </section>
            <hr/>
            <section className='flex justify-around mt-4'>
                <ul className='font-medium text-center'>
                    <li className='text-green-500'>JOBS IN INDIA</li>
                    <li>Mumbai</li>
                    <li>Delhi</li>
                    <li>AJmer</li>
                    <li>Pune</li>
                    <li>Hydrabad</li>
                    <li>Agra</li>
                    <li>Chennai</li>
                    <li>Kolkata</li>
                    <li>Indore</li>
                    <li>Gurugram</li>
                    <li>Jaipur</li>
                    <li>Ahmedabad</li>
                </ul>
                <ul className='font-medium  text-center'>
                    <li className='text-green-500'>INTERNATIONAL JOBS</li>
                    <li>Africa</li>
                    <li>USA</li>
                    <li>UK</li>
                    <li>Australia</li>
                    <li>Canada</li>
                    <li>Singapor</li>
                    <li>Dubai</li>
                    <li>Saudi Arabia</li>
                    <li>New Zealand</li>
                </ul>
                <div className='font-medium'>
                    <h3 className='text-green-500'>FEATURED JOB</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> perspiciatis aperiam reprehenderit dolorem </p>
                    <section className='flex gap-4 mt-3'>
                        <img src={instagram} alt='instagram' className='w-7 h-7 border rounded-full p-1'/>
                        <img src={whatsapp} alt='whatsapp' className='w-7 h-7 border rounded-full p-1'/>
                        <img src={facebook} alt='facebook' className='w-7 h-7 border rounded-full p-1'/>
                        <img src={linkedin} alt='linkedin' className='w-7 h-7 border rounded-full p-1'/>
                        <img src={youtube} alt='youtube' className='w-7 h-7 border rounded-full p-1'/>
                        <img src={telegram} alt='telegram' className='w-7 h-7 border rounded-full p-1'/>
                    </section>
                    <section className='flex gap-5'>
                        <img src={app} alt='app store' className='w-20'/>
                        <img src={app} alt='app store' className='w-20'/>
                    </section>
                </div>
            </section>
            <hr/>
            <section className='mt-4 text-center mb-2'>
                © All Rights Reserved @ 2024 Jobtech Ventures Private Limited.
            </section>
        </footer>
    </>
  )
}

export default Footer