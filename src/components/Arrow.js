
import { ChevronDoubleUpIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 30) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    //  showButton  && (
       <button
      onClick={handleScrollToTop}
      style={{ position: 'fixed', bottom: '20px', opacity: showButton ? '1' : '0', right: showButton ? '20px' : '0px', transform: showButton ? 'rotate(0deg)' : 'rotate(45deg)' , zIndex: 20,  }}
      className="bg-lpurple rounded-lg hover:animate-[bounce2_1s_ease-in-out_infinite] w-12  duration-500 right-0 rotate-45"
    >
        <ChevronDoubleUpIcon className='text-purple'/>
    </button>
    // )
  );
}

export default ScrollToTopButton;

