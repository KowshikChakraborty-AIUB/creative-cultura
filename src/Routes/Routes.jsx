import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "../Routes/PrivateRoute";
import MentorshipProgram from "../Pages/Mentorship Program/MentorshipProgram";
import PhotoGallery from "../Pages/Photo Gallery/PhotoGallery";
import ErrorPage from "../Pages/Error Page/ErrorPage";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
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
          element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          loader: () => fetch('/services.json')
        },
        {
          path: '/mentorship_program',
          element: <PrivateRoute><MentorshipProgram></MentorshipProgram></PrivateRoute>
        },
        {
          path: '/photo_gallery',
          element: <PrivateRoute><PhotoGallery></PhotoGallery></PrivateRoute>
        }
      ]
    },
  ]);

export default routes;