import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Navbar/Footer";


const Root = () => {
    return (
      <div className="max-w-7xl mx-auto overflow-hidden">
        <Navbar></Navbar>
        <div className="min-h-[400px]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Root;