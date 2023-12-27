import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import ReactWhatsapp from "react-whatsapp";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, signOUT } = useContext(AuthContext);
  const isSignedIn = !!user;

  const handleSignOut = async () => {
    try {
      await signOUT();
      Swal.fire({
        icon: "success",
        title: "Sign-out successful!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  const navBtn = (
    <ul className="lg:flex gap-4 text-xl font-bold">
      <Link
        spy="true"
        smooth="true"
        to="/"
        className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer"
      >
        <li>Home </li>
      </Link>

      <Link
        spy="true"
        smooth="true"
        to="/about"
        className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer"
      >
        <li>About </li>
      </Link>

      <Link
        spy="true"
        smooth="true"
        to="/portfolio"
        className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer"
      >
        <li>Portfolio </li>
      </Link>
    </ul>
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
            <img
              className="normal-case w-32 text-xl"
              src="https://i.ibb.co/wYHp4ZV/N-I-Logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex transition">
          <ul className="menu menu-horizontal px-1">{navBtn}</ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost w-10 btn-circle avatar"
            >
              <div>
                {user && user.photoURL ? (
                  <img
                    className="w-10 rounded-full"
                    alt=""
                    src={user.photoURL}
                  />
                ) : (
                  <div className="text-4xl text-fuchsia-500">
                    <FaUserCircle />
                  </div>
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow glass rounded-box w-52 gap-4"
            >
              <li>
                <Link to="/dashboard">
                  {user?.displayName && (
                    <p className="justify-between hover:text-fuchsia-600 transition text-2xl cursor-pointer">
                      {user.displayName}
                    </p>
                  )}
                </Link>

                {user?.email && (
                  <p className="justify-between hover:text-fuchsia-600 transition cursor-pointer">
                    {user.email}
                  </p>
                )}
              </li>

              {isSignedIn ? (
                <Link className="">
                  <button
                    onClick={handleSignOut}
                    data-aos="fade-right"
                    className="neno-button w-full font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-lg p-2 uppercase relative overflow-hidden text-center"
                  >
                    SignOut
                  </button>
                </Link>
              ) : (
                <Link to="/signIn" className="">
                  <button
                    data-aos="fade-right"
                    className="neno-button w-full font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-lg p-2 uppercase relative overflow-hidden text-center"
                  >
                    SignIn
                  </button>
                </Link>
              )}
            </ul>
          </div>
          <button className="flex items-center">
            <div className="chat chat-start hidden md:flex">
              <ReactWhatsapp
                className="chat-bubble bg-gradient-to-r from-pink-500 to-purple-700 text-white text-xl font-bold w-48 flex items-center justify-between neno-button shadow-xl hover:shadow-fuchsia-800/50"
                number="+8801580845746"
                message="As-salamu alaykum. I'm interested in learning more about your services."
              >
                Contact Me
                <IoLogoWhatsapp />
              </ReactWhatsapp>
            </div>
            <div className=" md:hidden">
              <ReactWhatsapp
                className=" text-4xl text-fuchsia-500 shadow-xl hover:shadow-fuchsia-800/50"
                number="+8801580845746"
                message="As-salamu alaykum. I'm interested in learning more about your services."
              >
                <IoLogoWhatsapp />
              </ReactWhatsapp>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
