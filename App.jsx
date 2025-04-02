import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./src/component/Home";
import Owner from "./src/pages/Owner";
import Nav from "./src/component/Nav";
import Main from "./src/component/Main";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/owner",
        element: <Owner />,
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
