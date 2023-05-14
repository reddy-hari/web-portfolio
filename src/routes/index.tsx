import { createBrowserRouter } from "react-router-dom";
import NotFound from "../common/NotFound";
import Home from "../pages/Home";
import About from "../pages/About";
import Resume from "../pages/Resume";
import App from "../App";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />, 
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: "" });

export default router;
