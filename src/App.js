import  { ComplexNavbar }  from "./components/Navbar";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Footer from "./components/Footer";
import Sec1 from "./components/Sec1";
import Sec2 from "./components/Sec2";
import Sec3 from "./components/Sec3";
import Sec4 from "./components/Sec4";
import Sec6 from "./components/Sec6";
import Sec7 from "./components/Sec7";




const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Sec1 />
        <Sec2 />
        <Sec3 />
        <Sec4 />
        <Sec6 />
        <Sec7 />
      
      </>
    ),
  },
  {
    path: "about",
    element: <div>about</div>,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

function App() {
  return (
    <div className="App">
      <ComplexNavbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
