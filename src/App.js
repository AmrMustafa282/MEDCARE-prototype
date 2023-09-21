import { ComplexNavbar } from "./components/Navbar";
import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/Footer";
import Sec1 from "./components/Sec1";
import Sec2 from "./components/Sec2";
import Sec3 from "./components/Sec3";
import Sec4 from "./components/Sec4";
import Sec6 from "./components/Sec6";
import Sec7 from "./components/Sec7";
import ScrollToTopButton from "./components/Arrow";
import  Reveal  from "./components/Reveal";






const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="">
        <Sec1 />
        <Reveal>
          <Sec2 />
        </Reveal>
        <Reveal>
          <Sec3 />
        </Reveal>
        <Reveal>
          <Sec4 />
        </Reveal>
        <Reveal>
          <Sec6 />
        </Reveal>
        <Reveal>
          <Sec7 />
        </Reveal>
        <ScrollToTopButton />
      </div>
    ),
  },
  {
    path: "about",
    element: <div>about</div>,
  },
  {
    path: "users",
    element: <div>users</div>,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

function App() {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  useEffect(() => {
    handleScrollToTop()
  },[])

  return (
    
   
    <div className="App">
      <ComplexNavbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
    
  );
}

export default App;
