import { createBrowserRouter } from "react-router-dom";
import NotFound from "../common/NotFound";
import Home from "../pages/Home";
import Folio from "../pages/Folio";
import Resume from "../pages/Resume";
import App from "../App";
import Blog from "../pages/Blog";

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
        path: "/cv",
        element: <Resume />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/folio",
        element: <Folio />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: "" });

export default router;
