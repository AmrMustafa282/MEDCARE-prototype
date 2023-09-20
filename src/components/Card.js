import {  ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { DialogWithImage } from "./ImgDialog";

export function BlogCard(props) {
  return (
    <Card className="max-w-[24rem] overflow-hidden  ">



      <CardHeader
        floated={false}
        shadow={true}
        color="transparent"
        className="m-0 rounded-none"
      >
        {/* <img
          // src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          src={props.img}
          alt="ui/ux review check"

        /> */}
        <DialogWithImage img={props.img} docImage={props.docImg} name={props.name} />
      </CardHeader >

      <CardFooter className="flex items-center gap-8">
        <div className="flex justify-center items-center gap-2">
          <div className="flex items-center -space-x-3">
            <Tooltip content={props.name }>
              <Avatar
                size="sm"
                variant="circular"
                alt={props.name}
                src={props.docImg}
                className="border-2 border-white hover:z-10"
              />
            </Tooltip>

          </div>
          <Typography className="font-normal text-orangeMain">{props.name}</Typography>
        </div>
        <Typography className="text-orangeMain flex gap-2">
          <svg
            className="fill-orangeMain h-6"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" /></svg>
          {props.date}
        </Typography>
      </CardFooter>

      <CardBody >
        <Typography variant="h4" className="text-purple font-semibold">
          {props.title}
        </Typography>

        <Typography

          variant="small"
          color="blue-gray"
          className="font-bold text-llblue "
        >
          <MenuItem className="lbox my-4 flex items-center gap-2 lg:rounded-full hover:text-none hover:bg-transparent">
            <Button className="bg-white hover:bg-purple hover:text-white border-purple text-purple  border-2 duration-300  flex justify-between py-2 pr-2 items-center gap-4">
              <span>CONTACT US</span>
              <span> <ChevronRightIcon className="h-8 w-8 p-1 bg-purple rounded-md text-white sbox" /> </span>
            </Button>
          </MenuItem>
        </Typography>
      </CardBody>

    </Card>
  );
}