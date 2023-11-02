import { Link, } from "react-router-dom";
import logo from "../../../public/N.I. Logo.png";
const Navbar = () => {


  const navBtn = (
    <>
      <ul className="lg:flex gap-4 text-xl font-bold">
        <Link spy={true} smooth={true} to="/" className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
          <li>Home </li>
        </Link>

        <Link spy={true} smooth={true} to="/about" className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
          <li>About </li>
        </Link>

        <Link spy={true} smooth={true} to="/portfolio" className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
          <li>Portfolio </li>
        </Link>

        <Link spy={true} smooth={true} to="/clients" className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
          <li>Clients </li>
        </Link>
      </ul>
    </>
  );

  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow glass rounded-box w-52"
            >
              {navBtn}
            </ul>
          </div>
          <Link to="/">
            <img className="normal-case w-32 text-xl" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex transition">
          <ul className="menu menu-horizontal px-1">
            {navBtn}
          </ul>
        </div>
        <div className="navbar-end">
          <button>
            <div className="chat chat-start">
              <div className="chat-bubble bg-gradient-to-r from-pink-500 to-purple-700 text-white text-xl font-bold w-40">
                Contact me
              </div>
            </div>
                  </button>
                 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
