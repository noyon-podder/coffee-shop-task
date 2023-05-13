import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Registration from "../components/Registration";
import Main from "../layout/Main";
import Home from "../pages/Home";
import MenuList from "../pages/MenuList";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu-list",
        element: (
          <PrivateRoutes>
            <MenuList />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);