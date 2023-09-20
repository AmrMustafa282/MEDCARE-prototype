import { Button, Input, Option, Select } from '@material-tailwind/react'
import React from 'react'


const Sec4 = () => {
  return (
    <div className='overflow-hidden flex justify-center items-center'>
      <div className='py-0 md:py-20 container mx-auto sec4Img flex justify-center items-center rounded-3xl'>
        <div className=' relative  flex flex-col lg:flex-row gap-20 lg:gap-5 justify-center items-center'>
          <div className='py-12 -mb-10 self-center w-[75%] lg:w-auto relative z-10 beforeBorder  bg-white rounded-3xl p-8 flex flex-col gap-4'>
            <h3 className='text-2xl font-bold  text-purple text-center'>Book Appointment</h3>
            <div className='flex flex-col  gap-6 lg:w-[18vw]'>
              <Select label="Select Department">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
              <Select label="Select Doctor">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
              <Input type="text" label='Your Name' className='   pl-3   '/>
              <Input type="number" label='Phone Number' className='   pl-3   '/>
              <Input type="date" label='Date' className='   pl-3   '/>

            </div>
            <Button className='bg-orangeMain lg:w-[60%] w-full mx-auto my-4 py-4 relative '>Appointment Now</Button>
          </div>

          <div className='mobImage h-full w-full relative'>
            <div className='z-0  absolute -right-12 bottom-3  animate-[swipe_3s_ease_infinite]'> <img className='h-[30rem]' src={require('../Assets/girl.png')} alt="" /></div>
            {/* <div className='z-0 hidden lg:block absolute top-56 right-20 animate-[bouncec_3s_ease_infinite]'> <img src={require('../Assets/anmi7.png')} alt="" /></div> */}
          </div>
        </div>

          <div className='z-0 hidden xl:block absolute top-0 left-10 animate-[bounce2_3s_ease_infinite]'> <img src={require('../Assets/anmi4.png')} alt="" /></div>
          <div className='z-0 hidden xl:block absolute top-56 left-[46%]  animate-[bounce2_3s_ease_infinite]'> <img src={require('../Assets/right.png')} alt="" /></div>
          <div className='z-0 hidden xl:block absolute top-96 left-[48%]   animate-[bounce2_5s_ease_infinite]'> <img className='rounded-md' src={require('../Assets/location.png')} alt="" /></div>
          <div className='z-0 hidden xl:block absolute bottom-48 right-[23%]   animate-[bounce2_4s_ease_infinite]'> <img className='rounded-md' src={require('../Assets/settings.png')} alt="" /></div>
          <div className='z-0 hidden xl:block absolute bottom-28 -right-12   animate-[bounce2_4s_ease_infinite]'> <img  src={require('../Assets/anmi13.png')} alt="" /></div>
          <div className='z-0 hidden xl:block absolute top-28 right-40   animate-[bounce2_4s_ease_infinite]'> <img  src={require('../Assets/like.png')} alt="" /></div>
          <div className='z-0 hidden xl:block absolute top-20 -right-10   animate-[swipe_4s_ease_infinite]'> <img  src={require('../Assets/anmi1.png')} alt="" /></div>
          <div className='z-0 hidden xl:block absolute bottom-20 -left-20   animate-[swipe_4s_ease_infinite]'> <img  src={require('../Assets/anmi9.png')} alt="" /></div>
          {/* <div className='z-0 hidden lg:block absolute top-56 right-20 animate-[bouncec_3s_ease_infinite]'> <img src={require('../Assets/anmi7.png')} alt="" /></div> */}
          {/* <div className='-z-10  hidden xl:block absolute -bottom-12 right-[15vw] '> <img src={require('../Assets/anmi12.png')} alt="" /></div> */}
      </div>
    </div>
  )
}

export default Sec4