import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Button, MenuItem, Typography } from '@material-tailwind/react'
import React from 'react'

const ContactUsBtn = () => {
  return (
    <Typography
      as="a"
      href="#"
      variant="small"
      color="blue-gray"
      className="font-bold text-llblue  hidden 2xl:block"
    >
      <MenuItem className="flex items-center gap-2 lg:rounded-full hover:text-none hover:bg-transparent">
        <Button className="bg-blue hover:bg-darkblue duration-300  flex justify-between py-2 pr-2 items-center gap-4">
          <span>CONTACT US</span>
          <span> <ChevronRightIcon className="h-8 w-8 p-1 bg-white rounded-md text-[#565ACF] " /> </span>
        </Button>
      </MenuItem>
    </Typography>
  )
}

export default ContactUsBtn