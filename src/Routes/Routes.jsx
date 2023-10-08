import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/registration',
            element: <Registration></Registration>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/service-detailed-info/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: () => fetch('/services.json')
        }
      ]
    },
  ]);

export default routes;