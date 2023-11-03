import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Clients from "../Pages/Clients/Clients";
import ErrorPage from "../ErrorPage/ErrorPage";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/portfolio',
                element: <Portfolio></Portfolio>
            },
            {
                path: '/clients',
                element: <Clients></Clients>
            }
        ]
    }
]);

export default routes;