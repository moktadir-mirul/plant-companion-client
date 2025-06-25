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
        path: "/addplant",
        element: (
          <PrivateRoute>
            <AddPlant></AddPlant>
          </PrivateRoute>
        ),
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
        path: "/updateplant/:id",
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
        path: "/allplants",
        Component: AllPlant,
      },
      {
        path: "/myplants",
        element: (
          <PrivateRoute>
            <MyPlant></MyPlant>
          </PrivateRoute>
        ),
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
    path: "*",
    Component: Error,
  },
]);
