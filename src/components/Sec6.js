import { CarouselCustomNavigation } from './Carousel'
import React from 'react'

const Sec6 = () => {
  return (
    <div className='flex justify-center items-center bg-[#FFFEFE]'>
      <div className='container mx-auto relative'>
        <div className='flex flex-col justify-center items-center'>
          <div className=' lg:px-72  text-center flex flex-col justify-center items-center'>
            <h6 className='px-4 pb-1 text-orangeMain text-xl font-semibold my-8 textCoverOrange relative inline '>Testimonial</h6>
            <h1 className='text-purple text-3xl md:text-5xl font-bold'>See What Are The Patients
              Saying About us</h1>
          </div>
          <div className='flex  flex-col lg:flex-row gap-12 my-20 '>
            <div className='flex-1 relative z-10 '>
              <img src={require('../Assets/anmip.png')} alt="" />
              
               <img className='absolute z-20 top-24 left-7 rounded-full w-[15%] h-[15%]' src={require('../Assets/doc1.jpg')} alt="" />
               <img className='absolute z-20 bottom-24 left-7 rounded-full w-[15%] h-[15%]' src={require('../Assets/doc6.jpg')} alt="" />
               <img className='absolute z-20 top-24 right-6 rounded-full w-[15%] h-[15%]' src={require('../Assets/doc3.jpg')} alt="" />
               <img className='absolute z-20 bottom-24 right-6 rounded-full w-[15%] h-[15%]' src={require('../Assets/doc4.jpg')} alt="" />
               <img className='absolute z-20 top-0 left-[42%] rounded-full w-[15%] h-[15%]' src={require('../Assets/doc2.jpg')} alt="" />
               <img className='absolute z-20 bottom-0 left-[42%] rounded-full w-[15%] h-[15%]' src={require('../Assets/doc5.jpg')} alt="" />
            </div>

            <div className='flex-1 h-full my-auto relative z-0 textCO  after:shadow-xl '>
              <CarouselCustomNavigation />
            </div>
          </div>
        </div>

        <div className='z-0 hidden lg:block absolute top-32 -left-20 animate-[bouncec_4s_ease_infinite]'> <img src={require('../Assets/anmi7.png')} alt="" /></div>
        <div className='z-0 hidden lg:block absolute bottom-20 -left-20 animate-[bouncec_5s_ease_infinite]'> <img src={require('../Assets/anmi8.png')} alt="" /></div>
        <div className='z-0 hidden lg:block absolute top-32 -right-20 '> <img src={require('../Assets/anmi2.png')} alt="" /></div>
        <div className='z-0 hidden lg:block absolute bottom-20 -right-20 '> <img src={require('../Assets/anmi14.png')} alt="" /></div>
 

      </div>
    </div>
  )
}

export default Sec6