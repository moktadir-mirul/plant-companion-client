import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import App from "../App";
import LogIn from "../Components/LogIn/LogIn";
import Error from "../Pages/Error";
import Register from "../Components/Register/Register";
import AddPlant from "../Components/AddPlant/AddPlant";
import UpdatePlant from "../Components/UpdatePlant/UpdatePlant";
import AllPlant from "../Pages/AllPlant";
import MyPlant from "../Pages/MyPlant";
import PlantDetails from "../Pages/PlantDetails";
import ResetPassword from "../Components/ResetPassword/ResetPassword";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import FallBack from "../Components/FallBack/FallBack";
import AboutUs from "../Pages/AboutUs";
import DashBoard from "../Pages/DashBoard";
import StatusCards from "../Components/StatusCards/StatusCards";
import DashAllPlant from "../Components/DashAllPlants/DashAllPlants";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/aboutus",
        Component: AboutUs,
      },
     
      {
        path: "/login",
        Component: LogIn,
      },
      {
        path: "/register",
        Component: Register,
      },
      
      {
        path: "/allplants",
        Component: AllPlant,
      },
      
      {
        path: "/plantdetails/:id",
        loader: ({ params }) =>
          fetch(`https://plantcompanionserver.vercel.app/plants/${params.id}`),
        HydrateFallback: FallBack,
        element: (
          <PrivateRoute>
            <PlantDetails></PlantDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/resetpassword",
        Component: ResetPassword,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <StatusCards></StatusCards>
          </PrivateRoute>
        ),
        loader: () => fetch("https://plantcompanionserver.vercel.app/plants"),
        HydrateFallback: FallBack
      },
      {
        path: "/dashboard/allPlants",
        element: <PrivateRoute><DashAllPlant></DashAllPlant></PrivateRoute>
      },
            {
        path: "/dashboard/plantdetails/:id",
        loader: ({ params }) =>
          fetch(`https://plantcompanionserver.vercel.app/plants/${params.id}`),
        HydrateFallback: FallBack,
        element: (
          <PrivateRoute>
            <PlantDetails></PlantDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myplants",
        element: (
          <PrivateRoute>
            <MyPlant></MyPlant>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/updateplant/:id",
        loader: ({ params }) =>
          fetch(`https://plantcompanionserver.vercel.app/plants/${params.id}`),
        HydrateFallback: FallBack,
        element: (
          <PrivateRoute>
            <UpdatePlant></UpdatePlant>
          </PrivateRoute>
        ),
      },
       {
        path: "/dashboard/addplant",
        element: (
          <PrivateRoute>
            <AddPlant></AddPlant>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
