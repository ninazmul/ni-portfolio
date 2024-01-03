import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Navbar/Footer";
import { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";

const Root = () => {

  const [loader, setLoader] = useState(false);
  const location = useLocation();
  const noNavFooter =
    location.pathname.includes("signIn") ||
    location.pathname.includes("signUp") ||
    location.pathname.includes("dashboard");
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
          <div className="">
            {noNavFooter || <Navbar></Navbar>}
            <div className="min-h-[400px] pt-14 px-4">
              <Outlet></Outlet>
            </div>
            {noNavFooter || <Footer></Footer>}
          </div>
        )}
      </>
    );
};

export default Root;