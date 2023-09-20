import { BlogCard as Card } from './Card'
import React from 'react'

const Sec7 = () => {
  return (
    <div className='flex justify-center items-center sec7Img relative'>
      <div className='container mx-auto'>
        <div>
          <div className='text-center'>
            <h6 className='px-4 pb-1 text-orangeMain text-xl font-semibold my-8 textCoverOrange relative inline '>Latest News</h6>
            <h1 className='text-purple text-3xl md:text-5xl font-bold'>Our Latest News</h1>
          </div>
          <div className='grid grid-cols-1  xl:grid-cols-3 gap-4 place-items-center mt-20 relative z-10'>
            <Card img={require("../Assets/b2.jpg")} docImg={require("../Assets/doc1.jpg")} name="Jhon deo" date="21 July 2021" title="In this hospital there are special surgeon" />
            <Card img={require("../Assets/b1.jpg")} docImg={require("../Assets/doc4.jpg")} name="Peter Packer" date="20 July 2021" title="Can you get a diflucan prescription online?" />
            <Card img={require("../Assets/blog3.jpg")} docImg={require("../Assets/doc3.jpg")} name="Sonar Moyna" date="19 July 2021" title="Why is Skin Surgeon Considered Underrated" />
          </div>
        </div>
      </div>



      <div className='z-0 hidden xl:block absolute bottom-0 left-20 animate-[bouncec_4s_ease_infinite]'> <img src={require('../Assets/anmi11.png')} alt="" /></div>
      <div className='z-0 hidden xl:block absolute top-20 left-8 animate-[bouncec_3s_ease_infinite]'> <img src={require('../Assets/anmi4.png')} alt="" /></div>
      <div className='z-0 hidden lg:block absolute top-56 right-20 animate-[spin_20s_ease_infinite]'> <img src={require('../Assets/anmi15.png')} alt="" /></div>
      <div className='z-0 hidden lg:block absolute -bottom-20 right-28 animate-[swipe_3s_ease_infinite]'> <img src={require('../Assets/anmi1.png')} alt="" /></div>
      {/* <div className='-z-10  hidden xl:block absolute -bottom-12 right-[15vw] '> <img src={require('../Assets/anmi12.png')} alt="" /></div> */}

    </div>
  )
}

export default Sec7