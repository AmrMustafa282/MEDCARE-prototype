import { Button } from '@material-tailwind/react'
import React from 'react'

const Sec1 = () => {
  return (
    <div className='Sec1Img flex justify-center  items-center relative '>
      <div className='container mx-auto lg:mt-20 md:mt-0 sm:mt-12 mt-0  flex flex-col lg:flex-row  justify-center items-center'>
        <div className='relative z-10 flex flex-col gap-4 items-start px-8 mt-12 lg:mt-0 lg:pl-0'>
          <p className='text-darkblue '>We Provide All Health Care Solution</p>
          <h1 className='text-[#1f2278] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold lg:pr-32 lg:w-[30vw]'>
            Protect Your Health
            And Take Care To Of
            Your Health
          </h1>
          <Button className='bg-orangeMain mt-8 w-full lg:w-auto'>Read More</Button>
        </div>
        <div>
          <div className='animate-[bouncec_5s_ease_infinite] relative z-10 '>
            <img src={require('../Assets/doctor7.png') } className='' alt="" />
          </div>
        </div>
      </div>

      <div className='z-0 hidden lg:block absolute bottom-10 right-32 animate-[swipe_3s_ease-in-out_infinite]'> <img src={require('../Assets/anmi9.png')} alt="" /></div>
      <div className='z-0 hidden lg:block absolute bottom-12 left-[34vw] '> <img src={require('../Assets/anmi7.png')} alt="" /></div>
      <div className='z-0 hidden 2xl:block absolute bottom-52 left-10 animate-[bounce2_4s_ease_infinite]'> <img src={require('../Assets/anmi4.png')} alt="" /></div>
      <div className='z-0 hidden 2xl:block absolute top:72 2xl:top-56 left-64'> <img src={require('../Assets/anmi6.png')} alt="" /></div>
      <div className='z-0 hidden lg:block absolute top-48 left-[40vw] animate-[bounce2_3s_ease_infinite]'> <img src={require('../Assets/anmi8.png')} alt="" /></div>
  

    </div>
  )
}

export default Sec1