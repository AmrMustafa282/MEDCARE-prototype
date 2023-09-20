import { PhoneIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Call = () => {
  return (
    <div className='flex gap-4 justify-center items-center'>
      <div>
        <div className='h-14 w-14 bg-orangeMain flex justify-center items-center rounded-full rounded-br-none '>
          <PhoneIcon className='h-6 w-6 text-white fill-white' />
        </div>
      </div>
      <div>
        <div className='text-orangeMain font-semibold'>Contact Us</div>
        <div className='text-blue font-bold tracking-tighter'>+02 123 456 7890</div>
      </div>
    </div>
  )
}

export default Call