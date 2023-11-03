import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Navbar/Footer";
import { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";

const Root = () => {

  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false)
    }, 1000)
  },[])
    return (
      <>
        {loader ? (
          <div className="flex justify-center item-center my-52">
            <Audio
              height="80"
              width="80"
              radius="9"
              color="fuchsia"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
          </div>
        ) : (
          <div className="max-w-7xl mx-auto overflow-hidden">
            <Navbar></Navbar>
            <div className="min-h-[400px]">
              <Outlet></Outlet>
            </div>
            <Footer></Footer>
          </div>
        )}
      </>
    );
};

export default Root;