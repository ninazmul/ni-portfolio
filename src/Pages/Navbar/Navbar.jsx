import { useContext } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import ReactWhatsapp from "react-whatsapp";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ActiveLink from "../../Components/ActiveLink";

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
    <ul className="lg:flex gap-10 text-xl font-bold uppercase">
      <ActiveLink spy="true" smooth="true" to="/">
        <li>Home </li>
      </ActiveLink>

      <ActiveLink spy="true" smooth="true" to="/about">
        <li>About Me</li>
      </ActiveLink>

      <ActiveLink spy="true" smooth="true" to="/portfolio">
        <li>Project Gallery </li>
      </ActiveLink>
    </ul>
  );

  return (
    <div>
      <div className="navbar fixed z-30 glass">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow glass bg-orange-500 rounded-box w-52"
            >
              {navBtn}
            </ul>
          </div>
          <NavLink to="/">
            <img
              className="normal-case w-32 text-xl"
              src="https://i.ibb.co/353tbns/N-I-Logo-croped.png"
              alt=""
            />
          </NavLink>
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
                  <div className="text-4xl text-orange-500">
                    <FaUserCircle />
                  </div>
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-500 rounded-box min-w-full w-auto  gap-4"
            >
              <li>
                <NavLink to="/dashboard">
                  {user?.displayName && (
                    <p className="justify-between hover:text-orange-600 transition text-2xl cursor-pointer">
                      {user.displayName}
                    </p>
                  )}
                </NavLink>

                {user?.email && (
                  <p className="justify-between hover:text-orange-600 transition cursor-pointer">
                    {user.email}
                  </p>
                )}
              </li>

              {isSignedIn ? (
                <NavLink className="">
                  <button
                    onClick={handleSignOut}
                    className="neno-button font-bold shadow-xl hover:shadow-orange-800/50 border-2 hover:bg-orange-500 border-orange-200 text-orange-50 w-52 rounded-lg p-2 uppercase relative overflow-hidden text-center"
                  >
                    SignOut
                  </button>
                </NavLink>
              ) : (
                <NavLink to="/signIn" className="">
                  <button className="neno-button font-bold shadow-xl hover:shadow-orange-800/50 border-2 hover:bg-orange-500 border-wheat rounded-lg p-2 uppercase relative overflow-hidden text-center w-40">
                    SignIn
                  </button>
                </NavLink>
              )}
            </ul>
          </div>
          <button className="flex items-center">
            <div className="chat chat-start hidden md:flex">
              <ReactWhatsapp
                className="chat-bubble bg-gradient-to-r from-orange-500 to-orange-700 text-orange-200 text-xl font-bold w-48 flex items-center justify-between neno-button shadow-xl hover:shadow-orange-800/50"
                number="+8801580845746"
                message="As-salamu alaykum. I'm interested in learning more about your services."
              >
                Contact Me
                <IoLogoWhatsapp size={24} />
              </ReactWhatsapp>
            </div>
            <div className=" md:hidden">
              <ReactWhatsapp
                className=" text-4xl text-orange-500 shadow-xl hover:shadow-orange-800/50"
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
