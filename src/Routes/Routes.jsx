import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Portfolio from "../Pages/Portfolio/Portfolio";
import ErrorPage from "../ErrorPage/ErrorPage";
import SignIn from "../Pages/SignInUp/SignIn";
import SignUp from "../Pages/SignInUp/SignUp";
import Email from "../Pages/Contact/Email";
import PrivateRoutes from "./PrivateRoutes";
import PasswordReset from "../Pages/SignInUp/PasswordReset";
import Dashboard from "../Layout/Dashboard";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/email",
        element: <Email></Email>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/portfolio",
        element: (
          <PrivateRoutes>
            <Portfolio></Portfolio>
          </PrivateRoutes>
        ),
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/passwordReset",
        element: <PasswordReset></PasswordReset>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      }
    ],
  },
]);

export default routes;