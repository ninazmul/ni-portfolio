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
import AddItems from "../Layout/AddItems";
import AllUsers from "../Layout/AllUsers";
import AllItems from "../Layout/AllItems";
import AdminRoute from "../Routes/AdminRoute";
import UpdateItem from "../Layout/UpdateItem";
import UserHome from "../Layout/AdminUser/UserHome";
import AdminHome from "../Layout/AdminUser/AdminHome";
import AddReview from "../Layout/AddReview";
import UpdateReview from "../Layout/UpdateReview";
import AllReviews from "../Layout/AllReviews";
import Reviews from "../Pages/Portfolio/Review/Reviews";

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
        path: "/reviews",
        element: <Reviews></Reviews>,
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
        element: <PasswordReset></PasswordReset>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard/userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "/dashboard/AdminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/update/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://portfolio-server-umber-pi.vercel.app/items/${params.id}`
          ),
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allItems",
        element: (
          <AdminRoute>
            <AllItems></AllItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addReview",
        element: <AddReview></AddReview>,
      },
      {
        path: "/dashboard/updateReview/:id",
        element: (
          <AdminRoute>
            <UpdateReview></UpdateReview>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://portfolio-server-umber-pi.vercel.app/reviews/${params.id}`
          ),
      },
      {
        path: "/dashboard/allReviews",
        element: (
          <AdminRoute>
            <AllReviews></AllReviews>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default routes;
