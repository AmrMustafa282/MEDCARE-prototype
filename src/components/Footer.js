import React from 'react'
import './components.css'
import Call from './Call'
import { Button } from '@material-tailwind/react'
const Footer = () => {
  // const style = {
  //   backgroundImage:""
  // }
  
  return (
    <>
      <div className='footerImg mt-20 2xl:pt-20 relative '>
        
        <div className='container mx-auto'>
          <div className='text-black pt-32 '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 '>

              <div className='flex flex-col justify-between items-start '>
                <div className='pt-2'><img src={require('../Assets/logo.png.webp')} alt="" /></div>
                <p className='pr-4'>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                <div>
                  <Call />
                </div>
              </div>
              <div className='flex flex-col gap-4 '>
                <div className=' font-bold text-3xl  text-_2darkblue'>
                  <span className='line py-2'>Quick Links</span>
                </div>
                
                <div className='flex flex-col pt-7 gap-3'>
                  <a className='hover:text-blue' href="/">About Us</a>
                  <a className='hover:text-blue' href="/">Services</a>
                  <a className='hover:text-blue' href="/">Booking</a>
                  <a className='hover:text-blue' href="/">Faq's</a>
                  <a className='hover:text-blue' href="/">Blogs</a>
                  <a className='hover:text-blue' href="/">Our Team</a>
                </div>
              </div>
              <div className='flex flex-col gap-4 '>
                <div className=' font-bold text-3xl  text-_2darkblue'>
                  <span className='line py-2'>Our Service</span>
                </div>

                <div className='flex flex-col pt-7 gap-3'>
                  <a className='hover:text-blue' href="/">Dental Care</a>
                  <a className='hover:text-blue' href="/">Cardiac Clinc</a>
                  <a className='hover:text-blue' href="/">Message Therapy</a>
                  <a className='hover:text-blue' href="/">Cardiology</a>
                  <a className='hover:text-blue' href="/">Precise Diagonsis</a>
                  <a className='hover:text-blue' href="/">Abmbulance Servicse</a>
                </div>
              </div>
              <div className='flex flex-col gap-4 '>
                <div className=' font-bold text-3xl  text-_2darkblue'>
                  <span className='line py-2'>Subcribe</span>
                </div>

                <div className='flex flex-col pt-7 gap-3 h-full'>
                 <input type="text" className='shadow-md h-10 rounded-md px-4 text-black' placeholder='Email Address'/>
                  <Button className='bg-orangeMain'>Subcribe Now</Button>
                  <div className='flex gap-2 my-auto justify-start items-start w-full'>
                    <div><svg xmlns="http://www.w3.org/2000/svg" className='fill-blue hover:fill-darkblue hover:scale-[1.04] duration-300  cursor-pointer' height="3em" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" /></svg></div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" className='fill-blue hover:fill-darkblue hover:scale-[1.04] duration-300  cursor-pointer' height="3em" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" /></svg></div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" className='fill-blue hover:fill-darkblue hover:scale-[1.04] duration-300  cursor-pointer' height="3em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" className='fill-blue hover:fill-darkblue hover:scale-[1.04] duration-300  cursor-pointer' height="3em" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg></div>
                 </div>
                </div>
              </div>
              
            </div>
            <hr className='my-4 shadow-2xl'/>
          </div>
        <div className='text-center pt-2 pb-4'>Copyright © 2023 Design & Developed by <span className='text-darkblue'>Amr</span></div>
        </div>

        
        <div className="after:content-[''] z-0 hidden xl:block absolute right-20 bottom-20  animate-[swipe_3s_ease-in-out_infinite]"><img src={require('../Assets/anmi1.png')} alt="" />
        </div>
        <div className="after:content-[''] z-0 hidden xl:block absolute left-20 top-20  animate-[swipe_5s_ease-in-out_infinite]">
          <img src={require('../Assets/anmi1.png')} alt="" />
        </div>
        <div className="after:content-[''] z-0 hidden xl:block absolute right-20 top-40  animate-[spin_6s_ease_infinite]">
          <img src={require('../Assets/anmi3.png')} alt="" />
        </div>
        <div className="after:content-[''] z-0 hidden xl:block absolute left-20 bottom-40  animate-[bounce_5s_ease-in-out_infinite]">
          <img src={require('../Assets/anmi2.png')} alt="" />
        </div>

      </div>
      
    </>
  )
}

export default Footer