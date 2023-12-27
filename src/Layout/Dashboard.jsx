import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { SiNginxproxymanager } from "react-icons/si";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import { FaSignOutAlt } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";


const Dashboard = () => {
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
    return (
      <div className="flex">
        <div className="md:w-1/5 min-h-full bg-fuchsia-500 fixed">
          <ul className="menu text-xl font-bold">
            <li>
              <NavLink className="p-2" to="/">
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="p-2" to="/">
                <MdManageAccounts />
                Manage User's
              </NavLink>
            </li>
            <li>
              <NavLink className="p-2" to="/">
                <SiNginxproxymanager />
                Manage Item's
              </NavLink>
            </li>
            <li>
              <NavLink className="p-2" to="/">
                <IoMdAdd />
                Add Item's
              </NavLink>
            </li>
            <div>
              <p className="border-t border-gray-300 my-4"></p>
            </div>
            <li>
              {isSignedIn ? (
                <Link onClick={handleSignOut} className="p-2">
                  <FaSignOutAlt />
                  SignOut
                </Link>
              ) : (
                <Link to="/signIn" className="p-2">
                  <FaSignInAlt />
                  SignIn
                </Link>
              )}
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Dashboard;