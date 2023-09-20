import { Carousel, IconButton } from "@material-tailwind/react";

export function CarouselCustomNavigation() {
  
  return (
    <Carousel
      loop="true"
      autoplay="true"
      
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="sm"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="sm"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}

      className="rounded-[40px] rounded-tr-none mx-auto   w-[90vw] md:w-[50vw]  lg:w-[30vw] "
      
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className=" absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={` block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className=" flex flex-col justify-center items-start  p-12 bg-orangeMain text-white">
        <p className="italic text-xl line-clamp-4 sm:line-clamp-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quasi impedit, odio tempora adipisci at. Magnam exercitationem voluptate quibusdam pariatur debitis. Reprehenderit, architecto itaque? Dolore, sit eveniet? Velit, earum aspernatur.</p>
        <h3 className="font-semibold text-4xl mt-6 mb-3">Jhon Deo</h3>
        <h4 className="font-semibold text-2xl ">PATIENT</h4>
     </div>
      <div className=" flex flex-col justify-center items-start  p-12 bg-orangeMain text-white">
        <p className="italic text-xl line-clamp-4 sm:line-clamp-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quasi impedit, odio tempora adipisci at. Magnam exercitationem voluptate quibusdam pariatur debitis. Reprehenderit, architecto itaque? Dolore, sit eveniet? Velit, earum aspernatur.</p>
        <h3 className="font-semibold text-4xl mt-6 mb-3">Jhon Deo</h3>
        <h4 className="font-semibold text-2xl ">PATIENT</h4>
     </div>
      <div className=" flex flex-col justify-center items-start  p-12 bg-orangeMain text-white">
        <p className="italic text-xl line-clamp-4 sm:line-clamp-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quasi impedit, odio tempora adipisci at. Magnam exercitationem voluptate quibusdam pariatur debitis. Reprehenderit, architecto itaque? Dolore, sit eveniet? Velit, earum aspernatur.</p>
        <h3 className="font-semibold text-4xl mt-6 mb-3">Jhon Deo</h3>
        <h4 className="font-semibold text-2xl ">PATIENT</h4>
     </div>
      <div className=" flex flex-col justify-center items-start  p-12 bg-orangeMain text-white">
        <p className="italic text-xl line-clamp-4 sm:line-clamp-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quasi impedit, odio tempora adipisci at. Magnam exercitationem voluptate quibusdam pariatur debitis. Reprehenderit, architecto itaque? Dolore, sit eveniet? Velit, earum aspernatur.</p>
        <h3 className="font-semibold text-4xl mt-6 mb-3">Jhon Deo</h3>
        <h4 className="font-semibold text-2xl ">PATIENT</h4>
     </div>
      <div className=" flex flex-col justify-center items-start  p-12 bg-orangeMain text-white">
        <p className="italic text-xl line-clamp-4 sm:line-clamp-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quasi impedit, odio tempora adipisci at. Magnam exercitationem voluptate quibusdam pariatur debitis. Reprehenderit, architecto itaque? Dolore, sit eveniet? Velit, earum aspernatur.</p>
        <h3 className="font-semibold text-4xl mt-6 mb-3">Jhon Deo</h3>
        <h4 className="font-semibold text-2xl ">PATIENT</h4>
     </div>
   
    </Carousel>
  );
}