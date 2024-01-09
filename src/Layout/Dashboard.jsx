import { useContext } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { FaHome, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { SiNginxproxymanager } from "react-icons/si";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProviders";
import UserDetails from "../Pages/About/UserDetails";
import { CiMenuBurger } from "react-icons/ci";
import useAdmin from "../Pages/Hooks/useAdmin";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import AdminHome from "./AdminUser/AdminHome";
import UserHome from "./AdminUser/UserHome";
import { RiUserStarLine } from "react-icons/ri";
import { GiStarsStack } from "react-icons/gi";

// Navbar component
const Navbar = () => {
  const { user, signOUT } = useContext(AuthContext);
  const isSignedIn = !!user;
  const [isAdmin] = useAdmin();

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
     <div>
       <div className="dropdown dropdown-right md:hidden">
         <div
           tabIndex={0}
           role="button"
           className="btn btn-outline text-fuchsia-500 text-xl m-1"
         >
           <CiMenuBurger />
         </div>
         <ul
           tabIndex={0}
           className="dropdown-content z-[1] menu p-2 shadow bg-fuchsia-500 rounded-box w-52 text-lg"
         >
           {isAdmin ? (
             <>
               <li>
                 <NavLink
                   className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   to="/dashboard/AdminHome"
                 >
                   <MdAdminPanelSettings />
                   Admin Home
                 </NavLink>
               </li>
               <li>
                 <NavLink
                   className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   to="/dashboard/users"
                 >
                   <MdManageAccounts />
                   Manage User's
                 </NavLink>
               </li>
               <li>
                 <NavLink
                   className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   to="/dashboard/add"
                 >
                   <IoMdAdd />
                   Add Item's
                 </NavLink>
               </li>
               <li>
                 <NavLink
                   className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   to="/dashboard/allItems"
                 >
                   <SiNginxproxymanager />
                   Manage Item's
                 </NavLink>
               </li>

               <li>
                 <NavLink
                   className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   to="/dashboard/addReview"
                 >
                   <RiUserStarLine />
                   Add Review's
                 </NavLink>
               </li>
               <li>
                 <NavLink
                   className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   to="/dashboard/allReviews"
                 >
                   <GiStarsStack />
                   Manage Review's
                 </NavLink>
               </li>
               <div>
                 <p className="border-t border-gray-300 my-4"></p>
               </div>
               <li>
                 <NavLink
                   className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   to="/"
                 >
                   <FaHome />
                   Home
                 </NavLink>
               </li>
               <li>
                 {isSignedIn ? (
                   <Link
                     onClick={handleSignOut}
                     className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   >
                     <FaSignOutAlt />
                     SignOut
                   </Link>
                 ) : (
                   <Link
                     to="/signIn"
                     className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   >
                     <FaSignInAlt />
                     SignIn
                   </Link>
                 )}
               </li>
             </>
           ) : (
             <>
               {" "}
               <li>
                 <NavLink
                   className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   to="/dashboard/userHome"
                 >
                   <FaUserCheck />
                   User Home
                 </NavLink>
               </li>
               <div>
                 <p className="border-t border-gray-300 my-4"></p>
               </div>
               <li>
                 <NavLink
                   className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   to="/"
                 >
                   <FaHome />
                   Home
                 </NavLink>
               </li>
               <li>
                 {isSignedIn ? (
                   <Link
                     onClick={handleSignOut}
                     className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   >
                     <FaSignOutAlt />
                     SignOut
                   </Link>
                 ) : (
                   <Link
                     to="/signIn"
                     className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   >
                     <FaSignInAlt />
                     SignIn
                   </Link>
                 )}
               </li>
             </>
           )}
         </ul>
       </div>
       <div className="hidden md:flex w-1/6 md:w-1/5 min-h-full bg-fuchsia-500 fixed z-50 overflow-y-auto">
         <ul className="menu text-xl font-bold">
           {isAdmin ? (
             <>
               <li>
                 <NavLink
                   className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   to="/dashboard/AdminHome"
                 >
                   <MdAdminPanelSettings />
                   Admin Home
                 </NavLink>
               </li>
               <li>
                 <NavLink
                   className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   to="/dashboard/users"
                 >
                   <MdManageAccounts />
                   Manage User's
                 </NavLink>
               </li>
               <li>
                 <NavLink
                   className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   to="/dashboard/add"
                 >
                   <IoMdAdd />
                   Add Item's
                 </NavLink>
               </li>
               <li>
                 <NavLink
                   className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   to="/dashboard/allItems"
                 >
                   <SiNginxproxymanager />
                   Manage Item's
                 </NavLink>
               </li>

               <li>
                 <NavLink
                   className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   to="/dashboard/addReview"
                 >
                   <RiUserStarLine />
                   Add Review's
                 </NavLink>
               </li>
               <li>
                 <NavLink
                   className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   to="/dashboard/allReviews"
                 >
                   <GiStarsStack />
                   Manage Review's
                 </NavLink>
               </li>
               <div>
                 <p className="border-t border-gray-300 my-4"></p>
               </div>
               <li>
                 <NavLink
                   className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   to="/"
                 >
                   <FaHome />
                   Home
                 </NavLink>
               </li>
               <li>
                 {isSignedIn ? (
                   <Link
                     onClick={handleSignOut}
                     className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   >
                     <FaSignOutAlt />
                     SignOut
                   </Link>
                 ) : (
                   <Link
                     to="/signIn"
                     className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   >
                     <FaSignInAlt />
                     SignIn
                   </Link>
                 )}
               </li>
             </>
           ) : (
             <>
               {" "}
               <li>
                 <NavLink
                   className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   to="/dashboard/userHome"
                 >
                   <FaUserCheck />
                   User Home
                 </NavLink>
               </li>
               <div>
                 <p className="border-t border-gray-300 my-4"></p>
               </div>
               <li>
                 <NavLink
                   className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   to="/"
                 >
                   <FaHome />
                   Home
                 </NavLink>
               </li>
               <li>
                 {isSignedIn ? (
                   <Link
                     onClick={handleSignOut}
                     className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   >
                     <FaSignOutAlt />
                     SignOut
                   </Link>
                 ) : (
                   <Link
                     to="/signIn"
                     className="p-2 hover:text-fuchsia-800 hover:bg-white"
                   >
                     <FaSignInAlt />
                     SignIn
                   </Link>
                 )}
               </li>
             </>
           )}
         </ul>
       </div>
     </div>
   );
};

// ContentArea component
const ContentArea = () => {
  const location = useLocation();
  const shouldShowUserDetails = location.pathname === "/dashboard";
  const [isAdmin] = useAdmin();

  return (
    <div className="flex-1 overflow-y-auto h-screen">
      {/* Conditional rendering of UserDetails */}
      {shouldShowUserDetails && (
        <div className="flex justify-center p-4">
          <UserDetails />
        </div>
      )}
      {/* Conditional rendering of AdminHome or UserHome */}
      {isAdmin && location.pathname === "/dashboard" && <AdminHome />}
      {!isAdmin && location.pathname === "/dashboard" && <UserHome />}
      {/* Outlet for rendering child components */}
      <Outlet />
    </div>
  );
};


// Dashboard component
const Dashboard = () => {
  return (
    <div className="md:flex h-screen">
      {/* Render Navbar component */}
      <div className="md:w-1/5">
        <Navbar />
      </div>
      {/* Render ContentArea component */}
      <div className="md:w-4/5">
        <ContentArea />
      </div>
    </div>
  );
};

// Export Dashboard as the default component
export default Dashboard;