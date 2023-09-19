import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Button, MenuItem, Typography } from '@material-tailwind/react'
import React from 'react'

const Sec3 = () => {
  return (
    <div className='my-20 relative sec3Image'>
      <div className='container mx-auto flex flex-col justify-center items-center text-center'>
        <div >
          <h6 className='px-4 pb-1 text-orangeMain text-xl font-semibold my-8 textCoverOrange relative inline '>Working Process</h6>
          <h1 className='text-purple text-3xl md:text-5xl font-bold'>How we works?</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14'>

          <div className='hov relative z-10 bg-white flex flex-col items-start text-start justify-between shadow-2xl p-4 gap-4 mt-10 rounded-[30px] '>
            <h2 className='inline text-8xl  font-extrabold  element shadow-sm py-6'  >01</h2>
            <h3 className='inline text-orangeMain font-bold text-2xl'>Make Appointmnet</h3>
            <p className='inline w-72'>It is a long established fact that a reader will be distracted by the readable content of.</p>
            <Typography

              variant="small"
              color="blue-gray"
              className="font-bold inline text-llblue  py-4"
            >
              <MenuItem className="px-0 flex items-center gap-2 lg:rounded-full hover:text-none hover:bg-transparent">
                <Button className=" btn bg-lpurple text-purple duration-300  flex justify-between py-2 pr-2 items-center gap-4">
                  <span>CONTACT US</span>
                  <span> <ChevronRightIcon className="ico h-8 w-8 p-1 bg-white rounded-md text-[#565ACF] " /> </span>
                </Button>
              </MenuItem>
            </Typography>
          </div>

          <div className=' flex flex-col bg-orangeMain mb-10 items-start text-start justify-between shadow-2xl p-4 gap-4 rounded-[30px] '>
            <h2 className='inline text-8xl  font-extrabold  elementR shadow-sm py-6'  >02</h2>
            <h3 className='inline text-white font-bold text-2xl'>Take Treatment</h3>
            <p className='inline text-white w-72'>It is a long established fact that a reader will be distracted by the readable content of.</p>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-bold inline text-llblue  py-4"
            >
              <MenuItem className="px-0 flex items-center gap-2 lg:rounded-full hover:text-none hover:bg-transparent">
                <Button className=" bg-white  text-orangeMain duration-300  flex justify-between py-2 pr-2 items-center gap-4">
                  <span>CONTACT US</span>
                  <span> <ChevronRightIcon className="h-8 w-8 p-1 bg-orangeMain rounded-md text-white " /> </span>
                </Button>
              </MenuItem>
            </Typography>
          </div>

          <div className='hov relative z-10 bg-white flex flex-col items-start text-start justify-between shadow-2xl p-4 gap-4 mt-10 rounded-[30px] '>
            <h2 className='inline text-8xl  font-extrabold  element shadow-sm py-6'  >03</h2>
            <h3 className='inline text-orangeMain font-bold text-2xl'>Registration</h3>
            <p className='inline w-72'>It is a long established fact that a reader will be distracted by the readable content of.</p>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-bold inline text-llblue  py-4"
            >
              <MenuItem className="px-0 flex items-center gap-2 lg:rounded-full hover:text-none hover:bg-transparent">
                <Button className=" btn bg-lpurple text-purple duration-300  flex justify-between py-2 pr-2 items-center gap-4">
                  <span>CONTACT US</span>
                  <span> <ChevronRightIcon className="ico h-8 w-8 p-1 bg-white rounded-md text-[#565ACF] " /> </span>
                </Button>
              </MenuItem>
            </Typography>
          </div>
        </div>
      </div>


      <div className='z-0 hidden xl:block absolute bottom-0 left-20 animate-[bouncec_3s_ease_infinite]'> <img src={require('../Assets/anmi13.png')} alt="" /></div>
      <div className='z-0 hidden lg:block absolute top-56 right-20 animate-[bouncec_3s_ease_infinite]'> <img src={require('../Assets/anmi7.png')} alt="" /></div>
      <div className='-z-10  hidden xl:block absolute -bottom-12 right-[15vw] '> <img src={require('../Assets/anmi12.png')} alt="" /></div>
    </div>
  )
}

export default Sec3