import React from "react";
import {
  Navbar,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  ChevronDownIcon,
  Bars2Icon,
  MagnifyingGlassIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import ContactUsBtn from "./ContactUsBtn";
import { DialogCustomAnimation } from "./SearchDialog";




// nav list menu
const navListMenuItems = [[{
  title: "About Us",
  description:
    "Learn how to use @material-tailwind/html.",
},
{
  title: "Our Team",
  description:
    "Learn how to use @material-tailwind/react.",
},
{
  title: "FAQ's",
  description:
    "A complete set of UI Elements for building faster websites in less time.",
},
{
  title: "Booking",
  description:
    "Learn how to use @material-tailwind/html.",
},
{
  title: "Error 404",
  description:
    "Learn how to use @material-tailwind/react.",
},
{
  title: "Login/Register",
  description:
    "Learn how to use @material-tailwind/react.",
}
], [
  {
    title: "Service",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "Service Details",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },

], [
  {
    title: "Blog",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "Blog Details",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },

]

];

function NavListMenu(props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems[props.index].map(({ title, description }) => (
    <div key={title}>
      <MenuItem>
        <Typography variant="h6"  className="mb-1 text-llblue hover:text-darkblue">
          {title}
        </Typography>
        {!props.mobile &&
          <Typography variant="small" color="gray" className="font-normal">
            {description}
          </Typography>
        }

      </MenuItem>
    </div>
  ));


  return (
    <>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen } >
        <MenuHandler >
          <Typography  variant="small" className="outline-none ">

            <MenuItem className="hidden items-center gap-2  font-bold text-llblue hover:text-darkblue lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px] " /> {props.mainTitle}{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </MenuItem>

          </Typography>
        </MenuHandler>

        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid ">
          <Card
            color="white"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md outline-none  "
          >
            {/* <RocketLaunchIcon strokeWidth={1} className="h-28 w-28 " /> */}
            <img src={props.image} alt="" className="bg-contain h-full " />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1 outline-none">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>

      <MenuItem className="flex items-center gap-2 text-llblue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> {props.mainTitle}{" "}
      </MenuItem>

      <ul className="ml-6 flex w-full flex-col  gap-1 lg:hidden">
        {renderItems}
      </ul>
    </>


  );
}



function NavList(props) {
  return (
    <ul className="mb-4 mt-2 flex flex-col  gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <Typography
        // as="a"
        // href="#"
        variant="small"
        color="blue-gray"
        className="font-bold text-llblue"
      >
        <MenuItem className=" flex items-center gap-2 lg:rounded-full  hover:text-darkblue">
          Home
        </MenuItem>
      </Typography>

      <NavListMenu mobile={props.mobile} index={0} mainTitle={'Pages'} image={require('./../Assets/cover1-removebg-preview.png')} />
      <NavListMenu mobile={props.mobile} index={1} mainTitle={'Services'} image={require('./../Assets/blog1.jpg')} />
      <NavListMenu mobile={props.mobile} index={2} mainTitle={'Blog'} image={require('./../Assets/blogcover.jpg')} />

      <Typography
        // as="a"
        // href="#"
        variant="small"
        color="blue-gray"
        className="font-bold text-llblue "
      >
        <MenuItem className="flex items-center gap-2 lg:rounded-full hover:text-darkblue">
          Contact Us
        </MenuItem>
      </Typography>

      <div className="lg:flex ml-12 justify-center items-center hidden">
        <Typography
          // as="a"
          // href="#"
          variant="small"
          color="blue-gray"
          className="font-bold text-llblue hover:text-darkblue"
        >
          <DialogCustomAnimation className="flex items-center gap-2 lg:rounded-full hover:text-none" />
          {/* <MenuItem className="flex items-center gap-2 lg:rounded-full hover:text-none">
            <MagnifyingGlassIcon className=" h-8 w-8 p-1 rounded-md rotate-90  bg-[#565ACF1A]" />
          </MenuItem> */}
        </Typography>

        <Typography
          // as="a"
          // href="#"
          variant="small"
          color="blue-gray"
          className=" font-bold text-llblue hover:text-darkblue hidden xl:block"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full hover:text-none">
            <div className="flex gap-2">
              <span> <PhoneIcon className="h-4 w-4 fill-setext-llblue" /> </span>
              <span>(+01) 999 888 777</span>
            </div>
          </MenuItem>
        </Typography>

        <ContactUsBtn />
      </div>


    </ul>
  );
}

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);



  return (
    <div className="flex justify-center  p-0 w-full h-24 bg-white  fixed z-40">
      <Navbar className="  container p-0 pt-4 z50   rounded-none fixed  shadow-none">
        <div className="relative mx-auto flex justify-between   items-center text-llblue">
          <Typography
            as="a"
            href="#"
            className="mr-4  cursor-pointer py-3 font-medium"
          >
            <img src={require('../Assets/logo.png.webp')} alt="" />
          </Typography>
          <div className="absolute lg:static lg:top-0 lg:translate-y-0 top-2/4 left-2/4 hidden  -translate-y-2/4 lg:block ">
            <NavList />
          </div>

          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 lg:hidden"
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>

        </div>
        <Collapse open={isNavOpen} className="text-black">
          <NavList  mobile={'on'} />
        </Collapse>
      </Navbar>
    </div>

  );
}